import { useState, useEffect, useCallback } from 'react';

const DB_NAME = 'afcat_pdfs';
const STORE = 'pdfs';
const VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, VERSION);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'id' });
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = e => reject(e.target.error);
  });
}

export function usePDFStore() {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    const db = await openDB();
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => {
      setPdfs(req.result.sort((a, b) => b.addedAt - a.addedAt));
      setLoading(false);
    };
  }, []);

  useEffect(() => { reload(); }, [reload]);

  async function addPDF(file, customName, subject = 'other') {
    const db = await openDB();
    const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const record = {
      id,
      name: customName || file.name.replace(/\.pdf$/i, ''),
      fileName: file.name,
      size: file.size,
      subject,
      addedAt: Date.now(),
      data: file,
    };
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(record);
    await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = rej; });
    await reload();
    return id;
  }

  async function renamePDF(id, newName) {
    const db = await openDB();
    const tx = db.transaction(STORE, 'readwrite');
    const store = tx.objectStore(STORE);
    const getReq = store.get(id);
    await new Promise((res, rej) => { getReq.onsuccess = res; getReq.onerror = rej; });
    const record = getReq.result;
    if (!record) return;
    record.name = newName;
    store.put(record);
    await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = rej; });
    await reload();
  }

  async function deletePDF(id) {
    const db = await openDB();
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).delete(id);
    await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = rej; });
    await reload();
  }

  async function openPDF(pdf) {
    const url = URL.createObjectURL(pdf.data);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }

  return { pdfs, loading, addPDF, renamePDF, deletePDF, openPDF };
}

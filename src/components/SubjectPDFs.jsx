import { useRef, useState } from 'react';
import { Upload, FileText, Pencil, Trash2, ExternalLink, Check, X, Loader2 } from 'lucide-react';
import { usePDFStore } from '../hooks/usePDFStore';

function fmtSize(b) {
  if (b < 1024 * 1024) return (b / 1024).toFixed(0) + ' KB';
  return (b / (1024 * 1024)).toFixed(1) + ' MB';
}

// Reusable PDF card row
export function PDFCard({ pdf, onOpen, onRename, onDelete }) {
  const [renamingId, setRenamingId] = useState(null);
  const [renameVal, setRenameVal] = useState('');
  const [confirmDel, setConfirmDel] = useState(false);

  if (confirmDel) return (
    <div className="flex items-center justify-between bg-red-500/10 border border-red-500/20 rounded-xl p-3">
      <p className="text-sm text-red-300">Delete <span className="font-semibold">{pdf.name}</span>?</p>
      <div className="flex gap-2">
        <button onClick={() => setConfirmDel(false)} className="px-3 py-1 rounded-lg bg-slate-700 text-slate-300 text-xs hover:bg-slate-600">Cancel</button>
        <button onClick={() => { onDelete(pdf.id); setConfirmDel(false); }} className="px-3 py-1 rounded-lg bg-red-600 text-white text-xs hover:bg-red-500 font-semibold">Delete</button>
      </div>
    </div>
  );

  if (renamingId) return (
    <div className="flex gap-2 items-center bg-slate-800 border border-slate-700 rounded-xl p-3">
      <input
        autoFocus
        type="text"
        value={renameVal}
        onChange={e => setRenameVal(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') { onRename(pdf.id, renameVal.trim()); setRenamingId(null); }
          if (e.key === 'Escape') setRenamingId(null);
        }}
        className="flex-1 bg-slate-700 border border-indigo-500 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none"
      />
      <button onClick={() => { onRename(pdf.id, renameVal.trim()); setRenamingId(null); }} className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"><Check size={14} /></button>
      <button onClick={() => setRenamingId(null)} className="p-1.5 rounded-lg bg-slate-700 text-slate-400 hover:bg-slate-600"><X size={14} /></button>
    </div>
  );

  return (
    <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl p-3">
      <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
        <FileText size={16} className="text-red-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">{pdf.name}</p>
        <p className="text-xs text-slate-500">{fmtSize(pdf.size)}</p>
      </div>
      <div className="flex gap-1 shrink-0">
        <button onClick={() => onOpen(pdf)} className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors" title="Open"><ExternalLink size={13} /></button>
        <button onClick={() => { setRenamingId(pdf.id); setRenameVal(pdf.name); }} className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors" title="Rename"><Pencil size={13} /></button>
        <button onClick={() => setConfirmDel(true)} className="p-1.5 rounded-lg bg-slate-700 hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-colors" title="Delete"><Trash2 size={13} /></button>
      </div>
    </div>
  );
}

// Used inside each subject tab — shows only that subject's PDFs + upload
export function SubjectPDFSection({ subject, accentClass }) {
  const { pdfs, addPDF, renamePDF, deletePDF, openPDF } = usePDFStore();
  const fileRef = useRef(null);
  const [pending, setPending] = useState(null);
  const [uploading, setUploading] = useState(false);

  const subjectPDFs = pdfs.filter(p => p.subject === subject);

  function onPick(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setPending({ file: files[0], name: files[0].name.replace(/\.pdf$/i, ''), extra: files.slice(1) });
    e.target.value = '';
  }

  async function confirmUpload() {
    if (!pending) return;
    setUploading(true);
    await addPDF(pending.file, pending.name.trim() || pending.file.name, subject);
    for (const f of pending.extra || []) await addPDF(f, f.name.replace(/\.pdf$/i, ''), subject);
    setPending(null);
    setUploading(false);
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          📎 PDFs & Notes ({subjectPDFs.length})
        </h4>
        <button
          onClick={() => fileRef.current?.click()}
          className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${accentClass}`}
        >
          <Upload size={12} /> Upload PDF
        </button>
        <input ref={fileRef} type="file" accept="application/pdf" multiple className="hidden" onChange={onPick} />
      </div>

      {subjectPDFs.length === 0 ? (
        <div
          onClick={() => fileRef.current?.click()}
          className="border border-dashed border-slate-700 hover:border-slate-500 rounded-xl p-5 text-center cursor-pointer transition-colors"
        >
          <FileText size={22} className="mx-auto mb-1 text-slate-600" />
          <p className="text-slate-500 text-xs">No PDFs yet — tap to upload</p>
        </div>
      ) : (
        <div className="space-y-2">
          {subjectPDFs.map(pdf => (
            <PDFCard key={pdf.id} pdf={pdf} onOpen={openPDF} onRename={renamePDF} onDelete={deletePDF} />
          ))}
        </div>
      )}

      {/* Name dialog */}
      {pending && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-slate-800 border border-slate-600 rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-white font-bold mb-1">Name this PDF</h3>
            <p className="text-slate-400 text-xs mb-4">
              File: <span className="text-slate-300">{pending.file.name}</span>
              {pending.extra?.length > 0 && <span className="ml-2 text-indigo-400">+ {pending.extra.length} more</span>}
            </p>
            <input
              autoFocus
              value={pending.name}
              onChange={e => setPending(p => ({ ...p, name: e.target.value }))}
              onKeyDown={e => { if (e.key === 'Enter') confirmUpload(); if (e.key === 'Escape') setPending(null); }}
              className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 mb-4"
              placeholder="e.g. Maths Assignment 3"
            />
            <div className="flex gap-3">
              <button onClick={() => setPending(null)} className="flex-1 py-2 rounded-xl bg-slate-700 text-slate-300 text-sm">Cancel</button>
              <button onClick={confirmUpload} disabled={uploading} className="flex-1 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60">
                {uploading && <Loader2 size={13} className="animate-spin" />} Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

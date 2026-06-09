import { usePDFStore } from '../hooks/usePDFStore';
import { PDFCard } from './SubjectPDFs';
import { FileText } from 'lucide-react';

const SUBJECTS = [
  { key: 'math',      label: '🔢 Maths',              color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5' },
  { key: 'gk',        label: '🌍 General Awareness',  color: 'text-green-400  border-green-500/30  bg-green-500/5'  },
  { key: 'reasoning', label: '🧠 Reasoning',           color: 'text-purple-400 border-purple-500/30 bg-purple-500/5' },
  { key: 'english',   label: '📘 English',             color: 'text-blue-400   border-blue-500/30   bg-blue-500/5'   },
  { key: 'other',     label: '📁 Other',               color: 'text-slate-400  border-slate-600      bg-slate-800/40' },
];

export default function PDFManager() {
  const { pdfs, loading, renamePDF, deletePDF, openPDF } = usePDFStore();

  const total = pdfs.length;
  const bySubject = key => pdfs.filter(p => (p.subject || 'other') === key);

  if (loading) return (
    <div className="text-center py-16 text-slate-500 text-sm">Loading PDFs…</div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold">All PDFs</h2>
        <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
          {total} total
        </span>
      </div>

      {total === 0 ? (
        <div className="text-center py-16 text-slate-500">
          <FileText size={40} className="mx-auto mb-3 opacity-20" />
          <p>No PDFs yet.</p>
          <p className="text-xs mt-1 text-slate-600">Upload from the Notes tab under each subject.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {SUBJECTS.map(({ key, label, color }) => {
            const list = bySubject(key);
            if (list.length === 0) return null;
            return (
              <div key={key}>
                <div className={`flex items-center gap-2 mb-2 px-3 py-2 rounded-lg border ${color}`}>
                  <span className="text-sm font-semibold">{label}</span>
                  <span className="ml-auto text-xs opacity-70">{list.length} PDF{list.length > 1 ? 's' : ''}</span>
                </div>
                <div className="space-y-2">
                  {list.map(pdf => (
                    <PDFCard key={pdf.id} pdf={pdf} onOpen={openPDF} onRename={renamePDF} onDelete={deletePDF} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

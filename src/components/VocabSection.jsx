import { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle2, Shuffle } from 'lucide-react';
import { VOCAB_WORDS } from '../data/studyPlan';
import { useStorage } from '../hooks/useStorage';

export default function VocabSection() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useStorage('afcat_vocab_known', []);
  const [mode, setMode] = useState('all'); // 'all' | 'unknown'

  const words = mode === 'unknown' ? VOCAB_WORDS.filter((_, i) => !known.includes(i)) : VOCAB_WORDS;
  const word = words[idx] || VOCAB_WORDS[0];
  const realIdx = VOCAB_WORDS.indexOf(word);

  function next() { setFlipped(false); setTimeout(() => setIdx(i => Math.min(i + 1, words.length - 1)), 100); }
  function prev() { setFlipped(false); setTimeout(() => setIdx(i => Math.max(i - 1, 0)), 100); }

  function markKnown() {
    if (!known.includes(realIdx)) setKnown(k => [...k, realIdx]);
    next();
  }
  function markUnknown() {
    setKnown(k => k.filter(i => i !== realIdx));
    next();
  }

  function shuffle() {
    setFlipped(false);
    setIdx(Math.floor(Math.random() * words.length));
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => { setMode('all'); setIdx(0); }}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${mode === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
          >All ({VOCAB_WORDS.length})</button>
          <button
            onClick={() => { setMode('unknown'); setIdx(0); }}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${mode === 'unknown' ? 'bg-amber-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
          >Study ({VOCAB_WORDS.length - known.length})</button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-emerald-400 font-medium">{known.length} known</span>
          <button onClick={shuffle} className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors">
            <Shuffle size={14} />
          </button>
          <button onClick={() => setKnown([])} className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors">
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-slate-700 rounded-full mb-6">
        <div
          className="h-1 bg-emerald-500 rounded-full transition-all"
          style={{ width: `${(known.length / VOCAB_WORDS.length) * 100}%` }}
        />
      </div>

      {words.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <CheckCircle2 size={48} className="mx-auto mb-3 text-emerald-500" />
          <p className="text-lg font-semibold text-white">You know all the words!</p>
          <p className="text-sm mt-1">Switch to "All" to review them.</p>
        </div>
      ) : (
        <>
          {/* Flashcard */}
          <div
            className="cursor-pointer select-none"
            onClick={() => setFlipped(f => !f)}
          >
            <div className={`relative bg-gradient-to-br rounded-2xl border border-slate-600 transition-all duration-300 min-h-56 flex flex-col items-center justify-center p-8 text-center
              ${flipped ? 'from-indigo-900/50 to-purple-900/50 border-indigo-500/40' : 'from-slate-800 to-slate-700 border-slate-600'}`}
            >
              {known.includes(realIdx) && (
                <span className="absolute top-3 right-3 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">known ✓</span>
              )}
              {!flipped ? (
                <>
                  <p className="text-3xl font-bold text-white mb-2">{word.word}</p>
                  <p className="text-slate-400 text-sm">Tap to reveal meaning</p>
                </>
              ) : (
                <>
                  <p className="text-xl font-semibold text-indigo-300 mb-3">{word.meaning}</p>
                  <p className="text-slate-400 text-sm italic">"{word.example}"</p>
                </>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prev}
              disabled={idx === 0}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 disabled:opacity-30 transition-colors text-sm"
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <span className="text-slate-500 text-sm">{idx + 1} / {words.length}</span>
            <button
              onClick={next}
              disabled={idx === words.length - 1}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 disabled:opacity-30 transition-colors text-sm"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>

          {/* Know / Don't Know */}
          <div className="flex gap-3 mt-3">
            <button
              onClick={markUnknown}
              className="flex-1 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors text-sm font-medium"
            >
              ✗ Need to practice
            </button>
            <button
              onClick={markKnown}
              className="flex-1 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors text-sm font-medium"
            >
              ✓ I know this
            </button>
          </div>
        </>
      )}

      {/* Word list */}
      <div className="mt-8">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">All Words</h3>
        <div className="grid grid-cols-2 gap-2">
          {VOCAB_WORDS.map((w, i) => (
            <button
              key={i}
              onClick={() => { setIdx(mode === 'all' ? i : words.indexOf(w)); setFlipped(false); }}
              className={`text-left p-2.5 rounded-lg text-sm transition-colors ${
                known.includes(i)
                  ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <span className="font-medium">{w.word}</span>
              <span className="text-xs block text-slate-500 truncate">{w.meaning}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

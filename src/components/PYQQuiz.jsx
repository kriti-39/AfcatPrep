import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle, Lightbulb, RotateCcw, Filter } from 'lucide-react';
import { PYQ, SUBJECTS_PYQ, getTopics, YEARS } from '../data/pyqData';
import { useStorage } from '../hooks/useStorage';

const COLOR = {
  yellow: { tab: 'border-yellow-400 text-yellow-400', badge: 'bg-yellow-500/20 text-yellow-300', correct: 'bg-yellow-500/10 border-yellow-400' },
  green:  { tab: 'border-green-400 text-green-400',   badge: 'bg-green-500/20 text-green-300',   correct: 'bg-green-500/10 border-green-400' },
  purple: { tab: 'border-purple-400 text-purple-400', badge: 'bg-purple-500/20 text-purple-300', correct: 'bg-purple-500/10 border-purple-400' },
  blue:   { tab: 'border-blue-400 text-blue-400',     badge: 'bg-blue-500/20 text-blue-300',     correct: 'bg-blue-500/10 border-blue-400' },
};
const OPT = ['A', 'B', 'C', 'D'];

export default function PYQQuiz() {
  const [subject, setSubject] = useState('math');
  const [topic, setTopic]     = useState('All Topics');
  const [year, setYear]       = useState('All Years');
  const [idx, setIdx]         = useState(0);
  const [selected, setSelected] = useState(null);  // chosen option index
  const [showSolution, setShowSolution] = useState(false);
  const [attempts, setAttempts] = useStorage('afcat_pyq_attempts', {}); // { qId: chosenIdx }
  const [showFilter, setShowFilter] = useState(false);

  const c = COLOR[SUBJECTS_PYQ[subject].color];
  const topics = getTopics(subject);

  const questions = useMemo(() => {
    return PYQ.filter(q => {
      if (q.subject !== subject) return false;
      if (topic !== 'All Topics' && q.topic !== topic) return false;
      if (year !== 'All Years' && q.year !== Number(year)) return false;
      return true;
    });
  }, [subject, topic, year]);

  const q = questions[idx];

  const totalCorrect = questions.filter(q => attempts[q.id] === q.ans).length;
  const attempted    = questions.filter(q => attempts[q.id] !== undefined).length;

  function pick(optIdx) {
    if (selected !== null) return; // already answered
    setSelected(optIdx);
    setAttempts(prev => ({ ...prev, [q.id]: optIdx }));
  }

  function next() {
    setSelected(null);
    setShowSolution(false);
    setIdx(i => Math.min(i + 1, questions.length - 1));
  }
  function prev() {
    setSelected(null);
    setShowSolution(false);
    setIdx(i => Math.max(i - 1, 0));
  }
  function jumpTo(i) {
    setSelected(null);
    setShowSolution(false);
    setIdx(i);
  }

  function resetSubject() {
    const ids = questions.map(q => q.id);
    setAttempts(prev => {
      const next = { ...prev };
      ids.forEach(id => delete next[id]);
      return next;
    });
    setIdx(0); setSelected(null); setShowSolution(false);
  }

  // restore previous attempt when navigating to an already-answered question
  const prevAttempt = q ? attempts[q.id] : undefined;
  const activeSelected = selected !== null ? selected : (prevAttempt !== undefined ? prevAttempt : null);
  const answered = activeSelected !== null;

  if (questions.length === 0) return (
    <div className="max-w-xl mx-auto text-center py-16 text-slate-500">
      <p>No questions found for this filter.</p>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto">
      {/* Subject tabs */}
      <div className="flex gap-1 mb-3 bg-slate-800/50 p-1 rounded-xl overflow-x-auto">
        {Object.entries(SUBJECTS_PYQ).map(([key, val]) => {
          const count = PYQ.filter(q => q.subject === key).length;
          return (
            <button key={key}
              onClick={() => { setSubject(key); setTopic('All Topics'); setYear('All Years'); setIdx(0); setSelected(null); setShowSolution(false); }}
              className={`flex-1 min-w-max px-2.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                subject === key ? `bg-slate-700 border-b-2 ${COLOR[val.color].tab}` : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {val.emoji} {val.label.split(' ')[0]}<br/>
              <span className="text-slate-500 font-normal">{count}Q</span>
            </button>
          );
        })}
      </div>

      {/* Filter row */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => setShowFilter(f => !f)}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <Filter size={12} /> Filter
        </button>
        <div className="flex-1 text-xs text-slate-500">
          {questions.length} questions · {attempted} attempted · {totalCorrect} correct
        </div>
        <button onClick={resetSubject} className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white" title="Reset progress">
          <RotateCcw size={12} />
        </button>
      </div>

      {showFilter && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 mb-3 flex gap-3 flex-wrap">
          <div className="flex-1 min-w-32">
            <p className="text-xs text-slate-500 mb-1">Topic</p>
            <select
              value={topic}
              onChange={e => { setTopic(e.target.value); setIdx(0); setSelected(null); }}
              className="w-full bg-slate-700 text-white text-xs rounded-lg px-2 py-1.5 border border-slate-600 focus:outline-none"
            >
              {topics.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="flex-1 min-w-28">
            <p className="text-xs text-slate-500 mb-1">Year</p>
            <select
              value={year}
              onChange={e => { setYear(e.target.value); setIdx(0); setSelected(null); }}
              className="w-full bg-slate-700 text-white text-xs rounded-lg px-2 py-1.5 border border-slate-600 focus:outline-none"
            >
              {YEARS.map(y => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>
      )}

      {/* Score bar */}
      <div className="h-1.5 bg-slate-700 rounded-full mb-4 overflow-hidden">
        <div className="h-1.5 bg-emerald-500 rounded-full transition-all" style={{ width: `${attempted ? (totalCorrect/attempted)*100 : 0}%` }} />
      </div>

      {/* Question card */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-3">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs text-slate-500">{idx+1}/{questions.length}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${c.badge}`}>{q.topic}</span>
          <span className="text-xs bg-slate-700 text-slate-400 px-2 py-0.5 rounded-full">AFCAT {q.year}</span>
          {attempts[q.id] !== undefined && (
            attempts[q.id] === q.ans
              ? <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">✓ Correct</span>
              : <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">✗ Wrong</span>
          )}
        </div>

        {/* Question */}
        <p className="text-white font-medium text-sm leading-relaxed mb-4">{q.q}</p>

        {/* Options */}
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const isChosen  = activeSelected === i;
            const isCorrect = i === q.ans;
            let cls = 'bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700';
            if (answered) {
              if (isCorrect)       cls = 'bg-emerald-500/20 border-emerald-500 text-emerald-300';
              else if (isChosen)   cls = 'bg-red-500/20 border-red-500 text-red-300';
              else                 cls = 'bg-slate-700/30 border-slate-700 text-slate-500 opacity-60';
            }
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={answered}
                className={`w-full flex items-center gap-3 text-left p-3 rounded-xl border transition-all text-sm ${cls}`}
              >
                <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                  answered && isCorrect ? 'bg-emerald-500 text-white' :
                  answered && isChosen  ? 'bg-red-500 text-white' :
                  'bg-slate-600 text-slate-300'
                }`}>{OPT[i]}</span>
                <span>{opt}</span>
                {answered && isCorrect && <CheckCircle2 size={15} className="ml-auto text-emerald-400 shrink-0" />}
                {answered && isChosen && !isCorrect && <XCircle size={15} className="ml-auto text-red-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Solution */}
        {answered && (
          <div className="mt-4">
            <button
              onClick={() => setShowSolution(s => !s)}
              className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors mb-2"
            >
              <Lightbulb size={13} /> {showSolution ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
                <p className="text-sm text-amber-200">{q.solution}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Nav buttons */}
      <div className="flex gap-3 mb-5">
        <button onClick={prev} disabled={idx === 0}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 disabled:opacity-30 text-sm hover:bg-slate-700 transition-colors">
          <ChevronLeft size={16} /> Prev
        </button>
        <button onClick={next} disabled={idx === questions.length - 1}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 disabled:opacity-30 text-sm hover:bg-slate-700 transition-colors">
          Next <ChevronRight size={16} />
        </button>
      </div>

      {/* Question grid (jump to any) */}
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Jump to Question</p>
        <div className="flex flex-wrap gap-1.5">
          {questions.map((qq, i) => {
            const att = attempts[qq.id];
            const isCorrect = att === qq.ans;
            const isWrong   = att !== undefined && att !== qq.ans;
            return (
              <button key={qq.id} onClick={() => jumpTo(i)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all border ${
                  i === idx ? `ring-2 ring-indigo-400 ${c.correct}` :
                  isCorrect ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' :
                  isWrong   ? 'bg-red-500/20 border-red-500/40 text-red-400' :
                  'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >{i+1}</button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

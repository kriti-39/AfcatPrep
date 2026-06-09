import { useState } from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import { STUDY_PLAN, SUBJECTS } from '../data/studyPlan';
import { getDayNumber, getTodayString, totalMins } from '../utils/dateUtils';
import { useStorage } from '../hooks/useStorage';

const BORDER = {
  math: 'border-yellow-400/40', gk: 'border-green-400/40',
  reasoning: 'border-purple-400/40', revision: 'border-red-400/40',
};
const BADGE = {
  math: 'bg-yellow-500/20 text-yellow-300', gk: 'bg-green-500/20 text-green-300',
  reasoning: 'bg-purple-500/20 text-purple-300', revision: 'bg-red-500/20 text-red-300',
};

function fmtMins(m) {
  const h = Math.floor(m / 60), min = m % 60;
  return h > 0 ? `${h}h ${min > 0 ? min + 'm' : ''}` : `${min}m`;
}

export default function FullSchedule() {
  const today = getTodayString();
  const todayDay = getDayNumber(today);
  const [filter, setFilter] = useState('all');
  const [completedTasks] = useStorage('afcat_completed', {});

  function isDayComplete(dayNum, tasks) {
    const done = completedTasks[dayNum] || [];
    return done.length >= tasks.length + 1;
  }

  const filtered = STUDY_PLAN.filter(d => {
    if (filter === 'done') return isDayComplete(d.day, d.tasks);
    if (filter === 'pending') return !isDayComplete(d.day, d.tasks) && d.day < todayDay;
    if (filter === 'upcoming') return d.day > todayDay;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto">
      {/* Filter */}
      <div className="flex gap-1 mb-5 bg-slate-800/50 p-1 rounded-xl">
        {[['all','All 50 Days'],['pending','Pending'],['done','Done'],['upcoming','Upcoming']].map(([v,l]) => (
          <button
            key={v}
            onClick={() => setFilter(v)}
            className={`flex-1 px-2 py-1.5 rounded-lg text-xs font-semibold transition-all ${filter === v ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >{l}</button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map(plan => {
          const isToday = plan.day === todayDay;
          const isPast = plan.day < todayDay;
          const complete = isDayComplete(plan.day, plan.tasks);
          const mins = totalMins(plan.tasks) + 27;

          return (
            <div
              key={plan.day}
              className={`flex items-center gap-3 p-3 rounded-xl border bg-slate-800/40 ${BORDER[plan.subjects[0]]}
                ${isToday ? 'ring-1 ring-indigo-500/50' : ''}`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                complete ? 'bg-emerald-500/20 text-emerald-400' :
                isPast && !complete ? 'bg-amber-500/20 text-amber-400' :
                isToday ? 'bg-indigo-500/20 text-indigo-400' :
                'bg-slate-700 text-slate-400'
              }`}>
                {complete ? <CheckCircle2 size={16} /> : plan.day}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                  {isToday && <span className="text-xs bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold">TODAY</span>}
                  {plan.subjects.map(s => (
                    <span key={s} className={`text-xs px-1.5 py-0.5 rounded ${BADGE[s]}`}>{SUBJECTS[s].emoji}</span>
                  ))}
                </div>
                <p className="text-sm text-slate-300 font-medium truncate">{plan.title}</p>
                <p className="text-xs text-slate-500">{plan.date}</p>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock size={10} /> {fmtMins(mins)}
                </div>
                {plan.hasAssignmentFile && (
                  <span className="text-xs text-orange-400">📋 file</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

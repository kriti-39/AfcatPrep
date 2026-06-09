import { useState } from 'react';
import { CheckCircle2, Circle, AlertTriangle, Calendar, Trophy, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { STUDY_PLAN, SUBJECTS, ENGLISH_VIDEOS } from '../data/studyPlan';
import { getDayNumber, getTodayString, formatDate, getDaysUntilExam, totalMins } from '../utils/dateUtils';
import { useStorage } from '../hooks/useStorage';
import DailyTimer from './DailyTimer';

const BORDER = {
  math: 'border-l-yellow-400', gk: 'border-l-green-400',
  reasoning: 'border-l-purple-400', revision: 'border-l-red-400', english: 'border-l-blue-400',
};
const BADGE = {
  math: 'bg-yellow-500/20 text-yellow-300', gk: 'bg-green-500/20 text-green-300',
  reasoning: 'bg-purple-500/20 text-purple-300', revision: 'bg-red-500/20 text-red-300',
  english: 'bg-blue-500/20 text-blue-300',
};

function fmtMins(m) {
  const h = Math.floor(m / 60), min = m % 60;
  return h > 0 ? `${h}h ${min > 0 ? min + 'm' : ''}` : `${min}m`;
}

export default function DailyPlanner() {
  const today = getTodayString();
  const todayDayNum = getDayNumber(today);
  const daysLeft = getDaysUntilExam(); // pure calendar countdown — unaffected by completion pace
  const [completedTasks, setCompletedTasks] = useStorage('afcat_completed', {});
  const [expanded, setExpanded] = useState({});

  const todayPlan = STUDY_PLAN.find(d => d.day === todayDayNum);

  // Past days that are incomplete
  const pendingDays = STUDY_PLAN.filter(d => {
    if (d.day >= todayDayNum) return false;
    const done = completedTasks[d.day] || [];
    return done.length < d.tasks.length + 1;
  });

  // All days from today onwards — user can freely tick any of them
  const upcomingDays = STUDY_PLAN.filter(d => d.day > todayDayNum);

  const daysCompleted = STUDY_PLAN.filter(d => {
    const done = completedTasks[d.day] || [];
    return done.length >= d.tasks.length + 1;
  }).length;

  function toggleTask(dayNum, taskKey) {
    setCompletedTasks(prev => {
      const dayDone = new Set(prev[dayNum] || []);
      if (dayDone.has(taskKey)) dayDone.delete(taskKey);
      else dayDone.add(taskKey);
      return { ...prev, [dayNum]: [...dayDone] };
    });
  }

  function isDayComplete(dayNum, tasks) {
    const done = completedTasks[dayNum] || [];
    return done.length >= tasks.length + 1;
  }

  function renderDayCard(plan, isToday, isPending) {
    const done = new Set(completedTasks[plan.day] || []);
    const complete = isDayComplete(plan.day, plan.tasks);
    const isFuture = plan.day > todayDayNum;
    const isOpen = isToday || expanded[plan.day];
    const englishIdx = plan.day - 1;
    const englishVideo = ENGLISH_VIDEOS[englishIdx];
    const totalTaskCount = plan.tasks.length + (englishVideo ? 1 : 0);
    const mins = totalMins(plan.tasks) + (englishVideo ? 27 : 0);

    return (
      <div
        key={plan.day}
        className={`rounded-xl border-l-4 ${BORDER[plan.subjects[0]]} bg-slate-800/60 border border-slate-700/50 mb-3 overflow-hidden
          ${complete ? 'opacity-60' : ''}
        `}
      >
        {/* Header */}
        <button
          className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/20 transition-colors"
          onClick={() => setExpanded(e => ({ ...e, [plan.day]: !e[plan.day] }))}
        >
          <div className="flex items-center gap-3 min-w-0">
            {isPending && !complete && <AlertTriangle size={15} className="text-amber-400 shrink-0" />}
            {complete
              ? <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
              : <Circle size={15} className="text-slate-500 shrink-0" />}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                <span className="text-xs text-slate-500">Day {plan.day}</span>
                {isToday && <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-bold">TODAY</span>}
                {isPending && !complete && <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">PENDING</span>}
                {isFuture && !complete && <span className="text-xs bg-slate-700 text-slate-400 px-2 py-0.5 rounded-full">{plan.date.slice(5).replace('-', ' ').replace(/^0/, '')}</span>}
                {complete && <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">DONE ✓</span>}
                {plan.subjects.map(s => (
                  <span key={s} className={`text-xs px-2 py-0.5 rounded-full ${BADGE[s]}`}>
                    {SUBJECTS[s].emoji} {SUBJECTS[s].label}
                  </span>
                ))}
              </div>
              <p className="text-white font-semibold text-sm truncate">{plan.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-2">
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock size={10} /> {fmtMins(mins)}
            </span>
            <span className="text-xs text-slate-400">{done.size}/{totalTaskCount}</span>
            {isOpen ? <ChevronUp size={14} className="text-slate-500" /> : <ChevronDown size={14} className="text-slate-500" />}
          </div>
        </button>

        {/* Tasks */}
        {isOpen && (
          <div className="px-4 pb-4 space-y-2 border-t border-slate-700/50 pt-3">
            {plan.tasks.map((task, i) => {
              const key = `t${i}`;
              const checked = done.has(key);
              return (
                <button
                  key={i}
                  onClick={() => toggleTask(plan.day, key)}
                  className={`w-full flex items-start gap-3 text-left p-3 rounded-lg transition-all ${
                    checked ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-slate-700/30 hover:bg-slate-700/50'
                  }`}
                >
                  {checked
                    ? <CheckCircle2 size={14} className="shrink-0 text-emerald-400 mt-0.5" />
                    : <Circle size={14} className="shrink-0 text-slate-500 mt-0.5" />}
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm ${checked ? 'line-through text-slate-500' : 'text-slate-200'}`}>{task.text}</span>
                    <span className="text-xs text-slate-500 ml-1">~{task.mins}m</span>
                  </div>
                </button>
              );
            })}

            {/* English video */}
            {englishVideo && (
              <button
                onClick={() => toggleTask(plan.day, 'eng')}
                className={`w-full flex items-start gap-3 text-left p-3 rounded-lg transition-all border ${
                  done.has('eng')
                    ? 'bg-blue-500/10 border-blue-500/20'
                    : 'bg-blue-900/20 border-blue-700/30 hover:bg-blue-900/30'
                }`}
              >
                {done.has('eng')
                  ? <CheckCircle2 size={14} className="shrink-0 text-blue-400 mt-0.5" />
                  : <Circle size={14} className="shrink-0 text-blue-600 mt-0.5" />}
                <div className="flex-1 min-w-0">
                  <span className={`text-sm ${done.has('eng') ? 'line-through text-slate-500' : 'text-blue-300'}`}>
                    📘 English Video: {englishVideo}
                  </span>
                  <span className="text-xs text-slate-500 ml-1">~27m</span>
                </div>
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Stats — days left is pure calendar, unaffected by pace */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        {[
          { val: daysLeft, label: 'Days Left', color: 'text-indigo-400' },
          { val: todayDayNum > 0 && todayDayNum <= 50 ? todayDayNum : '-', label: "Today's Day", color: 'text-white' },
          { val: daysCompleted, label: 'Completed', color: 'text-emerald-400' },
          { val: pendingDays.length, label: 'Pending', color: 'text-amber-400' },
        ].map(s => (
          <div key={s.label} className="bg-slate-800 rounded-xl p-3 text-center border border-slate-700">
            <div className={`text-2xl font-bold ${s.color}`}>{s.val}</div>
            <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Pending warning */}
      {pendingDays.length > 0 && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-4 flex items-center gap-3">
          <AlertTriangle size={16} className="text-amber-400 shrink-0" />
          <p className="text-amber-300 text-sm font-medium">
            {pendingDays.length} incomplete past day{pendingDays.length > 1 ? 's' : ''} — don't forget these!
          </p>
        </div>
      )}

      {todayDayNum >= 1 && todayDayNum <= 50 ? (
        <>
          {/* Today with timer */}
          {todayPlan && (() => {
            const doneTasks = new Set(completedTasks[todayPlan.day] || []);
            const dayTotalMins = totalMins(todayPlan.tasks) + 27;
            const dayDoneMins = todayPlan.tasks.reduce((sum, t, i) => sum + (doneTasks.has(`t${i}`) ? t.mins : 0), 0)
              + (doneTasks.has('eng') ? 27 : 0);
            return (
              <section className="mb-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                  <Calendar size={12} /> {formatDate(today)}
                </h3>
                <DailyTimer totalMins={dayTotalMins} doneMins={dayDoneMins} dayNum={todayDayNum} />
                {renderDayCard(todayPlan, true, pendingDays.some(d => d.day === todayPlan.day))}
              </section>
            );
          })()}

          {/* Pending past days */}
          {pendingDays.length > 0 && (
            <section className="mb-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400/60 mb-3 flex items-center gap-2">
                <AlertTriangle size={12} /> Incomplete Past Days
              </h3>
              {pendingDays.map(d => renderDayCard(d, false, true))}
            </section>
          )}

          {/* All upcoming days — always visible, tick anytime */}
          {upcomingDays.length > 0 && (
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <ChevronDown size={12} /> Upcoming — do whenever you're ready
              </h3>
              {upcomingDays.map(d => renderDayCard(d, false, false))}
            </section>
          )}
        </>
      ) : todayDayNum < 1 ? (
        <div className="text-center py-16 text-slate-500">
          <Trophy size={40} className="mx-auto mb-3 opacity-20" />
          <p>Plan starts June 9, 2026</p>
        </div>
      ) : (
        <div className="text-center py-16">
          <Trophy size={48} className="mx-auto mb-3 text-yellow-400" />
          <p className="text-white text-2xl font-bold">50 Days Complete! 🎉</p>
          <p className="text-slate-400 mt-2">Go crush AFCAT 2!</p>
        </div>
      )}
    </div>
  );
}

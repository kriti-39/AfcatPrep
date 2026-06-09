import { useEffect, useState } from 'react';
import { Bell, BellOff, Clock, CheckCircle2, Flame } from 'lucide-react';

function fmtMins(m) {
  if (m <= 0) return '0m';
  const h = Math.floor(m / 60), min = m % 60;
  return h > 0 ? `${h}h ${min > 0 ? min + 'm' : ''}` : `${min}m`;
}

export default function DailyTimer({ totalMins, doneMins, dayNum }) {
  const leftMins = Math.max(0, totalMins - doneMins);
  const pct = totalMins > 0 ? Math.min(100, Math.round((doneMins / totalMins) * 100)) : 0;
  const allDone = leftMins === 0 && totalMins > 0;

  const [notifEnabled, setNotifEnabled] = useState(
    typeof Notification !== 'undefined' && Notification.permission === 'granted'
  );

  // Send a browser notification
  function sendNotif(title, body) {
    if (Notification.permission === 'granted') {
      new Notification(title, { body, icon: '/favicon.ico' });
    }
  }

  async function enableNotifications() {
    if (typeof Notification === 'undefined') return;
    const perm = await Notification.requestPermission();
    if (perm === 'granted') {
      setNotifEnabled(true);
      sendNotif('AFCAT Prep', "Notifications enabled! I'll remind you to study.");
    }
  }

  // Remind every 90 mins if there's work left
  useEffect(() => {
    if (!notifEnabled || allDone) return;
    const interval = setInterval(() => {
      if (leftMins > 0) {
        sendNotif(
          '📚 AFCAT Reminder',
          `Day ${dayNum}: ${fmtMins(leftMins)} still left for today. Keep going!`
        );
      }
    }, 90 * 60 * 1000);
    return () => clearInterval(interval);
  }, [notifEnabled, leftMins, allDone, dayNum]);

  // Warn at end of day (10 PM) if tasks incomplete
  useEffect(() => {
    if (!notifEnabled) return;
    const now = new Date();
    const tenPM = new Date();
    tenPM.setHours(22, 0, 0, 0);
    const msUntil10PM = tenPM - now;
    if (msUntil10PM > 0 && leftMins > 0) {
      const t = setTimeout(() => {
        sendNotif(
          '⚠️ AFCAT — Evening Check',
          `Day ${dayNum}: You still have ${fmtMins(leftMins)} left! Complete today's plan.`
        );
      }, msUntil10PM);
      return () => clearTimeout(t);
    }
  }, [notifEnabled, leftMins, dayNum]);

  const barColor = pct === 100 ? 'bg-emerald-500' : pct >= 50 ? 'bg-indigo-500' : 'bg-amber-500';

  return (
    <div className={`rounded-xl p-4 mb-5 border ${allDone ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-800 border-slate-700'}`}>
      {/* Top row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {allDone
            ? <CheckCircle2 size={16} className="text-emerald-400" />
            : <Flame size={16} className="text-amber-400" />}
          <span className="text-sm font-semibold text-white">
            {allDone ? "Today's plan complete! 🎉" : "Today's Progress"}
          </span>
        </div>
        <button
          onClick={notifEnabled ? undefined : enableNotifications}
          title={notifEnabled ? 'Reminders on' : 'Enable reminders'}
          className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg transition-colors ${
            notifEnabled
              ? 'bg-indigo-500/20 text-indigo-400 cursor-default'
              : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white cursor-pointer'
          }`}
        >
          {notifEnabled ? <Bell size={12} /> : <BellOff size={12} />}
          {notifEnabled ? 'Reminders on' : 'Enable reminders'}
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-2.5 bg-slate-700 rounded-full mb-3 overflow-hidden">
        <div
          className={`h-2.5 rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="text-lg font-bold text-emerald-400">{fmtMins(doneMins)}</div>
          <div className="text-xs text-slate-500">Done</div>
        </div>
        <div>
          <div className="text-lg font-bold text-white">{pct}%</div>
          <div className="text-xs text-slate-500">Complete</div>
        </div>
        <div>
          <div className={`text-lg font-bold ${leftMins > 0 ? 'text-amber-400' : 'text-slate-500'}`}>
            {fmtMins(leftMins)}
          </div>
          <div className="text-xs text-slate-500">Left today</div>
        </div>
      </div>

      {/* Nudge message */}
      {!allDone && leftMins > 0 && (
        <p className="text-xs text-slate-400 mt-3 text-center">
          {leftMins > 120
            ? `💪 ${fmtMins(leftMins)} to go — you've got this!`
            : leftMins > 30
            ? `🔥 Almost there — just ${fmtMins(leftMins)} left!`
            : `⚡ Final stretch — only ${fmtMins(leftMins)} remaining!`}
        </p>
      )}
    </div>
  );
}

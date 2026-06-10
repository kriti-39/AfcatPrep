import { useState } from 'react';
import { CalendarCheck, BookOpen, Brain, List, Plane, FolderOpen, ClipboardList } from 'lucide-react';
import DailyPlanner from './components/DailyPlanner';
import VocabSection from './components/VocabSection';
import StudyMaterial from './components/StudyMaterial';
import FullSchedule from './components/FullSchedule';
import PDFManager from './components/PDFManager';
import PYQQuiz from './components/PYQQuiz';
import { getDaysUntilExam } from './utils/dateUtils';

const TABS = [
  { id: 'today',    label: 'Today',    icon: CalendarCheck },
  { id: 'schedule', label: 'Schedule', icon: List },
  { id: 'pyq',      label: 'PYQ',      icon: ClipboardList },
  { id: 'vocab',    label: 'Vocab',    icon: Brain },
  { id: 'material', label: 'Notes',    icon: BookOpen },
  { id: 'pdfs',     label: 'PDFs',     icon: FolderOpen },
];

export default function App() {
  const [tab, setTab] = useState('today');
  const daysLeft = getDaysUntilExam();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Plane size={20} className="text-indigo-400" />
            <div>
              <h1 className="text-sm font-bold text-white leading-tight">AFCAT 2 — 2026</h1>
              <p className="text-xs text-slate-400">Exam: Aug 8, 2026</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-400 leading-tight">{daysLeft}</div>
            <div className="text-xs text-slate-400">days left</div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 flex border-t border-slate-700/50">
          {TABS.map(t => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors border-b-2 ${
                  tab === t.id
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon size={14} />
                {t.label}
              </button>
            );
          })}
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {tab === 'today'    && <DailyPlanner />}
        {tab === 'schedule' && <FullSchedule />}
        {tab === 'pyq'      && <PYQQuiz />}
        {tab === 'vocab'    && <VocabSection />}
        {tab === 'material' && <StudyMaterial />}
        {tab === 'pdfs'     && <PDFManager />}
      </main>
    </div>
  );
}

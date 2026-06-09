import { START_DATE, EXAM_DATE } from '../data/studyPlan';

export function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

export function getDayNumber(dateStr) {
  const start = new Date(START_DATE);
  const target = new Date(dateStr);
  return Math.floor((target - start) / (1000 * 60 * 60 * 24)) + 1;
}

export function getDaysUntilExam() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exam = new Date(EXAM_DATE + 'T00:00:00');
  const total = Math.round((exam - today) / (1000 * 60 * 60 * 24));
  return total - 2; // Aug 7 (rest) and Aug 8 (exam day) don't count as study days
}

export function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long',
  });
}

export function totalMins(tasks) {
  return tasks.reduce((sum, t) => sum + t.mins, 0);
}

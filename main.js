const pairsTimeRanges = [
    { start: '8:30', end: '10:00' },
    { start: '10:10', end: '11:40' },
    { start: '12:10', end: '13:40' },
    { start: '13:50', end: '15:20' },
    { start: '15:50', end: '17:20' },
    { start: '17:30', end: '19:00' },
    { start: '19:10', end: '20:40' },
];

const scheduleData = {
    Monday: [
        [
            { subject: "Практикум по культуре речевого общения на английском языке", type: "Пр.", group: "A", startWeek: 10, endWeek: 18, hours: 18, professor: "Литвиненко Е.В.", room: "241/242" },
            { subject: "Социология образования", type: "Л.", startWeek: 1, endWeek: 9, hours: 18, professor: "Ишкинеева Ф.Ф.", room: "Онлайн", link: "https://my.mts-link.ru/j/98678163/575655458" }
        ],
        [
            { subject: "Практикум по культуре речевого общения на английском языке", type: "Пр.", group: "A", startWeek: 10, endWeek: 17, hours: 16, professor: "Литвиненко Е.В.", room: "241/242" }
        ],
        [
            { subject: "Морфология русского языка", type: "Л.", startWeek: 1, endWeek: 9, hours: 18, professor: "Корнеева Т.А.", room: "ауд. 355" },
            { subject: "Современные модели уроков русского языка", type: "Л.", startWeek: 10, endWeek: 13, hours: 8, professor: "Ячина Н.П.", room: "ауд. 355" }
        ],
        [
            { subject: "Методика написания курсовой работы", type: "Л.", startWeek: 1, endWeek: 5, hours: 10, professor: "Лукоянова Ю.К.", room: "ауд. 342" },
            { subject: "Теория и методика обучения английскому языку", type: "Л.", startWeek: 6, endWeek: 14, hours: 18, professor: "Насибуллова Г.Р.", room: "ауд. 342" }
        ],
        [
            { subject: "Историческая фонетика и граммтика русского языка", type: "Л.", startWeek: 1, endWeek: 5, hours: 10, professor: "Ерофеева И.В.", room: "ауд. 355" },
            { subject: "Теория и методика обучения русскому языку", type: "Л.", startWeek: 6, endWeek: 14, hours: 18, professor: "Юсупова З.Ф.", room: "ауд. 355" }
        ]
    ],
    Tuesday:[
        [],
        [
            { subject: "Основы медицинских знаний", type: "Л.", startWeek: 1, endWeek: 9, hours: 18, professor: "Кузнецова О.Ю.", room: "Онлайн", link: "https://kpfu.mts-link.ru/j/103013417/431700407" }
        ],
        [
            { subject: "Методы научно-исследовательской деятельности", type: "Пр.", startWeek: 13, endWeek: 13, hours: 2, professor: "Рахимова Д.И.", room: "301" },
            { subject: "Методы научно-исследовательской деятельности", type: "Пр.", startWeek: 14, endWeek: 18, hours: 10, professor: "Рахимова Д.И.", room: "318" }
        ],
        [
            { subject: "Теория и методика обучения русскому языку", type: "Пр.", startWeek: 6, endWeek: 13, hours: 16, professor: "Нуруллина Г.М.", room: "342/343" }
        ],
        [
            { subject: "Историческая фонетика и грамматика русского языка", type: "Пр.", startWeek: 11, endWeek: 18, hours: 16, professor: "Карасева А.И.", room: "219/220" }
        ],
        [
            { subject: "Теория и методика обучения английскому языку", type: "Пр.", startWeek: 11, endWeek: 18, hours: 16, professor: "Насибуллова Г.Р.", room: "219/220" }
        ]
    ],
    Wednesday: [
        [
            { subject: "Практикум по культуре речевого общения на английском языке", type: "Пр.", group: "B", startWeek: 1, endWeek: 17, hours: 34, professor: "Мифтахова Л.Б.", room: "221" },
            { subject: "Практический курс русского языка", type: "Пр.", group: "A", startWeek: 1, endWeek: 18, hours: 36, professor: "Каримуллина Р.Н.", room: "422" }
        ],
        [
            { subject: "Практический курс английского языка", type: "Пр.", group: "A", startWeek: 1, endWeek: 18, hours: 36, professor: "Мубаракшина А.М.", room: "221" },
            { subject: "Практический курс русского языка", type: "Пр.", group: "B", startWeek: 1, endWeek: 18, hours: 36, professor: "Каримуллина Р.Н.", room: "422" }
        ],
        [
            { subject: "Элективные курсы по физической культуре и спорту", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Бутлерова", room: "4" }
        ],
        [
            { subject: "Основы голосо-речевого мастерства", type: "Пр.", startWeek: 1, endWeek: 18, hours: 36, professor: "Закирова Э.Р.", room: "349" }
        ],
        [
            { subject: "Практический курс английского языка", type: "Пр.", group: "B",startWeek: 1, endWeek: 18, hours: 36, professor: "Марико Мохамед Ламин", room: "422" }
        ]
    ],
    Thursday: [
        [],
        [],
        [
            { subject: "Морфология русского языка", type: "Пр.", startWeek: 14, endWeek: 17, hours: 8, professor: "Корнеева Т.А.", room: "10.3-353" },
            { subject: "Современные модели уроков русского языка", type: "Пр.", startWeek: 9, endWeek: 13, hours: 10, professor: "Куклина Н.В.", room: "342/343" }
        ],
        [
            { subject: "Научно-исследовательская работа (получение первичных навыков)", type: "Пр.", startWeek: 1, endWeek: 18, hours: 36, professor: "Ижбаева Г.Р.", room: "243/244" }
        ],
        [
            { subject: "Социокультурные ценности в образовании", type: "Пр.", startWeek: 10, endWeek: 18, hours: 18, professor: "Кривоножкина Е.Г.", room: "ауд. 219" },
            { subject: "Морфология русского языка", type: "Пр.", startWeek: 1, endWeek: 9, hours: 18, professor: "Корнеева Т.А.", room: "411" }
        ],
        [
            { subject: "Основы медицинских знаний", type: "Пр.", startWeek: 1, endWeek: 9, hours: 18, professor: "Вахитов Л.И.", room: "218" },
            { subject: "Коррекционная психология и педагогика", type: "Пр.", startWeek: 10, endWeek: 18, hours: 18, professor: "Биктяшова Е.А.", room: "304" }
        ],
        [
            { subject: "Социология образования", type: "Пр.", startWeek: 10, endWeek: 18, hours: 18, professor: "Свищёва В.С.", room: "217" }
        ]
    ],
    Friday: [
        [],
        [],
        [],
        [
            { subject: "Практика по профилю подготовки (русский язык)", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Нуруллина Г.М.", room: "249(2)", link: "https://telemost.yandex.ru/j/89349265968024" }
        ],
        [
            { subject: "Методы научно-исследовательской деятельности", type: "Л.", startWeek: 1, endWeek: 5, hours: 10, professor: "Усманова Л.А.", room: "249(2)", link: "https://telemost.yandex.ru/j/08653149753049" },
            { subject: "Методы научно-исследовательской деятельности", type: "Пр.", startWeek: 6, endWeek: 12, hours: 14, professor: "Рахимова Д.И.", room: "249(2)", link: "https://telemost.yandex.ru/j/41421760682133" },
            { subject: "Морфология русского языка", type: "Пр.", startWeek: 13, endWeek: 17, hours: 10, professor: "Корнеева Т.А.", room: "249(3)", link: "https://telemost.yandex.ru/j/06219533126904" }
        ],
        [
            { subject: "Социокультурные ценности в образовании", type: "Л.", startWeek: 1, endWeek: 9, hours: 18, professors: ["Калимуллин А.М.", "Баклашова Т.А.", "Кривоножкина Е.Г."], room: "249(2)", link: "https://telemost.360.yandex.ru/j/5523261546" },
            { subject: "Методика написания курсовой работы", type: "Пр.", startWeek: 10, endWeek: 16, hours: 14, professor: "Лукоянова Ю.К.", room: "249(3)", link: "https://telemost.yandex.ru/j/99782057724661" }
        ]
    ],
    Saturday: [
        [
            { subject: "Методика написания курсовой работы", type: "Пр.", startWeek: 1, endWeek: 6, hours: 12, professor: "Лукоянова Ю.К.", room: "304" }
        ],
        [
            { subject: "Лексикология английского языка", type: "Пр.", startWeek: 1, endWeek: 11, hours: 22, professor: "Туганова С.В.", room: "219/220" }
        ],
        [
            { subject: "Элективные курсы по физической культуре и спорту", type: "Пр.", startWeek: 1, endWeek: 17, hours: 34, professor: "Бутлерова", room: "4" }
        ]
    ],
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Adjust getDay() to match Monday=0 index
let currentDay = daysOfWeek[(new Date().getDay() + 6) % 7];

function getWeekNumber() {
  const startDate = new Date(2025, 8, 1); // Sept 1, 2025
  const now = new Date();
  if (now < startDate) return 0;
  return Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

function getClassesForWeek(classes, currentWeek) {
  if (!classes) return null;
  if (!Array.isArray(classes)) classes = [classes];
  const filtered = classes.filter(c => {
    if ('startWeek' in c && 'endWeek' in c) {
      return currentWeek >= c.startWeek && currentWeek <= c.endWeek;
    }
    return true;
  });
  return filtered.length ? filtered : null;
}

function renderSchedule() {
  const currentWeek = getWeekNumber();
  document.getElementById('weekNumber').textContent = currentWeek;
  const dayLabel = currentDay === 'WholeWeek' ? 'Whole Week' : currentDay;
  document.getElementById('currentDay').textContent = dayLabel;
  const tbody = document.getElementById('scheduleBody');
  tbody.innerHTML = '';
  if (currentDay === 'WholeWeek') {
    // For whole week, you can adapt similarly if needed
    daysOfWeek.forEach(day => {
      const daySchedule = scheduleData[day] || Array(pairsTimeRanges.length).fill(null);
      // Day header row
      const headerRow = document.createElement('tr');
      headerRow.classList.add('bg-indigo-100', 'font-bold', 'text-indigo-900');
      headerRow.innerHTML = `<td colspan="4" class="text-center py-1">${day}</td>`;
      tbody.appendChild(headerRow);
      pairsTimeRanges.forEach((pair, index) => {
        const pairData = daySchedule[index];
        const classesToRender = getClassesForWeek(pairData, currentWeek);
        if (classesToRender && classesToRender.length > 0) {
          const tr = document.createElement('tr');
          tr.classList.add('hover:bg-indigo-50', 'transition');
          // Time cell
          const timeCell = document.createElement('td');
          timeCell.className = 'px-6 py-3 align-top';
          timeCell.textContent = `${pair.start} - ${pair.end}`;
          tr.appendChild(timeCell);
          // Subject cell
          const subjectCell = document.createElement('td');
          subjectCell.className = 'px-6 py-3';
          subjectCell.innerHTML = classesToRender.map(cls => {
            const groupText = cls.group ? `(${cls.group}) ` : '';
            if (cls.link) {
              return `<div><a href="${cls.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">${groupText}${cls.subject || ''}</a></div>`;
            } else {
              return `<div>${groupText}${cls.subject || ''}</div>`;
            }
          }).join('');
          tr.appendChild(subjectCell);
          // Room cell
          const roomCell = document.createElement('td');
          roomCell.className = 'px-6 py-3';
          roomCell.innerHTML = classesToRender.map(cls => `<div>${cls.room || ''}</div>`).join('');
          tr.appendChild(roomCell);
          // Professor cell
          const profCell = document.createElement('td');
          profCell.className = 'px-6 py-3';
          profCell.innerHTML = classesToRender.map(cls => {
            if (cls.professor) return `<div>${cls.professor}</div>`;
            if (cls.professors) return `<div>${cls.professors.join(', ')}</div>`;
            return `<div></div>`;
          }).join('');
          tr.appendChild(profCell);
          tbody.appendChild(tr);
        }
      });
    });
  } else {
    // Single day rendering
    const daySchedule = scheduleData[currentDay] || Array(pairsTimeRanges.length).fill(null);
    let hasAnyClass = false;
    pairsTimeRanges.forEach((pair, index) => {
      const pairData = daySchedule[index];
      const classesToRender = getClassesForWeek(pairData, currentWeek);
      if (classesToRender && classesToRender.length > 0) {
        hasAnyClass = true;
        const tr = document.createElement('tr');
        tr.classList.add('hover:bg-indigo-100', 'transition');
        // Time cell
        const timeCell = document.createElement('td');
        timeCell.className = 'px-6 py-3 align-top';
        timeCell.textContent = `${pair.start} - ${pair.end}`;
        tr.appendChild(timeCell);
        // Subject cell
        const subjectCell = document.createElement('td');
        subjectCell.className = 'px-6 py-3';
        subjectCell.innerHTML = classesToRender.map(cls => {
          const groupText = cls.group ? `(${cls.group}) ` : '';
          if (cls.link) {
            return `<div><a href="${cls.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">${groupText}${cls.subject || ''}</a></div>`;
          } else {
            return `<div>${groupText}${cls.subject || ''}</div>`;
          }
        }).join('');
        tr.appendChild(subjectCell);
        // Room cell
        const roomCell = document.createElement('td');
        roomCell.className = 'px-6 py-3';
        roomCell.innerHTML = classesToRender.map(cls => `<div>${cls.room || ''}</div>`).join('');
        tr.appendChild(roomCell);
        // Professor cell
        const profCell = document.createElement('td');
        profCell.className = 'px-6 py-3';
        profCell.innerHTML = classesToRender.map(cls => {
          if (cls.professor) return `<div>${cls.professor}</div>`;
          if (cls.professors) return `<div>${cls.professors.join(', ')}</div>`;
          return `<div></div>`;
        }).join('');
        tr.appendChild(profCell);
        tbody.appendChild(tr);
      }
    });
    if (!hasAnyClass) {
      const tr = document.createElement('tr');
      tr.classList.add('text-center', 'italic', 'text-gray-400');
      tr.innerHTML = `<td colspan="4" class="px-6 py-4">No classes today</td>`;
      tbody.appendChild(tr);
    }
  }
}

function updateCurrentTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('ru-RU', { hour12: false });
  document.getElementById('currentTime').textContent = timeStr;
}

function formatDuration(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  let parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);
  return parts.join(' ');
}

function updateTimer() {
  const now = new Date();
  const timerTextEl = document.getElementById('timerText');
  const currentDayEl = document.getElementById('currentDay');

  currentDayEl.textContent = currentDay;

  if (!currentDay || !scheduleData[currentDay]) {
    timerTextEl.textContent = "This is this week's timetable";
    return;
  }

  const daySchedule = scheduleData[currentDay];
  const currentWeek = getWeekNumber();

  let timerSet = false;

  for (let i = 0; i < pairsTimeRanges.length; i++) {
    const pair = pairsTimeRanges[i];
    const [startH, startM] = pair.start.split(':').map(Number);
    const [endH, endM] = pair.end.split(':').map(Number);
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startH, startM);
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endH, endM);

    const pairClasses = daySchedule[i];
    const classesToRender = getClassesForWeek(pairClasses, currentWeek);

    if (!classesToRender || classesToRender.length === 0) {
      continue;
    }

    if (now < start) {
      const diff = start - now;
      timerTextEl.textContent = `Next pair starts in ${formatDuration(diff)}`;
      timerSet = true;
      break;
    } else if (now >= start && now < end) {
      const diff = end - now;
      timerTextEl.textContent = `Current pair ends in ${formatDuration(diff)}`;
      timerSet = true;
      break;
    }
  }

  if (!timerSet) {
    timerTextEl.textContent = `No more classes today`;
  }
}

// Add event listeners to day buttons
document.querySelectorAll('.day-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentDay = btn.getAttribute('data-day');
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-300'));
    btn.classList.add('ring-4', 'ring-offset-2', 'ring-blue-300');
    // Remove highlight from showWeekBtn
    document.getElementById('showWeekBtn').classList.remove('ring-4', 'ring-offset-2', 'ring-blue-300');
    renderSchedule();
    updateTimer();
  });
});

// Show whole week button
document.getElementById('showWeekBtn').addEventListener('click', () => {
  currentDay = 'WholeWeek';
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-300'));
  document.getElementById('showWeekBtn').classList.add('ring-4', 'ring-offset-2', 'ring-blue-300');
  renderSchedule();
  updateTimer();
});

// Highlight today's button initially
const initBtn = document.querySelector(`.day-btn[data-day="${currentDay}"]`);
if (initBtn) initBtn.classList.add('ring-4', 'ring-offset-2', 'ring-blue-300');

// Initial render and timer update
renderSchedule();
updateCurrentTime();
updateTimer();

setInterval(() => {
  updateCurrentTime();
  updateTimer();
}, 1000);

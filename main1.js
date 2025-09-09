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

const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

    // Extract all weeks from scheduleData to fill weeks selector
    function getAllWeeks() {
      let weeksSet = new Set();
      for (const day of daysOfWeek) {
        const daySchedule = scheduleData[day] || [];
        daySchedule.forEach(pairData => {
          if (!pairData) return;
          const classes = Array.isArray(pairData) ? pairData : [pairData];
          classes.forEach(cls => {
            if ('startWeek' in cls && 'endWeek' in cls) {
              for(let w = cls.startWeek; w <= cls.endWeek; w++) {
                weeksSet.add(w);
              }
            }
          });
        });
      }
      return Array.from(weeksSet).sort((a,b) => a-b);
    }

    // Fill the week dropdown options
    function fillWeekSelector() {
      const weekSelector = document.getElementById('weekSelector');
      const weeks = getAllWeeks();
      weeks.forEach(week => {
        const option = document.createElement('option');
        option.value = week;
        option.textContent = `Неделя ${week}`;
        weekSelector.appendChild(option);
      });

      // Select current week by default
      const currentWeek = getCurrentWeek();
      if (weeks.includes(currentWeek)) {
        weekSelector.value = currentWeek;
      } else if (weeks.length > 0) {
        weekSelector.value = weeks[0];
      }
    }

    // Get the current week number based on September 1, 2025
    function getCurrentWeek() {
      const startDate = new Date(2025, 8, 1);
      const now = new Date();
      if (now < startDate) return 0;
      return Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;
    }

    // Filter classes by selected week
    function getClassesForWeek(classes, week) {
      if (!classes) return null;
      if (!Array.isArray(classes)) classes = [classes];
      const filtered = classes.filter(c => {
        if ('startWeek' in c && 'endWeek' in c) {
          return week >= c.startWeek && week <= c.endWeek;
        }
        return true;
      });
      return filtered.length ? filtered : null;
    }

    // Render timetable table body for selected week
    function renderScheduleTable(selectedWeek) {
      const tbody = document.getElementById('scheduleBody');
      tbody.innerHTML = '';

      pairsTimeRanges.forEach((pair, pairIndex) => {
        const tr = document.createElement('tr');

        // Pair number cell
        const pairCell = document.createElement('td');
        pairCell.textContent = pairIndex + 1;
        pairCell.classList.add('border', 'border-gray-300', 'px-6', 'py-3', 'font-semibold', 'whitespace-nowrap');
        tr.appendChild(pairCell);

        // Time cell
        const timeCell = document.createElement('td');
        timeCell.textContent = `${pair.start} - ${pair.end}`;
        timeCell.classList.add('border', 'border-gray-300', 'px-6', 'py-3', 'font-semibold', 'whitespace-nowrap');
        tr.appendChild(timeCell);

        daysOfWeek.forEach(day => {
          const daySchedule = scheduleData[day] || [];
          const pairData = daySchedule[pairIndex];
          const classesToRender = getClassesForWeek(pairData, selectedWeek);

          const td = document.createElement('td');
          td.classList.add('border', 'border-gray-300', 'px-4', 'py-3', 'align-top', 'whitespace-normal');

          if (classesToRender && classesToRender.length > 0) {
            classesToRender.forEach(cls => {
              const classDiv = document.createElement('div');
              classDiv.classList.add('mb-1', 'text-indigo-700', 'break-words');

              if (cls.link) {
                const link = document.createElement('a');
                link.href = cls.link;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.classList.add('text-blue-600', 'underline');
                link.textContent = cls.subject || '';
                classDiv.appendChild(link);
              } else {
                classDiv.textContent = cls.subject || '';
              }

              const details = document.createElement('div');
              details.classList.add('text-sm', 'text-gray-600');
              details.textContent = `${cls.room || ''}${cls.professor ? ', ' + cls.professor : ''}`;
              classDiv.appendChild(details);

              td.appendChild(classDiv);
            });
          } else {
            td.classList.add('text-center', 'italic', 'text-gray-400');
            td.textContent = '-';
          }

          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });
    }

    // Update time
    function updateCurrentTime() {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('ru-RU', { hour12: false });
      document.getElementById('currentTime').textContent = timeStr;
    }

    // Initialize
    fillWeekSelector();
    const weekSelector = document.getElementById('weekSelector');
    let currentWeek = getCurrentWeek();
    weekSelector.value = currentWeek;
    renderScheduleTable(currentWeek);

    weekSelector.addEventListener('change', () => {
      renderScheduleTable(parseInt(weekSelector.value));
    });

    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
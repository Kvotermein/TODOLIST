'use strict'
let now = new Date();
let today = now.getDate()
let tblElemTD = document.getElementsByTagName("td");

    function createCalendar(id, year, month) {
      var elem = document.getElementById(id);

      var mon = month; // месяцы в JS идут от 0 до 11, а не от 1 до 12
      var d = new Date(year, mon);

      var table = '<table id=myTable><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

      // заполнить первый ряд от понедельника
      // и до дня, с которого начинается месяц
      // * * * | 1  2  3  4
      for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      // ячейки календаря с датами
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      // добить таблицу пустыми ячейками, если нужно
      if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      // закрыть таблицу
      table += '</tr></table>';

      // только одно присваивание innerHTML
      elem.innerHTML = table;
    }

    function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
      return (6 + date.getDay()) % 7;
    }

    createCalendar("calendar", now.getFullYear(), now.getMonth())

  for (var i = 0; i < tblElemTD.length; i++) {
    if (String(today)===tblElemTD[i].textContent) {
      tblElemTD[i].style.color='blue';
    }
  }

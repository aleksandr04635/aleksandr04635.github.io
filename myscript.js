/*
// When called as a listener, turns the related element blue
function bluify(e) {
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
const elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (const element of elements) {
  element.addEventListener('click', bluify, false);
}
*/


var show="n";
function myFunction3(){
  if (show=="n"){
    let text = "";
    for (let i = 0; i < 25000; i++){
      text=text+"&#"+i+" ";
    }
    show="y";
    document.getElementById("p02").innerHTML = text;
    document.getElementById("b1").innerHTML = "Hide charset";
  } else{
 	  show="n";
   	document.getElementById("p02").innerHTML = "";
 	  document.getElementById("b1").innerHTML = "Show charset";
  }
}

function myFunction4(){
  let show = false;
  return  function(el,but) {
      if (show == false){
        let text = "";
        for (let i = 0; i < 5000; i++){
          text = text + String.fromCharCode(i) + " ";
        }
        show = true;
        document.getElementById(el).innerHTML = text;
        document.getElementById(but).innerHTML = "Hide charset";
      } else{
        show = false;
        document.getElementById(el).innerHTML = "";
        document.getElementById(but).innerHTML = "Show charset";
      }
  }
}
const sh = myFunction4();


const show1 = (function (){
  let show = false;
  return  function(el,but) {
    if (show == false){
      let text = "";
      for (let i = 0; i < 5000; i++){
        text = text + String.fromCodePoint(i) + " ";
      }
      show = true;
      document.getElementById(el).innerHTML = text;
      document.getElementById(but).innerHTML = "Hide charset";
    } else {
      show = false;
      document.getElementById(el).innerHTML = "";
      document.getElementById(but).innerHTML = "Show charset";
    }
  }   
})();



function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}

function myFunction2(){
  let x = document.getElementsByClassName("city");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}


function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem('clickcount')) {
      localStorage.setItem('clickcount', Number(localStorage.getItem('clickcount'))+1);
    } else {
      localStorage.setItem('clickcount', 1);
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.getItem('clickcount') + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


let myNumber = 2; 
let txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber + "<br>";
}
document.getElementById("demo5").innerHTML = txt;


let timer = setInterval(myFunction7, 1000);
function myFunction7() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('demo7').innerHTML =  h + ":" + m + ":" + s;
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


/*(function () {
  document.getElementById("demo6").innerHTML = "Hello! I called myself";
})();*/

document.getElementById("demo8").innerHTML = 
"Page location is: " + window.location.href +
"<br> Page path is " + window.location.pathname +
"<br>  Page protocol is " + window.location.protocol +
"<br> Port number is " + window.location.port +
"<br> user-agent header sent by the browser to the server is " + navigator.userAgent +
"<br> browser's language is " + navigator.language +
"<br> inner height is " + window.innerHeight;




function clickButton() {
const obj1 = { table: "customers", limit: 10 };
let s = document.createElement("script");
s.src = "https://www.w3schools.com/js/jsonp_demo_db.php?x=" + JSON.stringify(obj1);
document.body.appendChild(s);
}

function myFunc(myObj) {
  let txt = "";
  for (let x in myObj) {
    txt += myObj[x].name + "<br>";
  }
  document.getElementById("demo9").innerHTML = txt;
}





function checkDebounce(){

  function debounce(f1, ms) {
    let isCooldown = false;
    return function() {
      if (isCooldown) return;
      f1.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
    };
  }

  let f = debounce(alert, 1000);
/*  let f = debounce((x) => alert(x+"1"), 1000);*/

  f("text"); // выполняется немедленно
  setTimeout( () => f("text2"), 100); // проигнорирован (прошло только 100 мс)
  setTimeout( () => f("text3"), 1100); // выполняется
}


function checkDefer(){

  function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms)
    };
  }

  function sayHi(who) {
    alert('Hello, ' + who);
  }

  let sayHiDeferred = defer(sayHi, 1000);
  sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды


function defer2(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}
}
/*let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};
let say = user.sayHi.bind(user);
say();
setTimeout(say, 1000); 

setTimeout(user.sayHi.apply(user), 1000); 
user.firstName = "Петя";
*/

/*// при создании промиса он сразу переводится в состояние "успешно завершён"
let promise = new Promise(resolve => resolve("готово!"));

promise.then(alert); // готово! (выведется сразу)*/

/*fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    let tex = document.createElement('div');
    text="";
    for (let x of Object.keys(githubUser)) {
      text += x + " =  " + githubUser[x] + "<br>";}
    tex.innerHTML = text;
    document.body.append(tex);

    setTimeout(() => {
      img.remove();
      tex.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));  */

async function showAvatar() {
  // запрашиваем JSON с данными пользователя
  let response = await fetch('https://learn.javascript.ru/article/promise-chaining/user.json');
  let user = await response.json();

  // запрашиваем информацию об этом пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.getElementsByClassName("right")[0].append(img);

  let tex = document.createElement('div');
  text="";
 // for (let x of Object.keys(githubUser)) {
  for (let x in githubUser) {
    text += x + " =  " + githubUser[x] + "<br>";}
  tex.innerHTML = text;
  document.getElementsByClassName("right")[0].append(tex);

  // ждём 3 секунды и затем скрываем аватар
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
//  img.remove();
  return githubUser;
}
showAvatar();


//счетчик
let counter1 = 0;
function count() {
    // сделать часть крупной задачи (*)
    do {
      counter1++;
     document.getElementById("demo12").innerHTML = counter1;
    } while (counter1 % 10000 != 0);
    if (counter1 < 1e7) {
      setTimeout(count);
    }
}
count();


/*
async function wait() {
  await new Promise(resolve1 => setTimeout(resolve1, 1000));
  return 10;
}
function f() {
  // покажет 10 через 1 секунду
  wait().then(result1 => alert(result1));
}
f();
*/


/*function f() {
    let showArg = () => alert(arguments[0]);
 // let showArg = function(){ alert(arguments[0]);};
  showArg(2);
}
f(1);
*/

/*
let range = {
  from: 1,
  to: 5,
  // for..of range вызывает этот метод один раз в самом начале
  [Symbol.iterator]() {
    // ...он возвращает перебираемый объект:
    // далее for..of работает только с этим объектом, запрашивая следующие значения
    return {
      current: this.from,
      last: this.to,
      // next() вызывается при каждой итерации цикла for..of
      next() {
        // нужно вернуть значение как объект {done:.., value :...}
        if (this.current <= this.last) {    
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};
// при переборе объекта range будут выведены числа от range.from до range.to
alert([...range]); // 1,2,3,4,5
*/

//псевдорандом генератором
function* pseudoRandom(seed) {
  let value = seed;
  while(true) {
    document.getElementById('demo6').innerHTML = value;
    value = value * 16807 % 2147483647 ;
    let ask =   yield value;
// alert(ask);
    if (ask !== undefined){
      value = Number(ask);
    }
//    alert("value = " + value);
    console.log(value);
  }
};
let generator = pseudoRandom(1);



/*

    let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {
      let data = prompt("Введите текст для элемента списка", "");

      if (!data) {
        break;
      }

      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    } */

        let data = {
      "Рыбы": {
        "форель": {},
        "лосось": {}
      },

      "Деревья": {
        "Огромные": {
          "секвойя": {},
          "дуб": {}
        },
        "Цветковые": {
          "яблоня": {},
          "магнолия": {}
        }
      }
    };
    function createTree(container, obj) {
      container.innerHTML = createTreeText(obj);
    }

    function createTreeText(obj) { // отдельная рекурсивная функция
      let li = '';
      let ul;
      for (let key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
      }
      if (li) {
        ul = '<ul>' + li + '</ul>'
      }
      return ul || '';
    }
 /*   function createTree(container, obj) {
      container.append(createTreeDom(obj));
    }

    function createTreeDom(obj) {
      // если нет дочерних элементов, то вызов возвращает undefined
      // и элемент <ul> не будет создан
      if (!Object.keys(obj).length) return;
      let ul = document.createElement('ul');
      for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
          li.append(childrenUl);
        }

        ul.append(li);
      }
      return ul;
    } */
let container = document.getElementById('container');
    createTree(container, data);




//создание календаря
    function createCalendar(elem, year, month) {

      let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
      let d = new Date(year, mon);

      let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

      // пробелы для первого ряда
      // с понедельника до первого дня месяца
      // * * * 1  2  3  4
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      // <td> ячейки календаря с датами
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      // добить таблицу пустыми ячейками, если нужно
      // 29 30 31 * * * *
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }
      // закрыть таблицу
      table += '</tr></table>';
//выделяем сегоднешний день
let day = (new Date()).getDate();
let pos = table.indexOf(`${day}`);
table = table.slice(0, pos-1)+' style="background-color: rgb(225, 202, 22)"' +  table.slice(pos-1);
//table = table.slice(0, pos)+ `<b>${day}</b>` + table.slice(pos+1);

      elem.innerHTML = table;
    }


    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
      let day = date.getDay();
      if (day == 0) day = 7; // сделать воскресенье (0) последним днем
      return day - 1;
    }

let calendar = document.getElementById('calendar');
let date = new Date();
let div1 = document.createElement('div');
div1.innerHTML = checkTime(date.getMonth()+1) + "." + date.getFullYear();
calendar.before(div1); 
createCalendar(calendar, date.getFullYear(), date.getMonth()+1);




  //  let computedStyle = getComputedStyle(document.body);

    // сейчас мы можем прочитать отступ и цвет

  //  alert( getComputedStyle(document.body).backgroundColor );


//сортировка таблици
      grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      let th = e.target;
      // если ячейка TH, тогда сортировать
      // cellIndex - это номер ячейки th:
      //   0 для первого столбца
      //   1 для второго и т.д.
      sortGrid(th.cellIndex, th.dataset.type);
    };

    function sortGrid(colNum, type) {
      let tbody = grid.querySelector('tbody');

      let rowsArray = Array.from(tbody.rows);

      // compare(a, b) сравнивает две строки, нужен для сортировки
    let compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
          break;
      }

      // сортировка
      rowsArray.sort(compare);

      tbody.append(...rowsArray);
    }



//подсказки
    let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target.closest('[data-tooltip]');
            if (!target) return;

      // если у нас есть подсказка...
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      // ...создадим элемент для подсказки

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // спозиционируем его сверху от аннотируемого элемента (top-center)
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не заезжать за левый край окна

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };


//ползунок
    let thumb = slider.querySelector('.thumb');

    thumb.onmousedown = function(event) {
      event.preventDefault(); // предотвратить запуск выделения (действие браузера)

      let shiftX = event.clientX - thumb.getBoundingClientRect().left;
      // shiftY здесь не нужен, слайдер двигается только по горизонтали

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };




    function runOnKeys(func, ...codes) {
      let pressed = new Set();

      document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) { // все ли клавиши из набора нажаты?
          if (!pressed.has(code)) {
            return;
          }
        }

        // да, все

        // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
        // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
        // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
        pressed.clear();

        func();
      });

      document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
      });

    }

    runOnKeys(
      () => alert("Привет!"),
      "KeyQ",
      "KeyW"
    );



//scroll
        arrowTop.onclick = function() {
      window.scrollTo(pageXOffset, 0);
      // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
    };

    window.addEventListener('scroll', function() {
      arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    });





        let form = document.forms.calculator;

    form.money.oninput = calculate;
    form.months.onchange = calculate;
    form.interest.oninput = calculate;

    function calculate() {
      let initial = +form.money.value;
      if (!initial) return;

      let interest = form.interest.value * 0.01;

      if (!interest) return;

      let years = form.months.value / 12;
      if (!years) return;

      let result = Math.round(initial * (1 + interest) ** years);

      let height = result / form.money.value * 100 + 'px';
      document.getElementById('height-after').style.height = height;
      document.getElementById('money-before').innerHTML = form.money.value;
      document.getElementById('money-after').innerHTML = result;
    }

    calculate();




    // Показать полупрозрачный DIV, чтобы затенить страницу
    // (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)
    function showCover() {
      let coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';
      document.body.append(coverDiv);
      // убираем возможность прокрутки страницы во время показа модального окна с формой
      document.body.style.overflowY = 'hidden';
    }

    function hideCover() {
      document.getElementById('cover-div').remove();
      document.body.style.overflowY = '';
    }

    function showPrompt(text, callback) {
      showCover();
      let form = document.getElementById('prompt-form');
      let container = document.getElementById('prompt-form-container');
      document.getElementById('prompt-message').innerHTML = text;
      form.text.value = '';

      function complete(value) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
      }

      form.onsubmit = function() {
        let value = form.text.value;
        if (value == '') return false; // игнорируем отправку пустой формы

        complete(value);
        return false;
      };

      form.cancel.onclick = function() {
        complete(null);
      };

      document.onkeydown = function(e) {
        if (e.key == 'Escape') {
          complete(null);
        }
      };

      let lastElem = form.elements[form.elements.length - 1];
      let firstElem = form.elements[0];

      lastElem.onkeydown = function(e) {
        if (e.key == 'Tab' && !e.shiftKey) {
          firstElem.focus();
          return false;
        }
      };

      firstElem.onkeydown = function(e) {
        if (e.key == 'Tab' && e.shiftKey) {
          lastElem.focus();
          return false;
        }
      };

      container.style.display = 'block';
      form.elements.text.focus();
    }

    document.getElementById('show-button').onclick = function() {
      showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert("Вы ввели: " + value);
      });
    };



/*
  async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.all(jobs);
//    alert(results[1].login);
        return results;

  }

getUsers(['iliakan', 'remy', 'users1']).then(result => alert(result[0].name));
*/

/*
let date1 = new Date(Date.now() + 86400e3);
date1 = date1.toUTCString();
document.cookie = "user=John1; expires=" + date1;
alert(document.cookie);
*/
/*
for(let i=0; i<localStorage.length; i++) {
  let key = localStorage.key(i);
  alert(`${key}: ${localStorage.getItem(key)}`);
}
*/
window.onstorage = event => {
 // if (event.key != 'now') return;
 alert('local storage change:  ' + event.key + ':' + event.newValue + " at " + event.url);
};
//localStorage.setItem('now', Date.now());
    area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
    };



/*
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

let a1=1;
function f() {
a1++;
  // покажет 10 через 1 секунду result => a1=result
  wait().then(result => {console.log(result);
    a1 = result; console.log(a1); return a1;})
  .then(alert);
 // alert(a1);
}

f();
  alert(a1);

  */




  var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


const passwordInput = document.getElementById('password2');
const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.textContent = 'Hide password';
    togglePasswordButton.setAttribute('aria-label',
      'Hide password.');
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.textContent = 'Show password';
    togglePasswordButton.setAttribute('aria-label',
      'Show password as plain text. ' +
      'Warning: this will display your password on the screen.');
  }
}



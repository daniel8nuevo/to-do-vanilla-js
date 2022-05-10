let btntodo = document.querySelector('.btntodo'),
tasks = document.querySelector('.tasks');

btntodo.onclick = () => {

    let el = document.createElement('li'),
    inputValue = document.querySelector('.in').value,
    btn = document.createElement('button'),
    output = document.createElement('span'),
    dateValue = document.createElement('span'),
    div = document.createElement('div'),
    timeNow = new Date();
    
    el.className = "todos";
    btn.className = "btn-remove";
    dateValue.className = "date";
    btn.innerText = 'REMOVE';
    output.innerText =  inputValue;
    dateValue.innerText = 'Create date: ' + timeNow.toDateString('RU-ru');

    /*
    weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayPeriod = timeNow.getHours() >= 12 ? 'AM' : 'PM';
    */

    tasks.appendChild(el);
    tasks.appendChild(dateValue);
    
    el.appendChild(output);
    el.appendChild(btn);

    btn.onclick = () => {
        el.remove();
        dateValue.remove();
    }

};


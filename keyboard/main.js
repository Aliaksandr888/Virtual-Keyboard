let key = [[
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\u002F', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'],
    ['Shift', '\u002F', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8657', 'Shift'],
    ['Control', 'win', 'Alt', 'Space', 'Alt', 'Control', '&#8656;', '&#8659;', '&#8658;']
],
[
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\u002F', 'Del'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', '\u002F', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8657', 'Shift'],
    ['Control', 'win', 'Alt', 'Space', 'Alt', 'Control', '&#8656;', '&#8659;', '&#8658;']
]

];



let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);
//клавиатура
let keyboard_wrapper = document.createElement('div');
keyboard_wrapper.classList.add('keyboard_wrapper')
container.append(keyboard_wrapper)
//смена языка
let language_btn = document.createElement('div');
language_btn.classList.add('language-btn');
container.append(language_btn);
language_btn.addEventListener('click', () => {
    language_btn.classList.toggle('language-on');
    if (a === 0) {
        a = 1
    } else {
        a = 0;
    }
    changeLang()
})
//поле ввода
let entry_field = document.createElement('textarea');
entry_field.classList.add('text');
container.append(entry_field);
window.onload = function () {
    entry_field.focus();
};
entry_field.disabled = true;

let keyboard_keys = document.createElement('div');
keyboard_keys.classList.add('keyboard_keys')
keyboard_wrapper.append(keyboard_keys);

for (let i = 0; i < 6; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    keyboard_keys.appendChild(row);
}
let rows = document.querySelectorAll('.row');
let a = 0;
function langCount() {
    if (a == 1) {
        a = 0
    } else {
        a = 1
    }
}
function appendKeys(e, r, numberInputs) {

    for (let i = 0; i <= numberInputs; i++) {
        let keys = document.createElement('keys');
        keys.classList.add('keys');
        keys.innerHTML = key[a][r][i];
        e.appendChild(keys)
    }
};
let infoBox = document.createElement('p');
infoBox.innerHTML ='Смена языка shift+alt или кнпкой.'
container.append(infoBox)
// вызов функции языка

function lengCheng(a) {
    appendKeys(rows[0], 0, 13);
    appendKeys(rows[1], 1, 14);
    appendKeys(rows[2], 2, 12);
    appendKeys(rows[3], 3, 13);
    appendKeys(rows[4], 4, 8);

}
lengCheng();

let keys = document.querySelectorAll('.keys');

keys.forEach((e) => {
    if (e.innerHTML === 'Backspace') {
        e.classList.add('backspace')
    } else if (e.innerHTML === 'Tab') {
        e.classList.add('tab')
    } else if (e.innerHTML === 'Tab') {
        e.classList.add('tab')
    } else if (e.innerHTML === 'CapsLock') {
        e.classList.add('capslock')
    } else if (e.innerHTML === 'Enter') {
        e.classList.add('enter')
    } else if (e.innerHTML === 'Shift') {
        e.classList.add('shift')
    } else if (e.innerHTML === 'Space') {
        e.classList.add('space')
    }
});


/////////////////////
let toUp = 0;
function upperCase() {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].innerHTML != 'Alt'
            && keys[i].innerHTML != 'Control'
            && keys[i].innerHTML != 'Shift'
            && keys[i].innerHTML != ' '
            && keys[i].innerHTML != 'Backspace'
            && keys[i].innerHTML != 'Enter'
            && keys[i].innerHTML != 'Del'
            && keys[i].innerHTML != 'CapsLock'
            && keys[i].innerHTML != 'Win'
            && keys[i].innerHTML != 'Space'
            && keys[i].innerHTML != 'Tab') {
            keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
            toUp = 1;

        }
    }
}
function lowerCase() {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].innerHTML != 'Alt'
            && keys[i].innerHTML != 'Control'
            && keys[i].innerHTML != 'Shift'
            && keys[i].innerHTML != ' '
            && keys[i].innerHTML != 'Backspace'
            && keys[i].innerHTML != 'Enter'
            && keys[i].innerHTML != 'Del'
            && keys[i].innerHTML != 'CapsLock'
            && keys[i].innerHTML != 'Win'
            && keys[i].innerHTML != 'Space'
            && keys[i].innerHTML != 'Tab') {
            keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
            toUp = 0;

        }
    }
}

document.body.addEventListener('keydown', function (e) {
    if (e.key == ' ') {
        entry_field.value += " ";
        keys[59].classList.add('active');
    } else if (e.key == 'Shift') {
        keys[42].classList.add('active');
        upperCase();
    } else if (e.key == 'CapsLock') {
        keys[29].classList.toggle('active');
        if (toUp === 1) {
            lowerCase();
        } else {

            upperCase();
        }
    } else if (e.key == 'Backspace') {
        entry_field.value = entry_field.value.substring(0, entry_field.value.length - 1);
        keys[13].classList.add('active');
    } else if (e.key == 'Enter') {
        entry_field.value += "\n";
        keys[41].classList.toggle('active');
    }
    for (let i = 0; i < keys.length; i++) {

        if (e.key == 'Alt') {
            entry_field.focus();
        } else if (e.key == keys[i].innerHTML
            && e.key != 'Alt'
            && e.key != 'Control'
            && e.key != 'Shift'
            && e.key != ' '
            && e.key != 'Backspace'
            && e.key != 'Enter'
            && e.key != 'CapsLock'
            && e.key != 'Tab') {
            keys[i].classList.add('active');
            entry_field.value += e.key;
        }

    }
    if (e.shiftKey && e.altKey) {
        language_btn.classList.toggle('language-on');
        if (a === 0) {
            a = 1
        } else {
            a = 0
        }
        changeLang();
    }

})
function changeLang() {
    rows.forEach((e, index) => {
        e.childNodes.forEach((k, i) => k.innerHTML = key[a][index][i]);
    })
}
document.body.addEventListener('keyup', function (e) {
    if (e.key != 'CapsLock') {
        for (let i = 0; i < keys.length; i++) {
            keys[i].classList.remove('active');
        }
    } else {
        console.log(e.key)
    }
    if (e.key == 'Shift') {
        lowerCase()
    }

})
keys.forEach((e) => {
    e.addEventListener('mousedown', function () {
        this.classList.add('active');
        if (this.innerHTML == 'Space') {
            entry_field.value += " ";
        } else if (this.innerHTML == 'Alt' || this.innerHTML == 'Control') {
            entry_field.focus();
        } else if (this.innerHTML == 'Shift') {
            upperCase();
        } else if (this.innerHTML == 'Del') {
            entry_field.value = "";
        } else if (this.innerHTML == 'CapsLock') {
            if (toUp === 1) {
                lowerCase();
                this.classList.remove('active');
            }else{
                upperCase();
            }
        } else if (this.innerHTML == 'Backspace') {
            entry_field.value = entry_field.value.substring(0, entry_field.value.length - 1);
        } else if (this.innerHTML == 'Enter') {
            entry_field.value += "\n";
        }else if(this.innerHTML == 'Tab'){

        }
        else {
            entry_field.value += this.innerHTML
        }

    });
    e.addEventListener('mouseup', function () {
        if(this.innerHTML!='CapsLock'){
            this.classList.remove('active');/////////////////поменять
        }
        
        if (this.innerHTML == 'Shift') {
            lowerCase();
        }
    });
})

console.log('Чтобы все работало нужно что бы язык на копме совподал с выстовленным в keybord');

if (!localStorage.getItem('number')) localStorage.setItem('number', toUp);
else toUp = localStorage.getItem('number');


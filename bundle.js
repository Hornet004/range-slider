(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const rangeSlider = require('..')

const range = rangeSlider()

document.body.append(range)
},{"..":2}],2:[function(require,module,exports){
module.exports = rangeSlider

function get_theme() {
    return`
    .range_class{
        width: 100%;
    }
    .date_class{
        padding: 12px;
        width: 48%;
        background-color: #eaecff;
        height: 4vh;
        border-radius: 4px;
        border: none;
    }
    .date_class:hover{
        background-color: #65abfd;  
    }
    `
}

function rangeSlider() {
    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})

    const style = document.createElement('style')
    style.textContent = get_theme()

    const input = document.createElement('input')
    input.classList =('range_class')
    input.type = 'range' 

    const picker = document.createElement('input')
    picker.classList =('date_class')
    picker.type = 'date'

    shadow.append(input, style, picker)

    return el
}
},{}]},{},[1]);

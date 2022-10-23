(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const rangeSlider = require('..')

const range = rangeSlider()

document.body.append(range)
},{"..":2}],2:[function(require,module,exports){
module.exports = rangeSlider

function get_theme() {
    return`
    :host(.container){
        background: red;
    }
    .range_class{
        width: 100%;
    }
    `
}

function rangeSlider() {
    const el = document.createElement('div')
    el.classList.add('container')
    const shadow = el.attachShadow({mode: 'closed'})

    // Initialize the style  and get the style theme    
    const style = document.createElement('style')
    style.textContent = get_theme()

    // Input component is created beneath this line
    const input = document.createElement('input')
    input.type = 'range' 
    input.classList.add('range_class')
    

   

    shadow.append(input, style)

    return el
}
},{}]},{},[1]);

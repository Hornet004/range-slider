(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const rangeSlider = require('..')

const range = rangeSlider()
document.body.innerHTML = `<h1>Range Slider</h1>`

const main = document.createElement('div')
main.classList.add('demo')

const style = document.createElement('style')
style.textContent = `
.demo{
    border: 2px solid red;
    padding: 20px;
}

`
main.append(range)
  
document.body.append(main, style)
},{"..":2}],2:[function(require,module,exports){
module.exports = rangeSlider

function get_theme () {
  return `
  :host { box-sizing: border-box; }
  *, *:before, *:after { box-sizing: inherit; }

  :host {
    --white       : hsla(0,0%,100%,1);
    --transparent : hsla(0,0%,0%,0);
    --grey        : hsla(0,0%,90%,1);
    --blue       : hsla(207, 88%, 66%, 1);
    position: relative;
    width: 100%;
    height: 16px;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-appearance: none;
    margin: 0;
    z-index: 2;
    background-color: var(--transparent);
  }
    `
}

function rangeSlider () {
  const style = document.createElement('style')
  style.textContent = get_theme()

  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })

  const slider = document.createElement('input')
  slider.type = ('range')

  const bar = document.createElement('div')
  bar.classList.add('bar')

  const ruler = document.createElement('div')
  bar.classList.add('ruler')

  const fill = document.createElement('div')
  bar.classList.add('fill')

  bar.append(ruler, fill)

  


  shadow.append(slider, style, bar)

  return el
}

},{}]},{},[1]);

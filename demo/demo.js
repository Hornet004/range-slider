const rangeSlider = require('range-slider-david_ui')

const range = rangeSlider({min:0, max: 10})

document.body.innerHTML = (`<h1>Range Slider</h1>`)

const main = document.createElement('div')
main.classList.add('main')
main.append(range)

const style = document.createElement('style')
style.textContent = `
.main{
    // border: 2px solid red;
    padding: 24px;
}


`

document.body.append(main, style)
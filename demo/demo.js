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
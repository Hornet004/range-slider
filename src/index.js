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

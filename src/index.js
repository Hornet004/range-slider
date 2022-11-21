module.exports = rangeSlider

var id = 0
function rangeSlider(opts, protocol) {
  const {min = 0, max = 1000} = opts

    const name = `range-slider-${id++}`  
    const notify = protocol({from: name}, listen)

    function listen(message){
      const {type, data} = message
      if (type === 'update') {
        slider.value = data

        fill.style.width = `${(data/max)*100}%`
      }
    }

    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})

    const slider = document.createElement('input')
    slider.type = 'range'
    slider.max = max
    slider.min = min
    slider.value = min

    slider.oninput = (e) => handle_input(e)

    //
    const bar = document.createElement('div')
    bar.classList.add('bar')
    


    const ruler = document.createElement('div')
    ruler.classList.add('ruler')

    const fill = document.createElement('div')
    fill.classList.add('fill')


    //stylesheet
    const style = document.createElement('style')
    style.textContent = get_theme()

    bar.append(ruler, fill)
    shadow.append(slider, style, bar)

    return el

    //handler
    function handle_input(e) {
      const val = Number(e.target.value)
      fill.style.width = `${(val/max)*100}%`
      console.log(val)
      notify({from: name,type: 'update', data: val})
    }


}

function get_theme() {
  return`
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
    outline:none;
    background-color: var(--transparent);
  }
  .bar {
    position: absolute;
    top: 3px;
    left: 0;
    z-index: 0;
    height: 10px;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    background-color: var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .ruler {
    position: absolute;
    height: 6px;
    width: 100%;
    transform: scale(-1, 1);
    // background-size: 20px 8px;
    background-image:  repeating-linear-gradient(to right,
      var(--grey) 0px,
      var(--grey) 17px,
      hsl(203deg 39% 56%) 17px,
      hsl(0deg 0% 90%) 20px
    );
  }

  .fill {
    position: absolute;
    height: 100%;
    width: 0%;
    background-color: var(--blue);
  }
  input:focus + .bar .fill,
  input:focus-within + .bar .fill,
  input:active + .bar .fill {
    background-color: var(--blue);
  }
  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--white);
    border: 1px solid var(--grey);
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .4);
    transition: background-color .3s, box-shadow .15s linear;
  }
  input::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 14px rgba(94, 176, 245, .8);
  }
  input::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--white);
    border: 1px solid var(--grey);
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .4);
    transition: background-color .3s, box-shadow .15s linear;
  }
  input::-moz-range-thumb:hover {
    box-shadow: 0 0 0 14px rgba(94, 176, 245, .8);
  }
  
  
  `
}
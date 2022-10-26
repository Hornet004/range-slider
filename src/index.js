module.exports = rangeSlider

function get_theme(){
    return`
    :host{
        background: red;
    }
    input{
        width: 100%;
    }
    `

}

function rangeSlider(){
    
    const style = document.createElement('style')
    style.textContent = get_theme()

    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})

    const slider = document.createElement('input')
    slider.type = ('range')

    shadow.append(slider, style)

    return el


}
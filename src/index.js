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
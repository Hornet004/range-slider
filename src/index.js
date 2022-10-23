module.exports = rangeSlider

function get_theme() {
    return`
    .range_class{
        width: 100%;
    }
    `
}

function rangeSlider() {
    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})

    // Initialize the style  and get the style theme
    const style = document.createElement('style')
    style.textContent = get_theme()

    // Input component is created beneath this line
    const input = document.createElement('input')
    input.classList =('range_class')
    input.type = 'range' 

   

    shadow.append(input, style)

    return el
}
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
import updateTime from '../API_KEY_FILES'

// Filter Country
const time = () => {
    const times = document.querySelectorAll('.box')
    return Array.from(times)
}

time()

const filters = {
    searchText: ''
}

const renderTime = ((times, filters) => {
    let find = false

    times.forEach((time) => {
        const heading = time.querySelector('.h2')

        if (heading.textContent.toLowerCase().startsWith(filters.searchText.toLowerCase()) && heading.textContent.toLowerCase().includes(filters.searchText.toLowerCase())) {
            time.style.display = 'block'
            find = true
        }
        else {
            time.style.display = 'none'
        }
    })

    const message = document.querySelector('.message')
    if (!find) {
        message.textContent = 'Nothing found'
    }
    else {
        message.textContent = ''
    }
})

renderTime(time(), filters)


// Input Button

const inputString = document.querySelector('input')
const clear = document.querySelector('.clear-button')

// Function to toggle clear button visibility
const toggleButton = () => {
    if (inputString.value.trim() !== '') {
        clear.style.display = 'inline-block'
    } else {
        clear.style.display = 'none'
    }
}

// Input event listener to show/hide clear button and update filters
inputString.addEventListener('input', () => {
    filters.searchText = inputString.value
    renderTime(time(), filters)
    toggleButton()
});

// When delete button is press
clear.addEventListener('click', (e) => {
    inputString.value = ''
    filters.searchText = ''
    renderTime(time(), filters)
    toggleButton()
})

toggleButton();

// Input 

document.querySelector('input').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTime(time(), filters)
})

// Sort by Alphabetically

const sort = (() => {
    const container = document.querySelector('.container')
    const boxes = Array.from(document.querySelectorAll('.box'))

    boxes.sort((a, b) => {
        const A = a.querySelector('.h2').textContent
        const B = b.querySelector('.h2').textContent
        return A.localeCompare(B)
    })

    boxes.forEach((box) => {
        container.appendChild(box)
    })
})

sort()

// Hamburger

const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const h1 = document.querySelector(".h1");
const input = document.querySelector(".input");

document.querySelector(".hamburger").addEventListener("click", () => {
    header.classList.toggle("show")
    logo.classList.toggle("show")
    h1.classList.toggle("show")
    input.classList.toggle("show")
})

setInterval(updateTime, 1000)
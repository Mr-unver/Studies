const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')
const heading2 = document.querySelector('h2')
const h2list = document.querySelectorAll('h2')
const heading3 = h2list[h2list.length - 1]

setTimeout ( () =>{ 
    addStylesTo(heading, 'JavaScript')
}, 1500)

// setTimeout ( () =>{ 
//     addStylesTo(heading3.querySelector('a'), 'Практикуйся', 'yellow', '2rem')
// }, 3000)

// setTimeout ( () =>{ 
//     addStylesTo(heading3.children[0], 'Практикуйся', 'yellow', '2rem')
// }, 3000)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})

setTimeout ( () =>{ 
    addStylesTo(link, 'Практикуйся', 'yellow', '2rem')
}, 3000)

setTimeout ( () =>{ 
    addStylesTo(heading2, 'И всё получится', 'blue', '5rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'

    // falsy : '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff' 
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor ='#000'
    }
}

// heading2.ondblclick

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'blue') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff' 
    } else {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor ='#000'
    } 
})







// const heading = document.getElementById('hello')
// // const heading2 = document.getElementsByTagName('h2')
// // const heading2 = document.getElementsByTagName('h2')[0]
// // const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class') // Всегда возвращает 1 элемент

// console.log(heading2);

// // const heading3 = heading2.nextElementSibling
// // console.log(heading3);
// const h2list = document.querySelectorAll('h2')
// console.log(h2list);

// setTimeout ( () =>{ 
//     addStylesTo(heading)
// }, 1500 )

// setTimeout ( () =>{ 
//     addStylesTo(heading2)
// }, 1500 )

// function addStylesTo(node, text) {
//     heading.textContent = 'Changed from JavaScript!'
//     heading.style.color = 'red'
//     heading.style.textAlign = 'center'
//     heading.style.backgroundColor = 'black'
//     heading.style.padding = '2rem'
// }



// const heading = document.getElementById('hello')
// // const heading2 = document.getElementsByTagName('h2')[0]
// // const heading2 = document.getElementsByClassName('h2-class')[0]
// // const heading2 = document.querySelector('.h2-class')
// // const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
// const heading2 = document.querySelector('h2')

// console.dir(heading2);

// const heading3 = heading2.nextElementSibling
// const h2List = document.querySelectorAll('h2')



// setTimeout ( () =>{
//     heading.textContent = 'Changed from JavaScript!'
//     heading.style.color = 'red'
//     heading.style.textAlign = 'center'
//     heading.style.backgroundColor = 'black'
//     heading.style.padding = '2rem'
// }, 1500)

// const heading = document.getElementById('hello')

// setTimeout ( () =>{ 
//     addStylesTo(heading)
// }, 1500 )

// function addStylesTo(node) {
//     heading.textContent = 'Changed from JavaScript!'
//     heading.style.color = 'red'
//     heading.style.textAlign = 'center'
//     heading.style.backgroundColor = 'black'
//     heading.style.padding = '2rem'
// }
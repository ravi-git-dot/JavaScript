// selecting popboxs, overlay button

let btn = document.querySelector('.add-button');
let pop =document.getElementById('pop-contain')
let overbox =document.getElementById('overlay-boxs')

btn.addEventListener('click',(event)=>{
    pop.style.display= 'block';
    overbox.style.display='block';
})

//selection cancel button

let cancel =document.getElementById('cancel-book');


cancel.addEventListener('click',(event)=>{
    event.preventDefault();
    pop.style.display= 'none';
    overbox.style.display ='none';
})

//seletion addbook, title-input, author-input, book-detail-input, bookcontainer

let contain =document.querySelector('.bookcontainer');
let title =document.getElementById('title-input');
let author =document.getElementById('author-input');
let detail =document.getElementById('book-details-input');
let add =document.getElementById('add-bookagain');

add.addEventListener('click',(event)=>{
    event.preventDefault()
    let div =document.createElement('div')
    div.setAttribute('class','books')
    div.innerHTML =`<h2>${title.value}</h2>
            <h5>${author.value}</h5>
            <p>${detail.value}</p>
            <button class=" btn-clear" onclick="erase(event)">Delete</button> `
    contain.append(div)
    pop.style.display= 'none';
    overbox.style.display ='none';
})

function erase(event){
     event.target.parentElement.remove();
}
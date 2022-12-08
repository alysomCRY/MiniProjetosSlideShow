'user strict'       

const images = [
    {'id' : '1', 'url':'./imgs/r32.jpg'},
    {'id' : '2', 'url':'./imgs/r33.jpg'},
    {'id' : '3', 'url':'./imgs/r34.jpg'},
    {'id' : '4', 'url':'./imgs/r35.jpeg'},
    {'id' : '5', 'url':'./imgs/rx7.jpg'},
    {'id' : '6', 'url':'./imgs/350.jpg'},
]

const containerItens = document.querySelector(".container-itens")

const loadImages = (images, containerItens) => {
    images.forEach (image => {
        containerItens.innerHTML += `
            <div class="item">
                <img src="${image.url}">
            </div>    
        `
    })
}
loadImages(images, containerItens);

let itens = document.querySelectorAll(".item");

const previous = () => {
    containerItens.appendChild(itens[0]);
    itens = document.querySelectorAll(".item");
}
const next = () => {
    const lastItem = itens[itens.length - 1]
    containerItens.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll(".item");
}
document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);
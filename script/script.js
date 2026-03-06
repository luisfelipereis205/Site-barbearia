const menuBtn = document.querySelector("#menu-btn")
const nav = document.querySelector("#nav")

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active")
})


// GALERIA

const imagens = document.querySelectorAll(".img-normal")
const lightbox = document.querySelector(".lightbox")
const lightboxImg = document.querySelector(".lightbox-img")

imagens.forEach(img => { // forEach percorre cada imagem da lista.
    img.addEventListener("click", () =>{
        lightbox.classList.add("active") //Isso adiciona uma classe CSS, no caso ele adiciona o "active".
        lightboxImg.src = img.src
    })
})
lightbox.addEventListener("click", () => { //quando clicar no fundo da lightbox, ela fecha.
    lightbox.classList.remove("active")
})
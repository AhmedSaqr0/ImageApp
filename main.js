let input = document.querySelector(".search-input");
let btn = document.querySelector(".btn")
let imageContainer = document.querySelector(".image-container")
let form = document.querySelector(".search-image")
let showMore = document.querySelector(".show-more")
let arrowToUp = document.querySelector(".up-arrow")
let preloader = document.querySelector(".preloader")


let accessKey = "x-X1f5V6nDLAG2b2bgMfgyMZOVU9G_WglFxSdyzccW8"
let page = 1;


async function imageData() {

    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${input.value}&per_page=12&client_id=${accessKey}`

    let response = await fetch(url);
    let data = await response.json()
    let results = data.results;

    

    results.forEach(result => {
        let imageDiv = document.createElement("div")
    imageDiv.className = "image";

    let imageLink = document.createElement("a")
    imageLink.href = result.links.html
    imageLink.target = "_blank"

    let image = document.createElement("img")
    image.src = result.urls.small


        imageDiv.appendChild(imageLink)
        imageLink.appendChild(image)
        imageContainer.appendChild(imageDiv)
    });




}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    // page = 1;
    imageContainer.innerHTML = "";
    imageData()
    setTimeout(function(){
        showMore.style.display = "block"
    },2000)
    
    
})

showMore.onclick = function(){
    page++
    imageData()
}

window.onscroll = function(){
    if(window.scrollY >= 600){
        arrowToUp.style.display = "flex"
    }else {
        arrowToUp.style.display = "none"
    }
}
arrowToUp.onclick = function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
}

window.addEventListener("load" , function(){
preloader.style.display = "none"
})


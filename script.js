const body = document.querySelector("body")
const head = document.querySelector("span")
const btn = document.querySelector("button")

btn.addEventListener("click",function(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
    head.innerText =`Background Color :${color}`;
})
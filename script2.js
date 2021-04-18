const grandparent = document.querySelector(".grandparent")
const  parents = document.querySelector(".parents")
const child = document.querySelector(".child")

grandparent.addEventListener('click', e => {
    console.log(e.target)
     var e = "";
    console.log(e += "hi vienna" + " how are ya ??");
   
})
child.addEventListener('click', e => {
    e.target.style.background = "white"
}
)
grandparent.addEventListener('click', e => {
    e.target.style.width = "700px";
    e.target.style.background="yellow"
})


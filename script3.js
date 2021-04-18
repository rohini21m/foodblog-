const nandu = document.querySelector(".nandu")
const chandu = document.querySelector(".chandu")
const chintu = document.querySelector(".chintu")


nandu.addEventListener('click', e => {
   
    console.log("nandu capture");
},
    {capture: true}
)
nandu.addEventListener('click', e => {
    console.log("nandu bubble");
},
)
chandu.addEventListener('click', e =>{
    console.log("chandu capture");
    e.stopPropagation()
},
    {capture: true}
)
chandu.addEventListener('click', e => {
    console.log("chandu bubble");
 
})
chintu.addEventListener('click', e => {
    console.log("chintu capture");
},
    {capture: true}
)
chintu.addEventListener('click', e => {
    console.log("chintu bubble");
},
)



const newDiv = document.createElement("div")
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "brown"
newDiv.style.position = "absolute"

document.body.append(newDiv)



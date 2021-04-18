

    var his = document.getElementById("jar");
var hers = document.getElementById("jug");
    hers.style.color = "black";
    his.style.color = "black";
function changeColor()
{
   {
        his.style.color = his.style.color == "black" ? "blue" : "green" ; 
        
        hers.style.color =  hers.style.color == "black" ? "green" : "red" ;
    
   }
}

window.setTimeout(changeColor,1000);

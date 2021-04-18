
    var apples = {
        "car": {
            "inside": {
                "fruits box": "Guvva",
                "vegatables": "carrots"
            },

            "outside": {
                "ships": "cruise"
            }
        }
    };
    var fruitsBoxContents = apples.car.inside["fruits box"];
    console.log(fruitsBoxContents);
    console.log(apples);
// accesing and deleting ,adding nested arrays 

var Albums = {

    "1990": {
        "artist": "MJ",
        "song": "billie Jean",
        "record": "1000000"
          
    },
    "1995": {
        "artist": "GAGA",
        "song": "STAR",
        "record": "2000000"
    },
    "2000": {
        "artist": "Ellish",
        "song": "No time to die"
        
    }
};
var Albums = JSON.parse(JSON.stringify(Albums));

function updateAlbums(id,prop,value) {
    
    if (value === "") {
        delete Albums[id][prop];
    }
    else if (prop === "song") {
        Albums[id][prop] = Albums[id][prop] || [];
        
        Albums[id][prop].push(value);
        
    }
    else {
        Albums[id][prop]= value;   
    }
    return Albums;
}
console.log(updateAlbums("2000", "record", "5000000"));
console.log(updateAlbums("1995", "status", "2 gold"));







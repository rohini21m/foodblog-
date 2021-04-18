function Mine(Arr){
    var product = 1;

    for (i = 0; i <Arr.length; i++){
        for (j = 0; j <Arr[i].length; j++){
            product*= Arr[i][j];
        }
    }
    return product;
}
var product = Mine([[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]);
console.log(product);

// profileLookUp.

var Clients = [
     
    {
        'Name': 'LillySingh',
        'Country': 'America',
        'Race' : 'Indian-American',
        'Sex' : 'Female',
        'Occupation' : 'YouTuber',
    },
    {
        'Name': 'Yaswanth',
        'Country': 'India',
        'Race' : 'Indian',
        'Sex' : 'male',
        'Occupation': 'Software - Engineer',
        
    },
    {
        'Name': 'Chandu',
        'Country': 'America',
        'Race': 'Indian',
        'Sex': 'Female',
        'Occupation': 'Grdauate',
    },

]
function LookUpProfile(name, prop) {
    for (i = 0; i < Clients.length; i++) {                       
        if (Clients[i].Name === name) {                                                           
            return (Clients[i][prop] || "no Such property");     
        } 
     
        }
    return "SORRY NO SUCH CLIENT";
}
var List = LookUpProfile("LillySingh", "Country");
console.log(List);
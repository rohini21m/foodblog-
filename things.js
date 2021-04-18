



//this demonstrates using objects,properties ,deleting of properties .

var ukraine = {
    'country': 'russia',
    'army': 'strongest',
    'language': 'russian',
}
ukraine['people'] = 'angry!';
console.log(ukraine);
delete ukraine.army;

 //ukraine,Candy are called objects.

function lookCandy(val) {
    var result = "";
    
    var Candy = {
        'country': 'russia',
        'army': 'strongest',
        'language': 'russian',
        'people': 'up-tight',
    };

   
    var result = Candy[val];
    return result;
}
console.log(lookCandy('language'));

//tetsing properties for objects

 


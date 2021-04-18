// ARRAY ITERATIONS : forEach(),map,filter,reduce,some,find, findIndex.

var  lists = [
    {id: "actor one", Name: "Mathew Mcaunahey",female : "false",TotalMovies: 30, Hits: 35,collection:2000000,Language: "English"},
    { id: "actor two", Name: "Sandra Bullock",female: "true",TotalMovies: 45,Hits: 28,collection:5000000, Language: "English"},

    {id: "actor three",Name: "Jake Gyllenhaal",female : "false",TotalMovies: 55,Hits: 20,collection: 6500000,Language: "English"},
    {id: "actor four",Name: "Irphan khan",female : "false",TotalMovies: 32,Hits: 15,collection: 3100000,Language: "hindi"},

    {id: "actor five",Name: "Meryl steep",female : "true",TotalMovies: 75,Hits: 35,collection: 1000000,Language: "English"}
];
for loop example. 
for (v = 0; v < lists.length; v++){
 console.log(lists[v]);
}

 forEach example
/lists.forEach(function(actor){
console.log(actor.Name);
})
const dance = lists.filter(list => list.Hits < 20);
console.log(dance);
const sing = lists.filter(list => list.female === "true");
console.log(sing);
const salsa = lists.filter(list => list.Name === "Jake Gyllenhaal");
console.log(salsa);

const jump = lists.filter(list => list.collection >= 1000000 && list.collection <= 3100000);
console.log(jump);
const ship = lists.map(function (id) {
 return "photo";

});
console.log(ship);
const voo = lists.map(list =>list.Hits * 2);
console.log(voo);
const film = lists.sort((a, b) => (a.Hits < b.Hits ? 1 :
   -1));

console.log(film);
const action = lists.sort((a, b) => (a.collection >b.collection ? 1 : -1));
console.log(action);

const jug = lists.reduce((total, Hits) => total + Hits, 0);
console.log(jug);

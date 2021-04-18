console.log("entering space");
setTimeout(() => {
    console.log("welcome to space");
}, 2000);
console.log("back to earth");
console.log("lets go");
function hiking(name, age, number,callback) {
    setTimeout(() => {
        console.log("here is the candidate");
        callback({
            runnerName: name,
            runnerAge: age,
        RunnerPhone: number })
    }, 2000);
}
const candidate = hiking("chandu", 23, 3373022902, candidate => {
    console.log(candidate);
}
);
console.log("im done");

/// promises in async javascript 

const fr = new Promise(resolve => {
    setTimeout(() => {
        console.log("youtube data");
        resolve({ prajakta: ["funny videos"] });
    }, 1000);
});
const gt = new Promise(resolve => {
    setTimeout(() => {
        console.log("instagram data");
        resolve({ cookingPage: ["sadia"] });
    }, 4000);
});


Promise.all([fr, gt]).then(result => console.log(result));
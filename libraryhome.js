var score = [12, 17, 35, 90];
function checkScore(arr, fn) {
    newArr = [];
    for (i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}
function PassOrFail(score ) {
    return score >= 30;
}

console.log(checkScore(score, PassOrFail));



function result(score) {
    if (score === 35) {
        return function (name) {
            console.log(name, '' + 'you just passed');
        }
    } else if (score >= 35) {
        return function (name) {
            console.log(name,  '' + 'you scored well');
        }
    } else (score < 35)
    {
        return function (name) {
            console.log(name, ''+ 'you failed');
        }
    }
}

result(37)('maya');
var finals = result(55);
finals('khai');
var final = result(12);
final('robert');

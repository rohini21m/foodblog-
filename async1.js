const posts = [{ title: 'Post1', body: 'this is post one' },
    { title: 'Post2', body: 'this is post two' }];
    
function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
       document.body.innerHTML = output;
        
}, 1000);
    }

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 1000);
}


createPost({ title: 'post3', body: "this is post three" }, getPosts);


const letters = [{ title: 'letter1', body: 'this is letter one' },
    { title: 'letter2', body: 'this is letter two' }];
    
function getLetter() {
    setTimeout(() => {
        let output = "";
        letters.forEach((letter) => {
            output += `<li>${letter.title}</li>`;
        });
       document.body.innerHTML = output;
        
}, 1000);
    }
function createLetter(letter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            letters.push(letter);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("its wrong");
            }
        }, 2000);
    });
}
createLetter({ title : 'letter4', body : "this is letter four" }).then(getLetter);
const promise1 = Promise.resolve("im back darling");
const promise2 = Promise.resolve("excuse me? who the hell are u ?");

Promise.all([promise1, promise2]).then(values => console.log(values))
 

async function init() {
    await createLetter({ title: "letter5", body: "hey im here" });

getLetter();
}
init();





var letter = [];
var word = 'car';
var rword = "";
for (i = 0; i < word.length; i++){
    letter.push(word[i]);
}
for (i = 0; i < word.length; i++){
    rword += letter.pop();
}
if (word === rword) {
    console.log(word + ' is a plaindrome');
}
else
{
    console.log(word + '  is  not a plaindrome');
    }

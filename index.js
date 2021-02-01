/* Code your solutions in this file
    4 statements make up loop -  
    for ([initialization]; [condition]; [iteration]) {
    [loop body]
 } */

 
 function writeCards(name, event) {
    const cards = []
    for (let i = 0; i < name.length; i++ ) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
}

function countDown(num) {
    while (num > 0 ) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
}

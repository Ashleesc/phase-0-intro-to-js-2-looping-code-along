// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


// let names = ["Ashlee", "Todd", "LaRene", "Dana"]

// function writeCards(names, party) {
//     for (let i= 0; i < names.length; i++) {
//         return (`Happy Holidays, ${names[i]}, thanks for coming to my ${party}`)
//     }
//     return writeCards(names, party)
// }

function writeCards(names,party) {
    for (let i=0; i < names.length; i++){
        writeCards.push(`Thank you, ${names[i]} for coming to my holiday ${party}`)
    }
    return writeCards
}
   
let countup = 0
while (countup < 0) {
    console.log(countup++)
}
    
for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
}
// these two are the same and achieve the same thing

function countDown (start) {
while (start > 0) {
    console.log(start--)
}
console.log(start)
}


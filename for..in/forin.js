const testscores = {
    dhoni : 100,
    sehwag : 88,
    sachin : 89,
    yuvraj : 69,
    gambir : 99,
    kohli : 100,
    rohit : 45,
    hardhik : 60,
    rahul : 9,
    chahal : 150
}

let total = 0;
let scores = Object.values(testScores);
for(let score of scores)
{
    total += score;
}
console.log(total / scores.length) 
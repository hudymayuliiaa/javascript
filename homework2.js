function pow(x, y) {

let result = 1;
let i = 0;

if (y===0) {
    return 1;
}
do {
    result *= x;
    i++;
}
while (i < y);
return result
}


console.log(pow(2,5));
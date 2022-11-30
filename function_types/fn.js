const isEven = function(num)
{ //regular fn expression
    return num%2 === 0;
}

const isEven1 = (num) =>
{ //arrow fn with parens around parameters
    return num%2 === 0;
}

const isEven2 = num =>
{ //no parens around paramn
    return num%2 === 0;
}

const isEven3 = num => (num%2 === 0); //implicit return

const isEven4 = num => num%2 === 0;//one letter implicit return 
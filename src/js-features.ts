const addingNumber = (...args: number[]) => {
    let res:number = 0;
    for(const i of args)
        res+= i;
    return res;
}

const sum:number = addingNumber(1,2,3,323, 565);
console.log(sum);

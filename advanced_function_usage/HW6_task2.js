function printNum(num) {
    console.log(num);
    if (num > 0) {
        printNum(num - 1);
    } else {
        return num;
    }    
}

printNum(7);
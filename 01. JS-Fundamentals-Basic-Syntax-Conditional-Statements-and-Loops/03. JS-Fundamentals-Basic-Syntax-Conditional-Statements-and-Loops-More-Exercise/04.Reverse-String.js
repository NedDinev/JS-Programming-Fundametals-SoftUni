function reverseString(input) {
    let newString = "";

    for (let i = input.length - 1; i >= 0; i--) {
        newString+=input[i];
        
    }
    console.log(newString);
}
reverseString("hello");
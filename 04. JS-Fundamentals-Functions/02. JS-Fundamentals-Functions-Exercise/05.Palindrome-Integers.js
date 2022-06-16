function palindrom(input) {
  let index = 0;
  let isPalindrome = false;

  while (index != input.length) {
    let normalNum = String(input[index]);
    let reversedNum = String(input[index]).split("").reverse().join("");
    /*.split("") converts string to array, the .reverse() method reverse
     the new created array, .join("") converts the array back to string*/

    if (reversedNum == normalNum) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }

    console.log(isPalindrome);
    index++;
  }
}
palindrom([123, 323, 421, 121]);

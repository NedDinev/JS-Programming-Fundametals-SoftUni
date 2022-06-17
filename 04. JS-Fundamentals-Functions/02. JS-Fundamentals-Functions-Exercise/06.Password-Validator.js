function passValidator(password) {
  let letterNumber = /^[0-9a-zA-Z]+$/;
  let passLettersNumbers = false;
  let passLength = false;
  let passMinDigits = false;
  let passwordArr = [];

  if (password.match(letterNumber)) {
    passLettersNumbers = true;
  } else {
    passLettersNumbers = false;
  }

  if (password.length <= 10 && password.length >= 6) {
    passLength = true;
  } else {
    passLength = false;
  }

  for (let index = 0; index < password.length; index++) {
    let toNum = Number(password[index]);
    if (toNum >= 0 && toNum <= 9) {
      passwordArr.push(Number(password[index]));
    }
  }
  if (!passLength) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!passLettersNumbers) {
    console.log("Password must consist only of letters and digits");
  }

  if (passwordArr.length > 1) {
    passMinDigits = true;
  } else {
    console.log("Password must have at least 2 digits");
    passMinDigits = false;
  }

  if (passLettersNumbers && passLength && passMinDigits) {
    console.log("Password is valid");
  }
}

passValidator("Pa$s$");

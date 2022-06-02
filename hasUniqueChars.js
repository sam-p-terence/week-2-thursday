// Write your code below
// Javascript program for the above approach
const checkString = (str) => {
  let isUniq = true;
  
  for (let i = 0; i < str.length; i++) {
    if (str.split(str[i]).length > 2) {
      isUniq = false;
      break;
    }
  }
  return isUniq;
  };
  console.log(checkString("abcdefgh"));  // this returns true
  console.log(checkString("aa")); // this returns false
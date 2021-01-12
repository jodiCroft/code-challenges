var defangIPaddr = function (address) {
  let answer = "";

  for (let i = 0; i < address.length; i++) {
    address[i] !== "." ? (answer += address[i]) : (answer += "[.]");
  }
  return answer;
};

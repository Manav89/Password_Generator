function generatePassword() {
  const length = document.getElementById("length").valueAsNumber;
  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;
  const useCurrency = document.getElementById("currency").checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_-+=";
  const currencyChars = "€£¥₹$";

  let charset = "";
  if (useLowercase) charset += lowercaseChars;
  if (useUppercase) charset += uppercaseChars;
  if (useNumbers) charset += numberChars;
  if (useSymbols) charset += symbolChars;
  if (useCurrency) charset += currencyChars;

  if (charset.length === 0) {
    alert("Please select at least one character set.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  document.getElementById("password").innerText = password;
}

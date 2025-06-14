function generateCode() {
  const input = document.getElementById("userInput").value;
  const type = document.getElementById("codeType").value;
  const output = document.getElementById("outputCode");

  // এটি একটি ডেমো, এখানে ভবিষ্যতে AI যুক্ত করব
  let code = "";

  if (type === "html") {
    code = `<button>${input}</button>`;
  } else if (type === "css") {
    code = `button {\n  background-color: red;\n  color: white;\n}`;
  } else if (type === "python") {
    code = `print("${input}")`;
  }

  output.textContent = code;
}

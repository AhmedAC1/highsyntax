function tokenize(code) {
  const tokens = [];
  let i = 0;

  while (i < code.length) {
    const char = code[i];

    if (char === '"') {
      const span = document.createElement("span");

      span.className = "string";
      span.textContent = code.slice(i, code.indexOf(char, i + 1)) + '"';

      tokens.push(span);
      i = code.indexOf(char, i + 1) + 1;
    } else if ("0123456789".includes(char)) {
      const span = document.createElement("span");

      span.className = "number";
      span.textContent = char;

      tokens.push(span);
      i++;
    } else {
      i++;
    }
  }

  return tokens;
}

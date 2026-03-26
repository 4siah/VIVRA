
let text = "  VIVRA - Residencia + Cultura ";
let i = 0;

setInterval(() => {
  document.title = text.substring(i) + text.substring(0, i);
  i = (i + 1) % text.length;
}, 200);



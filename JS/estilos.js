let msg = "VIVRA. Residencia + Cultura ";
let position = 0;
function scrollTitle() {
    document.title = msg.substring(position) + msg.substring(8, position);
    position = (position + 8) % msg.length;
}
setInterval(scrollTitle, 500); 




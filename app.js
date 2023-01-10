function textcopy(){
    let temp = document.getElementById("clipboard").value;
    navigator.clipboard.writeText(temp);
}
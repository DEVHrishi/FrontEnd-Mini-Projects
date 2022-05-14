let textbox = document.getElementById("textbox");
var text;
textbox.addEventListener("input", function() {
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let word = text.split(" ");
    let cleanlist = word.filter(function(elm) {
        return elm != "";
    });
    console.log(cleanlist);
    document.getElementById("word").innerHTML = cleanlist.length;
});
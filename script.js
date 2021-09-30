let color = ["#C36E49","#427ED9","#A64DE1",
"#3CC6BC","#4CC51D","#150A11","#EBA7D4",
"#8CAFA5","#4C44FD"];

let i = 0;

document.querySelector("button").addEventListener("click",
    function(){
        i = i < color.length - 1 ? ++i : 0;
        document.querySelector("body").style.background = color[i];
    })

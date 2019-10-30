canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");

var tex=parseInt(canvas.width);
var tey=parseInt(canvas.height);

function to_image(){
    var canvas = document.getElementById("canvas");
    document.getElementById("theimage").src = canvas.toDataURL();
    Canvas2Image.saveAsPNG(canvas,tex,tey);
}


function createImage(){
    for(x=0;x<tex;x++){
        for(y=0;y<tey;y++){
            z=eval( document.getElementById("f").value);
            c1=z/255;
            c2=0;
            c3=0;
            fenetre.fillStyle="rgb("+c1+","+c2+","+c3+")";
            fenetre.fillRect(x,y,1,1);
        }
    }
    to_image();
}




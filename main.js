canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");

var tex=parseInt(canvas.width);
var tey=parseInt(canvas.height);

function to_image(){
    var canvas = document.getElementById("canvas");
    //document.getElementById("theimage").src = canvas.toDataURL();
    Canvas2Image.saveAsPNG(canvas,tex,tey);
}


function createImage(){
    document.getElementById("t1").innerHTML="Creation de l'image en cour...";
    alert("Création de l'image en cour...");
    for(xx=0;xx<tex;xx++){
        for(yy=0;yy<tey;yy++){
            x=xx*10.0
            y=yy*10.0
            try{
                z=eval( document.getElementById("f").value);
            }
            catch{
                z=0
            }
            c1=z/255;
            c2=0;
            c3=0;
            ctx.fillStyle="rgb("+c1+","+c2+","+c3+")";
            ctx.fillRect(xx,yy,1,1);
        }
    }
    to_image();
    document.getElementById("t1").innerHTML="L'image est finie...";
}




var canvas = new fabric.Canvas('myCanvas');
 var audio = document.getElementById("myAudio");

function newImage() {
	fabric.Image.fromURL("BirthdayImage.jpg", function(img) {
      var objeto = img;
      objeto.scaleToWidth(1300);
      objeto.scaleToHeight(800);
      objeto.set({
         top: 0 ,
         left: 0
      });

      canvas.add(objeto);

   });
	
}

function musica() {
	audio.play();
}

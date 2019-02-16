

function loaded(){
document.getElementById("slides").innerHTML+=slider_slide("Encuentre su tour ideal","Solo denos la informacion de lo que desee hacer y nosotros haremos el resto por ti","img/slide1.jpg")
document.getElementById("slides").innerHTML+=slider_slide("Tours unicos en el pais","Aqui podra encontrar tours que en ningun otro sitio podra encontrar","img/slide2.jpg")
document.getElementById("slides").innerHTML+=slider_slide("Vive","","img/slide3.jpg")
document.getElementById("slides").innerHTML+=slider_slide("Vive","","img/slide4.jpg")
var elems = document.querySelectorAll('.slider');
var instances = M.Slider.init(elems,{indicators:true});
instances[0].start();
}
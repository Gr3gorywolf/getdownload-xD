function loaded(){
var containerhotels=document.getElementById("containerhoteles");

    for(let i=0;i<data.length;i++){

        containerhotels.innerHTML+=card_normal(data[i].nombre,data[i].descripcion,data[i].precio,data[i].imagen);


    }



}
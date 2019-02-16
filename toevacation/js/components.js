function slider_slide(titulo,subtitulo,imagen){
return `
<li class="black">
<img src="${imagen}" style="opacity:0.5"> <!-- random image -->
<div class="caption center-align">
  <h3>${titulo}</h3>
  <h5 class="light grey-text text-lighten-3">${subtitulo}</h5>
</div>
</li>


`


}

function card_normal(titulo,subtitulo,subtitulo2,imagen){
return `


<div class="col s12 m6 l4 xl3">
      <div class="card   elevarable">
        <div class="card-image black " >
          <img src="${imagen}" style="height:200px;opacity:0.6">
          <span class="card-title">${titulo}</span>
        </div>
        <div class="card-content">
          <p>${subtitulo}<br>${subtitulo2}</p>
        </div>
      
      </div>
    </div>


`


}

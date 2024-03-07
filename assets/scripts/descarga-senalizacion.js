var askdownload = true

function setModalSenalizacion(card){
    var url = card.getAttribute('dataurl')
    var modal_senalizacion = document.getElementById('descarga-senalizacion-modal')
    modal_senalizacion.className = 'descarga-senalizacion-modal-on'
    var modal_senalizacion_btn = document.getElementById('descarga-senalizacion-download')
    modal_senalizacion_btn.setAttribute('href',url)

    var input_check = document.getElementById('descarga_senalizacion_download_check')
    input_check.checked = false
}

function unsetModalSenalizacion(flag){
    var modal_senalizacion = document.getElementById('descarga-senalizacion-modal')
    modal_senalizacion.className = 'descarga-senalizacion-modal-off'

    if(!askdownload&&flag){
        var contenedor_cards = document.getElementById('descarga-senalizacion-row').getElementsByClassName('descarga-senalizacion-col')
        for(var i = 0;i<contenedor_cards.length;i++){
            contenedor_cards[i].removeAttribute('onclick')
            var dataurl = contenedor_cards[i].getAttribute('dataurl')
            var card_link = contenedor_cards[i].getElementsByClassName('descarga-senalizacion-link')[0]
            card_link.setAttribute('href',dataurl)
            card_link.classList.add('descarga-senalizacion-link-active')
        }
    }
}

function askDownloadSwitch(){
    var input_check = document.getElementById('descarga_senalizacion_download_check')
    if(input_check.checked){
        askdownload = false
    }
}
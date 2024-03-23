function clickProtocoloGP(item,conten_id){
    var ul_list = document.getElementById('gp-protocolos-items').getElementsByClassName('gp-protocolos-item')
    for(var i = 0;i<ul_list.length;i++){
        ul_list[i].className = 'gp-protocolos-item'
    }
    item.classList.add('gp-protocolos-item-active')

    content_list = document.getElementById('gp-protocolos-wrap').getElementsByClassName('gp-protocolos-content')
    for(var i = 0;i<content_list.length;i++){
        content_list[i].className = 'gp-protocolos-content'
    }
    document.getElementById('gp-protocolo-content-'+conten_id).classList.add('gp-protocolos-content-active')
}
function clickAfiliacion(a){
    var i = 0;
    var tabs = document.getElementById('afiliaciones-header').getElementsByClassName('afiliaciones-header-tab')
    for(i = 0;i<tabs.length;i++){
        tabs[i].classList.remove('afiliaciones-header-tab-active')
    }
    var contents = document.getElementById('afiliaciones-body').getElementsByClassName('afiliaciones-content')
    for(i = 0;i<contents.length;i++){
        contents[i].classList.remove('afiliaciones-content-active')
    }

    document.getElementById('afiliaciones-header-tab-'+a).classList.add('afiliaciones-header-tab-active')
    document.getElementById('afiliaciones-content-'+a).classList.add('afiliaciones-content-active')
}
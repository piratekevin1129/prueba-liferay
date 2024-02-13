console.log( "ready!" );
function clickMainMenu(m){
    var menus_dropdowns = document.getElementById('main-menu-ul').getElementsByClassName('main-menu-item')
    var activo = 0
    for(i = 0;i<menus_dropdowns.length;i++){
        var current_class = menus_dropdowns[i].className
        if(current_class.indexOf('show')!=-1){
            activo = (i+1)
        }
        menus_dropdowns[i].className = 'main-menu-item main-menu-item-hidden'

        //ocultar los submenus por ahi derecho

        hideAllSubmenus('subitems-menu-'+(i+1))
    }
    var items = document.getElementById('header-main-menu').getElementsByTagName('li')
    for(i = 0;i<items.length;i++){
        items[i].className = 'header-main-menu-item'
    }

    if(activo==m){
        document.getElementById('main-menu').className = 'main-menu-hidden'
    }else{
        menus_dropdowns[m-1].className = 'main-menu-item main-menu-item-show'
        items[m-1].className = 'header-main-menu-item header-main-menu-item-active'
        document.getElementById('main-menu').className = 'main-menu-show'
    }
}

function toggleSubitems(elemento, m){
    var parent_ul_content = elemento.parentNode
    var idname = parent_ul_content.getAttribute('dropdown')
    var parent_content = document.getElementById(idname)
    var submenus = parent_content.getElementsByClassName('main-menu-subitems2')
    for(var i = 0;i<submenus.length;i++){
        submenus[i].className = 'main-menu-subitems2'
    }
    if(m!=null&&m!=undefined){
        submenus[m-1].className = 'main-menu-subitems2 main-menu-subitems2-show'
    }
}

function hideAllSubmenus(dropdown){
    var parent_content = document.getElementById(dropdown)
    if(parent_content!=null){
        var submenus = parent_content.getElementsByClassName('main-menu-subitems2')
        for(var i = 0;i<submenus.length;i++){
            submenus[i].className = 'main-menu-subitems2'
        }
    }
}
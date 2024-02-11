function clickMainMenu(m){
    var menus_dropdowns = document.getElementById('main-menu-ul').getElementsByClassName('main-menu-item')
    var activo = false
    for(i = 0;i<menus_dropdowns.length;i++){
        var current_class = menus_dropdowns[i].className
        if(current_class.indexOf('show')!=-1){
            activo = true
        }
        menus_dropdowns[i].className = 'main-menu-item main-menu-item-hidden'
    }

    if(activo){
        document.getElementById('main-menu').className = 'main-menu-hidden'
    }else{
        menus_dropdowns[m-1].className = 'main-menu-item main-menu-item-show'
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
console.log("ready Pagination!")

function clickPaginationPrev(component_name, pagination_name){
    var componente = document.getElementById(component_name)
    var active_page = componente.getAttribute('active')
    var total_page = componente.getAttribute('total')
    var object_class = componente.getAttribute('object-class')
    var active_class = componente.getAttribute('active-class')
    var object_element = componente.getElementsByClassName(object_class)[active_page-1]

    var pages = document.getElementById(pagination_name).getElementsByClassName('pagination-pages')[0].getElementsByClassName('pagination-page')
    if(active_page>1){
        pages[active_page-1].classList.remove('pagination-page-active')
        object_element.classList.remove(active_class)
        active_page--
        componente.setAttribute('active',active_page)
        var new_object_element = componente.getElementsByClassName(object_class)[active_page-1]
        new_object_element.classList.add(active_class)
        pages[active_page-1].classList.add('pagination-page-active')
    }
}

function clickPaginationNext(component_name, pagination_name){
    var componente = document.getElementById(component_name)
    var active_page = componente.getAttribute('active')
    var total_page = componente.getAttribute('total')
    var object_class = componente.getAttribute('object-class')
    var active_class = componente.getAttribute('active-class')
    var object_element = componente.getElementsByClassName(object_class)[active_page-1]

    var pages = document.getElementById(pagination_name).getElementsByClassName('pagination-pages')[0].getElementsByClassName('pagination-page')
    
    if(active_page<total_page){    
        pages[active_page-1].classList.remove('pagination-page-active')
        object_element.classList.remove(active_class)
        active_page++
        componente.setAttribute('active',active_page)
        var new_object_element = componente.getElementsByClassName(object_class)[active_page-1]
        new_object_element.classList.add(active_class)
        pages[active_page-1].classList.add('pagination-page-active')
    }
}

/********************************************************/

function clickSliderPrev(component_name, pagination_name){
    var componente = document.getElementById(component_name)
    var active_page = componente.getAttribute('active')
    var total_page = componente.getAttribute('total')
    //var active_class = componente.getAttribute('active-class')

    var pages = document.getElementById(pagination_name).getElementsByClassName('pagination-pages')[0].getElementsByClassName('pagination-page')
    if(active_page>1){
        pages[active_page-1].classList.remove('pagination-page-active')
        active_page--
        componente.setAttribute('active',active_page)
        componente.style.left = '-'+((active_page-1)*100)+'%'
        //componente.className = active_class+'-'+active_page
        pages[active_page-1].classList.add('pagination-page-active')
    }
}

function clickSliderNext(component_name, pagination_name){
    var componente = document.getElementById(component_name)
    var active_page = componente.getAttribute('active')
    var total_page = componente.getAttribute('total')
    //var active_class = componente.getAttribute('active-class')

    var pages = document.getElementById(pagination_name).getElementsByClassName('pagination-pages')[0].getElementsByClassName('pagination-page')
    if(active_page<total_page){
        pages[active_page-1].classList.remove('pagination-page-active')
        active_page++
        componente.setAttribute('active',active_page)
        componente.style.left = '-'+((active_page-1)*100)+'%'
        pages[active_page-1].classList.add('pagination-page-active')
    }
}
var btnDots = document.getElementById('btnDots');

var sidebar = document.getElementById('sidebar');
var content = document.getElementById('content');

btnDots.addEventListener('click', changeSidebarSize);

function changeSidebarSize() {
    if (sidebar.classList.contains('col-lg-1')) {
        removeClasses(sidebar, 'col-lg-1 col-md-1 col-sm-1 hiddenText');
        addClasses(sidebar, 'col-lg-2 col-md-2 col-sm-2 visibleText');
        removeClasses(content, 'col-lg-11 col-md-11 col-sm-11');
        addClasses(content, 'col-lg-10 col-md-10 col-sm-10')
    } else {
        removeClasses(sidebar, 'col-lg-2 col-md-2 col-sm-2 visibleText');
        addClasses(sidebar, 'col-lg-1 col-md-1 col-sm-1 hiddenText');
        removeClasses(content, 'col-lg-10 col-md-10 col-sm-10');
        addClasses(content, 'col-lg-11 col-md-11 col-sm-11')
    }
}

function removeClasses(element, classes) {
    var elementClasses = element.classList;
    classes = classes.split(' ');
    classes.forEach(cl => { elementClasses.remove(cl); });
}

function addClasses(element, classes) {
    var elementClasses = element.classList;
    classes = classes.split(' ');
    classes.forEach(cl => { elementClasses.add(cl); });
}
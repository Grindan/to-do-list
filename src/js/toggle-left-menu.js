let sidebar = $('#sidebar');
let content = $('#content');
let btnArrow = $('#btnArrow');

btnArrow[0].addEventListener('click', changeSidebarSize);

function changeSidebarSize() {
    if (sidebar.hasClass('col-lg-1')) {
        sidebar.removeClass('col-lg-1 col-md-1 col-sm-1 hiddenText')
                .addClass('col-lg-2 col-md-2 col-sm-2 visibleText');
        content.removeClass('col-lg-11 col-md-11 col-sm-11')
                .addClass('col-lg-10 col-md-10 col-sm-10');
        btnArrow.removeClass('btn-not-rotated').addClass('btn-rotated');
    } else {
        sidebar.removeClass('col-lg-2 col-md-2 col-sm-2 visibleText')
                .addClass('col-lg-1 col-md-1 col-sm-1 hiddenText');
        content.removeClass('col-lg-10 col-md-10 col-sm-10')
                .addClass('col-lg-11 col-md-11 col-sm-11');
        btnArrow.removeClass('btn-rotated').addClass('btn-not-rotated');
    }
};


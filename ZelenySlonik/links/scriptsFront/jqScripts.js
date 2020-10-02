$(document).ready(function(){

    /*Функция, возвращающая данные о позиции элемента */
    function dataPosition(obj){
        return $(obj).offset().top;
    };

    /*Функция, возвращабщая true/false, если позиция obj_1 больше/меньше-равно obj_2*/
    function checkPosition(obj_1, obj_2){
        return dataPosition(obj_1) > dataPosition(obj_2);
    };

    /*Замена класса*/
    function replaceClass(from, to, of){
        $(of).addClass(to).removeClass(from);
    };

    /*Появление и исчезновение автоскролла*/
    function hidingAutoscroll(obj, bool_par){
        if(bool_par){
            $(obj).fadeIn(500);
        }else{
            $(obj).fadeOut(500);
        }
    }

    /*Анимания автоскролла*/
    function scroller(obj){
        $("html, body").animate({
            scrollTop: $(obj).offset().top
        }, {
            duration: 1000,
            easing: "swing",
        });
    };

    /*-----------------------------------------------------------------------------------------------*/

    /*События scroller-body*/
    $('.scroller-body').hide();
    $('.scroller-body').click(function () {
        scroller('.title-block');
    });

    /*Событие скролла в window*/
    $(window).scroll(function () {
        hidingAutoscroll('.scroller-body', checkPosition('.topbar-block', '.about-info-block'));
    });
})
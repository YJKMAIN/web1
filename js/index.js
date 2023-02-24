$(document).ready(function () {
    
    function menuToggle(){
        var menuBtn = $('#header button');
        menuBtn.click(function(){
            $(this).toggleClass('active');
            $('.nav').toggleClass('active');
        });
    };
    
    $(document).on("click", "#header button", menuToggle);


});


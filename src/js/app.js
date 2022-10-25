$(document).ready(function() {  
    // Nav Responsive function
    $(window).resize(function() { 
        if ($(window).width() < 786) {
            $('nav ul li a:contains("Navigation")').each(function() {
                $(this).html($(this).html().split("Navigation").join(""));
            });
            $('#Secondrow .pr-5').removeClass('pr-5');
        }
    });
    if ($(window).width() < 786) {
        $('nav ul li a:contains("Navigation")').each(function() {
            $(this).html($(this).html().split("Navigation").join(""));
        });
        $('#Secondrow .pr-5').removeClass('pr-5');
    }
    // Star Onclick function
    $( ".reviews_wrap .fa-star" ).click(function() {
        $( this ).toggleClass('fa far');
    });
    // Show more function    
    var size_li = $("#cardcontent_List li").length;
    var x = 3;
    $('#cardcontent_List li:lt('+x+')').show();
    $('#cardcontent_List li:nth-child(3)').append('..');
});
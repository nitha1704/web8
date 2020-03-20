$(document).ready(function(){
    tabDataFilterActive();
});



function tabDataFilterActive() {
    $('.section1-item2 > ul > li').click(function(){
        let tab_data = $(this).attr('data-tab');

        // Tab Filter
        $(this).parents('ul').children('li').removeClass('active');
        $(this).addClass('active');

        // Data Filter
        $(this).parents('.section1-item2').find('.detail-filter > div').removeClass('active');
        //$(this).parents('.section1-item2').find('.detail-filter > div[data-detail="'+tab_data+'"]').addClass('active');
        $(this).parents('.section1-item2').find('.detail-filter > div[class="'+tab_data+'"]').addClass('active');
    });
}
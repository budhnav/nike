jQuery(document).ready(function($){
    $(document).on('click','.blue',function(){
        $(this).toggleClass('active')
        $('main').toggleClass('active');
    });
    $(document).on('click','.red',function(){
        $(this).toggleClass('active')
        $('main').toggleClass('active');
    });
    $(document).on('click','.yellow',function(){
        $(this).toggleClass('active')
        $('main').toggleClass('active');
    });

})
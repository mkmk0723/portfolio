
/*---------------ハンバーガーメニューの共通処理----------------*/
//ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の
//処理が共通なので共通化する
    function hamburger() {

        $('.hamburger').toggleClass('active');

        if($('.hamburger').hasClass('active')){
          //hamburgerにactiveクラスが存在する場合は。navi,activeクラスに追加する  
            $('#navi').addClass('active');
        }else{
         //hamburgerにactiveクラスが存在しない場合は。naviからactiveクラスに削除する     
            $('#navi').removeClass('active');
        }
    }
    
$(function(){
/*---------------ハンバーガーメニュー----------------------------*/
//ハンバーガーメニューをクリックした時
    $('.hamburger').on('click', function(){

        hamburger();
    });
　　　　//メニューのリンクをクリックした時
    $('#navi a').on('click', function(){

        hamburger();
    });

/*-----------------右からスライドでフェイドイン------------- */    
     
     var fadeIn = $('.fade-in');

    $(window).scroll(function(){

        $(fadeIn).each(function(){

            var offset = $(this).offset().top;

            var scroll = $(window).scrollTop();

            var windowHeight = $(window).height();

            if (scroll > offset - windowHeight + 150){

                $(this).addClass("scroll-in");
            }
        });
    });


});


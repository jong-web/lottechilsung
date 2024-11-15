$(function(){
    // a태그 클릭 시 브라우저 상단으로 가는 것 방지
    $("a").click(function(e){
        e.preventDefault();
    });

    // TOP버튼 눌렀을 때, 브라우저 상단으로
    $(".top_btn").click(function(){
        $("html, body").animate({scrollTop : 0});
    });

    // vh 계산식
    function vh(v) {
       var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
       return (v * h) / 100;
    }

    // 브라우저의 넓이가 1200이상 이면
    if($(window).width()>=1200){
        // 새 창을 열었을 때, 실행
        window.onload = function() {
            setTimeout(function(){
                $(".s1_slide2").addClass("load");
            }, 250);
            $(".s1_slide3").addClass("load");
            setTimeout(function(){
                $(".s1_slide2_number").addClass("load");
                $(".s1_slide3_number").addClass("load");
                $("header").addClass("load");
            }, 750);
            setTimeout(function(){
                $(".s1_slide1_bg").addClass("load");
            }, 1200);
        }

        // 새로고침 할 때, 실행
        window.addEventListener('load', function() {
            setTimeout(function(){
                $(".s1_slide2").addClass("load");
            }, 250);
            $(".s1_slide3").addClass("load");
            setTimeout(function(){
                $(".s1_slide2_number").addClass("load");
                $(".s1_slide3_number").addClass("load");
                $("header").addClass("load");
            }, 750);
            setTimeout(function(){
                $(".s1_slide1_bg").addClass("load");
            }, 1200);
        });
        // 내비게이션 마우스 이벤트
        $(".header_middle nav").mouseenter(function(){
            sw3 = 0;
            $("header").addClass("move");
            $(".logo_white").addClass("move");
            $(".logo_red").addClass("move");
            $(".header_middle nav > ul > li > a").addClass("move");
            $(".header_right_search a svg").removeClass("active2");
            $(".header_right_search a svg").addClass("move");
            $(".header_right_menu a svg").addClass("move");
            $(".header_bg").addClass("move");
            $(".search_bg").removeClass("move");
        });
        $(".header_middle nav").mouseleave(function(){
            $("header").removeClass("move");
            $(".logo_white").removeClass("move");
            $(".logo_red").removeClass("move");
            $(".header_middle nav > ul > li > a").removeClass("move");
            $(".header_right_search a svg").removeClass("move");
            $(".header_right_menu a svg").removeClass("move");
            $(".header_bg").removeClass("move");
        });

        // 헤더에서 검색아이콘 눌렀을때,
        let sw3 = 0; // 검색 아이콘을 누르지 않았을 때 0, 누르면 1
        $(".header_right_search a").click(function(){
            if(sw3 == 0) {
                sw3 = 1;
                $("header").addClass("move");
                $(".logo_white").addClass("move");
                $(".logo_red").addClass("move");
                $(".header_middle nav > ul > li > a").addClass("move");
                $(".header_right_search a svg").addClass("active2");
                $(".header_right_menu a svg").addClass("move");
                $(".header_bg").addClass("move");
                $(".search_bg").addClass("move");
            } else if(sw3 == 1) {
                sw3 = 0;
                $("header").removeClass("move");
                $(".logo_white").removeClass("move");
                $(".logo_red").removeClass("move");
                $(".header_middle nav > ul > li > a").removeClass("move");
                $(".header_right_search a svg").removeClass("active2");
                $(".header_right_menu a svg").removeClass("move");
                $(".header_bg").removeClass("move");
                $(".search_bg").removeClass("move");
            }
        });

        // 헤더에서 메뉴아이콘 눌렀을 때
        $(".header_right_menu a").click(function(){
            $(".header_menu").addClass("active");
            $("html, body").css("overflow", "hidden");
        });
        $(".header_menu_top a").click(function(){
            $(".header_menu").removeClass("active");
            $("html, body").css("overflow", "auto");
        });

        // 스크롤 시 헤더의 색상 변경 - PC
        $(window).on("scroll", function() {
            // page ui
            if($(window).scrollTop() > 0) {
                $(".top_btn").addClass("show");
            }else {
                $(".top_btn").removeClass("show");
            }
            if($(window).scrollTop() < vh(100)) {
                $("header").removeClass("active");
                $("header").removeClass("shadow");
                $(".logo_white").removeClass("active");
                $(".logo_red").removeClass("active");
                $(".header_middle nav > ul > li > a").removeClass("active");
                $(".header_right_search a svg").removeClass("active");
                $(".header_right_menu a svg").removeClass("active");
            } if($(window).scrollTop() > vh(100) && $(window).scrollTop() < (vh(100) + 3400)) {
                $("header").addClass("active");
                $("header").addClass("shadow");
                $(".logo_white").addClass("active");
                $(".logo_red").addClass("active");
                $(".header_middle nav > ul > li > a").addClass("active");
                $(".header_right_search a svg").addClass("active");
                $(".header_right_menu a svg").addClass("active");
            } if($(window).scrollTop() > (vh(100) + 3400) && $(window).scrollTop() < (vh(300) + 3400)) {
                $("header").removeClass("active");
                $("header").removeClass("shadow");
                $(".logo_white").removeClass("active");
                $(".logo_red").removeClass("active");
                $(".header_middle nav > ul > li > a").removeClass("active");
                $(".header_right_search a svg").removeClass("active");
                $(".header_right_menu a svg").removeClass("active");
            } if($(window).scrollTop() > (vh(300) + 3400)){
                $("header").addClass("active");
                $(".logo_white").addClass("active");
                $(".logo_red").addClass("active");
                $(".header_middle nav > ul > li > a").addClass("active");
                $(".header_right_search a svg").addClass("active");
                $(".header_right_menu a svg").addClass("active");
            } if($(window).scrollTop() > (vh(300) + 3400) && $(window).scrollTop() < (vh(300) + 8020)) {
                $("header").addClass("shadow");
            } if($(window).scrollTop() > (vh(300) + 8020) && $(window).scrollTop() < (vh(300) + 10070)) {
                $("header").removeClass("shadow");
            } if($(window).scrollTop() > (vh(300) + 10070)) {
                $("header").addClass("shadow");
            }
        });

        // section s1. sw가 0일때 위치 값
        let sw0 = 0;    // slide1 left, slide2 right, slide3 right
        let sw1 = 1;    // slide1 left, slide2 left, slide3 right
        let sw2 = 1;    // slide1 left, slide2 left, slide3 left
        // section s1 마우스 클릭 효과
        $(".s1_slide1_number").click(function(){        // slide1 click
            if(sw1 == 0){
                sw0 = 0;
                sw1 = 1;
                sw2 = 1;
                $(".s1_slide1").removeClass('active');      // mouseenter 이후 click을 하면 leave가 실행되지 않는다. 
                $(".s1_slide2").addClass('move');           // 그래서 mouseenter때 추가되거나 제거된 클래스를 다시 바꾼다.
                $(".s1_slide2").removeClass('active3');

                $(".s1_slide1_number").removeClass('move');
                $(".s1_slide1_bg").removeClass("move");
                $(".s1_slide2").removeClass('move');
                $(".s1_slide2_number").removeClass('move');
                $(".s1_slide2_bg").removeClass("move");
                $(".s1_slide3").removeClass('move');
                $(".s1_slide3_number").removeClass('move');
                $(".s1_slide3_bg").removeClass("move");
            }
            if(sw2 == 0){
                sw0 = 0;
                sw1 = 1;
                sw2 = 1;
                $(".s1_slide1").removeClass('active');
                $(".s1_slide2").addClass('move');
                $(".s1_slide2").removeClass('active3');
                $(".s1_slide3").addClass('move');
                $(".s1_slide3").removeClass('active2');

                $(".s1_slide1_number").removeClass('move');
                $(".s1_slide1_bg").removeClass("move");
                $(".s1_slide2").removeClass('move');
                $(".s1_slide2_number").removeClass('move');
                $(".s1_slide2_bg").removeClass("move");
                $(".s1_slide3").removeClass('move');
                $(".s1_slide3_number").removeClass('move');
                $(".s1_slide3_bg").removeClass("move");
            }
        });
        $(".s1_slide2_number").click(function(){        // slide2 click
            if(sw0 == 0){
                sw0 = 1;
                sw1 = 0;
                sw2 = 1;
                $(".s1_slide2").removeClass('active');

                $(".s1_slide1_number").addClass('move');
                $(".s1_slide1_bg").addClass("move");
                $(".s1_slide2").addClass('move');
                $(this).addClass('move');
                $(".s1_slide2_bg").addClass("move");
                $(".s1_slide3").removeClass('move');
                $(".s1_slide3_number").removeClass('move');
                $(".s1_slide3_bg").removeClass("move");
            }
            if(sw2 == 0){
                sw0 = 1;
                sw1 = 0;
                sw2 = 1;
                $(".s1_slide2").removeClass('active');
                $(".s1_slide3").removeClass('active2');

                $(".s1_slide1_number").addClass('move');
                $(".s1_slide1_bg").addClass("move");
                $(".s1_slide2").addClass('move');
                $(this).addClass('move');
                $(".s1_slide2_bg").addClass("move");
                $(".s1_slide3").removeClass('move');
                $(".s1_slide3_number").removeClass('move');
                $(".s1_slide3_bg").removeClass("move");
            }
        });
        $(".s1_slide3_number").click(function(){        // slide3 click
            sw0 = 1;
            sw1 = 1;
            sw2 = 0;
            $(".s1_slide2").removeClass('active2');
            $(".s1_slide3").removeClass('active');

            $(".s1_slide1_number").addClass('move');
            $(".s1_slide1_bg").addClass("move");
            $(".s1_slide2").addClass('move');
            $(".s1_slide2_number").removeClass('move');
            $(".s1_slide2_bg").removeClass("move");
            $(".s1_slide3").addClass('move');
            $(this).addClass('move');
            $(".s1_slide3_bg").addClass("move");
        });
        // section s1 마우스 오버 효과
        $(".s1_slide1_number").mouseenter(function(){
            if(sw1 == 0){
                $(".s1_slide1").addClass('active');
                $(".s1_slide2").removeClass('move');
                $(".s1_slide2").addClass('active3');
            }
            if(sw2 == 0){
                $(".s1_slide1").addClass('active');
                $(".s1_slide2").removeClass('move');
                $(".s1_slide2").addClass('active3');
                $(".s1_slide3").removeClass('move');
                $(".s1_slide3").addClass('active2');
            }
        });
        $(".s1_slide1_number").mouseleave(function(){
            if(sw1 == 0){
                $(".s1_slide1").removeClass('active');
                $(".s1_slide2").addClass('move');
                $(".s1_slide2").removeClass('active3');
            }
            if(sw2 == 0){
                $(".s1_slide1").removeClass('active');
                $(".s1_slide2").addClass('move');
                $(".s1_slide2").removeClass('active3');
                $(".s1_slide3").addClass('move');
                $(".s1_slide3").removeClass('active2');
            }
        });
        $(".s1_slide2_number").mouseenter(function(){
            if(sw0 == 0){
                $(".s1_slide2").addClass('active');
            }
            if(sw2 == 0){
                $(".s1_slide2").addClass('active');
                $(".s1_slide3").removeClass('move');
                $(".s1_slide3").addClass('active2');
            }
        });
        $(".s1_slide2_number").mouseleave(function(){
            if(sw0 == 0){
                $(".s1_slide2").removeClass('active');
            }
            if(sw2 == 0){
                $(".s1_slide2").removeClass('active');
                $(".s1_slide3").addClass('move');
                $(".s1_slide3").removeClass('active2');
            }
        });     
        $(".s1_slide3_number").mouseenter(function(){
            $(".s1_slide2").addClass('active2');
            $(".s1_slide3").addClass('active');
        });
        $(".s1_slide3_number").mouseleave(function(){
            $(".s1_slide2").removeClass('active2');
            $(".s1_slide3").removeClass('active');
        });

        // section s2 scrollTrigger
        ScrollTrigger.create({
            trigger:".s2_scroll_pin",
            start:"top 100px", // 100px은 pin이 scrollTop에서 100px만큼 떨어짐
            end:"bottom -250px",
            pin:true,
            scrub:5
        });

        // section s3 scrollTrigger
        ScrollTrigger.create({
            trigger:".s3",
            start:"top top",
            end:"bottom -1000px",
            pin:true,
            scrub:5
        });

        // section s4 swiper
        const newsSwiper7 = new Swiper(".section4_Swiper", {
            slidesPerView: 'auto',  
            spaceBetween: 15,
        });

        // section s5 scrollTrigger
        ScrollTrigger.create({
            trigger:".s5_left",
            start:"top 30px", // 100px은 pin이 scrollTop에서 100px만큼 떨어짐
            end:"bottom -900px",
            pin:true,
            scrub:5
        });

        // section s6 scrollTrigger
        ScrollTrigger.create({
            trigger:".s6_left",
            start:"center center", // 100px은 pin이 scrollTop에서 100px만큼 떨어짐
            end:"bottom -270px",
            pin:true,
            scrub:5
        });

        // s6 스크롤 시 글씨 활성화 이벤트
        $(window).scroll(function(){
            var body = $(document).height();
            var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
            $("section").each(function(){
                let section2bottom1 = body - $(".s1").height() - $(".s2").height() - vh(43.5);
                let section2bottom2 = body - $(".s1").height() - $(".s2").height() - vh(60);
                let section2bottom3 = body - $(".s1").height() - $(".s2").height() - vh(76);
                let section2bottom4 = body - $(".s1").height() - $(".s2").height() - 850;
                let section2bottom5 = body - $(".s1").height() - $(".s2").height() - 1000;
                let section2bottom6 = body - $(".s1").height() - $(".s2").height() - 1200;
                if(section2bottom1 < scrollBottom) {
                    $(".section3_Swiper2").addClass("child_ani1");
                    $(".section3_Swiper2").removeClass("child_ani2");
                }
                if(section2bottom1 > scrollBottom && section2bottom2 < scrollBottom) {
                    $(".section3_Swiper2").removeClass("child_ani1");
                    $(".section3_Swiper2").addClass("child_ani2");
                    $(".section3_Swiper2").removeClass("child_ani3");
                }
                if(section2bottom2 > scrollBottom && section2bottom3 < scrollBottom) {
                    $(".section3_Swiper2").removeClass("child_ani2");
                    $(".section3_Swiper2").addClass("child_ani3");
                    $(".section3_Swiper2").removeClass("child_ani4");
                }
                if(section2bottom3 > scrollBottom && section2bottom4 < scrollBottom) {
                    $(".section3_Swiper2").removeClass("child_ani3");
                    $(".section3_Swiper2").addClass("child_ani4");
                    $(".section3_Swiper2").removeClass("child_ani5");
                }
                if(section2bottom4 > scrollBottom && section2bottom5 < scrollBottom) {
                    $(".section3_Swiper2").removeClass("child_ani4");
                    $(".section3_Swiper2").addClass("child_ani5");
                    $(".section3_Swiper2").removeClass("child_ani6");
                }
                if(section2bottom5 > scrollBottom && section2bottom6 < scrollBottom) {
                    $(".section3_Swiper2").removeClass("child_ani5");
                    $(".section3_Swiper2").addClass("child_ani6");
                }
                if(section2bottom6 > scrollBottom) {
                    $(".section3_Swiper2").removeClass("child_ani1");
                    $(".section3_Swiper2").removeClass("child_ani6");
                    $(".section3_Swiper1").addClass("child_ani");
                    $(".swiper-button-next").addClass("child_ani");
                } else {
                    $(".section3_Swiper1").removeClass("child_ani");
                    $(".swiper-button-next").removeClass("child_ani");
                }
                let section5Top4 = body - $(".cider1").offset().top;
                let section5Top5 = body - $(".cider2").offset().top;
                let section5Top6 = body - $(".cider3").offset().top;
                let section5Top7 = body - $(".cider4").offset().top;
                let section5Top8 = body - $(".cider5").offset().top;
                let section5Top9 = body - $(".cider6").offset().top;
                let section5Top10 = body - $(".cider7").offset().top;
                if(section5Top4 > scrollBottom) {
                    $(".s5 .cider1").addClass("child_ani");
                } else {
                    $(".s5 .cider1").removeClass("child_ani");
                }
                if(section5Top5 > scrollBottom) {
                    $(".s5 .cider2").addClass("child_ani");
                } else {
                    $(".s5 .cider2").removeClass("child_ani");
                }
                if(section5Top6 > scrollBottom) {
                    $(".s5 .cider3").addClass("child_ani");
                } else {
                    $(".s5 .cider3").removeClass("child_ani");
                }
                if(section5Top7 > scrollBottom) {
                    $(".s5 .cider4").addClass("child_ani");
                } else {
                    $(".s5 .cider4").removeClass("child_ani");
                }
                if(section5Top8 > scrollBottom) {
                    $(".s5 .cider5").addClass("child_ani");
                } else {
                    $(".s5 .cider5").removeClass("child_ani");
                }
                if(section5Top9 > scrollBottom) {
                    $(".s5 .cider6").addClass("child_ani");
                } else {
                    $(".s5 .cider6").removeClass("child_ani");
                }
                if(section5Top10 > scrollBottom) {
                    $(".s5 .cider7").addClass("child_ani");
                } else {
                    $(".s5 .cider7").removeClass("child_ani");
                }
            });
            $(".s6").each(function(){
                let section6Top1 = $(this).offset().top;
                let section6Top1_2 = $(this).offset().top+350;
                let section6Top2 = $(this).offset().top+250;
                let section6Top3 = $(this).offset().top+500;
                let section6Top4 = $(this).offset().top+1050;
                let section6Top5 = $(this).offset().top+1300;
                if(section6Top1 < $(window).scrollTop() && section6Top1_2 > $(window).scrollTop()){
                    $(".s6_right_openinnovation1").addClass("active");
                } else {
                    $(".s6_right_openinnovation1").removeClass("active");
                }
                if(section6Top2 < $(window).scrollTop() && section6Top3 > $(window).scrollTop()){
                    $(".s6_right_openinnovation2").addClass("active");
                } else {
                    $(".s6_right_openinnovation2").removeClass("active");
                }
                if(section6Top3 < $(window).scrollTop() && section6Top4 > $(window).scrollTop()){
                    $(".s6_right_openinnovation3").addClass("active");
                } else {
                    $(".s6_right_openinnovation3").removeClass("active");
                }
                if(section6Top4 < $(window).scrollTop() && section6Top5 > $(window).scrollTop()){
                    $(".s6_right_openinnovation4_1").addClass("active");
                    $(".s6_right_openinnovation4_2").addClass("active");
                } else {
                    $(".s6_right_openinnovation4_1").removeClass("active");
                    $(".s6_right_openinnovation4_2").removeClass("active");
                }
            });
        });
    } else if($(window).width()<1200) {
        // 헤더에서 검색 버튼을 클릭하였을 때,
        $(".header_right_search a").click(function(){
            $(".search_bg_mobile").addClass("move");
            $("html, body").css("overflow", "hidden");
        });
        $(".search_bg_mobile_wrap > svg").click(function(){
            $(".search_bg_mobile").removeClass("move");
            $("html, body").css("overflow", "auto");
        });
        $(".search_bg_mobile_bg").click(function(){
            $(".search_bg_mobile").removeClass("move");
            $("html, body").css("overflow", "auto");
        });
        // 헤더에서 메뉴 버튼을 클릭하였을 때,
        $(".header_right_menu a").click(function(){
            $(".header_menu_mobile").addClass("move");
            $("html, body").css("overflow", "hidden");
        });
        $(".header_menu_mobile_header svg").click(function(){
            $(".header_menu_mobile").removeClass("move");
            $("html, body").css("overflow", "auto");
        });  

        // 스크롤 시 헤더의 색상 변경 - PC
        $(window).on("scroll", function() {
            // page ui
            if($(window).scrollTop() > 0) {
                $(".top_btn").addClass("show");
            }else {
                $(".top_btn").removeClass("show");
            }
            if($(window).scrollTop() < vh(100)) {
                $("header").removeClass("active");
                $(".logo_white").removeClass("active");
                $(".logo_red").removeClass("active");
                $(".header_middle nav > ul > li > a").removeClass("active");
                $(".header_right_search a svg").removeClass("active");
                $(".header_right_menu a svg").removeClass("active");
            } if($(window).scrollTop() > vh(100) && $(window).scrollTop() < (vh(100) + 1300)) {
                $("header").addClass("active");
                $(".logo_white").addClass("active");
                $(".logo_red").addClass("active");
                $(".header_middle nav > ul > li > a").addClass("active");
                $(".header_right_search a svg").addClass("active");
                $(".header_right_menu a svg").addClass("active");
            } if($(window).scrollTop() > (vh(100) + 1300) && $(window).scrollTop() < (vh(250) + 1300)) {
                $("header").removeClass("active");
                $(".logo_white").removeClass("active");
                $(".logo_red").removeClass("active");
                $(".header_middle nav > ul > li > a").removeClass("active");
                $(".header_right_search a svg").removeClass("active");
                $(".header_right_menu a svg").removeClass("active");
            } if($(window).scrollTop() > (vh(250) + 1300)) {
                $("header").addClass("active");
                $(".logo_white").addClass("active");
                $(".logo_red").addClass("active");
                $(".header_middle nav > ul > li > a").addClass("active");
                $(".header_right_search a svg").addClass("active");
                $(".header_right_menu a svg").addClass("active");
            }
        });

        // section s1 swiper
        const newsSwiper = new Swiper(".section1_Swiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable : true,
            },
        });

        // section s4 swiper
        const newsSwiper3 = new Swiper(".section4_Swiper", {
            slidesPerView: 'auto',  
            spaceBetween: 55,
        });

        // section s5 swiper
        function initializeSwiper() {
            const newsSwiper6 = new Swiper(".s5_right", {
                slidesPerView: 'auto',
                spaceBetween: 15,
                pagination: {
                    el: '.swiper-pagination',
                    clickable : true,
                },
            });
        }
        initializeSwiper();
        window.addEventListener('resize', function(){
            newsSwiper6.destroy();
            initializeSwiper();
        });

        $(window).scroll(function(){
            var body = $(document).height();
            var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
            $("section").each(function(){
                let section3Top = body - $(".s3 .section3_Swiper2").offset().top;
                if(section3Top > scrollBottom) {
                    $(".section3_Swiper2").addClass("child_ani");
                } else {
                    $(".section3_Swiper2").removeClass("child_ani");
                }
                let section6Top1 = body - $(".s6_right_openinnovation1").offset().top;
                let section6Top2 = body - $(".s6_right_openinnovation2").offset().top;
                let section6Top3 = body - $(".s6_right_openinnovation3").offset().top;
                let section6Top4 = body - $(".s6_right_openinnovation4_1").offset().top;
                let section6Top5 = body - $(".s6_right_openinnovation4_2").offset().top;
                let section6Top6 = body - $(".s6_right .idea_btn").offset().top;
                if(section6Top1 > scrollBottom) {
                    $(".s6_right_openinnovation1").addClass("child_ani");
                } else {
                    $(".s6_right_openinnovation1").removeClass("child_ani");
                }
                if(section6Top2 > scrollBottom) {
                    $(".s6_right_openinnovation2").addClass("child_ani");
                } else {
                    $(".s6_right_openinnovation2").removeClass("child_ani");
                }
                if(section6Top3 > scrollBottom) {
                    $(".s6_right_openinnovation3").addClass("child_ani");
                } else {
                    $(".s6_right_openinnovation3").removeClass("child_ani");
                }
                if(section6Top4 > scrollBottom) {
                    $(".s6_right_openinnovation4_1").addClass("child_ani");
                } else {
                    $(".s6_right_openinnovation4_1").removeClass("child_ani");
                }
                if(section6Top5 > scrollBottom) {
                    $(".s6_right_openinnovation4_2").addClass("child_ani");
                } else {
                    $(".s6_right_openinnovation4_2").removeClass("child_ani");
                }
                if(section6Top6 > scrollBottom) {
                    $(".s6_right .idea_btn").addClass("child_ani");
                } else {
                    $(".s6_right .idea_btn").removeClass("child_ani");
                }
            });
        });
    }; // width 1200이하 끝
    
    // page ui 위치 고정
    const topBtn = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const $target = entry.target;
            // isIntersecting: 관찰 대상이 현재 루트 안에 포함되어 있는지의 여부를 확인합니다.
            if(entry.isIntersecting){
                document.querySelector(".page_ui").classList.remove("fixed");
            }else {
                document.querySelector(".page_ui").classList.add("fixed");
            }
        });
    });
    const $top = document.querySelectorAll("footer");
    $top.forEach((item) => {
        topBtn.observe(item);
    });

    // section s3 swiper
    const newsSwiper1 = new Swiper(".section3_Swiper1", {
        slidesPerView: 1,
	    spaceBetween: 0,
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
        watchOverflow:true,
        touchRatio: 0,
    });
    const newsSwiper2 = new Swiper(".section3_Swiper2", {
        // slidesPerView: 10,
        slidesPerView: 'auto',
        effect: "creative",
        creativeEffect: {
            limitProgress:10,
            prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 5],
                scale: 1.1,
                opacity: 0,
            },
            next: {
                translate: [0, 0, 0],
                rotate: [0, 0, -5],
                opacity: 0.95,
            },
        },
	    spaceBetween: 0,
        watchOverflow:true,
        touchRatio: 0,
    });
    // newsSwiper1와 newsSwiper2가 서로를 제어
    newsSwiper1.controller.control = newsSwiper2;
    newsSwiper2.controller.control = newsSwiper1;

    // 커스텀 커서 포인터(custom-cursor)
    let cursor = $(".custom-cursor");
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    // 커스텀 커서 초기화
    gsap.set(cursor, {
        scale:0,
        opacity:0.85
    });
    // 커스텀 커서가 마우스를 따라다님
    gsap.to({}, {
        duration:0.016,
        repeat:-1,
        onRepeat : function(){
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            gsap.set(cursor, {
                x: mouseX,
                y: mouseY
            });
        }
    });
    // s4영역에 마우스무브 이벤트 설정
    $(".s4").on("pointermove", function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    });
    // s4영역에 마우스를 올리면 커스텀 커서 나타남
    $(".s4").on("pointerenter", function(){
        scale.play();
    });
    // s4영역에 마우스를 아웃하면 커스텀 커서 사라짐
    $(".s4").on("pointerleave", function(){
        scale.reverse();
    });
    let scale = gsap.timeline({paused:true})
        .to(cursor, {
            scale:1,
            trasformOrigin:'center'
    });

    // 스크롤 시 margin-top 이벤트
    $(window).scroll(function(){
        var body = $(document).height();
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        $("section").each(function(){
            // console.log(body); // 15016
            // console.log(scrollBottom); // 14097
            // console.log(vh(100)); // 919
            let section2Top1 = body - $(".s2").offset().top-50;
            let section2Top2 = body - $(".s2").offset().top-200;
            let section2Top3 = body - $(".s2").offset().top-400;
            let section2Top4 = body - $(".s2").offset().top-550;
            if(section2Top1 > scrollBottom) {
                $(".s2_top").addClass("child_ani");
            } else {
                $(".s2_top").removeClass("child_ani");
            }
            if(section2Top2 > scrollBottom) {
                $(".s2_left h2").addClass("child_ani");
            } else {
                $(".s2_left h2").removeClass("child_ani");
            }
            if(section2Top3 > scrollBottom) {
                $(".s2_search").addClass("child_ani");
            } else {
                $(".s2_search").removeClass("child_ani");
            }
            if(section2Top4 > scrollBottom) {
                $(".s2_left .hashtag").addClass("child_ani");
            } else {
                $(".s2_left .hashtag").removeClass("child_ani");
            }
            // section 4
            let section4Top = body - $(".s4").offset().top;
            if(section4Top > scrollBottom) {
                $(".section4_Swiper").addClass("child_ani");
            } else {
                $(".section4_Swiper").removeClass("child_ani");
            }
            // section 5
            let section5Top1 = body - $(".s5_left > p").offset().top;
            let section5Top2 = body - $(".s5_left > h2").offset().top;
            let section5Top3 = body - $(".s5_left img").offset().top;
            if(section5Top1 > scrollBottom) {
                $(".s5_left > p").addClass("child_ani");
            } else {
                $(".s5_left > p").removeClass("child_ani");
            }
            if(section5Top2 > scrollBottom) {
                $(".s5_left > h2").addClass("child_ani");
            } else {
                $(".s5_left > h2").removeClass("child_ani");
            }
            if(section5Top3 > scrollBottom) {
                $(".s5_left .s5_img").addClass("child_ani");
            } else {
                $(".s5_left .s5_img").removeClass("child_ani");
            }
            // section7 
            let section7Top = body - $(".s7_wrap").offset().top;
            if(section7Top > scrollBottom) {
                $(".s7_wrap").addClass("child_ani");
            } else {
                $(".s7_wrap").removeClass("child_ani");
            }
            // section 8
            let section8Top1 = body - $(".s8_title").offset().top;
            let section8Top2 = body - $(".s8_swiper_wrap").offset().top;
            if(section8Top1 > scrollBottom) {
                $(".s8_title").addClass("child_ani");
            } else {
                $(".s8_title").removeClass("child_ani");
            }
            if(section8Top2 > scrollBottom) {
                $(".s8_swiper_wrap").addClass("child_ani");
            } else {
                $(".s8_swiper_wrap").removeClass("child_ani");
            }
            // section 9
            let section9Top = body - $(".s9_title").offset().top;
            if(section9Top > scrollBottom) {
                $(".s9_title").addClass("child_ani");
            } else {
                $(".s9_title").removeClass("child_ani");
            }
        });
    });
    // section s8 swiper
    const newsSwiper4 = new Swiper(".section8_Swiper1", {
        pagination: {
            el: '.swiper-pagination',
            clickable : true,
        },
        touchRatio: 0,
    });
    const newsSwiper5 = new Swiper(".section8_Swiper2", {
        pagination: {
            el: ".swiper-pagination",
            clickable : true,
        },
        touchRatio: 0,
    });

    // section s9 tap btn
    $(".s9_btn1").click(function(){
        $(this).removeClass("active");
        $(".s9_btn2").removeClass("active");
        $(".s9_btn1_imgbox").removeClass("active");
        $(".s9_btn2_imgbox").removeClass("active");
    });
    $(".s9_btn2").click(function(){
        $(".s9_btn1").addClass("active");
        $(this).addClass("active");
        $(".s9_btn1_imgbox").addClass("active");
        $(".s9_btn2_imgbox").addClass("active");
    });

    let sw5 = 0;
    $(".familySite").click(function(){
        if(sw5 == 0) {
            sw5 = 1;
            $(".familySite").addClass("active");
        } else if(sw5 == 1) {
            sw5 = 0;
            $(".familySite").removeClass("active");         
        }
    });

    $(".header_menu_mobile_section nav > ul > li > a").click(function(){
        $(this).parent().children('.sub').toggle();
        $(this).children('svg').toggleClass('active');
    });
});

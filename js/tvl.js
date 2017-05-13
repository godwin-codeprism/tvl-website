 $(window).scroll(scrollCrtl);
        $(window).load(init);
        $(window).resize(resize);
        
        function init() {
            $('body').css({
                'padding-top': $('nav').height() + "px"
            })
        }
        function resize(){
            $('body').css({
                'padding-top': $('nav').height() + "px"
            })
        }

        function scrollCrtl() {
            var w = $(window).scrollTop();
            if (w < $('.part2:eq(0)').offset().top) {
                $('.nav li').removeClass('active');
                $('.nav li:eq(0)').addClass('active');
            } else if (w > $('.part2:eq(0)').offset().top && w < $('.part6:eq(0)').offset().top) {
                $('.nav li').removeClass('active');
                $('.nav li:eq(1)').addClass('active');
            } else if (w >= $('.part6:eq(0)').offset().top) {
                $('.nav li').removeClass('active');
                $('.nav li:eq(2)').addClass('active');
            }

            // for nav to shrink
            if ($(document).scrollTop() > 50) {
                $('nav').addClass('shrink');
            } else {
                $('nav').removeClass('shrink');
            }
            // for slide animation
            $(".slideanim").each(function () {
                var pos = $(this).offset().top;

                var winTop = $(window).scrollTop();
                if (pos < winTop + 900) {
                    $(this).addClass("slides");
                }
            });
        }

        function scrollToPart(part) {
            $('html, body').animate({
                scrollTop: $(part).offset().top
            }, 500);
        }
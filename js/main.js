var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

window.onload = function() {

    $("header").load("common/header.html");
    $("footer").load("common/footer.html");



    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

    // course : tab menu
    $("#course .tab-depth-01 ul li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .tab-depth-01 ul li").removeClass("on");
        $("#course .gnb-tab .tab-content").removeClass("current");

        $(this).addClass("on");
        $("." + tab_active).addClass("current");

    });



    $("#course .courseV .tab-depth-02 li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .courseV .tab-depth-02 li").removeClass("on");
        $("#course .courseV .le-area .cur-info").removeClass("tab-active");
        $("#course .courseV .rg-area img").removeClass("tab-active");

        $(this).addClass("on");
        $("." + tab_active).addClass("tab-active");
        $("." + tab_active).addClass("tab-active");

    });

    $("#course .courseA .tab-depth-02 li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .courseA .tab-depth-02 li").removeClass("on");
        $("#course .courseA .le-area .cur-info").removeClass("tab-active");
        $("#course .courseA .rg-area img").removeClass("tab-active");

        $(this).addClass("on");
        $("." + tab_active).addClass("tab-active");
        $("." + tab_active).addClass("tab-active");

    });

    $("#course .courseB .tab-depth-02 li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .courseB .tab-depth-02 li").removeClass("on");
        $("#course .courseB .le-area .cur-info").removeClass("tab-active");
        $("#course .courseB .rg-area img").removeClass("tab-active");

        $(this).addClass("on");
        $("." + tab_active).addClass("tab-active");
        $("." + tab_active).addClass("tab-active");


    });

    $("#course .courseC .tab-depth-02 li").on("click", function() {

        var tab_active = $(this).attr("data-tab");

        $("#course .courseC .tab-depth-02 li").removeClass("on");
        $("#course .courseC .le-area .cur-info").removeClass("tab-active");
        $("#course .courseC .rg-area img").removeClass("tab-active");

        $(this).addClass("on");
        $("." + tab_active).addClass("tab-active");
        $("." + tab_active).addClass("tab-active");

    });

    // index 
    $(".reservation-zone .tab-menu li").on("click", function() {

        var active_tab = $(this).attr("data-tab");

        $(".reservation-zone .tab-menu li").removeClass("on");
        $(this).addClass("on")

        $(".calendar-area .calendar").removeClass("on");
        $("." + active_tab).addClass("on");

        if (active_tab === 'normal-cal') {
            var strArrayC = $('.year-month').html();
        } else {
            var strArrayC = $('.year-month-j').html();
        }
        var splited = strArrayC.split('.');
        var yearC = splited[0];
        var monthC = splited[1];
        drawCalender(yearC, monthC);
    });


    // reservation_main 

    $("#reservation .fixed-bar .tab-menu li").click(function() {
        var cal_inp = $(this).attr("data-tab");

        $("#reservation .fixed-bar .tab-menu li").removeClass("on");
        $(this).addClass("on");

        $("#reservation .fixed-bar .datepicker .cm-inner").removeClass("show");
        $("." + cal_inp).addClass("show");
        $("#reservation .hole-list .holeArea").hide();
        $("#reservation .hole-list .now-datepick").text("날짜를 선택하세요.");
        $("#reservation .hole-list .now-datepick").css("color", "#fff");

    });


    $("#reservation .fixed-bar .tab-list .depth01 li").on("click", function() {
        $("#reservation .fixed-bar .tab-list .depth01 li").removeClass("on");
        $(this).addClass("on");
    });

    $("#reservation .fixed-bar .tab-list .depth02 li").on("click", function() {
        $("#reservation .fixed-bar .tab-list .depth02 li").removeClass("on");
        $(this).addClass("on");
    });

    /* reservation_step 01 */

    $("#reservation .step-01 .checkList h2").on("click", function() {
        $(this).toggleClass("on");
        $(this).next().slideToggle(300);

    });

    $("#reservation .step-01 .rule-box p").on("click", function() {
        $(this).toggleClass("on")
        $("#reservation .step-01 .rule-box ul").toggleClass("show");
    });


    /* reservation_step 02 */

    $("#reservation .step-02 .pay-result .pm-sel .tp-box").click(function() {
        $("#reservation .step-02 .pay-result .pm-sel .tp-box").removeClass("on");
        $(this).addClass("on");
    });



    /* reservation_half_step03 */

    $('.half-fr .cmpName').on('input', half_chk_Input);
    $('.half-fr .cmpTel').on('input', half_chk_Input);


    function half_chk_Input() {

        var half_Name_chk = $('#halfNm').val();
        var half_Tel_chk = $('#halfTel').val();
        var half_btn_active = $('#reservation .half-fr .btn-area .send-btn');

        if (half_Name_chk === '' || half_Tel_chk === '') {
            half_btn_active.removeClass('on');
        } else {
            half_btn_active.addClass('on');
            $("#reservation .half-fr .btn-area .send-btn").on("click", function() {
                $(".warning").show();
            });
        }

    }

    /* reservation_quarter_step03 */

    $('.quarter-fr .cmpName').on('input', qter_chk_Input);
    $('.quarter-fr .cmpTel').on('input', qter_chk_Input);

    function qter_chk_Input() {

        var qterNm_chk_01 = $('#qterNm01').val();
        var qterNm_chk_02 = $('#qterNm02').val();
        var qterNm_chk_03 = $('#qterNm03').val();
        var qterTel_chk_01 = $('#qterTel01').val();
        var qterTel_chk_02 = $('#qterTel02').val();
        var qterTel_chk_03 = $('#qterTel03').val();
        var quarter_btn_active = $('#reservation .quarter-fr .btn-area .send-btn');

        if (qterNm_chk_01 === '' || qterNm_chk_02 === '' || qterNm_chk_03 === '' || qterTel_chk_01 === '' || qterTel_chk_02 === '' || qterTel_chk_03 === '') {
            quarter_btn_active.removeClass('on');
        } else {
            quarter_btn_active.addClass('on');
            $('#reservation .quarter-fr .btn-area .send-btn').on("click", function() {
                $(".warning").show();
            });
        }

    }


    /* reservation_third_step03 */

    $('.third-fr .cmpName').on('input', third_chk_Input);
    $('.third-fr .cmpTel').on('input', third_chk_Input);


    function third_chk_Input() {

        var thirdNm_chk_01 = $('#thirdNm01').val();
        var thirdNm_chk_02 = $('#thirdNm02').val();
        var thirdTel_chk_01 = $('#thirdTel01').val();
        var thirdTel_chk_02 = $('#thirdTel02').val();
        var third_btn_active = $('#reservation .third-fr .btn-area .send-btn');

        if (thirdNm_chk_01 === '' || thirdNm_chk_02 === '' || thirdTel_chk_01 === '' || thirdTel_chk_02 === '') {
            third_btn_active.removeClass('on');
        } else {
            third_btn_active.addClass('on');
        }

    }


    // 21/08/25 line popup 부분 delete 
    $("#reservation .step-03 .btn-area .next-btn").on("click", function() {
        $(".success").show();
    });
    $("#reservation .step-03 .companion-inp .add-btn").on("click", function(e) {
        e.preventDefault();
        $(".ph-book").show();
    });
    $(".popup .popFoot input").on("click", function() {
        $(".popBg").hide();
    });
    $(".popup .popHead .hide-btn").on("click", function() {
        $(".popBg").hide();
    });

    // popup mypage 
    $("#mypage .my-status .payer-status .req-btn .cancelBtn").on("click", function() {
        $(".cancelPop").show();
        // $(".blockPop").show();
    });
    $("#mypage .my-status .payer-status .req-btn .payReq").on("click", function() {
        $(".requestPop").show();

    });
    $("#mypage .my-status .payer-status .req-btn .changePayer").on("click", function() {
        $(".changePop").show();

    });
    $("#mypage .my-status .player-status .reg-btn").on("click", function() {
        $(".changePop").show();

    });

    var this_pg = $("aside .menu-bar li.on");
    $(this_pg).children().append("<i class='fas fa-arrow-right'></i>");


    // reservation_payment
    $("#payment .pay-inp .tab-menu label").click(function() {

        var inp_active = $(this).attr("data-tab");
        $("#payment .pay-inp .pay-form .cm-inner").removeClass("show");
        $("." + inp_active).addClass("show");
    });

    // customer_contact
    var fileTarget = $('#upload');
    fileTarget.on('change', function() {
        var file_name = $("#upload").val();
        $(".file-name").val(file_name);
    });

    $(".contact-fr .consent button").on("click", function() {
        $(this).toggleClass("slide");
        $(".contact-fr .consent ul").toggleClass("show");
    });

    // line 309 21/10/05 nonReady popup 1차 오픈 
    $("#space .showerRoom .info-area ul li .link-btn").click(function() {
        $(".nonReady").show();
    });

    $("#space .common-split .article .menu-view").click(function() {
        $(".nonReady").show();
    });

    $("#space .practice .info-area ul li .link-btn").click(function() {
        $(".nonReady").show();
    });

    $("#space .play-facility .facility-area .menu-view").click(function() {
        $(".nonReady").show();
    });

    $(".nonReady .hide-btn").click(function() {
        $(".nonReady").hide();
    });

    // pc 감지
    if (!isMobile) {

    };

    // mobile 감지
    if (isMobile) {

        $(document).on("click", "header .m-menu", function() {
            $("header .open-menu").show();
        })

        $(document).on("click", "header .open-menu .head .close-btn", function() {
            $("header .open-menu").hide();
        });

        var slide_btn_show = 700;
        $(window).scroll(function() {
            var window = $(this).scrollTop();
            if (slide_btn_show <= window) {
                $("footer.scrollBtn").addClass("on");
            } else {
                $("footer.scrollBtn").removeClass("on");
            }
        })

    };


};

// 21/08/25 line 323 href animation
var page_url = window.location.href;
var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
if (page_id == 'shower') {
    $('html, body').animate({ scrollTop: $('#slide-' + page_id).offset().top }, 500);
} else if (page_id == 'eating') {
    $('html, body').animate({ scrollTop: $('#slide-' + page_id).offset().top }, 500);
} else if (page_id == 'facility') {
    $('html, body').animate({ scrollTop: $('#slide-' + page_id).offset().top }, 500);
}

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
}
/* calendar */

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(function() {
    calendarDefault($("#default-calendar"), new Date());
    calendarJoin($("#join-calendar"), new Date());
});


// default calendar 

function calendarDefault(target, date) {

    var nowDate = new Date();

    Date.prototype.format2 = function() {
        var yyyy = this.getFullYear();
        var month = ("0" + (this.getMonth() + 1)).slice(-2);
        var format = [yyyy, month].join('-');
        return format;
    }

    if (date == null || date == undefined) {
        date = new Date();
    }
    nowDate = date;
    if ($(target).length > 0) {
        var viewYear = nowDate.getFullYear();
        var viewMonth = nowDate.getMonth() + 1;
        $(target).empty().append(defaultAss(viewYear, viewMonth));
    } else {
        console.error("custom_calendar Target is empty!!!");
        return;
    }

    var thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    var thisLastDay = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);


    var tag = "<div>";
    var cnt = 0;

    for (i = 0; i < thisMonth.getDay(); i++) {
        tag += "<div class='date-body'></div>";
        cnt++;
    }

    for (i = 1; i <= thisLastDay.getDate(); i++) {
        if (cnt % 7 == 0) {
            tag += "<div class='week'>";

        }

        if (i > nowDate.getDate()) {

            j = "3팀";

        } else {

            j = "X";
            $(function() {
                $(".date-body:contains('X')").addClass("soldOut");
            })
        }

        tag += "<div class='date-body' " + "date-data=" + nowDate.format2() + "-" + ("0" + i).slice(-2) + ">" +
            "<div class='date'>" + i + "</div>" +
            "<div class='remnant'>" + j + "</div>" +
            "</div>";
        cnt++;


        if (cnt % 7 == 0) {
            tag += "</div>";
        }

    }


    $(target).find(".wrap-dates").append(tag);
    defaultCalMov();
    // console.log($(target))

    function defaultAss(viewYear, viewMonth) {
        var calendar_html_code =
            "<div class='default-head cal-head'>" +
            "<button class='prev-btn'><i class='fas fa-angle-left'></i></button>" +
            "<div class='year-month'>" + viewYear + "." + viewMonth + "</div>" +
            "<button class='next-btn'><i class='fas fa-angle-right'></i></button>" +
            "</div>" +
            "<div class='cal-body'>" +
            "<div class='thead'>" +
            "<div class='day'>Sun</div>" +
            "<div class='day'>Mon</div>" +
            "<div class='day'>Tue</div>" +
            "<div class='day'>Wed</div>" +
            "<div class='day'>Thu</div>" +
            "<div class='day'>Fri</div>" +
            "<div class='day'>Sat</div>" +
            "</div>" +
            "<div class='wrap-dates'>" +
            "</div>" +
            "</div>";
        return calendar_html_code;
    }

    function defaultCalMov() {

        $(".default-head").on("click", ".prev-btn", function() {
            nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, nowDate.getDate());
            calendarDefault($(target), nowDate);
        });

        $(".default-head").on("click", ".next-btn", function() {
            nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate());
            calendarDefault($(target), nowDate);
        });

    }

    $(".reservation-zone .calendar .date-body").on("click", function() {
        $(".main-visual .reservation-zone input[type='submit']").addClass("on");
        $(".main-visual .reservation-zone input[type='submit']").attr("onclick", "location.href='reservation_main.html'");
    });

    $(".cal-body .wrap-dates .date-body").on("click", function() {

        $(".cal-body .wrap-dates .date-body").removeClass("sel-date");
        $(this).addClass("sel-date");

    });

    $("#reservation .datepicker .calendar .cal-body .date-body").on("click", function() {
        var pickDate = $(this).attr("date-data");
        var week = new Array("일", "월", "화", "수", "목", "금", "토");
        var today = new Date(pickDate).getDay();
        var todayLabel = week[today];

        $("#reservation .hole-list .now-datepick").text(pickDate + ("(" + todayLabel + ")"));
        $("#reservation .hole-list .now-datepick").css("color", "#de6f00");


    });

    $("#default-calendar .date-body").on("click", function() {
        $("#reservation .hole-list .holeArea").hide();
        $("#reservation .hole-list .default-hole").show();
    });

    if (isMobile) {
        $("#reservation #default-calendar .cal-body .date-body").on("click", function() {
            var offset = $("#tab-active01").offset();
            $("html, body").animate({ scrollTop: offset.top }, 400);
        });
    }
}


// join calendar 

function calendarJoin(target, date) {

    var nowDate = new Date();

    Date.prototype.format2 = function() {
        var yyyy = this.getFullYear();
        var month = ("0" + (this.getMonth() + 1)).slice(-2);
        var format = [yyyy, month].join('-');
        return format;
    }

    if (date == null || date == undefined) {
        date = new Date();
    }
    nowDate = date;
    if ($(target).length > 0) {
        var viewYear = nowDate.getFullYear();
        var viewMonth = nowDate.getMonth() + 1;
        $(target).empty().append(joinAss(viewYear, viewMonth));
    } else {
        console.error("custom_calendar Target is empty!!!");
        return;
    }

    var thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    var thisLastDay = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);


    var tag = "<div>";
    var cnt = 0;

    for (i = 0; i < thisMonth.getDay(); i++) {
        tag += "<div class='date-body'></div>";
        cnt++;
    }

    for (i = 1; i <= thisLastDay.getDate(); i++) {
        if (cnt % 7 == 0) {
            tag += "<div class='week'>";

        }

        if (i > nowDate.getDate()) {

            j = "3팀";

        } else {

            j = "X";
            $(function() {
                $(".date-body:contains('X')").addClass("soldOut");
            })
        }

        tag += "<div class='date-body'" + "date-data=" + nowDate.format2() + "-" + ("0" + i).slice(-2) + ">" +
            "<div class='date'>" + i + "</div>" +
            "<div class='remnant'>" + j + "</div>" +
            "</div>";
        cnt++;


        if (cnt % 7 == 0) {
            tag += "</div>";
        }

    }


    $(target).find(".wrap-dates").append(tag);
    joinCalMov();

    function joinAss(viewYear, viewMonth) {
        var calendar_html_code =
            "<div class='join-head cal-head'>" +
            "<button class='prev-btn'><i class='fas fa-angle-left'></i></button>" +
            "<div class='year-month'>" + viewYear + "." + viewMonth + "</div>" +
            "<button class='next-btn'><i class='fas fa-angle-right'></i></button>" +
            "</div>" +
            "<div class='cal-body'>" +
            "<div class='thead'>" +
            "<div class='day'>Sun</div>" +
            "<div class='day'>Mon</div>" +
            "<div class='day'>Tue</div>" +
            "<div class='day'>Wed</div>" +
            "<div class='day'>Thu</div>" +
            "<div class='day'>Fri</div>" +
            "<div class='day'>Sat</div>" +
            "</div>" +
            "<div class='wrap-dates'>" +
            "</div>" +
            "</div>";
        return calendar_html_code;
    }

    function joinCalMov() {

        $(".join-head").on("click", ".prev-btn", function() {
            nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, nowDate.getDate());
            calendarJoin($(target), nowDate);
        });


        $(".join-head").on("click", ".next-btn", function() {
            nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate());
            calendarJoin($(target), nowDate);
        });

    }

    $(".cal-body .wrap-dates .date-body").on("click", function() {

        $(".cal-body .wrap-dates .date-body").removeClass("sel-date");
        $(this).addClass("sel-date");
    });

    // index.html
    $(".reservation-zone .calendar .date-body").on("click", function() {
        $(".main-visual .reservation-zone input[type='submit']").addClass("on");
        $(".main-visual .reservation-zone input[type='submit']").attr("onclick", "location.href='reservation_main.html'");
    });

    // reservation_main.html
    $("#reservation .datepicker .calendar .cal-body .date-body").on("click", function() {
        var pickDate = $(this).attr("date-data");
        var week = new Array("일", "월", "화", "수", "목", "금", "토");
        var today = new Date(pickDate).getDay();
        var todayLabel = week[today];

        $("#reservation .hole-list .now-datepick").text(pickDate + ("(" + todayLabel + ")"));
        $("#reservation .hole-list .now-datepick").css("color", "#de6f00");
    });

    $("#join-calendar .date-body").on("click", function() {
        $("#reservation .hole-list .holeArea").hide();
        $("#reservation .hole-list .join-hole").show();
    });

    if (isMobile) {
        $("#reservation #join-calendar .cal-body .date-body").on("click", function() {
            var offset = $("#tab-active02").offset();
            $("html, body").animate({ scrollTop: offset.top }, 400);
        });
    }
}
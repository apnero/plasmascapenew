$(function() {
    "use strict";
    $(".dropdown-menu a").click(function(a) {
        a.stopPropagation()
    }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone|Opera Mini/i.test(navigator.userAgent) ? $.backstretch(["assets/img/background/1.jpg"], {
        duration: 3800,
        fade: 1500
    }) :  new WOW({
        mobile: !1
    }).init(), $(".dial").knob({
        draw: function() {
            if ("tron" == this.$.data("skin")) {
                var d, a = this.angle(this.cv),
                    b = this.startAngle,
                    c = this.startAngle,
                    e = c + a,
                    f = !0;
                return this.g.lineWidth = this.lineWidth, this.o.cursor && (c = e - .3) && (e += .3), this.o.displayPrevious && (d = this.startAngle + this.angle(this.value), this.o.cursor && (b = d - .3) && (d += .3), this.g.beginPath(), this.g.strokeStyle = this.previousColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, b, d, !1), this.g.stroke()), this.g.beginPath(), this.g.strokeStyle = f ? this.o.fgColor : this.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, c, e, !1), this.g.stroke(), this.g.lineWidth = 2, this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + 2 * this.lineWidth / 3, 0, 2 * Math.PI, !1), this.g.stroke(), !1
            }
        }
    }), $("#nav").affix({
        offset: {
            top: $("#home").height() - 80
        }
    }), $(".navbar-nav").find("a").on("click", function(a) {
        a.preventDefault(), "#" != $(this).attr("href") && $.scrollTo($(this).attr("href"), 1e3, {
            offset: {
                left: 0,
                top: -80
            }
        })
    }), $(".rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 2e3
    }), $("#scroll").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                scrollTop: a.offset().top
            }, 1200), !1
        }
    }), $("[data-toggle='collapse']").on("click", function(a) {
        a.preventDefault();
        var b = $('.v-icon[data-target="' + $(this).attr("data-target") + '"]'),
            c = $(b).children("i");
        /fa-minus/i.test($(c).attr("class")) ? $(c).removeClass("fa-minus").addClass("fa-plus") : $(c).removeClass("fa-plus").addClass("fa-minus")
    });
    var b = $("#portfolio-container");
    b.imagesLoaded(function() {
        b.shuffle({
            itemSelector: ".portfolio-item",
            speed: 450
        }), $("#filter a").click(function(a) {
            a.preventDefault(), $("#filter a").removeClass("active"), $(this).addClass("active");
            var c = $(this).attr("data-group");
            b.shuffle("shuffle", c)
        })
    }), $(".GITheWall").GITheWall({
        nextButtonClass: "fa fa-chevron-right",
        prevButtonClass: "fa fa-chevron-left",
        closeButtonClass: "fa fa-times",
        dynamicHeight: !1,
        onShow: function() {
            $("#portfolio-container").slideDown(300).fadeOut(300), $(".filter-tags").slideDown(300).fadeOut(300), $("#portfolio-more").slideDown(300).fadeOut(300)
        },
        onHide: function() {
            $("#portfolio-container").slideUp(300).fadeIn(300), $(".filter-tags").slideUp(300).fadeIn(300), $("#portfolio-more").slideUp(300).fadeIn(300)
        }
    }), $(".counter").counterUp({
        delay: 100,
        time: 2e3
    
    })
});
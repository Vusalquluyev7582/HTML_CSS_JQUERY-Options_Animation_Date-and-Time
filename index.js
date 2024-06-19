$(document).ready(function () {

    //*REVIEW - 1) Options - Seçimlər

    var text = $(".text");

    $("#hide").click(function () {
        //console.log("Klik edildi")

        //$(".text").hide();
        //$(".text").hide(2000)

        text.hide(2000)
    });

    $("#show").click(function () {
        //$(".text").show();
        //$(".text").show(500)

        text.show(500)
    });

    $("#show-hide").click(function () {
        //$(".text").toggle(1000)

        text.toggle(1000)
    });

    $("#open-close").click(function () {
        //$(".text").slideUp().slideDown()              //Chain Method - Zincirləmə Metodu

        text.slideUp().slideDown()
    });

    $("#add-element").click(function () {
        //$(".text").append("Vüsal")       //Add to the end - Sonuna əlavə edir
        //$(".text").prepend("Quliyev")      //Add to front - Önünə əlavə edir

        //$(".text").html("<ul><li>Jquery</li></ul>")  //tag is for add - Teq əlavə etmək üçündür. Amma əlavə olunarkən digərlərin siləcək


        text.append("Vüsal")
        text.prepend("Quliyev")

        //text.html("<ul><li>Jquery</li></ul>")
    });

    $("#remove-element").click(function () {
        $("li:first-child").remove()
    });

    $("#add-class").click(function () {
        //$(".text").addClass("add")

        text.addClass("add")
    });

    $("#remove-class").click(function () {
        //$(".text").removeClass("add")

        text.removeClass("add")
    });

    $("#class-change").click(function () {
        $(".text").toggleClass("add")
    })


    //////////////////////////////////////////////////////


    //*REVIEW - 2) Animation - Animasiya

    var box1 = $(".box1");
    var box2 = $(".box2");
    var positionBox1 = box1.position();
    var positionBox2 = box2.position();
    //console.log(positionBox1.left);
    var left1 = positionBox1.left;
    var left2 = positionBox2.left;

    $("#animation-start").click(function () {

        box1.css({ position: "relative" });

        while (left1 <= 1100) {
            box1.animate({
                left: "600",
            });
            left1 += 50;
        };

        box2.css({ position: "relative" });

        while (left2 <= 1100) {
            box2.animate({
                left: "970",
            });
            left2 += 10;
        };
    });


    //////////////////////////////////////////////////////


    //*REVIEW - 3) Date and time - Tarix və saat

    var time = setInterval(whatTimeİsİt, 1000);

    function whatTimeİsİt() {
        var d = new Date();
        var hours = d.getHours();
        var minute = d.getMinutes();
        var seconds = d.getSeconds();

        $(".hours").text(hours);
        $(".minute").text(minute);
        $(".seconds").text(seconds)
    }

});

$(document).ready(function(){

    //VARIABLES FOR INPUTS START
inputSize = $("input[type=text][name=pizzasizeinput]");
inputTopping = $("input[type=text][name=pizzatoppinginput]");
inputCrust= $("input[type=text][name=pizzacrustinput]");
inputDeliver = $("input#delivery[name=delivery]");
inputNumber = $("input[type=number][min=1]");
//VARIABLES FOR INPUTS END

//CHECKING SELECTED DIV/INPUT START
$('#pizzasize div').click(function() {
        var aa =$(this).find("p").attr("id");
        $("div#pizzasize div").removeClass("border-success");
        $(this).addClass("border-success");
        inputSize.val(aa);
    });
    $("div#toppings div").click(function(){
        var selectedTopping = $(this).attr("id");
        inputTopping.val(selectedTopping);
        $("div#toppings div").removeClass("border-success");
        $("#"+selectedTopping).addClass("border-success");
    });
    
    $("#groupdeliver button").click(function(){
    var deliver=  $(this).attr("id");
    inputDeliver.val(deliver);
    });

    $("#pizzacrust div").click(function(){
        $("#pizzacrust div").removeClass("border-success");
        $(this).addClass("border-success");
        inputCrust.val($(this).attr("id"));
    });
//CHECKING SELECTED DIV/INPUT END

//WHEN PROCEED IS CLICKED ON START
    $("input#proceed").click(function(){
        $("form div").find(".active").next().addClass("active");
        $("form div").find(".active").prev().removeClass("active");
    });

    $("input#previous").click(function(){
        $("form div").find(".active").prev().addClass("active");
        $("form div").find(".active").next().removeClass("active");
    });

    $("#confirm").hover(function(){
        $(".nextprev").css({"visibility":"hidden"}).delay(200);
    },
    function(){
        $(".nextprev").css({"visibility":"visible"}).delay(200);
    });
});
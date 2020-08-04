$(document).ready(function () {
    //OBJECTS AND GLOBAL VARIABLES START
    var sm = { name: "small", cost: 450 };
    var md = { name: "medium", cost: 650 };
    var lg = { name: "large", cost: 800 };
    //pizza crusts, names, costs
    var cripsy = { name: "Crispy Crust", cost: 220 };
    var stuffed = { name: "Stuffed Crust", cost: 250 };
    var gluttenFree = { name: "Glutten-Free Crust", cost: 220 };
    //pizza toppings, names, costs
    var bacon = { name: "Bacon", cost: 30 };
    var blackOlives = { name: "Black Olives", cost: 27 };
    var extraCheese = { name: "Extra Cheese", cost: 44 };
    var hamPineapple = { name: "Ham & Pineapple", cost: 26 };
    var mushroom = { name: "Mushroom", cost: 52 };
    var onions = { name: "Onions", cost: 40 };
    var pepper = { name: "Pepper", cost: 35 };
    var sausage = { name: "Sausage", cost: 49 };
    var spinach = { name: "Spinach", cost: 55 };
    var address1 =[];
    var deliveryCost = 0;
    //OBJECTS AND GLOBAL VARIABLES END

    var getSize = function () {
        size = "";
        var y = $("input[type=text][name=pizzasizeinput]").val();
        if (y == "sm") { size = sm } else
            if (y == "md") { size = md }
        if (y == "lg") { size = lg }
       // console.log(size)
        return size;
    }
    var getCrust = function () {
        crust ="";
        var y = $("input[type=text][name=pizzacrustinput]").val();
        if (y == "cripsy") { crust = cripsy } else
            if (y == "stuffed") { crust = stuffed }
            if (y == "gluttenFree") { crust = gluttenFree } else
           // console.log(crust);
        return crust;
    }
    var getTopping = function(){
        topping = "";
        var y = $("input[type=text][name=pizzatoppinginput]").val();
        if(y == "bacon"){topping = bacon}else 
        if(y == "blackOlives"){topping = blackOlives}else
        if(y == "extraCheese"){topping = extraCheese}else
        if(y == "hamPineapple"){topping = hamPineapple}else
        if(y == "mushroom"){topping = mushroom}else
        if(y == "onions"){topping = onions}else
        if(y == "pepper"){topping = pepper}else
        if(y == "sausage"){topping = sausage}else
        if(y == "spinach"){topping = spinach}
       // console.log(topping);
        return topping;
    }   
    
    let getDelivery = function () {
        var cost = 0; var addr = { name: "Null", box: "Null", town: "Null" }
        var n = $("input[type=radio][name=delivery]:checked").val();
        if (n == "yes") {
            var name = $("input[type=text][name=uname]").val();
            var poBox = $("input[type=text][name=pbox]").val();
            var pTown = $("input[type=text][name=ptown]").val();
            var addr = { name: name, box: poBox, town: pTown }
            var cost = (name.length + poBox.length + pTown.length) * 12;
        }
        //console.log({ addr: addr, cost: cost })
        return { addr: addr, cost: cost };
    }
    
    $("input#proceed").click(function () {

        var sizeCost = getSize().cost ;
        var sizeName = getSize().name ;
        var crustCost = getCrust().cost ;
        var crustName = getCrust().name ;
        var toppingCost = getTopping().cost ;
        var toppingName = getTopping().name ;
        var number = $("input[type=number][name=noOfPizzas]").val() ;
        var deliveryAddress = "Name: " + getDelivery().addr.name + ", P.O. Box: " + getDelivery().addr.box + ", Postal Town: " + getDelivery().addr.town;
        var deliveryCost = getDelivery().cost;
         var total = (sizeCost + crustCost + toppingCost)*number + deliveryCost;
         console.log(total);
        var text ="<li>"+sizeName+": Ksh "+ sizeCost+"</li>"+
        "<li>"+crustName+": Ksh "+ crustCost+"</li>"+
        "<li>"+toppingName+": Ksh "+ toppingCost+"</li>"+
        "<li> Number Of Pizzas"+": "+ number+"</li>"+
        "<li> Delivery To<i>--> "+deliveryAddress+": Costs "+ deliveryCost+" Kenyan Shillings</i></li>"+
        "<h3>Total = Kshs"+total+"</h3>";
        console.log(text);
        $("ol#items").html(text);
        $("#totalscreen").html("Kshs "+total+"?")


    });
});
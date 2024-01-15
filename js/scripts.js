$(document).ready(function () {

    $("#formOne").submit(function (event) {
        const provisionsInput = $("input#provisions").val();
        const confectionaryInput = $("input#confectionary").val();
        const chocolatesInput = $("input#chocolates").val();
        const cookiesInput = $("input#cookies").val();
        const drinksInput = $("input#drinks").val();
        const foodstuffInput = $("input#foodstuff").val();

        $(".provisions").prepend(provisionsInput);
        $(".confectionary").prepend(confectionaryInput);
        $(".chocolates").prepend(chocolatesInput);
        $(".cookies").prepend(cookiesInput);
        $(".drinks").prepend(drinksInput);
        $(".foodstuff").prepend(foodstuffInput);

        const orders = [provisionsInput, confectionaryInput, chocolatesInput, cookiesInput, drinksInput, foodstuffInput]
        orders = orders.sort();
        const newOrders = [];
        orders.forEach(function (element) {
            newOrders.push(element.toUperCase());
        })

        console.log(newOrders);

        $("#order").show();
        $("#formOne").hide();

        event.preventDefault();
    })
})
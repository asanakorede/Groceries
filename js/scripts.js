$(document).ready(function () {
    $("#formOne").submit(function (event) {
        const provisionsInput = $("input#provisions").val();
        const confectionaryInput = $("input#confectionary").val();
        const chocolatesInput = $("input#chocolates").val();
        const exclamationInput = $("input#exclamation").val();
        const verbInput = $("input#verb").val();
        const nounInput = $("input#noun").val();

        $(".person1").prepend(person1Input);
        $(".person2").prepend(person2Input);
        $(".animal").prepend(animalInput);
        $(".exclamation").prepend(exclamationInput);
        $(".verb").prepend(verbInput);
        $(".noun").prepend(nounInput);

        $("#story").show();

        event.preventDefault();
    })
})
function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

//get all of the calculator inputs 
const inputs = document.querySelectorAll("name='qty']");

//evaluate all of the inputs 
inputs.forEach(function (input) {

    //for each individual input, listen for change 
    input.addEventListener("change", function (e) {

        const this_input = e.target; 
        const this_value = e.parseFloat(e.target.value);
        const this_row = this_input.closest(".row")
        

        const amazon = this_row.querySelector (".amazon");
        const amazon_span = amazon.querySelector("span");
        const amazon_price = parseFloat(amazon.dataset.price);

        const freshdirect = this_row.querySelector(".freshdirect");
       const freshdirect_span = freshdirect.querySelector("span");
       const freshdirect_price = parseFloat(freshdirect.dataset.price);

        const peapod = this_row.querySelector (".peapod");
        const peapod_span = peapod.querySelector("span");
        const peapod_price = parseFloat(peapod.dataset.price);

    });
});
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
const inputs = document.querySelectorAll("[name='qty']");

//evaluate all of the inputs 
inputs.forEach(function (input) {

    //for each individual input, listen for change 
    input.addEventListener("change", function (e) {

        const this_input = e.target; 
        const qty = parseFloat(e.target.value);
        const this_row = this_input.closest(".row")
        

        const amazon = this_row.querySelector (".amazon");
        const amazon_span = amazon.querySelector("span");
        const amazon_price = parseFloat(amazon.dataset.price);
        const amazon_cost = qty * amazon_price;

//update the span within the amazon div with the value of amazon 

        amazon_span.innerHTML = round_number (amazon_cost);
        amazon.classList.add("active");

        const freshdirect = this_row.querySelector(".freshdirect");
       const freshdirect_span = freshdirect.querySelector("span");
       const freshdirect_price = parseFloat(freshdirect.dataset.price);
       const freshdirect_cost = qty * freshdirect_price;

       freshdirect_span.innerHTML = round_number (freshdirect_cost);
       freshdirect.classList.add("active");

        const peapod = this_row.querySelector (".peapod");
        const peapod_span = peapod.querySelector("span");
        const peapod_price = parseFloat(peapod.dataset.price);
        const peapod_cost = qty * peapod_price;

        peapod_span.innerHTML = round_number (peapod_cost);
        peapod.classList.add("active");


        /**
         * finding least expensive retailer
         * default to amazon (alphabetical)
         */
        let cheap = false;
        //if and only if amazon is cheaper than its competitors, update cheap to be amazon//
        if (amazon_cost < freshdirect_cost && amazon_cost < peapod_cost) {
            cheap = amazon;
        }
//if and only if freshdirect is cheaper than its competitors, update cheap to freshdirect//
        if (freshdirect_cost < amazon_cost && freshdirect_cost < peapod_cost) {
            cheap = freshdirect;
        }
        //if and only if peapod is cheaper than its competitors, update cheap to peapod //
        if (peapod_cost < amazon_cost && peapod_cost < freshdirect_cost) {
            cheap = peapod;
        }

        const current_cheap = this_row.querySelector(".cheap");
        /*if current cheap exists
        */
       if (current_cheap) {
           current_cheap.classList.remove("cheap");
       }

       if (cheap) {
        cheap.classList.add("cheap");

       }
    });
});
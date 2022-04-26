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
        

        const Target = this_row.querySelector (".Target");
        const Target_span = Target.querySelector("span");
        const Target_price = parseFloat(Target.dataset.price);
        const Target_cost = qty * Target_price;

        Target_span.innerHTML = round_number (Target_cost);
        Target.classList.add("active");

        const RiteAid = this_row.querySelector(".RiteAid");
       const RiteAid_span = RiteAid.querySelector("span");
       const RiteAid_price = parseFloat(RiteAid.dataset.price);
       const RiteAid_cost = qty * RiteAid_price;

       RiteAid_span.innerHTML = round_number (RiteAid_cost);
       RiteAid.classList.add("active");

        const CVS = this_row.querySelector (".CVS");
        const CVS_span = CVS.querySelector("span");
        const CVS_price = parseFloat(CVS.dataset.price);
        const CVS_cost = qty * CVS_price;

        CVS_span.innerHTML = round_number (CVS_cost);
        CVS.classList.add("active");


        /**
         * finding least expensive retailer
         */
        let cheap = false;
        //if and only if Target is cheaper than its competitors, update cheap to be Target//
        if (Target_cost < RiteAid_cost && Target_cost < CVS_cost) {
            cheap = Target;
        }
//if and only if RiteAid is cheaper than its competitors, update cheap to RiteAid//
        if (RiteAid_cost < Target_cost && RiteAid_cost < CVS_cost) {
            cheap = RiteAid;
        }
        //if and only if CVS is cheaper than its competitors, update cheap to CVS //
        if (CVS_cost < Target_cost && CVS_cost < RiteAid_cost) {
            cheap = CVS;
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
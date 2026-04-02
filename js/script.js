document.addEventListener("DOMContentLoaded", function() {

    // Place order button
    document.querySelector(".place-order")?.addEventListener("click", function(){
        alert("Order placed!");
    });

    // State Data
    const stateData = {
        US: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],
        CA: ["Alberta","British Columbia","Manitoba","New Brunswick","Ontario","Quebec","Saskatchewan","Nova Scotia"],
        PH: ["Metro Manila","Cebu","Davao del Sur","Batangas","Laguna","Bulacan","Rizal","Pampanga","Iloilo"],
        AU: ["New South Wales","Victoria","Queensland","Western Australia","South Australia","Tasmania"],
        GB: ["England","Scotland","Wales","Northern Ireland"]
    };

    // Shipping state dropdown
    const country = document.getElementById("country");
    const state = document.getElementById("state");

    country?.addEventListener("change", function() {
        const states = stateData[this.value];
        state.innerHTML = "";
        if (!states) {
            state.innerHTML = `<option value="">Not required</option>`;
            state.disabled = true;
            return;
        }
        state.disabled = false;
        state.innerHTML = `<option value="" disabled selected hidden></option>`;
        states.forEach(function(s) {
            const option = document.createElement("option");
            option.value = s;
            option.textContent = s;
            state.appendChild(option);
        });
    });

    // Billing form toggle
    js
    const differentAddressRadio = document.querySelector('#different-address');
    const billingForm = document.querySelector('#billing-form');

    differentAddressRadio.addEventListener('change', () => {
    if (differentAddressRadio.checked) {
        billingForm.style.display = 'block';
    } else {
        billingForm.style.display = 'none';
    }
    });

    // Billing state dropdown
    const billingCountry = document.getElementById("billing-country");
    const billingState = document.getElementById("billing-state");

    billingCountry?.addEventListener("change", function() {
        const states = stateData[this.value];
        billingState.innerHTML = "";
        if (!states) {
            billingState.innerHTML = `<option value="">Not required</option>`;
            billingState.disabled = true;
            return;
        }
        billingState.disabled = false;
        billingState.innerHTML = `<option value="" disabled selected hidden></option>`;
        states.forEach(function(s) {
            const option = document.createElement("option");
            option.value = s;
            option.textContent = s;
            billingState.appendChild(option);
        });
    });

});
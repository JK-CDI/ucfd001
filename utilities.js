"use strict";
// Code by JIKME project UCFD0001
// 12/2019
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/EventListener


/* 
    - We create a small app that can be expanded on with methods and resused across the site.
    - The design pattern used here is a Functional Constructor pattern
    - Here we can reuse the checkOutMessage method to display different alerts
    - this could also be a bootstrap message element
*/
function CheckOutControl() {

    // properties
    this.thankYou = 'Thank you for placing your order with us a member of our team will contact you to complete your purchase.';
    this.error = 'Something went wrong please refesh the page and try again.';

    //methods
    this.checkOutMessage = function (args1) {
        if (args1 == "thankyou") {
            alert(this.thankYou);
        }

        if (args1 == "error") {
            alert(this.error);
        }
    }
}


// Setup a listener on the form submit button
const buttonElement = document.getElementById('form-submit');
buttonElement.addEventListener('click', function (event) {

    // When teh event of recieved we create a new object and call the objects method!
    const checkOutControl = new CheckOutControl();
    const app = checkOutControl;
    app.checkOutMessage("thankyou");
});
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
let email = document.getElementById("email");
let query = document.querySelectorAll("[type='radio']");
let consent = document.querySelector("[type='checkbox']");

function forError(element) {
    element.style.border = `1px solid ${element.value === '' ? 'hsl(0, 66%, 56%)' : 'hsl(186, 15%, 59%)'}`;
    element.nextElementSibling.style.visibility = element.value === '' ? 'visible' : 'hidden';
}

let items = [firstName, lastName, message, email];

let send = true;

document.forms[0].addEventListener("submit", function (e) {
    if (send) {
        for(let i = 0; i < items.length; i++) {
            forError(items[i]);
        }
        if (!query[0].checked & !query[1].checked) {
            query[0].parentElement.parentElement.nextElementSibling.style.visibility = 'visible';
            e.preventDefault();
        } else {
            query[0].parentElement.parentElement.nextElementSibling.style.visibility = 'hidden';
            send = false;
        }
        
        if (!consent.checked) {
            consent.parentElement.nextElementSibling.style.visibility = 'visible';
            e.preventDefault();
        } else {
            consent.parentElement.nextElementSibling.style.visibility = 'hidden';
            send = false;
        }
    } else {
        return true;
    }
});
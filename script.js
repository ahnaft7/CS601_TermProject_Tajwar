/*document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
*/

window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function validateForm() {
    let name = document.getElementById("name");
    let letters = /^[A-Za-z]+$/;
    if (name.value.length < 2) {
        alert("Name must contain two (2) or more characters.");
        firstName.focus();
        return false;
    } else if (!name.value.match(letters)) {
        alert("Name must contain only letters A-Z or a-z");
        return false;
    } else {
        return true;
    }
}
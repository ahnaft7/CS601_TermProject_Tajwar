function validateForm() {
  const btn = document.getElementById('btn');
        btn.addEventListener('click', () => { 
          btn.style.display = 'none';

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
  });
}

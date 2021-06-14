function validate() {
    let input = document.getElementById('email');
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    input.addEventListener('change', function () {
        if (regex.test(input.value)) {
            console.log(input.value);
            input.classList.remove('error');
        } else {
            console.log(input.value);
            input.classList.add('error');
        }
    });
}
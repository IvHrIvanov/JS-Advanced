function lockedProfile() {
    let profilePick = document.querySelectorAll('div.profile');

    for (let i = 0; i < profilePick.length; i++) {

        profilePick[i].querySelector('button').addEventListener('click', (e) => {
            let buttonName = `user${i + 1}Locked`;
            let radioButton = document.querySelector(`input[name="${buttonName}"]:checked`);
            if (radioButton.value === 'unlock') {

                let a = e.currentTarget.parentNode.querySelector('div');
                if (a.style.display == '') {
                    e.target.textContent='Hide it';
                    e.currentTarget.parentNode.querySelector('div').style.display = 'block';

                } else {
                    e.currentTarget.parentNode.querySelector('div').style.display = '';
                    e.target.textContent='Show more';

                }
            }
        });
    }
}
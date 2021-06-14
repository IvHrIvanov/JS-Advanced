function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysButton = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', function () {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = daysInput.value * 1440;
        secondsInput.value = daysInput.value * 86400;
    });
    hoursBtn.addEventListener('click', function () {
        daysInput.value = (hoursInput.value / 24);
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = hoursInput.value * 60*60;
    });
    minutesBtn.addEventListener('click', function () {
        daysInput.value = (minutesInput.value / 60/24);
        hoursInput.value =( minutesInput.value / 60);
        secondsInput.value = minutesInput.value *60 ;
    });
    secondsBtn.addEventListener('click', function () {
        daysInput.value = secondsInput.value /24/60/60;
        hoursInput.value =( secondsInput.value /60/60 );
        minutesInput.value = (secondsInput.value /60) ;
    });


}
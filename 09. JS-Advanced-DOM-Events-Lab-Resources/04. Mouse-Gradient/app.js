function attachGradientEvents() {
    let gradientPick = document.getElementById('gradient');
    let result = document.getElementById('result');
    function gradientMove(event) {
        let percent = Math.floor((event.offsetX / event.target.clientWidth) * 100);
        result.textContent = `${percent}%`
    }
    gradientPick.addEventListener('mousemove', gradientMove);
    gradientPick.addEventListener('mouseout', gradientMove);
}
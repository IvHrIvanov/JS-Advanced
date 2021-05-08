function solve(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    if (speed < motorwayLimit && area == 'motorway') {
        return `Driving ${speed} km/h in a ${motorwayLimit} zone`;
    } else if (speed < interstateLimit && area == 'interstate') {
        return `Driving ${speed} km/h in a ${interstateLimit} zone`;
    } else if (speed < cityLimit && area == 'city') {
        return `Driving ${speed} km/h in a ${cityLimit} zone`;

    } else if (speed < residentialLimit && area == 'residential') {
        return `Driving ${speed} km/h in a ${residentialLimit} zone`;
    } else {
        let speedLimite = 0;
        if (area == 'motorway') {
            speedLimite = motorwayLimit;
        } else if (area == 'interstate') {
            speedLimite = interstateLimit;
        } else if (area == 'city') {
            speedLimite = cityLimit;
        } else if (area == 'residential') {
            speedLimite = residentialLimit;
        }
        const difference = speed - speedLimite;
        let status = ''; 
        if (speedLimite + 20 >= speed) {
            status = 'speeding';
        } else if (speedLimite + 40 >= speed) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimite} - ${status}`;

    }
}

console.log(solve(70, 'city'));
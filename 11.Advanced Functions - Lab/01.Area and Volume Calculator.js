function solve(area, vol, input) {
    let cordinates = JSON.parse(input);
    let result = [];
    for (const current of cordinates) {
        let obj = {
            area: area.call(current),
            volume: vol.call(current),
        }
        result.push(obj);
    }
    for (const iterator of result) {
        console.log(iterator);
    }
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


solve(area, vol, '[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]');

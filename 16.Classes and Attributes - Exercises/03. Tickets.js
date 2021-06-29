function solve(input, sorted) {
    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
        compareTo(other, criteria) {
            if (typeof this[criteria] == 'string') {
                return this[criteria].localeCompare(other[criteria]);
            } else{
                return this[criteria]-other[criteria];
            }
        }
    }
    let output = [];

    for (let i = 0; i < input.length; i++) {
        let [destinationTown, price, status] = input[i].split('|');
        let ticket = new Tickets(destinationTown, price, status);
        output.push(ticket);
    }
    output.sort((a,b)=>a.compareTo(b,sorted));

    return output;
}


console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));



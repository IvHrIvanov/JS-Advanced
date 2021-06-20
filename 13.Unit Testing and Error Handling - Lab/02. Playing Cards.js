function solve(card, suit) {
    let a = {
        cardC: '',
        suitS: ''
    }
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];
    if (cards.some(x => x == card) && suits.some(x => x == suit)) {
        let currentSuit = suits.filter(x => x == suit);

        if (currentSuit == 'S') {
            currentSuit = '\u2660';
        } else if (currentSuit == 'H') {
            currentSuit = '\u2665';
        } else if (currentSuit == 'D') {
            currentSuit = '\u2666';
        } else if (currentSuit == 'C') {
            currentSuit = '\u2663';
        }
        a.cardC = card;
        a.suitS = currentSuit;

        return a.cardC + a.suitS;
    } else {
        throw new Error('Wrong Card');
    }
}
console.log(solve('1', 'S'));
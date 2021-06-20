function printDeckOfCards(cards) {
    let arr = [];
    function createCard() {
        let cardss = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['S', 'H', 'D', 'C'];
        for (const iterator of cards) {
            let sliceCard = [];
            let pushToArr = '';
            if (iterator.length == 2) {
                sliceCard[sliceCard.length] = iterator.substring(0, 1);
                sliceCard[sliceCard.length] = iterator.substring(1, 2);

            } else if (iterator.length == 3) {
                sliceCard[sliceCard.length] = iterator.substring(0, 2);
                sliceCard[sliceCard.length] = iterator.substring(2, 3);

            }

            for (let i = 0; i < sliceCard.length; i++) {
                let cardOrSuit = sliceCard[i];
                if (cardss.some(x => x == cardOrSuit) || suits.some(x => x == cardOrSuit)) {
                    if (cardOrSuit == 'S') {
                        pushToArr += '\u2660';
                    } else if (cardOrSuit == 'H') {
                        pushToArr += '\u2665';
                    } else if (cardOrSuit == 'D') {
                        pushToArr += '\u2666';
                    } else if (cardOrSuit == 'C') {
                        pushToArr += '\u2663';
                    } else {
                        pushToArr += cardOrSuit;
                    }
                } else {
                    console.log(`Invalid card: ${sliceCard.join('')}`);
                    return;
                }


            }
            arr.push(pushToArr);
        }
        console.log(arr.join(' '));
    }
    return createCard();
}
printDeckOfCards(['5S', '3D', 'QD', '1C']);
printDeckOfCards(['AS', '10D', 'KH', '2C']);

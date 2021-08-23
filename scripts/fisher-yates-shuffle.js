function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        var t = array[i];
        array[i] = array[j];
        array[j] = t
    }
}
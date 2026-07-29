const appendPoints = function (pointsToUse) {
    const $useTag = $('<p>').text(pointsToUse);

    $('.flattener-results').append($useTag);
};

const flattener = function (balance, price, points) {
    $('.flattener-results').empty();

    const pointsDigit = String(points).length;
    const usedPoints = new Set();

    for (let i = 1; i <= pointsDigit; i++) {
        const n = 10 ** i;
        const pointsToUse = n - ((balance - price) % n);

        if (pointsToUse > points) {
            break;
        }

        if (usedPoints.has(pointsToUse)) {
            continue;
        }

        appendPoints(pointsToUse);

        if (pointsToUse === points) {
            break;
        }

        usedPoints.add(pointsToUse);
    }
};

// run when document is ready
$(function () {
    $('.flattener-form').on('submit', function (event) {
        event.preventDefault();

        const balance = Number($('#balance').val());
        const price = Number($('#price').val());
        const points = Number($('#points').val());

        flattener(balance, price, points);
    });
});

// 0: JS is running before form tag is created
// console.log($("#flattenerForm").length);

const appendPoints = function (use) {
    const useTag = $('<p></p>').text(use);

    $('#showPoints').append(useTag);
};

const flattener = function (balance, price, points) {
    $('#showPoints').empty();

    const pointDigits = String(points).length;
    let prevPoints = 0;

    for (let i = 0; i < pointDigits; i++) {
        const n = 10 ** (i + 1);
        const use = (n - ((balance - price) % n)) % n;

        if (use > points) {
            break;
        }
        if (prevPoints == use) {
            continue;
        }

        prevPoints = use;
        appendPoints(use);
    }
};

// run when document is ready
$(function () {
    $('#flattenerForm').on('submit', function (event) {
        // keeps the console from getting cleared
        event.preventDefault();

        const balance = $('#balance').val();
        const price = $('#price').val();
        const points = $('#points').val();

        flattener(balance, price, points);
    });
});

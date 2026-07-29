# My Website

- [unemotioned.com](https://www.unemotioned.com)

---

## Balance Flattener

Calculates how much points to use to flatten the bank account.

### Logic

```js
const flattener = function (balance, price, points) {
  const pointsDigit = String(points).length;

  for (let i = 1; i <= pointsDigit; i++) {
    const n = 10 ** i;
    const pointsToUse = n - ((balance - price) % n);

    if (pointsToUse > points) {
      break;
    }

    console.log("Points to use: ", pointsToUse);
  }
};
```

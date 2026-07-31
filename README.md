# My Website

- [unemotioned.com](https://www.unemotioned.com)

---

## Balance Flattener

Calculates how much points to use to flatten the bank account.

### Logic

```js
const flattener = function (balance, price, points) {
  const pointsDigit = String(points).length;
  const usedPoints = new Set(); // to remove duplication

  for (let i = 1; i <= pointsDigit; i++) {
    const n = 10 ** i;
    const pointsToUse = n - ((balance - price) % n);

    if (pointsToUse > points) {
      break;
    }

    // skip if duplicated or nothing to flatten
    if (usedPoints.has(pointsToUse) || pointsToUse === n) {
      continue;
    }

    console.log("Points to use: ", pointsToUse);

    // stop if maximum usable points is reached
    if (pointsToUse === points) {
      break;
    }

    usedPoints.add(pointsToUse);
  }
};
```

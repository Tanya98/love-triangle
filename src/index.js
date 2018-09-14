/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let length = preferences.length;
    let result = 0;
    for (let i = 0; i < length; i++) {

        let lover1 = preferences[i] - 1;
        if (lover1 == i)
            continue;

        let lover2 = preferences[lover1[i]] - 1;
        if (lover1 == lover2)
            continue;

        let lover3 = preferences[lover2[i]] - 1;
        if (lover3 == lover2)
            continue;
        if (lover3 == i) {
            result++;
        }

    }
    return result / 3;
};


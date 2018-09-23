/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    let length = preferences.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
        let nextlover = preferences[i] - 1;
        if (nextlover == i) continue;
        let nextnextlover = preferences[nextlover] - 1;
        if (nextlover == nextnextlover) continue;
        let nextnextnextlover = preferences[nextnextlover] - 1;
        if (nextnextnextlover == nextnextlover) continue;
        if (nextnextnextlover == i) {
            count++;
        }
    }
    return count / 3;
}


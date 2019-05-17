// const levels = ['#', '##','###','####','#####','######','#######'];

/** Attempt #1
    for (let x = 0; x < levels.length; x++) {
        console.log(levels[x]);
    }
*/

/* Attempt #2
    for(let level of levels) {
        console.log(level);
    }
*/

/* Attempt #3 */
for (let level = '#'; level.length <= 7; level+='#') {
    console.log(level);
}

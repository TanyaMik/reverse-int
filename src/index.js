module.exports = function reverse(n) {
    let str = n.toString();
    let array = str.split('');
    let revArray = array.reverse();
    let revStr = revArray.join('');
    return parseInt(revStr);
}

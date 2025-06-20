const palindromes = function (str) {
    str = str.toLowerCase();
    let forward = 0;
    let reverse = str.length - 1;
    const punctuation = ' .,:;!?\'"()-[]{}/\\@#$%^&*_+|=~`<>'
    while (forward < (str.length / 2)){
        while (punctuation.includes(str[forward])){
            forward++;
        }
        while (punctuation.includes(str[reverse])){
            reverse--;
        }
        if (str[forward] !== str[reverse]){
            return false;
        }
        forward++;
        reverse--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

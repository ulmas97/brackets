module.exports = function check(str, bracketsConfig) {
    let checkStr = (searchClosed) => {
        let currentChar = str[0];
        str = str.slice(1);
        if (searchClosed !== undefined && currentChar === searchClosed) {
            return true;
        } else {
            let currentBrackets = bracketsConfig.find(x => x[0] === currentChar);
            if (currentBrackets === undefined) return false;
            let ret = (checkStr(currentBrackets[1]) && (searchClosed === undefined || checkStr(searchClosed)));
            return ret;
        }
    };
    let retValue = true;
    while (str && str.length > 0 && retValue) {
        retValue = (retValue && checkStr());
    }
    return retValue;
}

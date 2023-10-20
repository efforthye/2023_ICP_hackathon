function addCommasToNumber(number) {
    // 숫자를 문자열로 변환

    let numberStr;
    if (number.type == 'number') {
        numberStr = number.toString();
    } else {
        numberStr = number;
    }

    // 천 단위마다 컴마 추가
    return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export { addCommasToNumber };

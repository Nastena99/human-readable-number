module.exports = function toReadable (number) {
  const number_0_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


  //* 0 - 19 */
  if (number >= 0 && number <= 19) {
    for (let i = 0; i < number_0_19.length; i++) {
      if (number == i) return number_0_19[i];
    }
  }

  //* 20 - 99 */
  if (number >= 20 && number <= 99) {
    let numWord = '';
    const arrNum = String(number).split('').map(elem => Number(elem));
    console.log(arrNum);

    /* 1 */
    for (let i = 2; i < dozens.length; i++) {
      console.log(i);
      if (arrNum[0] == i) numWord += dozens[i];
    }

    /* 2 */
    for (let i = 0; i < number_0_19.length; i++) {
      if (arrNum[1] == 0) continue;
      else if (arrNum[1] == i) numWord +=` ${number_0_19[i]}`;
    }

    return numWord
    
  }

  //* 100 - 999 */
  if (number >= 100 && number <= 999) {
    let numWord = '';
    const arrNum = String(number).split('');

    /* one hundred  */
    for (let i = 0; i < number_0_19.length; i++) {

      if (arrNum[0] == i) numWord = `${number_0_19[i]} hundred`;
    }   
    
    /* 2+3 */
    for (let i = 0; i < arrNum.length; i++) {
      while (arrNum[i].length <= i) {
        arrNum[i] += arrNum[i + 1];
        arrNum.splice(i + 1, 1);
      }
    }   

    /* ...hundred 01 - ...hundred 19 */
    if (+arrNum[1] >= 0 && +arrNum[1] <= 19) {
      for (let i = 0; i < number_0_19.length; i++) {
        if (+arrNum[1] == 0) continue;    
        if (+arrNum[1] == i) numWord += ` ${number_0_19[i]}`;
      }
    }

    /* ...hundred 20 - ...hundred 99 */
    if (+arrNum[1] >= 20 && +arrNum[1] <= 99) {
      const decimal = String(+arrNum[1]).split('');
      console.log(decimal);

      /* 1 */
      for (let i = 2; i < dozens.length; i++) {
        if (decimal[0] == i) numWord += ` ${dozens[i]}`;
      }

      /* 2 */
      for (let i = 0; i < number_0_19.length; i++) {
        if (decimal[1] == 0) continue;
        else if (decimal[1] == i) numWord += ` ${number_0_19[i]}`;
      }
    
    }

    console.log(arrNum);

    return numWord;
    
  }

}

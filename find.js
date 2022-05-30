function getCheckboxValue()  {
    const query = 'input[name="restType"]:checked';
    const selectedEls = 
        document.querySelectorAll(query);
    
    let result = '';
    selectedEls.forEach((el) => {
      result += el.value + ' ';
    });
    
    document.getElementById('result').innerText
      = result;
  }
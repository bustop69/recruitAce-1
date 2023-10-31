const formatCurrency = (salary) => {
    // Convert the input string to a number
    const number = parseFloat(salary);
  
    if (isNaN(number)) {
      return 'Invalid Number';
    }
      const formattedCurrency = '£' + number.toLocaleString('en-GB');
  
    return formattedCurrency;
  };

  export default formatCurrency;
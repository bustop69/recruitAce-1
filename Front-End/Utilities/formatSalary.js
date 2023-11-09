const FormatSalary = (salary) => {
    const salaryNumber = parseFloat(salary);
    const roundedSalary = Math.round(salaryNumber / 1000);
  
    return `${roundedSalary}k`;
  };

  export default FormatSalary;
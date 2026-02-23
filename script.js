let calculation = localStorage.getItem('calculation') || '';
      document.querySelector('.js-displayText').innerHTML = calculation;
      
      function updateFunction(input){
        localStorage.setItem('calculation', localStorage.getItem('calculation') + input);
        calculation += input;
        console.log(calculation);
        document.querySelector('.js-displayText').innerHTML = calculation;
      }
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.template-dynamic-discount')) {
    sessionStorage.setItem('discount', 'monthly');
  }
  
  const monthly = sessionStorage.getItem('discount')
  
  if (document.querySelector('.template-dynamic-discount') && monthly) {
    let dateToReplace = document.querySelectorAll('[data-dynamic-date]');
    let priceToReplace = document.querySelectorAll('[data-dynamic-price]');

    function replaceDate(dateToReplace) {
      for(let element of dateToReplace) {
        element.textContent = "mes";
      }
    }

    function replacePrice(priceToReplace) {
      for(let element of priceToReplace) {
        element.textContent = 6;
      }
    }
    
    if(dateToReplace) {
      replaceDate(dateToReplace)
    }

    if(priceToReplace) {
      replacePrice(priceToReplace)
    }
  }

  if (document.querySelector('.template-dynamic-discount') == null  && monthly) {
    sessionStorage.removeItem('discount');
  }
});
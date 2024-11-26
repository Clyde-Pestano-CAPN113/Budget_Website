/*family
onclick: change this picture to another picture

document.getElementById('childcare_and_education').onclick = function() {
  const currentSrc = this.src;
  const image1 = '../information_img/education-and-childcare-logo.png';
  const image2 = '../information_img/Screenshot 2024-11-19 091825.png';

  if(currentSrc.endsWith(image1)) {
    this.src = image2;
  }else if(currentSrc.endsWith(image2)) {
    this.src = image1;
  }else {
    alert('error');
  }
}
  */
 //everyday money
function calculateTotal() {
  let total = 0; 
  const amounts = document.querySelectorAll('#amount');

  amounts.forEach(input => {
      const value = parseFloat(input.value); 
      if (!isNaN(value)) {
        total += value;
      }
  });

  const totalDisplay = document.getElementById('total_display');
  totalDisplay.textContent = `$${total.toFixed(2)}`; 
}
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('total_button').addEventListener('click', calculateTotal);
});



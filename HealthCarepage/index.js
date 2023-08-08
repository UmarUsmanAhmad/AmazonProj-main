function ShowCartbox(event) {
    const cartBox = document.getElementById('cart-box');
    const cartIcon = document.querySelector('.Cart');
  
    if (cartIcon.contains(event.target)) {
      cartBox.style.visibility = 'visible';
      cartBox.style.right = '0';
    } else if (!cartBox.contains(event.target)) {
  
      cartBox.style.visibility = 'hidden';
      cartBox.style.right = '0';
    }
  }
  
  document.addEventListener('click', ShowCartbox);

  

  function loginwebsitefun(){
    window.location.href= "../Login/index.html";
  }
  function homepage(){
    window.location.href= "../mainpage/index.html";
  
  }
document.addEventListener('DOMContentLoaded', () => {
    const voucherButtons = document.querySelectorAll('.button_voucher');
    
    voucherButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.toggle('active');
        
        const buttonText = button.querySelector('.button_voucher_text');
        if (button.classList.contains('active')) {
          buttonText.textContent = 'Đã lấy';
        } else {
          buttonText.textContent = 'Lấy mã';
        }
      });
    });
});
document.addEventListener("DOMContentLoaded", function(){
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item=>{
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    header.addEventListener('click',()=>{
      item.classList.toggle('active');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  const appointmentButtons = document.querySelectorAll(".appointment-button");
  appointmentButtons.forEach(function(button){
    button.onclick = function(){
      window.location.href = '#appointment-form';
    };
  });
  const desktopButtons = document.querySelectorAll(".desktop-button");
  desktopButtons.forEach(function(button){
    button.onclick = function(){
      const url = button.getAttribute('data-url');
      window.open(url, '_blank');
    };
  });
});
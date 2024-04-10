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
});
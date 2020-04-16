'use strict'

{
  const menuItems = document.querySelectorAll('.menu li a');

  menuItems.forEach(itemClick => {
    itemClick.addEventListener('click', e =>{
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      itemClick.classList.add('active');
    });
  });
}
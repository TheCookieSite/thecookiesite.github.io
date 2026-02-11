document.addEventListener('DOMContentLoaded', () => {

  const cursor = document.createElement('img');
  cursor.src = '/media/mouse_default64.png';
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  });

  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      cursor.src = '/media/mouse_pointer64.png';
    });

    link.addEventListener('mouseleave', () => {
      cursor.src = '/media/mouse_default64.png';
    });
  });

});
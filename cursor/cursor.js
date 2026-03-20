document.addEventListener('DOMContentLoaded', () => {

  const cursor = document.createElement('img');
  cursor.src = '/cursor/mouse_default.webp';
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  let clientLeft;
  let clientTop;

  document.addEventListener('mousemove', (event) => {
    clientLeft = event.clientX
    clientTop = event.clientY
    cursor.style.left = clientLeft + 'px';
    cursor.style.top = event.clientY + 'px';
  });

  const links = document.querySelectorAll('a');

  const texts = document.querySelectorAll('p')

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      cursor.src = '/cursor/mouse_pointer.webp';
    });

    link.addEventListener('mouseleave', () => {
      cursor.src = '/cursor/mouse_default.webp';
    });
  });

  document.addEventListener("visibilitychange", () => {
    if(cursor.style.display === "none"){
      cursor.style.display = "unset";
    }
    else{
      cursor.style.display = "none";
    }
    
  });
});
document.addEventListener('DOMContentLoaded', () => {

  const cursor = document.createElement('img');
  cursor.src = '/cursor/mouse_default.png';
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  });

  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      cursor.src = '/cursor/mouse_pointer.png';
    });

    link.addEventListener('mouseleave', () => {
      cursor.src = '/cursor/mouse_default.png';
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
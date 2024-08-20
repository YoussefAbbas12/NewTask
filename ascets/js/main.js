let li = document.querySelectorAll('.navItem');

li.forEach(item => {
  item.addEventListener('click', () => {
    let theLine = document.querySelectorAll(".theLine");
    theLine.forEach(lin => lin.style.transform = "translateX(-20px)");
    
    li.forEach(el => el.classList.remove('activeNavItem'));
    item.classList.add('activeNavItem');
    // const theLineElement = item.nextElementSibling;
    const theLineElement = item.closest('li').nextElementSibling;
    theLineElement.style.transform = "translateX(0)";
  });
});
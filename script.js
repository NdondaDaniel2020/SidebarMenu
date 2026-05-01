const toggleButtons = document.querySelectorAll('.dropdown-btn');
const sidebar = document.querySelector('#sidebar');
const toggleBtn = document.querySelector('#toggle-btn');

function toggleSidebar()
{
    if (!sidebar) return;
    sidebar.classList.toggle('close');
    toggleBtn.classList.toggle('rotate');
    
    Array.from(sidebar.querySelectorAll('.show')).forEach((subMenu) => {
        subMenu.classList.remove('show');
        subMenu.previousElementSibling?.classList.remove('rotate');
    });
}

function toggleSubMenu(button)
{
    if (!button) return;
    
    const subMenuContainer = button.nextElementSibling;
    const subMenu = subMenuContainer?.classList.contains('sub-menu')
        ? subMenuContainer
        : subMenuContainer?.querySelector('.sub-menu');
    
    if (!subMenu) return;

    if (!subMenu.classList.contains('show')) {
        closeAllSubMenu();
    }
    
    subMenu.classList.toggle('show');
    button.classList.toggle('rotate');

    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleBtn.classList.toggle('rotate');
    }
}

function closeAllSubMenu()
{
    Array.from(sidebar.querySelectorAll('.show')).forEach((subMenu) => {
        subMenu.classList.remove('show');
        subMenu.previousElementSibling?.classList.remove('rotate');
    });
}
    

if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleSidebar);
}

toggleButtons.forEach((button) => {
    button.addEventListener('click', () => toggleSubMenu(button));
});
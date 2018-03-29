const navItems = document.getElementsByTagName('a');





for (let i = 0; i < navItems.length; i += 1) {
navItems[i].addEventListener('mouseover', () => {
    navItems[i].textContent = navItems[i].textContent.toUpperCase()
});

navItems[i].addEventListener('mouseout', () => {
    navItems[i].textContent = navItems[i].textContent.toLowerCase()
});
}
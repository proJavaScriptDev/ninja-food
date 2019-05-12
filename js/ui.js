document.addEventListener("DOMContentLoaded", function() {
    //nav menu
    const menus = document.querySelector('.side-menu');
    M.Sidenav.init(menus, {edge: "right"});
    //add recipe forms
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'left'});
});

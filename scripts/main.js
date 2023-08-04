//
// Activate sign (in/up) form on the top of the webpage
//

function show_sign_form()
{
    let form = document.getElementById('my_sign_form');
    let back = document.getElementById('main_container');
    form.style.setProperty('transform', 'translateY(0px)');
    back.style.setProperty('filter', 'var(--blurMain)');
}

function hide_sign_form()
{
    let form = document.getElementById('my_sign_form');
    let back = document.getElementById('main_container');
    form.style.setProperty('transform', 'translateY(-80vh)');
    back.style.setProperty('filter', 'none');
}
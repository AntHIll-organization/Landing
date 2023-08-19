//
// Activate sign (in/up) form on the top of the webpage
//

function show_sign_form()
{
    let form = document.getElementById('my_sign_form');
    let back = document.getElementById('main_container');
    form.style.setProperty('transform', 'translateY(0vh)');
    back.style.setProperty('filter', 'var(--blurMain)');
}

function hide_sign_form()
{
    let form = document.getElementById('my_sign_form');
    let back = document.getElementById('main_container');
    form.style.setProperty('transform', 'translateY(-160vh)');
    back.style.setProperty('filter', 'none');
}

//
// Invert some CSS elements
//

function invert_css() {
    const items = document.querySelectorAll('.social');
    items.forEach((element) =>
    {
        if (document.body.classList.contains('darkmode'))
            element.style.setProperty('filter', 'invert(0%)');
        else
            element.style.setProperty('filter', 'invert(100%)');
    });
}

//
// Toggle light/dark mode on clicking "Theme" button
//

function toggle_dark_mode()
{
    document.body.classList.toggle('darkmode');
    window.localStorage.setItem("darkmode", (document.body.classList.contains('darkmode')));
    invert_css();
}

//
// When loading webpage, check if dark mode is enabled using localStorage in web browser
// and toggle CSS dark mode if need
//

function check_dark_mode()
{
    if (window.localStorage.getItem('darkmode') === 'true') document.body.classList.add('darkmode');
    invert_css();
}

//
// Window load event
//

window.onload = check_dark_mode();
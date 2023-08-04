// This JS file describes some animations
// that can't be done using CSS only

//
// anim_terminal
//
// Rotating terminal window on main website page
// depending on mouse cursor position
//

function anim_terminal(mouseX, mouseY) // We can get mouseX & mouseY by using 'mousemove' event listener
{
    let win_w = window.innerWidth / 2;
    let win_h = window.innerHeight / 2;
    let rotX = (mouseX - win_w) / 15;
    // let rotX = 0;
    let rotY = (mouseY - win_h) / 15;
    // let rotY = 0;
    // let rotZ = ((mouseX+mouseY) - (win_w+win_h)) / 15;
    let rotZ = 0;
    document.getElementById('terminal').style.setProperty('--rotX', rotX + "deg");
    document.getElementById('terminal').style.setProperty('--rotY', rotY + "deg");
    document.getElementById('terminal').style.setProperty('--rotZ', rotZ + "deg");
}
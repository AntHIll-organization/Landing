// This JS file describes terminal animations (used on index page only)

var asciifetch = `

 .d888888             dP   dP     dP  oo dP        dP        ----------- root@localhost -----------
d8'    88             88   88     88     88        88        [Location]   Belarus & Russia
88aaaaa88a 88d888b. d8888P 88aaaaa88a dP 88        88        [What we do] Web Development/Design
88     88  88'  \`88   88   88     88  88 88        88        [Founded in] May 2023
88     88  88    88   88   88     88  88 88        88        [People]     0x05
88     88  dP    dP   dP   dP     dP  dP 88888888P 88888888P [Socials]    GitHub, Discord, Telegram

`;

function terminal_rotate() // Rotate on scroll
{
    var scrollY = window.scrollY / 36;
    var terminal = document.getElementById('terminal');
    terminal.style.setProperty('transform', 'rotateX(' + scrollY + 'deg)');
};

function terminal_type() // Type some stuff into terminal
{
    var i = 0, isTag = false;
    var prompt = 'root@localhost:~# '
    var command = 'asciifetch ';
    var terminal = document.getElementById('terminal');
    function type()
    {
        var text = command.slice(0, i++);
        if (text === command) return;
        terminal.innerHTML = prompt + text + `<span class='terminal_cursor'>_</span>`;
        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;
        if (isTag) return type();
        setTimeout(type, 50);
    };
    function type2()
    {
        var text = asciifetch.slice(0, i+=10);
        if (text === asciifetch) { type3(); return; }
        terminal.innerHTML = prompt + command + '<br>' + `<pre>` + text + `<span class='terminal_cursor'>_</span></pre>`;
        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;
        if (isTag) return type();
        setTimeout(type2, 1);
    };
    function type3()
    {
        terminal.innerHTML = prompt + command + '<br>' + `<pre>` + asciifetch + `</pre>` + prompt + `<span class='terminal_cursor'>_</span>`;
    };
    type();
    setTimeout(type2, 2000);
}

window.onscroll = terminal_rotate;
setTimeout(terminal_type, 5000);
//
// This script will display team members in random order
// (team.html webpage)
//

//
// Create team member object
//
// avatar = path to image file
// socials = HTML tags (<a href="url">Social</a>)
//

function teamMember(avatar, name, description, socials)
{
    let member = {
        name: name,
        description: description,
        socials: socials,
        avatar: avatar
    };
    return member;
}

// Team array

let team = [
    teamMember("assets/img/default_avatar.png",
               "Team Member 1",
               "Hello! I am super mega cool team member!",
               "<a href='https://github.com'>GitHub</a>"),
    teamMember("assets/img/default_avatar.png",
               "Team Member 2",
               "Hello! I am super mega cool team member!",
               "<a href='https://github.com'>GitHub</a>"),
    teamMember("assets/img/default_avatar.png",
               "Team Member 3",
               "Hello! I am super mega cool team member!",
               "<a href='https://github.com'>GitHub</a>"),
    teamMember("assets/img/default_avatar.png",
               "Team Member 4",
               "Hello! I am super mega cool team member!",
               "<a href='https://github.com'>GitHub</a>")               
];

// Generate teammate cards and place them on webpage!

for (let i = 0; i < team.length; i++)
{
    let a = Math.round(Math.random() * team.length);
    let b = Math.round(Math.random() * team.length);
    if (a === team.length) a = team.length - 1;
    if (b === team.length) b = team.length - 1;
    let x = team[a];
    let y = team[b];
    team[a] = y;
    team[b] = x;
};

let team_display = document.getElementById('team_display');

for (let i = 0; i < team.length; i++)
{
    let name = team.at(i).name;
    let description = team.at(i).description;
    let avatar = team.at(i).avatar;
    let socials = team.at(i).socials;
    team_display.innerHTML += `
        <div class="teammate">
        <img class="teammate_avatar" src="${avatar}">
        <div class="teammate_info">
            <h1>${name}</h1>
            <p>${description}</p>
            <p>${socials}</p>
            <br>
        </div>
        </div><br>        
    `;
};

/*

        <div class="teammate">
        <img class="teammate_avatar" src="${avatar}">
        <div class="teammate_info">
            <h1>${name}</h1>
            <p>${description}</p>
            <p>${socials}</p>
            <br>
        </div>
        </div>  

*/
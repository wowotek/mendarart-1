function templateComment(
    avatarUrl = null,
    username = null,
    date = null,
    content = null
) {
    if(avatarUrl == null || avatarUrl == "") {
        avatarUrl = "/asset/img/default-profile-pic.jpg";
    }
    if(username == null || username == "") {
        username = "@LoremIpsumDolorSitAmetAoAaa123";
    }
    if(date == null || date == "") {
        date = "5 Jam";
    }
    if(content == null || content == "") {
        content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas";
    }

    return `<div class="comment">
        <img class="comment-avatar" src="${avatarUrl}">
        <div class="comment-username"><b>${username}</b></div>
        <div class="comment-date">· ${date}</div>
        <div class="comment-content">${content}</div>
    </div>`;
}

function addComment(
    avatarUrl = null,
    username = null,
    date = null,
    content = null
){ 
    document.getElementById("comment-container").innerHTML += templateComment(
        avatarUrl,
        username,
        date,
        content
    );
}

for(let i=0; i<100; i++) {
    addComment();
}
function renderHeaderChat(avatar, name) {
  let header = `
    <img class='avatar-chat' src='${avatar}' alt='user-avatar'>
    <div>
      <div class='chat-name'>${name}</div>
      <div class='user-chat-status'>Active now</div>
    </div>
  `;
  document.getElementById('header-chat').innerHTML = header;
}

function renderUserOnline(avatar, name) {
  
}
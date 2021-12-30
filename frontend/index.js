let typeListFriend = 'online';
let listFriendOnline;
let listFriendHistory;

function renderHeaderChat(avatar, name, state) {
  let header = `
    <img class='avatar-chat' src='${avatar}' alt='user-avatar'>
    <div>
      <div class='chat-name'>${name}</div>
      <div class='user-chat-status'>${state === 'online' ? 'Active now' : 'Offline'}</div>
    </div>
  `;
  document.getElementById('header-chat').innerHTML = header;
}

function changeList(type) {
  if(typeListFriend === type) return;
  typeListFriend = type;
  if(type === 'online') {
    document.getElementById('chat-field-title-online').style.backgroundColor = 'rgb(238, 238, 238)';
    document.getElementById('chat-field-title-history').style.backgroundColor = 'rgb(211, 211, 211)';
  } else {
    document.getElementById('chat-field-title-history').style.backgroundColor = 'rgb(238, 238, 238)';
    document.getElementById('chat-field-title-online').style.backgroundColor = 'rgb(211, 211, 211)';
  }
  renderListFriend(type);
}

function renderListFriend(type) {
  if(type === 'online') {
    renderListFriendOnline();
  } else {
    renderListFriendHistory();
  }
}

async function renderListFriendOnline() {
  if(listFriendOnline === undefined) {
    // request API get list friend online
    // fake data
    listFriendOnline = [];
  }
  for(let i = 0; i < listFriendOnline.length; i++) {

  }
}

async function renderListFriendHistory() {
  if(listFriendHistory === undefined) {
    // request API get chat history
    // fake data
    listFriendHistory = []
  }
}

function renderFriendOnline(name, avatar) {

}

function renderFriendHistory(name, avatar, latestMessage, isRead) {
  
}


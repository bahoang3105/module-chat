let typeListFriend = 'online';
let listFriendOnline;
let listFriendHistory;

const renderHeaderChat = (avatar, name, state) => {
  let header = `
    <img class='avatar-chat' src='${avatar}' alt='user-avatar'>
    <div>
      <div class='chat-name'>${name}</div>
      <div class='user-chat-status'>${state === 'online' ? 'Active now' : 'Offline'}</div>
    </div>
  `;
  document.getElementById('header-chat').innerHTML = header;
}

const changeList = async (type) => {
  if(typeListFriend === type) return;
  typeListFriend = type;
  if(type === 'online') {
    document.getElementById('chat-field-title-online').style.backgroundColor = 'rgb(238, 238, 238)';
    document.getElementById('chat-field-title-history').style.backgroundColor = 'rgb(211, 211, 211)';
  } else {
    document.getElementById('chat-field-title-history').style.backgroundColor = 'rgb(238, 238, 238)';
    document.getElementById('chat-field-title-online').style.backgroundColor = 'rgb(211, 211, 211)';
  }
  await renderListFriend(type);
}

const renderListFriend = async (type) => {
  if(type === 'online') {
    return await renderListFriendOnline();
  } 
  return await renderListFriendHistory();
}

const renderListFriendOnline = async () => {
  if(listFriendOnline === undefined) {
    // request API get list friend online
    // fake data
    listFriendOnline = [
      { name: 'Pleiku', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eso.org%2Fpublic%2Fimages%2F&psig=AOvVaw24ES4b1aThwyZ5BmTgBKrD&ust=1640947340141000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDFw66ri_UCFQAAAAAdAAAAABAE' },
      { name: 'Hoang Anh', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eso.org%2Fpublic%2Fimages%2F&psig=AOvVaw24ES4b1aThwyZ5BmTgBKrD&ust=1640947340141000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDFw66ri_UCFQAAAAAdAAAAABAE' },
      { name: 'Gia Lai', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eso.org%2Fpublic%2Fimages%2F&psig=AOvVaw24ES4b1aThwyZ5BmTgBKrD&ust=1640947340141000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDFw66ri_UCFQAAAAAdAAAAABAE' },
      { name: 'Suduku', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eso.org%2Fpublic%2Fimages%2F&psig=AOvVaw24ES4b1aThwyZ5BmTgBKrD&ust=1640947340141000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDFw66ri_UCFQAAAAAdAAAAABAE' },
      { name: 'Bokukiko', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eso.org%2Fpublic%2Fimages%2F&psig=AOvVaw24ES4b1aThwyZ5BmTgBKrD&ust=1640947340141000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDFw66ri_UCFQAAAAAdAAAAABAE' },
      { name: 'Meo Meo', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eso.org%2Fpublic%2Fimages%2F&psig=AOvVaw24ES4b1aThwyZ5BmTgBKrD&ust=1640947340141000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDFw66ri_UCFQAAAAAdAAAAABAE' },
      { name: 'Yen', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eso.org%2Fpublic%2Fimages%2F&psig=AOvVaw24ES4b1aThwyZ5BmTgBKrD&ust=1640947340141000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDFw66ri_UCFQAAAAAdAAAAABAE' },
    ];
  }
  let listFriend = `<div>${listFriendOnline.map(friend => renderFriendOnline(friend.name, friend.avatar))}</div>`;
  // let listFriend = '<div>';
  // for(let i = 0; i < listFriendOnline.length; i++) {
  //   listFriend = listFriend + renderFriendOnline(listFriendOnline[i].name, listFriendOnline[i].avatar);
  // }
  // listFriend = listFriend + '</div>';
  document.getElementById('list-friend-chat').innerHTML = listFriend;
}

const renderListFriendHistory = async () => {
  if(listFriendHistory === undefined) {
    // request API get chat history
    // fake data
    listFriendHistory = []
  }
}

const renderFriendOnline = (name, avatar) => {
  return `<div>${name}</div>`;
}

const renderFriendHistory = (name, avatar, latestMessage, isRead) => {

}


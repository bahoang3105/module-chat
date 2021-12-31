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
      { name: 'Pleiku', avatar: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg' },
      { name: 'Hoang Anh', avatar: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg' },
      { name: 'Gia Lai', avatar: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg' },
      { name: 'Suduku', avatar: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg' },
      { name: 'Bokukiko', avatar: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg' },
      { name: 'Meo Meo', avatar: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg' },
      { name: 'Yen', avatar: 'https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg' },
    ];
  }
  let listFriend = '<div>';
  for(let i = 0; i < listFriendOnline.length; i++) {
    listFriend = listFriend + renderFriendOnline(listFriendOnline[i].name, listFriendOnline[i].avatar);
  }
  listFriend = listFriend + '</div>';
  document.getElementById('list-friend-chat').innerHTML = listFriend;
}

const renderListFriendHistory = async () => {
  if(listFriendHistory === undefined) {
    // request API get chat history
    // fake data
    listFriendHistory = [];
  }
}

const renderFriendOnline = (name, avatar)=> {
  return `
    <div class='friend-chat-item'>
      <img class='friend-chat-item-avatar' src="${avatar}">
      <div>
        <div class='friend-chat-item-name'>
          ${name}
        </div>
      </div>
      <div class='dot online'></div>
    </div>
  `;
}

const renderFriendHistory = (name, avatar, latestMessage, isRead) => {
  return `
    <div class='friend-chat-item'>
      <img class='friend-chat-item-avatar' src="${avatar}">
      <div>
        <div class='friend-chat-item-name'>
          ${name}
        </div>
      </div>
      <div class='dot online'></div>
    </div>
  `;
}


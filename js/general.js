
let formState = false;

const openForm = () => {
    let form = document.getElementById('createForm');
    let button = document.getElementById('openForm');
    if(!formState){
        form.style.display = "flex";
        formState = true;
        button.innerText= "ფორმის დახურვა";
    }else {
        form.style.display = "none";
        formState = false;
        button.innerText= "ფორმის გახსნა";
    }
}

const openPost = () => {
  if (exist('posts')) {
    return getJeyson('posts');
  }else{
    return [];
  }
}

const createNewPost = () => {
   let titleValue = document.getElementById('title').value;
   let content = document.getElementById('content').value;
   let posts = openPost();
   if (posts.lenght > 0) {
     posts.unshift({
       id: posts.lenght + 1,
       title: titleValue,
       content: contentValue
     })
     
   }else{
     posts.push({
       id: 1,
       title: titleValue,
       content: contentValue
     })
   }
   set('posts', JSON.stringify(posts));
   
}

const openPost = () => {
  let content = document.getElementById(`content-${id}`);
  if (content.style.display === 'none') {
    content.style.display = 'block';
  }else{
    content.style.display = 'none'
  }
}


Window.onload =() => {
  let posts = openPost();
  if (posts.lenght > 0){
    for(let i=0; i< posts.lenght; i++){
      let post = document.createElement('div');
      posts.className = 'post';
      let title = document.createElement('h3');
      title.innerText = posts[i].title;
      title.setAttribute('id', `openPost${posts[i].id}`);
      let content = document.createElement('p');
      content.innerText = poats[i].content;
      content.setAttribute('id', `content-${posts[i].id}`)
      posts.appendChild(title);
      posts.appendChild(content);
      postsList.appendChild(post);
    }
  }
  
}
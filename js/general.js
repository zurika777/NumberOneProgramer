
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

const getPost = () => {
  if (exists('posts')) {
    return getJson('posts');
  }else{
    return [];
  }
}

const createNewPost = () => {
   let titleValue = document.getElementById('title').value;
   let contentValue = document.getElementById('content').value;
   let posts = getPost();
   if (posts.length > 0) {
     posts.unshift({
       id: posts.length + 1,
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

const openPost = (id) => {
  let content = document.getElementById(`content-${id}`);
  if (content.style.display === 'none' || !content.style.display) {
    content.style.display = 'block';
      console.log(content.style.display)
  }else{
    content.style.display = 'none'
  }
}

const createPostHTML  = (value) => {
let post = document.createElement('div');
      post.className = 'post';
      let title = document.createElement('h3');
      title.innerText = value.title;
      title.setAttribute('onclick', `openPost(${value.id})`);
      let content = document.createElement('p');
      content.innerText = value.content;
      content.setAttribute('id', `content-${value.id}`)
      post.appendChild(title);
      post.appendChild(content);
      postList.appendChild(post);
}

window.onload =() => {
  let posts = getPost();
  if (posts.length > 0){
    for(let i=0; i< posts.length; i++){
        createPostHTML(posts[i]);
    }
  }else {
      let post = document.createElement('h3');
      post.innerText = " პოსტები არ არის";
      postList.append(post);
  }

}

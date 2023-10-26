let formState = false;

const openForm = () => {
    let form = document.getElementById('createForm');
    let button = document.getElementById('openForm');
if(!formState){
    form.style.display = "flex";
    formState = true;
    button.innerText = "ფორმის დახურვა";
}else {
    form.style.display = 'none';
    formState = false;
    button.innerText = "ფორმის გახსნა";
}
}

const getPost = () => {
    if(exists("posts")){
        return getJson("posts");
    }else{
        return [];
    }
}

const createNewPost = () => {
    let titleValue = document.getElementById('title').value;
    let contentValue = document.getElementById('content').value;
    let posts = getPost();
    if(posts.length > 0){
        posts.unshift({
            id: posts.length +1,
            title: titleValue,
            content: contentValue
        });
        createNewHtml({
            id: 1,
            title: titleValue,
            content: contentValue
        })
    }else{
        posts.push({
            id: 1,
            title: titleValue,
            content: contentValue
        });
        createNewHtml({
            id: posts.length +1,
            title: titleValue,
            content: contentValue
        })
    }
    set("posts", JSON.stringify(posts));
   document.getElementById("title").value = "";
   document.getElementById("content").value = "";
    openForm();
}



const openPost = (id) => {
    let content = document.getElementById(`content-${id}`);
    console.log(content.style.display === "none");
    if(content.style.display === "none" || !content.style.display){
        content.style.display = "block";
    }else {
        content.style.display = "none";
    }
}

const createNewHtml = (value, top = false) => {
    let noPost = document.getElementById('noPost');
    if(noPost){
        noPost.remove();
    }
    let post = document.createElement('div');
    post.className = "post";
    let title = document.createElement('h3');
    title.innerText = value.title;
    title.setAttribute("onclick", `openPost(${value.id})`);
    let content = document.createElement("p");
    content.innerText = value.content;
    content.setAttribute("id", `content-${value.id}`);
    post.appendChild(title);
    post.appendChild(content);
    if(top){
    postList.append(post);
    }else{
        postList.prepend(post);
    }
}

window.onload = () =>{
    let posts = getPost();
    if(posts.length > 0){
        for(let i=0; i < posts.length; i++){
createNewHtml(posts[i], true);
        }
    }else {
        let post = document.createElement('h3');
        post.innerText = "პოსტი არ არის";
        post.setAttribute("id", "noPost");
        postList.prepend(post);
    }
}




const firstAsinc = async () => {
let result = fetch(path);
    let data = await result.JSON();
    slert(data.noPosts)
}

/*const mydrive = (some) => {
    document.getElementById("demo").innerHTML = some;
}

const calculator = (num1 , num2) => {
    let sum = num1 + num2;
    return sum;
}

let result = calculator(2, 5);
mydrive(result);*/

/*


*/




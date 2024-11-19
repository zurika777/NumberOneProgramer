let formState = false;
let path = "https://raw.githubusercontent.com/zurika777/NumberOneProgramer/main/data/lang.json";
let language = 'ka';
let langs = [];

const openForm =() => {

    let form = document.getElementById('createForm');
    let button  = document.getElementById("openForm");
    if(!formState){
        form.style.display = "flex";
        formState = true;
        button.innerText = langs[language].closeForm;
    }else {
        form.style.display = "none";
        formState = false;
        button.innerText = langs[language].openForm;
    }
}

const getPosts = () => {
    if(exists("posts")){
        return getJson("posts");
    }else{
        return [];
    }
}

const createNewPost = () => {
    let titleValue = document.getElementById('title').value;
    let contentValue = document.getElementById('content').value;
    let posts = getPosts();
    if(posts.length > 0){
        posts.unshift({
            id: posts.length + 1,
            title: titleValue,
            constent: contentValue
        });
        createNewHtml({
            id: 1,
            title: titleValue,
            constent: contentValue
        });
    }else{
        posts.push({
            id: 1,
            title: titleValue,
            content: contentValue
        });
        createNewHtml({
            id: posts.length +1,
            title: titleValue,
            constent: contentValue
        })
    }
    set("posts", JSON.stringify(posts));
    document.getElementById('title').value='';
    document.getElementById('content').value='';
    openForm();

}
const openPost = (id) => {
    let content = document.getElementById(`content-${id}`);
    if(content.style.display === "none" || !content.style.display){
        content.style.display = "block";
    }else{
        content.style.display = "none";
    }
}

const createNewHtml = (value, top = false) => {
    let noPosts = document.getElementById("noPosts");
    if(noPosts){
        noPosts.remove();
    }
    let post = document.createElement('div');
    post.className = "post";
    let title = document.createElement('h3');
    title.setAttribute('onclick', `openPost(${value.id})`);
    title.innerText = value.title;
    let content = document.createElement('p');
    content.setAttribute('id', `content-${value.id}`);
    content.innerText = value.content;
    post.appendChild(title);
    post.appendChild(content);
    if(top){
        postList.append(post);
    }else{
        postList.prepend(post);
    }
}

const swichLanguage = () => {
    if(language === "ka"){
        language ="en";
        document.getElementById('swichLanguage').innerText ="ქართული";
    }else{
        language = 'ka';
         document.getElementById('swichLanguage').innerText ="English";
    }
    document.getElementById('openForm').innerText = langs[language].openForm;
    document.getElementById('noPosts').innerText = langs[language].noPosts;
}

const pageOnload = async  () => {
    let fetchdata = await fetch(path).then((response) => {
        return response.json();
    });
    if(fetchdata){
        langs = fetchdata;
    }
    let posts = getPosts();
    if(posts.length > 0){
        for(let i = 0; i< posts.length; i++){
            createNewHtml(posts[i], true);
        }
    }
    let post = document.createElement('h3');
    post.setAttribute("id", "noPosts");
    post.innerText = langs[language].noPosts;
    postList.prepend(post);
}

window.onload = pageOnload();

/*let formState = false;
let path = "https://raw.githubusercontent.com/zurika777/NumberOneProgramer/main/data/lang.json";
let langs = [];
document.getElementById('swichLanguage').innerText = "English"
let language = "ka";

const openForm = () => {
    let form = document.getElementById('createForm');
    let button = document.getElementById('openForm');
    if(!formState){
        form.style.display = "flex";
        formState = true;
        button.innerText = langs[language].closeForm;
    }else{
        form.style.display = "none";
        formState = false;
        button.innerText = langs[language].openForm;
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
        createNewHtml ({
            id: 1,
            title: titleValue,
            content: contentValue
        });
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
    document.getElementById('title').value ="";
    document.getElementById('content').value ="";
    openForm();
}


const openPost =(id) => {
    let content = document.getElementById(`content-${id}`);
    if(content.style.display === "none" || !content.style.display){
        content.style.display ="block";
    }else{
        content.style.display ="none";
    }
}

const createNewHtml = (value, top = false) => {
    let noPosts = document.getElementById('noPosts');
    if(noPosts){
        noPosts.remove();
    }
            let post = document.createElement('div');
            post.className ="post";
            let title = document.createElement('h3');
            title.innerText = value.title;
    title.setAttribute('onclick', `openPost(${value.id})`);
            let content = document.createElement('p');
            content.innerText = value.content;
    content.setAttribute('id', `content-${value.id}`);
            post.appendChild(title);
            post.appendChild(content);
    if(top){

            postList.append(post);
    }else{
        postList.prepend(post);
    }
}

const swichLanguage = () => {
    if(language === 'ka'){
        language = "en";
        document.getElementById('swichLanguage').innerText = "ქართული";
    }else {
        language ="ka"
         document.getElementById('swichLanguage').innerText = "English";
    }
 document.getElementById('openForm').innerText = langs[language].openForm;
    document.getElementById('noPosts').innerText = langs[language].noPosts;
}

const pageOnload = async () => {
    let fetchData = await fetch(path).then((response) => {
        return response.json();
    });
    if(fetchData){
        langs = fetchData;
    }
        document.getElementById('openForm').innerText = langs[language].openForm;
        // document.getElementById('noPosts').innerText = langs[language].noPosts;

    let posts = getPost();
    if(posts.length > 0){
        for(let i= 0; i < posts.length; i++){

            createNewHtml(posts[i], true);
         }
     }else {
         let post = document.createElement('h3');
            post.setAttribute('id', "noPosts");
            post.innerText = "პოსტი არ მოიძებნა";
        postList.prepend(post);
   }
}

window.onload = pageOnload() ;*/


//let formState = false;
//let language = 'ka';
//document.getElementById("swichLanguage").innerText = "English";
//let path = "https://raw.githubusercontent.com/zurika777/NumberOneProgramer/main/data/lang.json";
//let langs = [];
//
//
//const openForm = () => {
//    let form = document.getElementById('createForm');
//    let button = document.getElementById('openForm');
//if(!formState){
//    form.style.display = "flex";
//    formState = true;
//    button.innerText = langs[language].closeForm;
//}else {
//    form.style.display = 'none';
//    formState = false;
//    button.innerText = langs[language].openForm;
//}
//}
//
//const getPost = () => {
//    if(exists("posts")){
//        return getJson("posts");
//    }else{
//        return [];
//    }
//}
//
//const createNewPost = () => {
//    let titleValue = document.getElementById('title').value;
//    let contentValue = document.getElementById('content').value;
//    let posts = getPost();
//    if(posts.length > 0){
//        posts.unshift({
//            id: posts.length +1,
//            title: titleValue,
//            content: contentValue
//        });
//        createNewHtml({
//            id: 1,
//            title: titleValue,
//            content: contentValue
//        })
//    }else{
//        posts.push({
//            id: 1,
//            title: titleValue,
//            content: contentValue
//        });
//        createNewHtml({
//            id: posts.length +1,
//            title: titleValue,
//            content: contentValue
//        })
//    }
//    set("posts", JSON.stringify(posts));
//   document.getElementById("title").value = "";
//   document.getElementById("content").value = "";
//    openForm();
//}
//
//
//
//const openPost = (id) => {
//    let content = document.getElementById(`content-${id}`);
//    console.log(content.style.display === "none");
//    if(content.style.display === "none" || !content.style.display){
//        content.style.display = "block";
//    }else {
//        content.style.display = "none";
//    }
//}
//
//const createNewHtml = (value, top = false) => {
//    let noPosts = document.getElementById('noPosts');
//    if(noPosts){
//        noPosts.remove();
//    }
//    let post = document.createElement('div');
//    post.className = "post";
//    let title = document.createElement('h3');
//    title.innerText = value.title;
//    title.setAttribute("onclick", `openPost(${value.id})`);
//    let content = document.createElement("p");
//    content.innerText = value.content;
//    content.setAttribute("id", `content-${value.id}`);
//    post.appendChild(title);
//    post.appendChild(content);
//    if(top){
//    postList.append(post);
//    }else{
//        postList.prepend(post);
//    }
//}
//
//
//const swichLanguage = () => {
//
//        if(language === 'ka'){
//
//            language = "en";
//            document.getElementById("swichLanguage").innerText = "ქართული"
//        }else{
//            language = "ka";
//             document.getElementById("swichLanguage").innerText = "English"
//        }
//
//
//     document.getElementById('openForm').innerText = langs[language].openForm;
//     document.getElementById('noPosts').innerText = langs[language].noPosts;
//
//
//}
//
//
//
//const pageOnload = async () => {
//    let fetchData = await fetch(path).then((response) => {
//    return response.json();
//    });
//    if(fetchData){
//        langs = fetchData;
//    }
//    document.getElementById('openForm').innerText = langs[language].openForm;
//    document.getElementById('noPosts').innerText = langs[language].noPosts;
//
//
//let posts = getPost();
//    if(posts.length > 0){
//        for(let i=0; i < posts.length; i++){
//createNewHtml(posts[i], true);
//        }
//    }else {
//        let post = document.createElement('h3');
//        //post.setAttribute("id", "noPosts");
//        //post.innerText = langs[language].noPosts;
//        postList.prepend(post);
//    }
//}
//
//
//window.onload = pageOnload();





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




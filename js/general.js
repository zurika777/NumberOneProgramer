
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

let path = "https://raw.githubusercontent.com/zurika777/NumberOneProgramer/main/data/lang.json";

/*let ajaxExample = new XMLHttpRequest();
ajaxExample.open("GET", path, true);
ajaxExample.onload = function() {
    let data = JSON.parse(this.responseText);
    setTimeout(() => {

    alert(data.noPosts);
    }, 1000)
}
ajaxExample.send();*/


const firstAsync = async () => {
    return   await  fetch(path).then(response => {
      let data =  response.json();

    alert(data.noPosts);
   });



}
firstAsync();

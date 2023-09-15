 let icons = [
    {
        id: 1,
        name:"VM-Scale",
        src:"https://tusharbx00.blob.core.windows.net/box1/10034-icon-service-VM-Scale-Sets.svg"
    },
    {
        id: 2,
        name:"Kubernetes",
        src : "https://tusharbx00.blob.core.windows.net/box1/10023-icon-service-Kubernetes-Services.svg"
    }
]

let all_icon_container = document.getElementById('all_icon_container');
let search_button = document.getElementById('search_button');
let input = document.getElementById("input-box")
let my_icon = document.getElementById("my_icon");




search_button.addEventListener('click' ,(getresult = async ()=>{
    
    if(input.value.trim().length < 1){
        alert('invalid input');
    }

    var searchText = input.value;
    function checkIcon(name) {
        return searchText==name;
      }

    let iconToShow = icons.filter((icon)=>checkIcon(icon.name));

    console.log(iconToShow);

    // all_icon_container.innerHTML="";

    iconToShow.map((icon)=>{
    my_icon.innerHTML =`
    <div class="each_icon">
   <img  class="icon_image" src=${icon.src} alt="icon1">
   <h2 class = "icon_name">${icon.name}</h2>
   </div>
   `
    });
}))


function display(){
    icons.map((icon)=>{
        all_icon_container.innerHTML+=`
         <div class="each_icon">
        <img  class="icon_image" src=${icon.src} alt="icon1">
        <h2 class = "icon_name">${icon.name}</h2>
        </div>
        `
    })
 }
// window.addEventListener("load", display);

display();
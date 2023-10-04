//  import { icons } from "./icons.js";
 let icons = [
    {
        id: 1,
        name:"Anomaly-Detector",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Anomaly-Detector.svg"
    },
    {
        id: 2,
        name:"Azure-Applied-AI-Services",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Azure-Applied-AI-Services.svg"
    },
    {
        id: 3,
        name:"Azure-Experimentation-Studio",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Azure-Experimentation-Studio.svg"
    },
    {
        id: 4,
        name:"Object-Understanding",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Azure-Object-Understanding.svg"
    },
    {
        id: 5,
        name:"Bonsai",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Bonsai.svg"
    },
    {
        id: 6,
        name:"Bot-Services",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Bot-Services.svg"
    },
    {
        id: 7,
        name:"Cognitive-Search",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Cognitive-Search.svg"
    },
    {
        id: 8,
        name:"Computer-Vision",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Computer-Vision.svg"
    },
    {
        id: 9,
        name:"Content-Moderators",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Content-Moderators.svg"
    },
    {
        id: 10,
        name:"Custom-Vision",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Custom-Vision.svg"
    },
    {
        id: 11,
        name:"Face-APIs",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Face-APIs.svg"
    },
    {
        id: 13,
        name:"Form-Recognizer",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Form-Recognizers.svg"
    },
    {
        id: 15,
        name:"Genomics",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Genomics.svg"
    },

    {
        id: 16,
        name:"Immersive-Readers",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Immersive-Readers.svg"
    },
    {
        id: 17,
        name:"Language-Understanding",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Language-Understanding.svg"
    },
    {
        id: 18,
        name:"Personalizers",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Personalizers.svg"
    },{
        id: 19,
        name:"QnA-Makers",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/QnA-Makers.svg"
    },
    {
        id: 20,
        name:"Translator-Text",
        src: "/Azure_Public_Service_Icons/ai_machinelearning/Translator-Text.svg"
    }
]

let all_icon_container = document.getElementById('all_icon_container');
let search_button = document.getElementById('search_button');
let input = document.getElementById("input-box")
let my_icon = document.getElementById("my_icon");


function downloadimage(id){
    console.log("downloading")
    var iconToDownload = icons.filter((icon)=>icon.id == id);

    var ToDownload;
    iconToDownload.map((icon)=>{
         ToDownload = icon;
    });
    let a = document.createElement('a');
    
    a.href = `${ToDownload.src}`;
    a.download = `${ToDownload.name}`;
    a.click();

        // let url = "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  
    // fetch(url).then(res=> res.blob()).then(file =>{
    //     let tempUrl = URL.createObjectURL(file);
    //     let a = document.createElement('a');
    //     // a.href = "AVS.svg";
    //     a.href = tempUrl;
    //     a.download = "filename";
    //     all_icon_container.appendChild(a);
    //     a.click();
    //     a.remove();
    // })
}


search_button.addEventListener('click' ,(async ()=>{
    
    if(input.value.trim().length < 1){
        alert('invalid input');
    }

    var searchText = input.value;
    function checkIcon(name) {
        return searchText==name;
      }

    let iconToShow = icons.filter((icon)=>checkIcon(icon.name));
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
        all_icon_container.innerHTML +=`
         <div class="each_icon">
        <img  class="icon_image" src=${icon.src} alt="icon1"   download >
        <h2 class = "icon_name">${icon.name}</h2>
        
        <button id="download_btn" onClick = "downloadimage(${icon.id})">Download</button>
        </div>
        `
    })
 }
// window.addEventListener("load", display);

display();



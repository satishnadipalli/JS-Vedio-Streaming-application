import { vedioOne } from "./production.js";
import { exportingVedio } from "./production.js";

export let generateplayhtml='';
vedioOne.forEach((element)=>{
    const  htmlll = `
    <div class="remaining-vedio-info" data-vedios = "${element.title}">
            <div class="play-vedio-div">
                <img class="tumb" src="./images/${element.tumbnail}" alt="">
            </div>
            <div class="remaining-vedio-title-inof">
                <div class="title">
                    ${element.title}
                </div>
                <div class="channel-name">
                    <span>${element.channel}</span>
                </div>
                <div class="view-count"> <span>22K views</span> <span>${element.date}</span></div>
                <div class="new">New</div>
            </div>
    </div>
    `;
    generateplayhtml+=htmlll;
});

//-------------------------------------------------------->adding the search fuctionaliity to the search Bar

document.addEventListener('DOMContentLoaded',()=>{
    const playVedios = document.querySelectorAll('.remaining-vedio-info');
    
    document.querySelector('.search-far').addEventListener('input',gettingVedios);

    function gettingVedios(){
        const playSearch = document.querySelector('.search-far');
        const filteringVedios = playSearch.value.toLowerCase();
        playVedios.forEach((elementVedios)=>{
            const getAttrubutes = elementVedios.getAttribute('data-vedios');
            if(getAttrubutes.toLowerCase().includes(filteringVedios)){
                elementVedios.style.display = '';
            }else{
                elementVedios.style.display = 'none';
            }
        })
    }
});



const storingTODo =[];
const  displayElement = document.querySelector('.display-result');
const inputElement = document.querySelector('.input-holder');
const calenderElement= document.querySelector('.calender-selector'); 
const addElement = document.querySelector('.Add');
addElement.addEventListener('click',()=>{
    storing();
});

displayElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('js-button')) {
      const index = e.target.getAttribute('data-index');
      if (index !== null) {
        storingTODo.splice(index, 1);
        AddArray();
      }
    }
  });

function storing(){
    let element = inputElement.value;
    storingTODo.push({
        work : element
    });
    AddArray();
    inputElement.value = '';
}


function AddArray(){
    let addHTML='';

        storingTODo.forEach((arrayElementObject,index)=>{
            let html = `
            <div class="helloworld">
                <div class="image-div-comments">
                    <div class="dis">
                        <div class="image-divi">
                            <img class="comments-profile" src="./images/satishyoube.jpg" alt="">
                        </div>
                        <div class="hello-comment-world">
                            <div class="channel-comments-name"> @satishnadipalli</div>
                            <div class="wrap">${arrayElementObject.work}</div>
                        </div>
                    </div>
                    <div>
                        <div class= "hello-delete-world">
                            <button class='js-button' data-index ="${index}">Delete</button> 
                        </div>
                    </div>
                </div>
            </div>`;                                                                  
             addHTML += html;

    });

    displayElement.innerHTML = addHTML;
    sortingLength();
}



const subscribe = document.querySelector('.sub-btn');
subscribe.addEventListener('click',()=>{
    changeSubscribe();
})
function changeSubscribe(){
    if(subscribe.innerHTML==='Subscribe'){
        subscribe.innerHTML = 'Subscribed';
        subscribe.classList.add('grey');
    }else{
        subscribe.innerHTML = 'Subscribe';
        subscribe.classList.remove('grey');
    }
}
const likeCount = document.querySelector('.like');
const likesCounter = document.querySelector('.likes');
const unlike = document.querySelector('.unlike');
let likes = 24;
likeCount.addEventListener('click',()=>{
    likes+=1;
    console.log(likes)
    likesCounter.innerHTML = likes;
});
unlike.addEventListener('click',()=>{
    likes-=1;
    likesCounter.innerHTML = likes;
});


function sortingLength(){
  
        const sortBy = document.querySelector('.sorting');
        sortBy.innerHTML= storingTODo.length; 


}



document.addEventListener('DOMContentLoaded', function () {
    let page = false;
    document.querySelectorAll('.remaining-vedio-info')
    .forEach((vedioInfo)=>{
        
        vedioInfo.addEventListener('click',()=>{
            if(!page){
                page=true;
                window.location.reload();
            }
            const vedioInformation = vedioInfo.dataset.vedios;
            vedioOne.forEach((vedioOneVedios)=>{
                if(vedioOneVedios.title === vedioInformation){
                    exportingVedio.push(vedioOneVedios);
                }
            })
            localStorage.setItem('exportingVedio',JSON.stringify(exportingVedio));
        })

 })
});


document.addEventListener('DOMContentLoaded',()=>{
    const loader = document.querySelector('.boad');

        const vedioTitles = document.querySelector('.vedio-title');
        const vediottle = `${exportingVedio[exportingVedio.length-1].title}`;
        vedioTitles.innerHTML= vediottle;
        const flexContainer = document.querySelector('.flex-cons');
        const flexcon = `<img class="profile-photo" src="./images/${exportingVedio[exportingVedio.length-1].profile}" alt="" />`;
        flexContainer.innerHTML = flexcon;
      
        const irritated = document.querySelector('.channel-name-vedio');
        const irrihtml = `${exportingVedio[exportingVedio.length-1].channel}`;
        irritated.innerHTML = irrihtml;
        
    setTimeout(()=>{
        const playingVedio = document.querySelector('.vedio-image-div');
        const vedioUrl = `<img class="vedio" src="./images/${exportingVedio[exportingVedio.length-1].tumbnail}" alt="" />`
        playingVedio.innerHTML = vedioUrl;
        loader.classList.add('boad');
    },1000)
    loader.classList.remove('boad');


})

document.querySelector('.remaining-vedio').innerHTML = generateplayhtml;

document.addEventListener('DOMContentLoaded',()=>{
    const sort = document.querySelector('.sort-icon');
    const pos=document.querySelector('.pos');
    var clicks = true;
    sort.addEventListener('click',()=>{
        if(clicks){
            clicks=false;
            pos.classList.remove('pos');
        }else{
            clicks=true;
            pos.classList.add('pos');
        }
    })
   
});

import { vedioOne,nofications } from "./production.js";
import { exportingVedio } from "./production.js";
const twoDivs = document.querySelector('.two-divs');
const loginForm = document.querySelector('.login');
function addArray(){

    const notificationCount = document.querySelector('.notif-indicator');
    let nofigenerateHtml =``;
    nofications.forEach((element , index)=>{

        const htmll = `
        <div class="nooti-vedio" key=${index}>
            <div class="profile-noti-div">
                <img class="profile-image" src="../images/${element.profile}" alt=""> 
                <button class="delete" data-index = "${index}">Delete</button>
            </div>

            <div class="info-noti-div">
            
                <p>${element.infor}</p>
                <p class="hello-span">
                <p  class="hello-spa"> &#183; ${element.update} ago</p>
            </div>            
            <div class="image-noti-div ">
                <img class="image-noti" src="../images/${element.tumbnail}"/>
            </div>
        </div>`;
            nofigenerateHtml+=htmll;
            updateNotificationCount();

            });
         document.querySelector('.notifications-bar').innerHTML=nofigenerateHtml;


        function updateNotificationCount(){
            if(nofications.length<=9){
                notificationCount.innerHTML = nofications.length;
            }else{
                notificationCount.innerHTML = '9+';
            }
        }

}
addArray(); 

document.querySelector('.notifications-bar').addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const index = e.target.getAttribute('data-index');
        if(index != null){
        const deleteButton = document.querySelectorAll('.delete')[index];
        deleteButton.innerHTML = 'Deleting';
        setTimeout(() => {
            nofications.splice(index, 1);
            addArray();
        }, 2000);
        }
    }
});
const positionElement=document.querySelector('.menu');
// -------------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>
// _____________________________ange________________________________________________________________>>>>>>>>>>>>>>>>

    let generatehtml = ``;
vedioOne.forEach((vedio,index) => {
    const html = ` 
    <div class="vedio openVedio" data-vedio = "${vedio.title}">
        <a href = "youtubeopening.html">
            <div class="img-div">
                <img class="tumbnail" src="./images/${vedio.tumbnail}" alt="">
                <div class="time">9:30</div>
            </div>
        </a>
        <div class="profile-divi">
            <div class="profile-photo">
                <img class="p-photo" src="./images/${vedio.profile}" alt="">
            </div>
            <div class="vedio-info">
                <div class="vedio-tittle">
                    <span class="title">${vedio.title}</span>
                </div>
                <div class="author">
                    <span class="author-span">${vedio.channel}</span>
                </div>
                <div class="views"> ${vedio.views} views &#8226; ${vedio.date} ago</div>
            </div>
        </div>
    </div> `;
    generatehtml+=html;
});

const bodyElement = document.querySelector('.body-grid');
bodyElement.innerHTML = generatehtml;  



 

// --------------------------------------------------------> Added search functionallity to the vedios l;
// --------------------------------------------------------> Added some search functionallity to the vedio8-grid;
document.addEventListener('DOMContentLoaded',()=>{
    const vedioElement = document.querySelectorAll('.vedio');

    document.querySelector('.search-bar').addEventListener('input',filterVedios);

    function filterVedios(){
        const SearchElement = document.querySelector('.search-bar');
        const filter = SearchElement.value.toLowerCase();
        vedioElement.forEach((item)=>{
            const vedioTittle = item.getAttribute('data-vedio');
            if(vedioTittle.toLowerCase().includes(filter)){
                item.style.display = '';
            }else{
                item.style.display = 'none';
            }
        }) 
    }
});


document.querySelectorAll('.vedio')
    .forEach((vedioInfo)=>{
        vedioInfo.addEventListener('click',()=>{
            const vedioInformation = vedioInfo.dataset.vedio;
            vedioOne.forEach((vedioOneVedios)=>{
                if(vedioOneVedios.title === vedioInformation){
                    exportingVedio.push(vedioOneVedios);
                }
            })
          localStorage.setItem('exportingVedio',JSON.stringify(exportingVedio));


        })

 })


document.addEventListener('DOMContentLoaded',()=>{
    var clicked=true;
    const profiledivElement = document.querySelector('.js-profile');


    profiledivElement.addEventListener('click',()=>{

        if(clicked){
            clicked=false;
            positionElement.classList.remove('menu');

          
        }else{
            clicked=true;
            setTimeout(()=>{
                positionElement.classList.add('menu');
                loginForm.classList.add('login');
                twoDivs.classList.remove('twoDivsBlur')
            },0.1*2000);
        }
    });
});

//------------------------------------------------------------------------------------------->>>
//____________________________________________________________________________________________.....>>>>

document.addEventListener('DOMContentLoaded',()=>{
    var notiClicked = true;
    const notifElement = document.querySelector(".notif-div");
    const menuElement = document.querySelector('.menu-bar');


    notifElement.addEventListener('click',()=>{
        if(notiClicked){
            notiClicked=false;
            menuElement.classList.remove('menu-bar');
        }else{
            notiClicked=true;
            setTimeout(()=>{
                menuElement.classList.add('menu-bar');
            },0.1*2000)
            
        }
    });
});



const voiceElement= document.querySelector('.voice-div');
voiceElement.addEventListener('click',()=>{
    funvoice();
});

function funvoice() {
    document.querySelector('.search-bar').value="";
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(event) {
        var transcript = "";
        for (var i = 0; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        document.querySelector('.search-bar').value = transcript;
    }
    recognition.start(); 
    
    setTimeout(()=>{
        let speech = new SpeechSynthesisUtterance();
        speech.text=document.querySelector('.search-bar').value;
        window.speechSynthesis.speak(speech);
        
    },4000)
}

document.addEventListener('DOMContentLoaded',()=>{
    const viewProfile = document.querySelector('.login-form');
    const load = document.querySelector('.load-hide');
    var profileClicked = true;
    viewProfile.addEventListener('click',()=>{
        if(profileClicked){
            profileClicked=false;
            positionElement.classList.add('menu');
            setTimeout(() => {
                positionElement.classList.add('menu');
                twoDivs.classList.add('twoDivsBlur');
                loginForm.classList.remove('login');
               

            },3000)
            load.classList.remove('load-hide')
            twoDivs.classList.add('twoDivsBlur')
        }else{
            profileClicked = true;
            twoDivs.classList.remove('twoDivsBlur')
            loginForm.classList.add('login');
            load.classList.add('load-hide')
            positionElement.classList.remove('menu');
        }
        const into = document.querySelector('.into');
        into.addEventListener('click',()=>{
            if(profileClicked===false){
                profileClicked=true;
                loginForm.classList.add('login');
                twoDivs.classList.remove('twoDivsBlur');
                
            load.classList.add('load-hide');
            }
        });
})
});

document.addEventListener('DOMContentLoaded',()=>{
    const threeLines = document.querySelector('.three-lines');
    const bodyGrid = document.querySelector('.bodygridding');
    const sideBar = document.querySelector('.side-bar');
    const twoDivs = document.querySelector('.two-divs');
    const dropDown = document.querySelector('.dropping');
    var bodyClicked = true;
    threeLines.addEventListener('click',()=>{
        if(bodyClicked){
            bodyClicked = false;
            bodyGrid.classList.add('bodygrid');
            sideBar.classList.add('sideBar');
            twoDivs.classList.add('twoDivs');
            dropDown.classList.remove('dropping');
        }else{
            bodyClicked = true;
            bodyGrid.classList.remove('bodygrid');
            sideBar.classList.remove('sideBar');
            twoDivs.classList.remove('twoDivs');
            dropDown.classList.add('dropping');
        }
    })
});
const fa = document.querySelector('.fa');
const faAddColor = document.querySelector('.anchor-tags');
faAddColor.addEventListener('mouseover',()=>{
    fa.classList.remove('facolor');
});



document.addEventListener('DOMContentLoaded',()=>{
    const logindiv = document.querySelector('.login-butto');
    const signup = document.querySelector('.login-hedding');
    const signnButton= document.querySelector('.signin-button')
    const loginButton = document.querySelector('.login-button');
    
    loginButton.addEventListener('click',()=>{

            loginButton.classList.add('color');
            signnButton.classList.add('log');
            loginButton.classList.remove('log')
            signnButton.classList.remove('color')
            logindiv.classList.add('displays');
            signup.innerHTML="Login";
        }, 7000);

    signnButton.addEventListener('click',()=>{
        signnButton.classList.remove('log');
        loginButton.classList.add('log')
        loginButton.classList.remove('color');
        signnButton.classList.add('color')
        logindiv.classList.remove('displays');
        signup.innerHTML = "Signup";
    })
});


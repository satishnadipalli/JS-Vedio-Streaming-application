import { exportingVedio } from "./production.js";
import { vedioOne } from "./production.js";
let history ='';
exportingVedio.forEach((historyVedio)=>{
    let httmll=`<div class="vedio_container"}>
    <div class="image-container">
        <img class="history-img" src="./images/${historyVedio.tumbnail}" alt="">
    </div>
    <div class="information">
        <div class="titles">
            ${historyVedio.title}
        </div>
        <div class="chaneel">
            <img class="prof" src="./images/${historyVedio.profile}" alt="">
            <span>${historyVedio.channel}</span>
            <div class="three-min"> @3min ago</div>
        </div>
        <a href="youtubeopening.html"><button class="watch-again-button" data-vedioes="${historyVedio.title}">Watch Again</button></a>
    </div>
</div>`;
history+=httmll;
});
document.querySelector('.flex').innerHTML=history;



document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.watch-again-button')
    .forEach((vedioInfo)=>{
        
        vedioInfo.addEventListener('click',()=>{
            
            const vedioInformations = vedioInfo.dataset.vedioes;
            console.log(vedioInformations);
            vedioOne.forEach((vedioOneVedios)=>{
                if(vedioOneVedios.title === vedioInformations){
                    exportingVedio.push(vedioOneVedios);
                }
            })
            localStorage.setItem('exportingVedio',JSON.stringify(exportingVedio));
        })

 })
});

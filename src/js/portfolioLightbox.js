//Portfolio Lightbox

const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxText = lightbox.querySelector(".caption-text");
const lightboxCounter = lightbox.querySelector(".caption-counter");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItem = portfolioItems.length;

let itemIndex = 0;

// for(let i = 0; i , i < totalPortfolioItem; i++) {
//     portfolioItems[i].addEventListener("click", function () {
//         console.log(i);
//     })
// }

export function portfolioLightbox(){
    for(let i = 0; i < portfolioItems.length; i++) {
        portfolioItems[i].addEventListener("click", function(){
            console.log(portfolioItems[i], itemIndex)
            itemIndex = i;
            changeItem();
            closeLightbox();
            toggleLightbox();
        })
        
    }
    nextItem();
    prevItem();
}

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
    let imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}

function nextItem(){
    lightbox.querySelectorAll(".next-item").forEach(item => {
        item.addEventListener("click", function(){
            
            if(itemIndex === totalPortfolioItem -1){
                itemIndex = 0;
            } else{
                itemIndex++;
            }
             changeItem();
        })
    })
}


function prevItem(){
    lightbox.querySelector(".prev-item").addEventListener("click", function(){
        if(itemIndex === 0){
            itemIndex = totalPortfolioItem - 1;
        } else {
            itemIndex--;
        } 
        changeItem();
    })
}


function closeLightbox(){
    lightbox.addEventListener("click", function(event){
        if(event.target == lightboxClose || event.target === lightbox){
            lightbox.classList.remove("open");
        }
    })
}














// function nextItem(){
//     lightbox.querySelectorAll(".next-item").forEach(item => {
//         item.addEventListener("click", function(){
            
//             if(itemIndex === totalPortfolioItem -1){
//                 itemIndex = 0;
//             } else{
//                 itemIndex++;
//             }
//              changeItem();
//         })
//     })
// }


// function prevItem(){
//     lightbox.querySelector(".prev-item").addEventListener("click", function(){
//         if(itemIndex === 0){
//             itemIndex = totalPortfolioItem -1;
//         } else{
//             itemIndex--;
//         }
//          changeItem();
//     })
// }


// function changeItem() {
//     let imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    
//     lightboxImg.src = imgSrc;
//     lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
//     lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
// }

// function closeLightbox(){
//     lightbox.addEventListener("click", function(event){
//         if(event.target == lightboxClose || event.target === lightbox){
//             lightbox.classList.remove("open");
//         }
//     })
// }


// export function portfolioLightbox(){
//     for(let i = 0; i < totalPortfolioItem; i++) {
//         portfolioItems[i].addEventListener("click", function(){
//             itemIndex = i;
//             changeItem();
//             prevItem();
//             nextItem();
//             closeLightbox()
//             lightbox.classList.toggle("open");
//         })
//     }    
// }
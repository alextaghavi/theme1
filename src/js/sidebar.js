// Aside Navbar

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;
const aside = document.querySelector(".aside");
const navTogglerBtn = document.querySelector(".nav-toggler");

function toggleNav (){
    navTogglerBtn.addEventListener("click", () => {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
        }
    })
}

function showSection (element) {
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}



export function sideBar(){
    for(let i = 0; i < totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener( "click", function() {
            document.querySelector("#home").removeAttribute("style");
            for(let i = 0; i < totalSection; i++) {
                allSection[i].classList.remove("back-section");
            }

            for(let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }

            this.classList.add("active");
            showSection(this);
            
        } )
    }
    toggleNav();
}

export function loader(){
    window.addEventListener("load", () => {
        document.querySelector(".preloader").classList.add("opacity-0");

        const home =document.querySelector(".home");
        if( home.classList.contains("noAnimation") ) { 
            home.style.animationName = "none";
            home.classList.remove("noAnimation");
        }

        setTimeout( function() {
            document.querySelector(".preloader").style.display="none";
        }, 1000)
        
    })
}
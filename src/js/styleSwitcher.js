const colorsUl = document.querySelector(".colors");
const bodySkin = document.querySelectorAll(".body-skin");

function updateColor( desiredColor, tempColor = false ) {
    let previousColor = tempColor ? 'tempColor' : window.color;

    if( desiredColor === previousColor ) return;

    let packs = document.querySelectorAll( `.${previousColor}` );

    for( let i = 0; i < packs.length; i++ ) {
        packs[i].classList.add( desiredColor );
        packs[i].classList.remove( previousColor );
    }

    window.color = desiredColor;
    return;
}

function toggleColor() {
    document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
        return document.querySelector(".style-switcher").classList.toggle("open");
    });
}

// body Skin
function changeBodySkin(){
    for( let skin of bodySkin ) {
        skin.addEventListener("change", (e) => {
            if(e.target.value === "dark"){
                document.body.className = "dark";
            } else {
                document.body.classList.remove('dark');
            }
        });
    }
}


function changeColor( initialColor ){
    let ulChildren = colorsUl.getElementsByTagName("button");
    for( let colorButton of ulChildren ) {
        colorButton.addEventListener("click", (e) => {
            let color = e.target.dataset.color;
            updateColor( color );
        });
    }
    updateColor( initialColor, true );
}

export function styleSwitcher( initialColor ) {
    changeColor(initialColor);
    toggleColor();
    changeBodySkin();
}
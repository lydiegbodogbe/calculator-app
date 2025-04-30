const touches = [...document.querySelectorAll('.touche')];
const listKeyCode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');
document.addEventListener('keydown', (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur)
})

document.addEventListener('click', (e) =>{
  const valeur = e.target.dataset.key; 
  calculer(valeur)

})

const calculer = (valeur) => {
  if(listKeyCode.includes(valeur)) {
    switch (valeur) {
      case '600':
       
        break;
      case '8':
        ecran.textContent = "";
        break;
      case '80':
        ecran.textContent = ecran.textContent.slice(0, -1);    
        break;
      case '187':
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
    
      default:
        const indexKeyCode = listKeyCode.indexOf(valeur);
        const touche = touches[indexKeyCode];
        ecran.textContent += touche.innerHTML;
  }
    
  }
}

window.addEventListener('error', (e)=> {
  alert('Une erreur est survenue dans votre calcul : '+ e.message)
  console.log(e)
})


const toggle = document.getElementById("toggleCircle");
const circle = toggle.querySelector(".circle");
const themeName = document.getElementById("themeName");

const themes = ["theme-light", "theme-dark", "theme-colorful"];
const names = ["Clair", "Sombre", "Coloré"];
const positions = ["2px", "17px", "30px"];
const coolor = [ "hsl(25, 98%, 40%)", "hsl(6, 63%, 50%)", "hsl(176, 100%, 44%)"]
const back = ["hsl(0, 5%, 81%)", "hsl(223, 31%, 20%)", "hsl(268, 71%, 12%)"]
const couleurs = ["hsl(25, 98%, 50%)", "hsl(6, 63%, 60%)", "hsl(176, 100%, 54%)"];

let themeIndex = 0;

function applyTheme(index) {
  document.body.className = themes[index];
  circle.style.left = positions[index];
  circle.style.background = coolor[index];
  toggle.style.background = back[index];
  circle.addEventListener("mouseenter", () => {
    circle.style.background = couleurs[index];
  });
  circle.addEventListener("mouseleave", () => {
    circle.style.background = coolor[index];
  });
}

toggle.addEventListener("click", () => {
  themeIndex = (themeIndex + 1) % themes.length;
  applyTheme(themeIndex);
});

applyTheme(themeIndex);


  
 

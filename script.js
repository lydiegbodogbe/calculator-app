const touches = [...document.querySelectorAll('.touche')];
console.log(touches);
  
  const toggle = document.getElementById("toggleCircle");
  const circle = toggle.querySelector(".circle");
  const themeName = document.getElementById("themeName");
  
  const themes = ["theme-light", "theme-dark", "theme-colorful"];
  const names = ["Clair", "Sombre", "Coloré"];
  const positions = ["2px", "32px", "62px"];
  
  let themeIndex = 0;
  
  function applyTheme(index) {
    document.body.className = themes[index];
    themeName.textContent = `Thème : ${names[index]}`;
    circle.style.left = positions[index];
  }
  
  toggle.addEventListener("click", () => {
    themeIndex = (themeIndex + 1) % themes.length;
    applyTheme(themeIndex);
  });
  
  applyTheme(themeIndex);
  

const toggleSwitch=document.querySelector('input[type="checkbox"]');
const toggleIcon=document.getElementById("toggle-icon");
const image1=document.getElementById("image1");
const image2=document.getElementById("image2");
const image3=document.getElementById("image3");
const nav=document.getElementById("navbar");
const textBox=document.getElementById("text-box");

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

function imageMode(color){
image1.src= `img/proud_${color}.svg`;
image2.src= `img/codergirl_${color}.svg`;
image3.src= `img/myuniverse_${color}.svg`;
}

function darkMode(){
    navbar.style.backgroundColor= "rgb(0 0 0 / 50%";
    textBox.style.backgroundColor= "rgb(255 255 255 / 50%";
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');

}

function lightMode(){
    navbar.style.backgroundColor= "rgb(255 255 255 / 50%";
    textBox.style.backgroundColor= "rgb(0 0 0 / 50%";
    toggleIcon.children[0].textContent='Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

//Save user input to local storage

const currentTheme=localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme==='dark'){
        toggleSwitch.checked=true;
        darkMode();
    }
}




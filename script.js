const toggle = document.getElementById('toggledark');
const body = document.querySelector('body');


if(localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark-mode');
    toggle.classList.remove('fa-sun');
    toggle.classList.add('fa-moon');
}

toggle.addEventListener('click', function(){
    body.classList.toggle('dark-mode');
    this.classList.toggle('fa-sun');
    this.classList.toggle('fa-moon');

    
    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


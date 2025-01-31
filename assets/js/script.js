let radio = document.querySelectorAll('.btn-card')
radio.forEach((card,index) => {
    let btn = document.querySelectorAll('.icon')[index];
    btn.addEventListener('click', () =>{

        if(card.checked){
        
            if(btn.classList.contains('c01')){
                let file = btn.getAttribute('data-file');
                let a = document.createElement('a');
                a.href = file;
                a.download = file;
                a.click();
            } 

            if(btn.classList.contains('btnLinks')){
                let url = btn.getAttribute('data-url');
                window.open(url, '_blank');
            } 

            if(btn.classList.contains('btnSections')){
                let sectionId = btn.id.replace('btn', 'section');
                let section = document.querySelector(`#${sectionId}`)
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

    })

})

let btnMenu = document.querySelector('.toggle-btn');
let dropDownMenu = document.querySelector('.dropdown-menu')
let header = document.querySelector('header')

function isMobile() {
    return window.matchMedia("(max-width: 580px)").matches;
}

btnMenu.addEventListener('click', function(){
    dropDownMenu.classList.toggle('open')
    let isOpen = dropDownMenu.classList.contains('open');
    
    if(!isMobile()) return;
    
    if(isOpen){
        dropDownMenu.style.display = 'block';
        header.style.backgroundColor = '#000000da'
        btnMenu.setAttribute('src', './assets/img/open-menu.png');
    } else{
        dropDownMenu.style.display = 'none';
        header.style.backgroundColor = 'transparent'
        btnMenu.setAttribute('src', './assets/img/close-menu.png');
    }

})

window.addEventListener('resize', function () {
    if (!isMobile()) {
        dropDownMenu.classList.remove('open');
        header.style.backgroundColor = 'transparent';
        btnMenu.setAttribute('src', './assets/img/close-menu.png');
    }
})

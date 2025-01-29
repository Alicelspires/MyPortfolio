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

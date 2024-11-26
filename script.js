const slide = document.getElementById("slide");
const mainContent = document.getElementById("main-content");
const toggleBtn = document.getElementById("toggle");

toggleBtn.onclick = function() {
    slide.classList.toggle("open");
    mainContent.classList.toggle("open");
}

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item')

class Caraousel {

    constructor(container, items, controls){
        this.caraouselContainer = container;
        this.caraouselControls = controls;
        this.caraouselArray = [...items];
    }

    updateGallery(){
        this.caraouselArray.forEach(el =>{
           el.classList.remove('gallery-item-1'); 
           el.classList.remove('gallery-item-2'); 
           el.classList.remove('gallery-item-3'); 
           el.classList.remove('gallery-item-4'); 
           el.classList.remove('gallery-item-5'); 
        });

        this.caraouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add('gallery-item-${i+1}');
        })
    }

    setCurrentState(directions){
        if (directions.className == 'gallery-controls-previous'){
            this.caraouselArray.unshift(this.caraouselArray.pop());
        }else{
            this.caraouselArray.push(this.caraouselArray.shift());
        }
        this.updateGallery();
    }
    
    setControls() {
        this.caraouselControls.forEach(control =>{
            galleryControlsContainer.appendChild(document.createElement('button')).className = 'gallery-controls-${control}';
            document.querySelector('.gallery-controls-${control}').innerText = control;
        });
    }

    useControl(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control =>{
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCaraousel = new Caraousel(galleryContainer, galleryItems, galleryControls);

exampleCaraousel.setControls();
exampleCaraousel.useControls();

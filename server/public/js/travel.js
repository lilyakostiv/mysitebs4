function travel() {
    const  galleryImages = [
        {
            added: false,
            url: "https://static.ukrinform.com/photos/2019_03/thumb_files/630_360_1552474933-289.jpg",
            title: "Відень",
            description: "Пам'ятки історичного Відня",
            link: "https://dyvys.org/stati/viden-misto-shho-zhive-u-ritmi-valsu"
        },{
            added: false,
            url: "https://mywowo.net/media/images/cache/roma_01_jpg_640_336_cover_70.jpg",
            title: "Рим",
            description: "Рим — одне з найстаріших міст світу, столиця Стародавнього Риму",
            link: "https://uk.wikivoyage.org/wiki/%D0%A0%D0%B8%D0%BC"
        },{
            added: false,
            url: "https://ezdili-znaem.com/wp-content/uploads/2017/06/301-750x410.jpg?x16083",
            title: "Ніцца",
            description: "Ніцца - окраса Лазурного узбережжя",
            link: "https://mandry.club/mista/nicca"
        },{
            url: "https://airlife.ua/wp-content/uploads/vena.jpg"
        }
    ]

    document.addEventListener('click', (event) => {
        let datasetValue = event.target.dataset['changeGallery'];
        let slideArea = document.querySelector("#slide-area");
        let indicatorsArea = document.querySelector("#indicators-area");
        switch(datasetValue){
            case "addSlide":
                addNewSlide(slideArea, indicatorsArea);
                event.target.disabled = true;
                break
            case "addSelectedSlide":
                let selectFoto = document.querySelector("#selectedTown");
                let optionFotoValue=selectFoto.options[selectFoto.selectedIndex].value;
                if (galleryImages[optionFotoValue].added == false){
                    galleryImages[optionFotoValue].added = true;
                    addSomeSlide(galleryImages[optionFotoValue], slideArea, indicatorsArea);
                }
                else alert(`Фото міста ${galleryImages[optionFotoValue].title} вже є у фотоальбомі!`)
                break
            case "changeSlide":
                changeSlideViden(galleryImages);
                break
        }
    })

    $('.carousel').carousel({
        interval: 1000
    })
                             
}

        
function createNewObject(Props){
    const newElement = document.createElement(Props.tagName);
    if(Props.styleClass) newElement.className = Props.styleClass;
    if(Props.innerBody) newElement.innerHTML = Props.innerBody;

    return newElement
}


function addNewSlide(targetSelector, targetSelectorIndicators){
    let newImage = createNewObject({
        tagName: 'img',
        styleClass: 'd-block w-100 size-slide'
    });
    newImage.src = "img/5_barselona.jpg";
    newImage.alt = "Барселона";

    let imageDescription =  createNewObject({
        tagName: 'div',
        styleClass: 'carousel-caption d-none d-md-block slide-text-color',
        innerBody: `<h5>Барселона</h5>
        <p><a href="https://www.moyaeuropa.com.ua/spain/barselona" target="_blank"> Барселона - місто з архітектурою Гауді</a></p>`
    });

    let imageWrapper =  createNewObject({
        tagName: 'div',
        styleClass: 'carousel-item',
        innerBody: `${newImage.outerHTML} ${imageDescription.outerHTML}`
    });

    targetSelector.appendChild(imageWrapper);


   let imageIndicators =  createNewObject({
        tagName: 'li'
    });
    imageIndicators.dataset['target'] = "#carouselTravel";
    imageIndicators.dataset['slideTo'] = 4;
    targetSelectorIndicators.appendChild(imageIndicators);
}


function addSomeSlide(arrayDataElement, targetSelector, targetSelectorIndicators){
    let newImage = createNewObject({
        tagName: 'img',
        styleClass: 'd-block w-100 size-slide'
    });
    newImage.src = arrayDataElement.url;
    newImage.alt = arrayDataElement.title;
    if (arrayDataElement.title == "Відень")
        newImage.setAttribute("data-viden","1");

    let imageDescription =  createNewObject({
        tagName: 'div',
        styleClass: 'carousel-caption d-none d-md-block slide-text-color',
        innerBody: `<h5>${arrayDataElement.title}</h5>
        <p><a href=${arrayDataElement.link} target="_blank">${arrayDataElement.description}</a></p>`
    });

    let imageWrapper =  createNewObject({
        tagName: 'div',
        styleClass: 'carousel-item',
        innerBody: `${newImage.outerHTML} ${imageDescription.outerHTML}`
    });

    targetSelector.appendChild(imageWrapper);

    let imageIndicators =  createNewObject({
        tagName: 'li'
    });
    imageIndicators.dataset['target'] = "#carouselTravel";

    let numberSlide = findLengthMassIndicators();
    imageIndicators.dataset['slideTo'] = numberSlide;

    targetSelectorIndicators.appendChild(imageIndicators);
}

function findLengthMassIndicators () {
    let massIndicators = document.querySelectorAll("[data-slide-to]");
    let massIndicatorsLength = massIndicators.length;
    return massIndicatorsLength;
}


function changeSlideViden(arrayData) {
    let getSlideViden = document.querySelector("img[data-viden]");
    if (getSlideViden) {
        if (getSlideViden.getAttribute("data-viden") == "1") {
            getSlideViden.src = arrayData[3].url;
            getSlideViden.setAttribute("data-viden","2");
        }
        else {getSlideViden.src = arrayData[0].url;
              getSlideViden.setAttribute("data-viden","1");
        }
    }
    else alert(`Фото міста Відень нема у фотоальбомі!`)   
}


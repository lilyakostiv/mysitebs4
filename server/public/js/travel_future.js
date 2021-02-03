function travel_future() {
    const galleryDb = {
        currentImageIndex: 0,
        selectors: {
            pictureArea: document.querySelector("#picture-area"),
            indicatorsArea: document.querySelector("#indicators-area")
        },
        galleryImages: [
            {
                id: 0,
                url: "img/1_pidkamin.jpg",
                title: "Підкамінь",
                description: "Підкамінь - історія кам'яного велетня",
                link: "http://blog.karpaty.info/2013/09/11/pidkamin-istoriya-kam-yanogo-veletnya"
            },{
                id: 1,
                url: "img/2_stradch.jpg",
                title: "Страдч",
                description: "Страдч - український Єрусалим",
                link: "https://pilgrimage.in.ua/stradch-ukrajinskyj-erusalym"
            },{
                id: 2,
                url: "img/3_kamenec_podilsky.jpg",
                title: "Кам'янець-Подільський",
                description: "Кам’янець-Подільський – місто, що зберегло дух середньовіччя",
                link: "https://7chudes.in.ua/nominaciyi/kamyanets"
            }
        ]
    }
    displayImage(galleryDb.galleryImages[galleryDb.currentImageIndex],
                galleryDb.selectors.pictureArea,
                galleryDb.selectors.indicatorsArea);

    document.addEventListener('click', (event) => {
        let datasetValue = event.target.dataset['slide'];
        if (datasetValue === undefined) {
            datasetValue = event.target.parentElement.dataset['slide'];
        } 
        switch(datasetValue){
            case "prev":
                changePictureId(-1, galleryDb)
                refresh()
                break
            case "next":
                changePictureId(1, galleryDb)
                refresh()
                break
        }
                    
            function refresh(){
                displayImage(galleryDb.galleryImages[galleryDb.currentImageIndex], 
                                galleryDb.selectors.pictureArea,
                            galleryDb.selectors.indicatorsArea)   
            }
    })
                             
}

    
function createNewObject(objectProps, event){
    const newElement = document.createElement(objectProps.tagName);
    if(objectProps.styleClass) newElement.className = objectProps.styleClass;
    if(objectProps.innerBody) newElement.innerHTML = objectProps.innerBody;

    //if(event) newElement.addEventListener('click', (e) => {
       // event(e)
    //});  не використано
    return newElement
}


function displayImage(imageData, targetSelector, targetSelectorIndicators){
    targetSelector.innerHTML = "";
    targetSelectorIndicators.innerHTML = "";
    let newImage = createNewObject({
        tagName: 'img',
        styleClass: 'gallery-image'
    });
    newImage.src = imageData.url;
    newImage.class = "d-block w-100";
    newImage.alt = imageData.title;

    let imageDescription =  createNewObject({
        tagName: 'div',
        styleClass: 'image-decscription carousel-caption d-none d-md-block slide-text-color',
        innerBody: `<h5>${imageData.title}</h5>
        <p><a href=${imageData.link} target="_blank">${imageData.description}</a></p>`
    });

    let imageWrapper =  createNewObject({
        tagName: 'div',
        styleClass: 'carousel-item active',
        innerBody: `${newImage.outerHTML} <br> ${imageDescription.outerHTML}`
    });

    targetSelector.appendChild(imageWrapper);

    let imageIndicators =  createNewObject({
        tagName: 'li'
    });
    imageIndicators.dataset['target'] = "#carouselTravel";
    imageIndicators.dataset['slideTo'] = `${imageData.id}`;
    targetSelectorIndicators.appendChild(imageIndicators);
}


function changePictureId(indexValue, mainObject){
    mainObject.currentImageIndex += indexValue;
    let galleryLength = mainObject.galleryImages.length;

    if(mainObject.currentImageIndex >= galleryLength ){
        mainObject.currentImageIndex = 0;
    } 
    if(mainObject.currentImageIndex < 0){
        mainObject.currentImageIndex = galleryLength - 1;
    }
}

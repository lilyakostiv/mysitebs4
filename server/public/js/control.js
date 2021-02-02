(function() {
    let mainForm = document.forms['formControl'];  
    mainForm.addEventListener("submit", (event) => {
        event.preventDefault();   //відміна надсилання даних форми браузером  
        let variant = document.getElementById("inputGroupSelect").value;
        let password = document.getElementById("inputPasswordControl").value;
        // ajax 
        let variantControl = fetch(`/variant?variant=${variant}&password=${password}`);//отримання проміса
        let selectorTask = document.querySelector("#controlTask");
        variantControl.then(data => data.text() //data.text() - теж проміс
                            .then(function(text){submitControl(text,selectorTask);}))
                      .catch(error=>console.log(error));
    });

    function submitControl(datafile, targetSelector) {
        targetSelector.innerHTML = '';
        let newTask =  createNewObject({
            tagName: 'div',
            styleClass: "control-task",
            innerBody: datafile
        });    
        targetSelector.appendChild(newTask);           
    }

}) ()

function createNewObject(objectProps){
    const newElement = document.createElement(objectProps.tagName);
    if(objectProps.styleClass) newElement.className = objectProps.styleClass;
    if(objectProps.innerBody) newElement.innerHTML = objectProps.innerBody;

    return newElement
}

   

(function() {
    let error = document.querySelector("#closeError");
    error.addEventListener("click", (event) => {
        let lastNameError = document.querySelector("#errorLastName");
        lastNameError.style.display = "none";
    })         

    let mainForm = document.forms['formTest'];  
    mainForm.addEventListener("submit", (event) => {
        event.preventDefault();    //затримати сервер
        let lastNameElement = document.getElementById("InputLastName");
        let firstNameElement = document.getElementById("InputFirstName");

        let lastName = lastNameElement.value; 
        let firstName = firstNameElement.value; 

        let trueLastName = isTrueName(lastName);
        let trueFirstName = isTrueName(firstName);


        if (!trueLastName) {
            let lastNameError = document.querySelector("#errorLastName");
            lastNameError.style.display = "block";
            let textError = document.querySelector("#errorText");
            textError.innerText="Неправильно введене прізвище !";
            
        } else if (!trueFirstName) {
            let lastNameError = document.querySelector("#errorLastName");
            lastNameError.style.display = "block";
            let textError = document.querySelector("#errorText");
            textError.innerText="Неправильно введене ім'я !";
        }   
        else event.target.submit();    //відправити на сервер
    })

}) ()

function isTrueName(name) {
    let trueName=true; 
    
    let names = name.split('-');
    for (let i=0; i<names.length; i++) {
       if (names[i][0]<'A' || 'Z'<names[i][0]) {
           trueName = false;      
        }
        if (trueName) {
            for (let j=1; j<names[i].length; j++) {
                if (names[i][j]<'a' || 'z'<names[i][j]) {
                    trueName = false;
                }
                if (!trueName) break;
            }
       }
    }
    return trueName;
}
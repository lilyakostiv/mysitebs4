function form_test() {
    let error = document.querySelector("#closeError");
    error.addEventListener("click", (event) => {
        let lastNameError = document.querySelector("#errorLastName");
        lastNameError.style.display = "none";
    })         

    let mainForm = document.forms['formTest'];  
    mainForm.addEventListener("submit", (event) => {
        event.preventDefault();    //затримати сервер
        let lastNameError = document.querySelector("#errorLastName");
        lastNameError.style.display = "none";
        let lastNameElement = document.getElementById("InputLastName");
        let firstNameElement = document.getElementById("InputFirstName");

        lastName = lastNameElement.value; 
        firstName = firstNameElement.value; 

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
        else //event.target.submit();    //відправити запит на сервер
        {
            let variant = document.getElementById("inputGroupSelect2").value;
            let password = document.getElementById("inputPassword2").value;
            let variantTest = fetch(`/test?number=${variant}&passwordtest=${password}`);//отримання проміса
            variantTest.then(data => data.json() 
                            .then(function(data){submitTest(data);})
                            .catch(submitTestError)
                        );

            function submitTest (param) {
                let formTest__ = document.querySelector("#formTest_");
                formTest__.style.display = "none";
                let formTesting__ = document.querySelector("#formTesting_");
                formTesting__.style.display = "block";
    
                let numberTask = document.querySelector("#testNumberForma");
                numberTask.innerHTML=`Тест ${param.number}. Вступ до інформатики`
    
                for (let j=1;j<=5;j++) {
                    let arrayAnswer_ = document.querySelectorAll(`[data-answer${j}]`);
                    for (let item=0;item<arrayAnswer_.length;item++) {
                        let itemValue=arrayAnswer_[item].value; 
                        
                        let oneAnswer = param[`answer${j}`][Number(itemValue)];
                        arrayAnswer_[item].innerText=oneAnswer;
                    }
                }                
            TEST_NUMBER=param.number;
            }
            
            function submitTestError (param) {
                let lastNameError = document.querySelector("#errorLastName");
                lastNameError.style.display = "block";
                let textError = document.querySelector("#errorText");
                textError.innerText="Неправильно введений пароль !";
            }

        }
    })

    let testForm = document.forms['testing'];  
    testForm.addEventListener("submit", (event) => {
        event.preventDefault();    //відміна надсилання даних форми браузером
        let arrayQuestions = document.querySelectorAll("#formTesting_ select");
        let arrayValue = [];
        for (let i=0;i<arrayQuestions.length;i++) 
            arrayValue.push(arrayQuestions[i].value);
        // ajax 
        let stringQuery='';
        for (let i=0;i<arrayValue.length;i++) {
           stringQuery += `&question${i+1}=${arrayValue[i]}`
        }
        let resultTest = fetch(`/resultTest?TEST_NUMBER=${TEST_NUMBER}${stringQuery}`);//отримання проміса
        let selectorResult = document.querySelector("#resultTesting");
        resultTest.then(data => data.text() //data.text() - теж проміс
                            .then(function(text){submitResult(text,selectorResult);}))
                  .catch(error=>console.log(error));
    });

    function submitResult(data, targetSelector) {
        targetSelector.innerHTML = `<h6>${lastName} ${firstName}, ${data}</h6>`;      
    }

}

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
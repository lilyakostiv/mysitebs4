(function() {
    let testForm = document.forms['testing2'];  
    testForm.addEventListener("submit", (event) => {
        event.preventDefault();    //відміна надсилання даних форми браузером
        let arrayQuestions = document.querySelectorAll("select");
        let arrayValue = [];
        for (let i=0;i<arrayQuestions.length;i++) 
            arrayValue.push(arrayQuestions[i].value);
        // ajax 
        let stringQuery='';
        for (let i=0;i<arrayValue.length;i++) {
            if (i==0) stringQuery += `?question${i+1}=${arrayValue[i]}`
            else stringQuery += `&question${i+1}=${arrayValue[i]}`
        }
        let resultTest = fetch(`/resultTest2${stringQuery}`);//отримання проміса
        let selectorResult = document.querySelector("#resultTesting");
        resultTest.then(data => data.text() //data.text() - теж проміс
                            .then(function(text){submitResult(text,selectorResult);}))
                  .catch(error=>console.log(error));
    });

    function submitResult(data, targetSelector) {
        targetSelector.innerHTML = `<h6>${data}</h6>`;      
    }

}) ()


   

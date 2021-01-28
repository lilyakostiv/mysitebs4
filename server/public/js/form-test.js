(function() {
    let mainForm = document.forms['formTest'];

    mainForm.addEventListener("submit", (event) => {
        event.preventDefault();    //затримати сервер
        let lastNameElement = document.getElementById("InputLastName");
        let firstNameElement = document.getElementById("InputFirstName");

        let lastName = lastNameElement.value; 
        let firstName = firstNameElement.value; //аналогічно зробити для імені код нижче
        
        let trueLastName=true; 
        let doubleName=false;
        if (lastName[lastName.length-1]=="-" || ('A'<=lastName[lastName.length-1] && lastName[lastName.length-1]<='Z')) trueLastName=false;
        for (let i = 0; i<lastName.length; i++) {
            if (i == 0)  {
                if (lastName[i]<'A' || 'Z'<lastName[i])
                    trueLastName=false;
            } else {
                if ((lastName[i]<'a' || 'z'<lastName[i]) && (lastName[i]!="-") && !doubleName)
                    trueLastName=false;
                if ((lastName[i]=="-") && ('A'<=lastName[i+1] && lastName[i+1]<='Z')) 
                        doubleName=true;
                if ((lastName[i]=="-") && ('a'<=lastName[i+1] && lastName[i+1]<='z')) 
                        trueLastName=false;
                
            }   
        }
        if (!trueLastName) alert("Неправильно введене прізвище");
        else event.target.submit();    //запустити сервер
    })

}) ()


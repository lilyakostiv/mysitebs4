function plan() {
    const plansClasses = [
        {
            title1: "8 клас: 1 семестр",
            title2: "8 клас: 2 семестр",
            arrayThemes: ["Вступ до інформатики",
                            "Робота в додатках Microsoft Office",
                            "Мова програмування Pascal. Лінійні програми",
                            "Розгалуження та цикли"] 
        },{
            title1: "9 клас: 1 семестр",
            title2: "9 клас: 2 семестр",
            arrayThemes: ["Одновимірні та двовимірні масиви.Рядки",
                            "Підпрограми",
                            "Вбудовані типи даних",
                            "Робота в Delphi"] 
        },{
            title1: "10 клас: 1 семестр",
            title2: "10 клас: 2 семестр",
            arrayThemes: ["Мова програмування Python. Розгалуження, цикли",
                            "Вбудовані типи даних",
                            "ООП в Python",
                            "Модуль tkinter"] 
        },{
            title1: "11 клас: 1 семестр",
            title2: "11 клас: 2 семестр",
            arrayThemes: ["СКБД Access",
                            "Web-розробка",
                            "Реалізація алгоритмів",
                            "Повторення"] 
        },
    ]
    
    document.addEventListener('click', (event) => {
        let planningArea = document.querySelector("#planning");
        let datasetValue = event.target.dataset['linkPlan'];
        let intDatasetValue = Number(datasetValue);
        displayPlanningSelectedClass(plansClasses[intDatasetValue], planningArea);
    })

};

    
function createNewObject(objectProps, event){
    const newElement = document.createElement(objectProps.tagName);
    if(objectProps.styleClass) newElement.className = objectProps.styleClass;
    if(objectProps.innerBody) newElement.innerHTML = objectProps.innerBody;

    return newElement
}


function displayPlanningSelectedClass(arrayElement, targetSelector){
    targetSelector.innerHTML = '';
    let tableOneSemestr =  createNewObject({
        tagName: 'p',
        innerBody: `<table class="table table-design">
            <thead>
                <tr>
                    <th scope="col" class="table-plan-number">№</th>
                    <th scope="col" class="table-plan-theme">Розділ інформатики</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" class="table-plan-number">1</th>
                    <td class="table-plan-theme">${arrayElement.arrayThemes[0]}</td>
                </tr>
                <tr>
                    <th scope="row" class="table-plan-number">2</th>
                    <td class="table-plan-theme">${arrayElement.arrayThemes[1]}</td>
                </tr>
            </tbody>
        </table>`
    });

    let tableSecondSemestr =  createNewObject({
        tagName: 'p',
        innerBody: `<table class="table table-design">
            <thead>
                <tr>
                    <th scope="col" class="table-plan-number">№</th>
                    <th scope="col" class="table-plan-theme">Розділ інформатики</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" class="table-plan-number">3</th>
                    <td class="table-plan-theme">${arrayElement.arrayThemes[2]}</td>
                </tr>
                <tr>
                    <th scope="row" class="table-plan-number">4</th>
                    <td class="table-plan-theme">${arrayElement.arrayThemes[3]}</td>
                </tr>
            </tbody>
        </table>`
    });

    let tableWrapper =  createNewObject({
        tagName: 'div',
        innerBody: `<h6>${arrayElement.title1}</h6>
                    ${tableOneSemestr.outerHTML}
                    <h6>${arrayElement.title2}</h6>
                    ${tableSecondSemestr.outerHTML}`
    });

    targetSelector.appendChild(tableWrapper);
}

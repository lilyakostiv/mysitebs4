(function() {
    const marksClasses = [
        {   
            title: "8-А клас",
            arrayMarks: [ {number:1, name:"Буряк", theme1:1, theme2:1,semestr1:1 },
                        {number:2, name:"Борщ",  theme1:2, theme2:2, semestr1:2 },
                        {number:3, name:"Вареник", theme1:3, theme2:3, semestr1:3 },
                        {number:4, name:"Дятел", theme1:4, theme2:4, semestr1:4 },
                        {number:5, name:"Ему", theme1:5, theme2:5, semestr1:5 },
                        {number:6, name:"Їжак", theme1:6, theme2:6, semestr1:6 },
                        {number:7, name:"Курка", theme1:7, theme2:7, semestr1:7 },
                        {number:8, name:"Кіт", theme1:8, theme2:8, semestr1:8 },
                        {number:9, name:"Мурчик", theme1:9, theme2:9, semestr1:9 },
                        {number:10, name:"Морква", theme1:10, theme2:10, semestr1:10 },
                        {number:11, name:"Цибуля", theme1:11, theme2:11, semestr1:11 } ]                   
        },{
            title: "8-Б клас",
            arrayMarks: [ {number:1, name:"Андрій", theme1:1, theme2:2,semestr1:2 },
                        {number:2, name:"Богдан",  theme1:2, theme2:3, semestr1:3 },
                        {number:3, name:"Борис", theme1:3, theme2:4, semestr1:4 },
                        {number:4, name:"Ігор", theme1:4, theme2:5, semestr1:5 },
                        {number:5, name:"Йосип", theme1:5, theme2:6, semestr1:6 },
                        {number:6, name:"Кіндрат", theme1:6, theme2:7, semestr1:7 },
                        {number:7, name:"Матвій", theme1:7, theme2:7, semestr1:7 },
                        {number:8, name:"Назар", theme1:8, theme2:8, semestr1:8 },
                        {number:9, name:"Нестор", theme1:9, theme2:9, semestr1:9 },
                        {number:10, name:"Петро", theme1:10, theme2:10, semestr1:10 },
                        {number:11, name:"Роман", theme1:11, theme2:11, semestr1:11 },
                        {number:12, name:"Тарас", theme1:12, theme2:12, semestr1:12 }, 
                        {number:13, name:"Устим", theme1:12, theme2:12, semestr1:12 } ]    
        },{
            title: "9-Г клас",
            arrayMarks: [ {number:1, name:"Анна", theme1:1, theme2:4,semestr1:3 },
                        {number:2, name:"Богдана",  theme1:2, theme2:5, semestr1:4 },
                        {number:3, name:"Віра", theme1:3, theme2:6, semestr1:5 },
                        {number:4, name:"Діана", theme1:4, theme2:7, semestr1:6 },
                        {number:5, name:"Ївга", theme1:5, theme2:8, semestr1:7 },
                        {number:6, name:"Катерина", theme1:6, theme2:7, semestr1:7 },
                        {number:7, name:"Марія", theme1:7, theme2:7, semestr1:7 },
                        {number:8, name:"Марта", theme1:8, theme2:8, semestr1:8 },
                        {number:9, name:"Настя", theme1:9, theme2:9, semestr1:9 },
                        {number:10, name:"Оксана", theme1:10, theme2:10, semestr1:10 },
                        {number:11, name:"Орися", theme1:11, theme2:11, semestr1:11 },
                        {number:12, name:"Руслана", theme1:12, theme2:12, semestr1:12 }, 
                        {number:13, name:"Соломія", theme1:12, theme2:12, semestr1:12 },
                        {number:14, name:"Софія", theme1:11, theme2:11, semestr1:11 },
                        {number:15, name:"Тетяна", theme1:12, theme2:12, semestr1:12 },
                        {number:16, name:"Уляна", theme1:11, theme2:11, semestr1:11 } ]     
        },{
            title: "10-Г клас",
            arrayMarks: [ {number:1, name:"Амелія", theme1:1, theme2:10,semestr1:6 },
                        {number:2, name:"Волошка",  theme1:2, theme2:10, semestr1:6 },
                        {number:3, name:"Гортензія", theme1:3, theme2:10, semestr1:7 },
                        {number:4, name:"Гвоздика", theme1:4, theme2:10, semestr1:7 },
                        {number:5, name:"Гладіолус", theme1:5, theme2:10, semestr1:8 },
                        {number:6, name:"Нарцис", theme1:6, theme2:7, semestr1:7 },
                        {number:7, name:"Ромашка", theme1:7, theme2:7, semestr1:7 },
                        {number:8, name:"Троянда", theme1:8, theme2:8, semestr1:8 },
                        {number:9, name:"Тюльпан", theme1:9, theme2:9, semestr1:9 },
                        {number:10, name:"Фіалка", theme1:10, theme2:10, semestr1:10 } ]     
        },{
            title: "11-А клас",
            arrayMarks: [ {number:1, name:"Алушта", theme1:12, theme2:10,semestr1:11 },
                        {number:2, name:"Бар",  theme1:12, theme2:8, semestr1:10 },
                        {number:3, name:"Бібрка", theme1:12, theme2:6, semestr1:9 },
                        {number:4, name:"Вінниця", theme1:12, theme2:4, semestr1:8 },
                        {number:5, name:"Київ", theme1:12, theme2:2, semestr1:7 },
                        {number:6, name:"Львів", theme1:6, theme2:7, semestr1:7 },
                        {number:7, name:"Одеса", theme1:7, theme2:7, semestr1:7 },
                        {number:8, name:"Харків", theme1:8, theme2:8, semestr1:8 } ]     
        }       
    ]
    
    document.addEventListener('click', (event) => {
        let marksArea = document.querySelector("#marks-pupils");
        let datasetValue = event.target.dataset['linkMark'];
        let intDatasetValue = Number(datasetValue);
        displayMarksSelectedClass(marksClasses[intDatasetValue], marksArea);
    })

}) ()

    
function createNewObject(objectProps, event){
    const newElement = document.createElement(objectProps.tagName);
    if(objectProps.styleClass) newElement.className = objectProps.styleClass;
    if(objectProps.innerBody) newElement.innerHTML = objectProps.innerBody;

    return newElement
}


function displayMarksSelectedClass(arrayElement, targetSelector){
    targetSelector.innerHTML = '';
    let tableMarks =  createNewObject({
        tagName: 'p',
        innerBody: `<h6 class="text-center">${arrayElement.title}</h6>
        <table class="table table-design">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Прізвища учнів</th>
                    <th scope="col">Тематична 1</th>
                    <th scope="col">Тематична 2</th>
                    <th scope="col">Семестр 1</th>
                </tr>
            </thead>
            <tbody id="form-table">
                
            </tbody>
        </table>`
    });

    targetSelector.appendChild(tableMarks);
    let formTableArea = document.querySelector("#form-table");
    tableMarksForm(arrayElement, formTableArea);
}

function tableMarksForm(element,selector) {
    for (let item=0;item<element.arrayMarks.length;item++) {
        selector.innerHTML = selector.innerHTML+`<tr>
                                <th>${element.arrayMarks[item].number}</th>
                                <td>${element.arrayMarks[item].name}</td>
                                <td class="text-center">${element.arrayMarks[item].theme1}</td>
                                <td class="text-center">${element.arrayMarks[item].theme2}</td>
                                <td class="text-center">${element.arrayMarks[item].semestr1}</td>
                            </tr>`;
    }                    
}
      
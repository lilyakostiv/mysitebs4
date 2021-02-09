(function() {
    const pagesSite = {
        main : {
            url: "/main.html",
            class: "container",
            functionjs: function () {main();},
            activePage: 1
        },
        plan : {
            url: "/plan.html",
            class: "container",
            functionjs: function () {plan();},
            activePage: 2
        },
        marks : {
            url: "/marks.html",
            class: "container",
            functionjs: function () {marks();},
            activePage: 2
        },
        travel : {
            url: "/travel.html",
            class: "container carousel-size",
            functionjs: function () {travel();},
            activePage: 2
        },
        travel_future : {
            url: "/travel_future.html",
            class: "container carousel-size",
            functionjs: function () {travel_future();},
            activePage: 2
        },
        control : {
            url: "/control.html",
            class: "container",
            functionjs: function () {control();},
            activePage: 3
        },
        form_test : {
            url: "/form_test.html",
            class: "container",
            functionjs: function () {form_test();},
            activePage: 3
        },
        homework : {
            url: "/homework.html",
            class: "container",
            activePage: 3
        }   
    };

    document.addEventListener('click', (event) => { 
        let selectedPageSite;
        if (event.target.id) { //elements of header has id
            selectedPageSite = pagesSite[event.target.id];
        } else  if (event.target.dataset) {  //element of footer has dataset
            selectedPageSite = pagesSite[event.target.dataset["pageFooter"]];
        }

        if (selectedPageSite) {
            let mainArea = document.querySelector("main");
            mainArea.className = selectedPageSite.class;
            let getPageSite = fetch(selectedPageSite.url); //проміс
            getPageSite.then(data => data.text() //data.text() - теж проміс
                            .then(function(text){loadPage(text,mainArea, selectedPageSite.functionjs);}))
                        .catch(error=>console.log(error));
            
            let linkMain = document.getElementById("main");
            let parentlinkMain = linkMain.parentElement;
            let linkPlan = document.getElementById("plan");
            let parentlinkPlan = linkPlan.parentElement.parentElement;
            let linkHomework = document.getElementById("homework");
            let parentlinkHomework = linkHomework.parentElement.parentElement;
            switch(selectedPageSite.activePage){
                case 1: 
                    parentlinkPlan.classList.remove("active");
                    parentlinkHomework.classList.remove("active");
                    parentlinkMain.classList.add("active");
                    break
                case 2: 
                    parentlinkHomework.classList.remove("active");
                    parentlinkMain.classList.remove("active");
                    parentlinkPlan.classList.add("active");
                    break
                case 3: 
                    parentlinkMain.classList.remove("active");
                    parentlinkPlan.classList.remove("active");
                    parentlinkHomework.classList.add("active");
                    break
            }
            
        }
        
    });

    function loadPage(data, targetSelector, functionjs) {
        targetSelector.innerHTML = data;      
        if (functionjs) {
            functionjs();
        }
    }

    document.getElementById("main").click();

    const findInfo = {
        в :["1вектор","4відень","1вирази"],
        м: ["1масив","1матриця"],
        о: ["3оцінки"],
        к: ["6контрольна"],
        п: ["2план"],
        ф: ["1функції","файли"],
        w: ["1word"]
    }
    const numberPage = {
        1 : "Головна",
        2: "Планування тем",
        3: "Оцінки",
        4: "Подорожі",
        5: "Майбутні подорожі",
        6: "Контрольна робота",
        7: "Тестування",
        8: "Домашнє завдання"
    }
    let btnSearch = document.querySelector("#btn-search");
    btnSearch.addEventListener('click', (event) => { 
        let mainArea = document.querySelector("#area-search"); 
        let found;
        let value;
        let stringWords;
        for (let key in findInfo) {      
            if (key==mainArea.value[0]) {
                stringWords="";
                for (value of findInfo[key]){
                    let value2= value.substring(1);
                    stringWords=stringWords+`${value2}`+", ";
                    if (value2==mainArea.value) 
                        {
                          found = value2;
                          break;
                        }
                }
            }   
        }
        if (found) {
            alert(`Інформація про ${mainArea.value} на сторінці "${numberPage[value[0]]}" `);      
        } else {if (stringWords!==undefined) alert(`Інформації про ${mainArea.value} немає на сайті.  
Можливо Вас зацікавить інформація про ${stringWords}`); 
                else alert(`Інформації про ${mainArea.value} немає на сайті !`);   
                } 
    })
    }) ()
    

        

      
    

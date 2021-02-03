(function() {
    const pagesSite = {
        main : {
            url: "/main.html",
            class: "container",
            functionjs: function () {main();}
        },
        plan : {
            url: "/plan.html",
            class: "container",
            functionjs: function () {plan();}
        },
        marks : {
            url: "/marks.html",
            class: "container",
            functionjs: function () {marks();}
        },
        travel : {
            url: "/travel.html",
            class: "container carousel-size",
            functionjs: function () {travel();}
        },
        travel_future : {
            url: "/travel_future.html",
            class: "container carousel-size",
            functionjs: function () {travel_future();}
        },
        control : {
            url: "/control.html",
            class: "container",
            functionjs: function () {control();}
        },
        form_test : {
            url: "/form_test.html",
            class: "container",
            functionjs: function () {form_test();}
        },
        homework : {
            url: "/homework.html",
            class: "container"
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
        }
        
    });

    function loadPage(data, targetSelector, functionjs) {
        targetSelector.innerHTML = data;      
        if (functionjs) {
            functionjs();
        }
    }

    document.getElementById("main").click();

    }) ()
    

        

      
    

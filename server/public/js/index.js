(function() {
    let btnNews = document.querySelector("#news");
    btnNews.addEventListener("click", (event) => {
        let paragraph = document.querySelector("#parNews");
        if (paragraph.style.height== "80px") {
                paragraph.style.height = "350px" ;
                event.target.innerText = "Зменшити текст";
        } else {
            paragraph.style.height = "80px";
            event.target.innerText = "Показати більше";
        }
    })

}) ()


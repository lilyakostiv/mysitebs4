
const http = require('http')
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const url = require('url'); //for GET-url
  
process.env.HOST = '127.0.0.1';
process.env.PORT = '8888';

const app = express();
app.use("/", express.static(path.join(__dirname + '/public')));
app.use(cors())
app.use(express.urlencoded()); //for POST - body parse

app.get("/variant", (req,res) => {
    let search = url.parse(req.url, true).query; //url parse
    
    let link = '';
    if (search.variant == "1" && search.password == "one") {
        link =path.join(__dirname+'/private/controlVariant1.htm');
    } else if (search.variant == "2" && search.password == "two") {
                link =path.join(__dirname+'/private/controlVariant2.htm');
            } else if (search.variant == "3" && search.password == "three") {
                        link =path.join(__dirname+'/private/controlVariant3.htm');
                    } else if (search.variant == "4" && search.password == "four") {
                                link =path.join(__dirname+'/private/controlVariant4.htm');
                            } else {
                                    link =path.join(__dirname+'/private/Error.htm');
                                    }
    res.sendFile(link);
})


app.get("/test", (req,res) => {
    let parameters=url.parse(req.url, true).query;

    let lastNamePupil = parameters.lastName;
    let firstNamePupil = parameters.firstName;
   
    let linkTest = '';
    if (parameters.number == "1" && parameters.passwordtest == "first") {
        linkTest =path.join(__dirname+'/private/testNumber1.json');
        res.setHeader("Content-Type","application/json");
    } else if (parameters.number == "2" && parameters.passwordtest == "second") {
                linkTest =path.join(__dirname+'/private/testNumber2.json');
                res.setHeader("Content-Type","application/json");
            } else {
                   res.status(401);
                    } 
    
    res.sendFile(linkTest);   
})

app.get("/resultTest", (req,res) => {
    let parameters = url.parse(req.url, true).query;
    
    if (parameters.TEST_NUMBER ==1) {
        let countCorrectAnswers = 0;
        if (parameters.question1 == "2") countCorrectAnswers += 2; 
        if (parameters.question2 == "1") countCorrectAnswers += 2;
        if (parameters.question3 == "1") countCorrectAnswers += 2; 
        if (parameters.question4 == "3") countCorrectAnswers += 3; 
        if (parameters.question5 == "3") countCorrectAnswers += 3; 
        res.statusCode = 200;
        res.send("Ваша оцінка за виконаний тест -  "+countCorrectAnswers);
    }
    else if (parameters.TEST_NUMBER ==2) {
        let countCorrectAnswers = 0;
        if (parameters.question1 == "1") countCorrectAnswers += 2; 
        if (parameters.question2 == "3") countCorrectAnswers += 2;
        if (parameters.question3 == "3") countCorrectAnswers += 2; 
        if (parameters.question4 == "1") countCorrectAnswers += 3; 
        if (parameters.question5 == "3") countCorrectAnswers += 3; 
        res.statusCode = 200;
        res.send("Ваша оцінка за виконаний тест -  "+countCorrectAnswers);
    }
    
})

app.listen(process.env.PORT,() => {
    console.log('Program Works/*')
});
const express = require('express');
const bodyParser = require('body-parser');
const { log } = require('console');

const app = express();


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{

    var today = new Date();

    var currentDate = today.getDay();

    var day =" ";

    console.log(currentDate);

    switch (currentDate) {
        case 0:
            day="Sunday";            
            break;
        
        case 1:
            day= "Monday";
            break;

        case 2:
            day ="Tuesday";
            break;
        
        case 3:
            day = "Wednesday";
            break;
        
        case 4:
            day = "Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day ="Saturday";
            break;


        default:
            break;
    }

    // if(currentDate===6 || currentDate ===0)
    // {
    //     day = "Weekend";
    // }
    // else 
    // {
    //     day = "Weekdays";
    // }

    res.render("list",{kindOfDay:day});

})

app.listen(3000);


// app.use(bod)
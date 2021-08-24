var readlinesync = require("readline-sync");
const chalk = require('chalk');

var yourName = readlinesync.question(chalk.green("what's Your Name?\n"));
console.log(chalk.magenta("Hii"),yourName,chalk.magenta("Welcome to Mirzapur Quiz.\nThere are"),"15",chalk.magenta("question\n"),chalk.red("Score\t\t\tGrades"),chalk.blue(" \nabove 12\t\tExcellent \n8 to 12\t\t\tVery good\n5 to 7\t\t\tGood \nless than 5\t\tPoor\n"));

console.log(chalk.yellow("NOTE : Write the answer whichever is correct in same format as given in options\n"));
var score = 0;

function mirzapurQuiz(quetion, myAnswer){
    var yourAnswer = readlinesync.question(quetion+"Ans->");
    if(yourAnswer == myAnswer){
        score+=1;
        console.log("Right");
    }
    else{
      console.log("wrong. correct answer is: ",myAnswer);
    }
    console.log("Your score is: ",score);
    console.log(chalk.red("--------------------"));
}



var questions = [{
  question :'1.To whom did Kaleen Bhaiya say "Aap Jis Sheher mein naukar banke aaye ho, hum malik hai us sheher ke"?\n(Ratan Singh/ Compounder/ Maurya Ratan Singh)\n',
  answer : 'Maurya Ratan Singh'
},{
  question :'“2.Bawaal cheez hai be! Saala system hil jaata hai.” In this dialogue what is Guddu Bhaiya referring to as ‘bawaal cheez’?\n(gun/ opium/ cocaine)\n',
  answer : "gun"
},{
  question :"3.What is 'barfi' code for in Mirzapur lingo?\n(cocaine/ guns/ opium)\n",
  answer : "opium"
},{
  question : "4. Who plays the role of Guddu Pandit?\n(Divyendu Sharma/ Vikrant Massey/ Ali Fazal)\n",
  answer : "Ali Fazal"
},
{
  question : '5. Who said, "Agli baar Munna Bhaiya ghar aayein, zinda wapas nahi laute toh"\n(Dimpy/ Guddu Pandit/ Bablu Pandit)\n',
  answer : "Guddu Pandit"
},
{
  question : '6. To whom did Sweety say,"Chuna Nahi Humko Bina Permission Ke".\n(Bablu/ Munna/ Guddu)\n',
  answer : "Guddu"
},
{
  question : "7. Who ruled Mirzapur before the Tripathis?\n(The Chaudharys/ The Shuklas/ The Guptas)\n",
  answer : "The Chaudharys"
},
{
  question : "8. Kaleen Bhaiya’s rival Rati Shankar Shukla is the ‘bahubali’ of which town?\n(Sitapur/ Jaunpur/ Azamgarh)\n",
  answer : "Jaunpur"
},
{
  question : "9. What is Sweety and Golu Gupta’s father’s profession?\n(Lawyer/ Cop/ College principal)\n",
  answer : "Cop"
},
{
  question : "10. Who is the only character to recite the complete Hindi varnmala or the Hindi alphabet in the series?\n(Bablu Bhaiya/ Rati Shankar/ Guddu Bhaiya)\n",
  answer : "Rati Shankar"
},{
  question : "11. Who plays the role of Compounder in the series?\n(Abhishek Banerjee/ Jaideep Ahlawat/ Neeraj Kabi)\n",
  answer : "Abhishek Banerjee"
},
{
  question : "12. What is Munna Bhaiya’s real name in the show?\n(Mahesh Tripathi/ Phoolchand Tripathi/ Satyanand Tripathi)\n",
  answer : "Phoolchand Tripathi"
},
{
  question : "13. What competition is Guddu Bhaiya gearing up for in Season 1?\n(Mr. Purvanchal/ Mirzapur ka King/ Sher-e-Mirzapur)\n",
  answer : "Mr. Purvanchal"
},
{
  question : "14. What is the name of the politician who helps Kaleen Bhaiya?\n(MP Yadav/ JP Yadav/ OP Yadav)\n",
  answer : "JP Yadav"
},
{
  question : "15. Why did Inspector Ram Sharan Mourya come to Mirzapur?\n(To help Guddu and Bablu/ To kill Kaleen Bhaiya/ To make Mirzapur crime-free)\n",
  answer : "To make Mirzapur crime-free"
}]

for(var i=0;i<questions.length;i++){
    mirzapurQuiz(questions[i].question,questions[i].answer);
}

if(score>12){
  console.log("\nYou are Excellent Fan of Mirzapur");
}else if(score>=8 && score<=12){
  console.log("\nYou are Very Good Fan of Mirzapur");
}else if(score>=5 && score<=7){
  console.log("\nYou are Good Fan of Mirzapur");
}else{
  console.log("\nYou are Poor Fan of Mirzapur");
}



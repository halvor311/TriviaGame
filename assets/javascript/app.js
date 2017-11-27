//Make the start button begin the game
//Give the user 30 seconds to answer a question
//When the user submits an answer give a 5 second page saying whether they were right or wrong, maybe play the chorus of the song
//Continue this 10 times
//When 10 questions have been answered, tally the results and give the user the option to try again.
//Restart the quiz without refreshing the page


    
$(document).ready(function(){
    var maxTime = 30;
    var frequency = 1000;
    var countdown;

    var questionOne = {
        question: "Who is the legendary band behind the song 'Inside Out'?",
        a: ["A: Third Eye Blind", false],
        b: ["B: Eve 6", true],
        c: ["C: Counting Crows", false],
        d: ["D: Blues Traveler", false]
    };
    var questionTwo = {
        question: "This band helped define the alternative rock genre in the 90s with their smash hit 'Shine'",
        a: ["A: Powerman 5000", false],
        b: ["B: Incubus", false],
        c: ["C: The Smashing Pumpkins", false],
        d: ["D: Collective Soul", true]
    };
    var questionThree = {
        question: "This band brought the party to the bowling alley with their hit 'My Own Worst Enemy'",
        a: ["A: Lit", true],
        b: ["B: The Cranberries", false],
        c: ["C: Live", false],
        d: ["D: Smash Mouth", false]
    };
    var questionFour = {
        question: "This band has been getting played at graduations ever since their hit 'Time of Your Life' was released in 1999",
        a: ["Blink-182", false],
        b: ["The Offspring", false],
        c: ["Green Day", true],
        d: ["Sublime", false]
    };
    var questionFive = {
        question: "This band defined 90s alternative rock with their hit 'Semi-Charmed Life'",
        a: ["Blues Traveler", false],
        b: ["Third Eye Blind", true],
        c: ["Gin Blossoms", false],
        d: ["Len", false]
    };
    var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
    var currentQuestion = 0;

    $("#start").click(function(){
        $(".questionContainer").empty();  
        countdown = setInterval(function() {decrementCounter()},frequency);          
     function decrementCounter(){
        $("#countdown").text("Time Left " + maxTime);
        if (maxTime===0){
            clearInterval(countdown);
        }
        else{ 
            maxTime--;
        }
    }
    $(".questionContainer").append("<p id='countdown'></p>"); 
    $(".questions").append("<h1 class = questions></h1>" + questionArray[0]);
    $(".answers").append("<p class = answers></h1>" + questionArray[0].question)
    console.log(questionArray);
    }); 
    
    
             
    //             a: 'Third Eye Blind',
    //             b: 'Eve 6',
    //             c: 'Counting Crows',
    //             d: 'Blues Traveler',
    //         },
    //         correctAnswer: 'Eve 6'
    //     },
    //     {
    //         question: "This band helped define the alternative rock genre in the 90s with their smash hit: Shine",
    //         answers: {
    //             a: 'Collective Soul',
    //             b: 'Sister Hazel',
    //             c: 'Black Lab',
    //             d: 'Creed',
    //         },
    //         correctAnswer: 'Collective Soul'
    //     },
    //     {
    //         question: "This band made their mark with the hit: My Own Worst Enemy",
    //         answers: {
    //             a: 'Live',
    //             b: 'Lit',
    //             c: 'Incubus',
    //             d: 'Gin Blossoms'
    //         },
    //         correctAnswer: 'Lit'
    
    //     },
    //     {
    //         question: "This band influenced Daughtry greatly with the album Throwing Copper featuring the hit: Lightning Crashes.",
    //         answers: {
    //             a: 'Tonic',
    //             b: 'Counting Crows',
    //             c: 'Linkin Park',
    //             d: 'Live'
    //         },
    //         correctAnswer: 'Live'
    //     }
    // ];
    // function showQuestions(questionIndex){
    //     //Empty the jumbotron 
    //     $(".questionContainer").empty();
        
    //     //Replace it with:
    //     //1 timer. 
    //     $(".questionContainer").append("<p id='countdown'></p>");

    //         //Use setInterval to call decrement counter function
    //         //Use clearInterval to stop decrement counter function when the counter is 0
    //     countdown = setInterval(function() {decrementCounter()},frequency);

    //     //2 the question 
    //     $(".questionContainer").append("<p id='countdown'></p>"); //create a new div in html. Instead of <p> use <div>
    //     //Select question by saying myQuestions[0].question which will give me the first object.
    //     //Select answer by saying myQuestions[0].answers.a; myQuestions[1].answers.b; myQuestions[2].answers.c myQuestions[3]. 
        
    //     //3 answer choices
    //     //A new page that shows a form of correct or incorrect
                
    // }
    // // function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton){
});
   


// var score = 0;
// document.write("Test your knowledge")

$("#start").on("click", function() {
  game.start();
});

var theQuestions = [
  {
    question: "What year was Elly born? ",
    answers: [
      "  (a) 2008    ",
      "  (b) 2009    ",
      "  (c) 2010    ",
      "  (d) 2011    ",
      "  (e) 2012    ",
      "  (f) 2013    "
    ],
    correct: "2010"
  },
  {
    question: "What year was Louise born? ",
    answers: [
      "  (a) 2008    ",
      "  (b) 2009    ",
      "  (c) 2010    ",
      "  (d) 2011    ",
      "  (e) 2012    ",
      "  (f) 2013    "
    ],
    correct: "2008"
  },
  {
    question: "What year was William born? ",
    answers: [
      "  (a) 2008    ",
      "  (b) 2009    ",
      "  (c) 2010    ",
      "  (d) 2011    ",
      "  (e) 2012    ",
      "  (f) 2013    "
    ],
    correct: "2012"
  },
  {
    question: "What year was the Mum born? ",
    answers: [
      "  (a) 1972    ",
      "  (b) 1973    ",
      "  (c) 1974    ",
      "  (d) 1975    ",
      "  (e) 1976    ",
      "  (f) 1977    "
    ],
    correct: "1976"
  },
  {
    question: "What year was Dad born? ",
    answers: [
      "  (a) 1972    ",
      "  (b) 1973    ",
      "  (c) 1974    ",
      "  (d) 1975    ",
      "  (e) 1976    ",
      "  (f) 1977    "
    ],
    correct: "1973"
  }
];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter = game.counter - 1;
    $("#counter").html(game.counter);
    if (game.counter == 0) {
      console.log("Time is up!");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#subwrapper").prepend(
      '<h2>Time Remaining: <span id="counter">120</span> seconds </h2>'
    );
    $("#start").remove();
    for (var i = 0; i < theQuestions.length; i++) {
      $("#subwrapper").append("<h2>" + theQuestions[i].question + "</h2>");
      $("#subwrapper").append("<br>");
      for (var j = 0; j < theQuestions[i].answers.length; j++) {
        $("#subwrapper").append(
          "<input type = 'radio' name='question - " +
            i +
            "'value='" +
            theQuestions[i].answers[j] +
            "'>" +
            theQuestions[i].answers[j]
        );
        $("#subwrapper").append("<br>");
        $("#subwrapper").append("<br>");
      }
    }
  }
};

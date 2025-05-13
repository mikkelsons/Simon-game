"use strict";

const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).keypress(function (event) {
  if (!started) {
    startGame(event.key);
  }
});

function startGame(key) {
  switch (key) {
    case "a":
      $("#level-title").text("Level " + level);
      started = true;
      nextSequenceA();

      $(".btn")
        .off("click")
        .click(function () {
          if (started) {
            var userChosenColour = $(this).attr("id");
            userClickedPattern.push(userChosenColour);
            playSound(userChosenColour);
            animatePress(userChosenColour);
            checkAnswerA(userClickedPattern.length - 1);
          }
        });

      function checkAnswerA(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
          console.log("success");
          if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
              nextSequenceA();
            }, 1000);
          }
        } else {
          console.log("wrong");
          playSound("wrong");
          $("body").addClass("game-over");
          setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          $("#level-title").text(
            "Game over. Press A for Beginner, B for Advanced, or C for Expert."
          );
          startOver();
        }
      }

      function nextSequenceA() {
        userClickedPattern = [];
        level++;
        $("#level-title").text("Level " + level);
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        for (var i = 0; i < gamePattern.length; i++) {
          gameAReturn(i);
        }

        function gameAReturn(i) {
          setTimeout(function () {
            $("#" + gamePattern[i])
              .fadeIn(100)
              .fadeOut(100)
              .fadeIn(100);
            playSound(gamePattern[i]);
          }, 750 * i);
        }
      }

      break;

    case "b":
      $("#level-title").text("Level " + level);
      started = true;
      nextSequenceB();

      $(".btn")
        .off("click")
        .click(function () {
          if (started) {
            var userChosenColour = $(this).attr("id");
            userClickedPattern.push(userChosenColour);
            playSound(userChosenColour);
            animatePress(userChosenColour);
            checkAnswerB(userClickedPattern.length - 1);
          }
        });

      function checkAnswerB(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
          console.log("success");
          if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
              nextSequenceB();
            }, 1000);
          }
        } else {
          console.log("wrong");
          playSound("wrong");
          $("body").addClass("game-over");
          setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          $("#level-title").text(
            "Game over. Press A for Beginner, B for Advanced, or C for Expert."
          );
          startOver();
        }
      }

      function nextSequenceB() {
        userClickedPattern = [];
        level++;
        $("#level-title").text("Level " + level);
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        $("#" + randomChosenColour)
          .fadeIn(100)
          .fadeOut(100)
          .fadeIn(100);
        playSound(randomChosenColour);
      }
      break;

    case "c":
      $("#level-title").text("Level " + level);
      started = true;
      nextSequenceC();

      $(".btn")
        .off("click")
        .click(function () {
          if (started) {
            var userChosenColour = $(this).attr("id");
            console.log(userChosenColour);
            userClickedPattern.push(userChosenColour);
            playSound(userChosenColour);
            animatePress(userChosenColour);
            checkAnswerC(userClickedPattern.length - 1);
          }
        });

      function checkAnswerC(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
          console.log("success");
          if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
              nextSequenceC();
            }, 1000);
          }
        } else {
          console.log("wrong");
          playSound("wrong");
          $("body").addClass("game-over");
          setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          $("#level-title").text(
            "Game over. Press A for Beginner, B for Advanced, or C for Expert."
          );
          startOver();
        }
      }

      function nextSequenceC() {
        userClickedPattern = [];
        level++;
        $("#level-title").text("Level " + level);
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        $("#" + randomChosenColour);
        playSound(randomChosenColour);
      }
      break;

    default:
      console.log(key);
      break;
  }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

import 'package:flutter/material.dart';
import 'package:quiz/data/questions.dart';
import 'package:quiz/questions_screen.dart';
import 'package:quiz/results_screen.dart';
import 'package:quiz/starting_content.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});
  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  var activeScreen = "starting-content";
  List<String> selectedAnswers = [];

  void switchScreen() {
    setState(() {
      activeScreen = "questions-screen";
    });
  }

  void chooseAnswer(String answer) {
    selectedAnswers.add(answer);
    if (selectedAnswers.length == questions.length) {
      setState(() {
        // selectedAnswers = [];
        activeScreen = "result-screen";
      });
    }
  }

  @override
  Widget build(context) {
    // var screenWidget = activeScreen == "starting-content"
    //     ? StartingContent(switchScreen)
    //     : const QuestionsScreen();
    Widget screenWidget = StartingContent(switchScreen);
    if (activeScreen == "questions-screen") {
      screenWidget = QuestionsScreen(chooseAnswer);
    }

    if (activeScreen == "result-screen") {
      screenWidget = ResultScreen(chooseAnswers: selectedAnswers);
    }

    return MaterialApp(
      home: Scaffold(
        body: Container(
            decoration: const BoxDecoration(color: Colors.deepPurple),
            child: screenWidget),
      ),
    );
  }
}

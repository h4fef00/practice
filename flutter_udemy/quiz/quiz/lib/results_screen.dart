import 'package:flutter/material.dart';
import 'package:quiz/data/questions.dart';
import 'package:quiz/questions_summary.dart';

class ResultScreen extends StatelessWidget {
  const ResultScreen({super.key, required this.chooseAnswers});
  final List<String> chooseAnswers;

  List<Map<String, Object>> getSummaryData() {
    final List<Map<String, Object>> summary = [];
    for (var i = 0; i < chooseAnswers.length; i++) {
      summary.add({
        "question_index": i,
        "question": questions[i].text,
        "correct_answer": questions[i].answers[0],
        "user_answer": chooseAnswers[i]
      });
    }
    return summary;
  }

  @override
  Widget build(context) {
    final summaryData = getSummaryData();
    final numberOfTotal = questions.length;
    final numCorrect = summaryData.where((data) {
      return data['user_answer'] == data['correct_answer'];
    }).length;

    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Expanded(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                  "You answered $numCorrect out of $numberOfTotal questions correctly!"),
              const SizedBox(
                height: 30,
              ),
              QuestionsSummary(summaryData: summaryData),
              const SizedBox(
                height: 30,
              ),
              TextButton(onPressed: () {}, child: const Text("Restart quiz"))
            ],
          ),
        ),
      ),
    );
  }
}

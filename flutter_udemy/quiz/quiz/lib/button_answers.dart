import 'package:flutter/material.dart';

class ButtonAnswers extends StatelessWidget {
  const ButtonAnswers(
      {super.key, required this.answerText, required this.onAnswer});
  final String answerText;
  final void Function() onAnswer;
  @override
  Widget build(context) {
    return ElevatedButton(
        onPressed: onAnswer,
        style: ElevatedButton.styleFrom(
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 40),
          backgroundColor: const Color.fromARGB(255, 33, 1, 95),
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(40),
          ),
        ),
        child: Text(
          answerText,
          textAlign: TextAlign.center,
        ));
  }
}

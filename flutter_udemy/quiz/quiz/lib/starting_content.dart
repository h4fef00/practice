import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class StartingContent extends StatelessWidget {
  const StartingContent(this.startQuiz, {super.key});
  final void Function() startQuiz;
  @override
  Widget build(context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Image.asset(
            "assets/images/quiz-logo.png",
            width: 200,
            color: const Color.fromARGB(150, 255, 255, 255),
          ),
          Padding(
              padding: const EdgeInsets.only(top: 50, bottom: 20),
              child: Text(
                "Learn Flutter the fun way!",
                style: GoogleFonts.lato(fontSize: 20, color: Colors.white),
              )),
          TextButton.icon(
              icon: const Icon(Icons.arrow_right_alt, color: Colors.white),
              onPressed: startQuiz,
              label: const Text(
                "Start Quiz",
                style: TextStyle(color: Colors.white),
              )),
        ],
      ),
    );
  }
}

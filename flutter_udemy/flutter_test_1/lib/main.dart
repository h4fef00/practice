import 'package:flutter/material.dart';
import 'package:flutter_test_1/gradient_container.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        //backgroundColor: Colors.deepPurple,
        body: GradientContainer([Colors.black, Colors.deepPurple]),
      ),
    ),
  );
}


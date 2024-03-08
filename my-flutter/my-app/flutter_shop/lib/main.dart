import 'package:flutter/material.dart';
import 'package:flutter_shop/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: "My flutter shop",
      home: Home(),
    );
  }
}

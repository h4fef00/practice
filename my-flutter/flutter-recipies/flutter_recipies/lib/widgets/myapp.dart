import 'package:flutter/material.dart';
import 'package:flutter_recipies/widgets/login.dart';
import 'package:flutter_recipies/widgets/registration.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Ricette",
      home: Scaffold(
        appBar: AppBar(
          title: const Text(
            "Ricette",
            style: TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
          ),
          actions: [
            IconButton(
              onPressed: () {},
              icon: const Icon(
                Icons.person,
                color: Colors.white,
              ),
            ),
            IconButton(
              onPressed: () {},
              icon: const Icon(
                Icons.favorite,
                color: Colors.white,
              ),
            ),
          ],
          backgroundColor: Colors.purple,
        ),
        body: const Registration(),
      ),
    );
  }
}

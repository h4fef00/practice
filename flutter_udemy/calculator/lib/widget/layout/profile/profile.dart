import 'package:calculator/widget/layout/profile/login.dart';
import 'package:flutter/material.dart';

class Profile extends StatelessWidget {
  const Profile({super.key});

  @override
  Widget build(BuildContext context) {
    //implementazione login + controllo dati dalla localstorage
    //controllo se è loggato, mostrare form di proile con campi inseriti
    return Scaffold(
      appBar: AppBar(
        title: const Text("Login"),
      ),
      body: Login(),
    );
  }
}

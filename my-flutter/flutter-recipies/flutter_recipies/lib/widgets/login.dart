import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final _nameController = TextEditingController();
  // final _surnameController = TextEditingController();
  // final _dateController = TextEditingController();
  // final _usernameController = TextEditingController();
  // final _pswController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Form(
          child: Column(
            children: [
              TextFormField(
                controller: _nameController,
                decoration: const InputDecoration(labelText: "Nome:"),
              )
            ],
          ),
        ),
      ],
    );
  }
}

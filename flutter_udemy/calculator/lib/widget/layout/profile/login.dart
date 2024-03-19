import 'package:calculator/widget/layout/profile/register.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final _formKey = GlobalKey<FormState>();

  void _submit() {
    if (_formKey.currentState!.validate()) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Enter form"),
        ),
      );
    }
  }

  void _routeRegisterPage() {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (ctx) {
        return const Register();
      }),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            validator: (value) {
              if (value == null || value.isEmpty) {
                return "Enter email";
              }
              return null;
            },
            decoration: const InputDecoration(
              label: Text("Email"),
            ),
          ),
          TextFormField(
            obscureText: true,
            validator: (value) {
              if (value == null || value.isEmpty) {
                return "Enter password";
              }
              return null;
            },
            decoration: const InputDecoration(
              label: Text("Password"),
            ),
          ),
          Row(
            children: [
              TextButton(
                onPressed: () {},
                child: const Text("Cancella"),
              ),
              ElevatedButton(onPressed: _submit, child: const Text("Submit"))
            ],
          ),
          Row(
            children: [
              TextButton(
                  onPressed: _routeRegisterPage,
                  child: const Text("Non sei registrato?"))
            ],
          )
        ],
      ),
    );
  }
}

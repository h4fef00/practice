import 'package:calculator/models/user.dart';
import 'package:calculator/widget/components/checkbox_formfield_with_error_message.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Register extends StatefulWidget {
  const Register({super.key});

  @override
  State<Register> createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  final _formKey = GlobalKey<FormState>();
  String agreeError = "";
  final _nameController = TextEditingController();
  final _surnameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool agreeTerms = false;
  bool isChanged = false;
  User? user;
  SharedPreferences? prefs;

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    _nameController.dispose();
    _surnameController.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _storeUser(User user) async {
    prefs = await SharedPreferences.getInstance();
    await prefs!.setString("name", user.name!);
    await prefs!.setString("surname", user.surname!);
    await prefs!.setString("email", user.email!);
    await prefs!.setString("password", user.password!);
    await prefs!.setBool("isAdmin", user.isAdmin!);
  }

  void _register() {
    if (_formKey.currentState!.validate()) {
      String? storedEmail = prefs!.getString("email");
      if (storedEmail != null && storedEmail == _emailController.text) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Questo email è già stato registrato.'),
          ),
        );
      } else {
        User user = User(
          true,
          name: _nameController.text,
          surname: _surnameController.text,
          email: _emailController.text,
          password: _passwordController.text,
        );
        _storeUser(user);
        print("Memorizzato utente ${user}");
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Register"),
      ),
      body: Form(
        key: _formKey,
        child: Column(
          children: [
            TextFormField(
              controller: _nameController,
              validator: (value) {
                if (value == null ||
                    value.isEmpty ||
                    value.length <= 2 ||
                    value.trim().length <= 2) {
                  return "Enter name";
                }
                return null;
              },
              decoration: const InputDecoration(
                label: Text("Name"),
              ),
            ),
            TextFormField(
              controller: _surnameController,
              validator: (value) {
                if (value == null ||
                    value.isEmpty ||
                    value.length <= 2 ||
                    value.trim().length <= 2) {
                  return "Enter surname";
                }
                return null;
              },
              decoration: const InputDecoration(
                label: Text("Surname"),
              ),
            ),
            TextFormField(
              controller: _emailController,
              validator: (value) {
                if (value == null || value.isEmpty || !value.contains("@")) {
                  return "Enter email";
                }
                return null;
              },
              decoration: const InputDecoration(
                label: Text("Email"),
              ),
            ),
            TextFormField(
              controller: _passwordController,
              validator: (value) {
                if (value == null ||
                    value.isEmpty ||
                    value.length <= 2 ||
                    value.trim().length <= 2) {
                  return "Enter password";
                }
                return null;
              },
              decoration: const InputDecoration(
                label: Text("Password"),
              ),
            ),
            CheckBoxFormFieldWithErrorMessage(
              labelText: "I agree with policies",
              isChecked: agreeTerms,
              onChanged: (bool? value) {
                setState(
                  () {
                    isChanged = true;
                    agreeTerms = value!;
                    if (agreeTerms) {
                      agreeError = "";
                    } else {
                      agreeError = "Check field required";
                    }
                  },
                );
              },
              validator: (value) {
                if (!agreeTerms) {
                  agreeError = "Check field required";
                }
                return null;
              },
              error: agreeError,
            ),
            ElevatedButton(
              onPressed: _register,
              child: const Text("Submit"),
            ),
          ],
        ),
      ),
    );
  }
}

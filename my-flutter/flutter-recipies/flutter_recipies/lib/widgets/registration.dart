import 'package:flutter/material.dart';
import 'package:flutter_recipies/widgets/home.dart';

class Registration extends StatefulWidget {
  const Registration({super.key});

  @override
  State<Registration> createState() => _RegistrationState();
}

class _RegistrationState extends State<Registration> {
  final _formKey = GlobalKey<FormState>();
  // final _userData = User();
  final _nameController = TextEditingController();
  final _surnameController = TextEditingController();
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();
  final _dateController = TextEditingController();

  void _openDatePicker() async {
    final initialDate = DateTime.now();
    final firstDate =
        DateTime(initialDate.year - 1, initialDate.month, initialDate.day);
    final lastDate = initialDate;
    final pickedDate = await showDatePicker(
      context: context,
      initialDate: initialDate,
      firstDate: firstDate,
      lastDate: lastDate,
    );
  }

  // void _onRegister() {
  //   if (_formKey.currentState!.validate()) {
  //     _userData.fullName = _fullnameController.text;
  //     _userData.username = _usernameController.text;
  //     _userData.password = _passwordController.text;
  //     Navigator.push(
  //       context,
  //       MaterialPageRoute(
  //         builder: (context) {
  //           return const Home();
  //         },
  //       ),
  //     );
  //   } else {
  //     ScaffoldMessenger.of(context).showSnackBar(
  //       const SnackBar(
  //         content: Text('Fill input'),
  //       ),
  //     );
  //   }
  // }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Card(
        child: Form(
          key: _formKey,
          child: SizedBox(
            width: 450,
            height: 350,
            child: Column(
              // mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: Column(
                    children: [
                      TextFormField(
                        decoration: const InputDecoration(labelText: "Name"),
                        controller: _nameController,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return "Enter name";
                          }
                          return null;
                        },
                      ),
                      TextFormField(
                        decoration: const InputDecoration(labelText: "Surname"),
                        controller: _surnameController,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return "Enter surname";
                          }
                          return null;
                        },
                      ),
                      TextFormField(
                        controller: _dateController,
                        decoration: InputDecoration(
                          labelText: "Date",
                          suffixIcon: IconButton(
                            onPressed: () {
                              _openDatePicker();
                            },
                            icon: const Icon(Icons.date_range),
                          ),
                        ),
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return "Enter date";
                          }
                          return null;
                        },
                      ),
                      TextFormField(
                        decoration:
                            const InputDecoration(labelText: "Username"),
                        controller: _usernameController,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return "Enter username";
                          }
                          return null;
                        },
                      ),
                      TextFormField(
                        decoration:
                            const InputDecoration(labelText: "Password"),
                        controller: _passwordController,
                        obscureText: true,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return "Enter password";
                          }
                          return null;
                        },
                      ),
                      const SizedBox(
                        height: 30,
                      ),
                      // Row(
                      // children: [
                      TextButton(
                        onPressed: () {
                          _usernameController.clear();
                          _passwordController.clear();
                        },
                        child: const Text("Cancel"),
                      ),
                      TextButton(
                        onPressed: () {
                          // _onRegister();
                        },
                        child: const Text("Sign in"),
                      )
                      // ],
                      // )
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}

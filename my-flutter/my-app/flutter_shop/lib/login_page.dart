import 'package:flutter/material.dart';
import 'package:flutter_shop/signin_page.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Form(
        child: Column(
          // mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.all(10),
              child: Column(
                children: [
                  TextFormField(
                    decoration: const InputDecoration(labelText: "Username"),
                    controller: _usernameController,
                  ),
                  TextFormField(
                    decoration: const InputDecoration(labelText: "Password"),
                    controller: _passwordController,
                    obscureText: true,
                  ),
                  Row(
                    children: [
                      TextButton(
                        onPressed: () {
                          _usernameController.clear();
                          _passwordController.clear();
                        },
                        child: const Text("Cancel"),
                      ),
                      TextButton(
                        onPressed: () {},
                        child: const Text("Log in"),
                      )
                    ],
                  ),
                  Column(
                    children: [
                      TextButton(
                          onPressed: () {
                            Navigator.push(
                                context,
                                MaterialPageRoute<void>(
                                  builder: (context) => Scaffold(
                                    appBar: AppBar(
                                      title: const Text("Sigin"),
                                    ),
                                    body: const Center(
                                      child: Signin(),
                                    ),
                                  ),
                                ));
                          },
                          child: const Text("Non sei registrato?"))
                    ],
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:flutter_shop/login_page.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Flutter shop"),
        actions: <Widget>[
          IconButton(
            onPressed: () {
              Navigator.push(
                  context,
                  MaterialPageRoute<void>(
                    builder: (context) => Scaffold(
                      appBar: AppBar(
                        title: const Text("Login"),
                      ),
                      body: const Center(
                        child: LoginPage(),
                      ),
                    ),
                  ));
            },
            icon: const Icon(Icons.person),
            tooltip: "Open profile",
          ),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.shopping_bag),
            tooltip: "Open cart",
          )
        ],
      ),
    );
  }
}

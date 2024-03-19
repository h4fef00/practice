import 'package:calculator/models/coffee.dart';
import 'package:calculator/widget/layout/home/home_cards.dart';
import 'package:flutter/material.dart';

class DetailsPage extends StatefulWidget {
  const DetailsPage(this.coffee, {super.key});
  final Coffee coffee;

  @override
  State<DetailsPage> createState() => _DetailsPageState();
}

class _DetailsPageState extends State<DetailsPage> {
  void _addFavorite() {
    // print(widget.coffee.title);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.coffee.title!),
        actions: [
          IconButton(
            onPressed: _addFavorite,
            icon: const Icon(Icons.favorite_border),
          ),
        ],
      ),
      body: Container(
        margin: const EdgeInsets.symmetric(horizontal: 20),
        child: HomeCards(widget.coffee),
      ),
    );
  }
}

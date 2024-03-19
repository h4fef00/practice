import 'package:calculator/models/coffee.dart';
import 'package:flutter/material.dart';

class HomeCards extends StatefulWidget {
  const HomeCards(this.coffee, {super.key});
  final Coffee coffee;

  @override
  State<HomeCards> createState() => _HomeCardsState();
}

class _HomeCardsState extends State<HomeCards> {
  final bool _isSelected = false;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: SizedBox.fromSize(
            child: Image.network(
              widget.coffee.img!,
              fit: BoxFit.cover,
            ),
          ),
        ),
        const SizedBox(height: 10),
        Text(
          widget.coffee.title!,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
        ),
        Text(
          widget.coffee.subtitle!,
          style: const TextStyle(
            color: Color.fromARGB(255, 125, 125, 125),
          ),
        ),
        const Divider(),
        const Text(
          "Description",
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 22,
          ),
        ),
        const SizedBox(height: 10),
        // descrizione se più lunga, mostrare textbutton con "mostra";
        Text(
          widget.coffee.description!,
          style: const TextStyle(
            color: Color.fromARGB(255, 125, 125, 125),
          ),
        ),
        const SizedBox(height: 10),
        const Text(
          "Size",
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 22,
          ),
        ),
        const SizedBox(height: 15),
        Row(
          children: [
            Column(
              children: [
                ToggleButtons(
                  isSelected: [_isSelected, _isSelected, _isSelected],
                  children: [
                    // creare lista dinamica da Enum del model
                    TextButton(
                      onPressed: () {},
                      child: const Text("S"),
                    ),
                    TextButton(
                      onPressed: () {},
                      child: const Text("M"),
                    ),
                    TextButton(
                      onPressed: () {},
                      child: const Text("L"),
                    ),
                  ],
                ),
              ],
            )
          ],
        ),

        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              children: [
                const SizedBox(height: 10),
                const Text(
                  "Price",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 22,
                  ),
                ),
                Text(
                  "${widget.coffee.price!}€",
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Color.fromARGB(255, 141, 74, 50),
                  ),
                ),
              ],
            ),
            Column(
              children: [
                ElevatedButton(
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all<Color>(
                      const Color.fromARGB(255, 141, 74, 50),
                    ),
                  ),
                  onPressed: () {},
                  child: const Text(
                    "Buy now",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            )
          ],
        )
      ],
    );
  }
}

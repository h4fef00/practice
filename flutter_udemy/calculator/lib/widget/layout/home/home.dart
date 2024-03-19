import 'package:calculator/models/coffee.dart';
import 'package:calculator/widget/layout/detail/details_page.dart';
import 'package:flutter/material.dart';
import 'package:calculator/data/dummy_coffee.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  void _goToSingle(BuildContext context, Coffee coffee) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (ctx) => DetailsPage(coffee),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 20),
      child: GridView.count(
        crossAxisCount: 2,
        children: List.generate(
          coffeeList.length,
          (index) {
            var coffee = coffeeList[index];
            return InkWell(
              onTap: () {
                _goToSingle(context, coffee);
              },
              child: Card(
                child: Column(
                  children: [
                    Expanded(
                      child: Column(
                        children: [
                          Expanded(
                            child: Image.network(
                              coffee.img!,
                              fit: BoxFit.cover,
                            ),
                          ),
                          Text(
                            coffee.title!,
                            style: const TextStyle(
                                fontWeight: FontWeight.bold, fontSize: 16),
                          ),
                          Text(
                            coffee.subtitle!,
                            style: const TextStyle(
                              fontSize: 12,
                              color: Color.fromARGB(255, 125, 125, 125),
                            ),
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                "${coffee.price!}€",
                                style: const TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 18,
                                ),
                              ),
                              IconButton(
                                onPressed: () {},
                                icon: const Icon(
                                  Icons.add,
                                  color: Colors.white,
                                ),
                                style: ButtonStyle(
                                  backgroundColor:
                                      MaterialStateProperty.all<Color>(
                                    const Color.fromARGB(255, 141, 74, 50),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

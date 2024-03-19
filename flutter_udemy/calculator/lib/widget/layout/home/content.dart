import 'package:calculator/widget/layout/favorite/favorite.dart';
import 'package:calculator/widget/layout/home/home.dart';
import 'package:calculator/widget/layout/cart/cart.dart';
import 'package:calculator/widget/layout/profile/profile.dart';
import 'package:calculator/widget/layout/notification/notification.dart'
    as my_notification;
import 'package:flutter/material.dart';

class Content extends StatefulWidget {
  const Content({super.key});

  @override
  State<Content> createState() => _ContentState();
}

class _ContentState extends State<Content> {
  int _selectedIndex = 0;

  // Widget? _title;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  void _viewProfile() {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (ctx) => const Profile()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Home"),
        actions: [
          IconButton(
            onPressed: _viewProfile,
            icon: const Icon(
              Icons.person,
            ),
          ),
        ],
      ),
      body: IndexedStack(
        index: _selectedIndex,
        children: const [
          Home(),
          Favorite(),
          Cart(),
          my_notification.Notification(),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: const Color.fromARGB(255, 125, 125, 125),
        selectedItemColor: const Color.fromARGB(255, 141, 74, 50),
        unselectedItemColor: const Color.fromARGB(255, 95, 93, 93),
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        items: const [
          BottomNavigationBarItem(
            activeIcon: Icon(Icons.home),
            icon: Icon(Icons.home_outlined),
            label: "Home",
          ),
          BottomNavigationBarItem(
            activeIcon: Icon(Icons.favorite),
            icon: Icon(Icons.favorite_outline),
            label: "Favorite",
          ),
          BottomNavigationBarItem(
            activeIcon: Icon(Icons.shopping_bag),
            icon: Icon(Icons.shopping_bag_outlined),
            label: "Cart",
          ),
          BottomNavigationBarItem(
            activeIcon: Icon(Icons.notifications),
            icon: Icon(Icons.notifications_outlined),
            label: "Notifications",
          ),
        ],
      ),
    );
  }
}

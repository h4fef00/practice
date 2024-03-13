import 'package:intl/intl.dart';

final formatter = DateFormat.yMd();

class User {
  User(
      {required this.name,
      required this.surname,
      required this.username,
      required this.password,
      required this.date});
  final String name;
  final String surname;
  final String username;
  final String password;
  final DateTime date;

  String get formattedDate {
    return formatter.format(date);
  }
}

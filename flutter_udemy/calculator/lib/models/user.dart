class User {
  User(this.isAdmin,
      {required this.name,
      required this.surname,
      required this.email,
      required this.password});
  final String? name;
  final String? surname;
  final String? email;
  final String? password;
  final bool? isAdmin;
}

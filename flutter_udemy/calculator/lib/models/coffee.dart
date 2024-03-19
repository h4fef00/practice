enum Size { S, M, L }

class Coffee {
  Coffee(
      {required this.title,
      required this.subtitle,
      required this.description,
      required this.price,
      required this.size,
      required this.img});
  final String? img;
  final String? title;
  final String? subtitle;
  final String? description;
  final Size? size;
  final String? price;
}

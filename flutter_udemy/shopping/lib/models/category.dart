import 'dart:ui';

enum Categories {
  dairy,
  fruit,
  meat,
  vegetables,
  carbs,
  sweets,
  spices,
  convenience,
  hygiene,
  other
}

class Category {
  Category(this.type, this.color);
  final String? type;
  final Color? color;
}

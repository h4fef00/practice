import 'package:flutter/material.dart';


class TextWidget extends StatelessWidget{
  const TextWidget(this.customText, {super.key});
  final String customText;
  @override
  Widget build(BuildContext context){
    return  Text(
          customText,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 28,
          ),
        );
  }
}
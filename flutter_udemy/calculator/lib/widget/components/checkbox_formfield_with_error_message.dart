import 'package:flutter/material.dart';

class CheckBoxFormFieldWithErrorMessage extends FormField<bool> {
  final String labelText;
  final bool isChecked;
  String error;
  final void Function(bool?) onChanged;

  CheckBoxFormFieldWithErrorMessage({
    Key? key,
    required this.labelText,
    required this.isChecked,
    required this.onChanged,
    required FormFieldValidator<bool>? validator,
    required this.error,
  }) : super(
          key: key,
          initialValue: isChecked,
          validator: validator,
          builder: (FormFieldState<bool> state) {
            return Column(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Checkbox(
                        value: isChecked,
                        onChanged: onChanged,
                        isError: true,
                      ),
                      Expanded(
                        child: Text(
                          labelText,
                          style: const TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w400,
                            height: 1.3,
                            color: Colors.white,
                          ),
                        ),
                      ),
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Container(
                            constraints: const BoxConstraints(minHeight: 16.0),
                            padding: const EdgeInsets.only(left: 20, right: 10),
                            child: Text(
                              (error.isNotEmpty) ? ' * $error' : '',
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(
                                fontSize: 13.0,
                                fontWeight: FontWeight.w400,
                                color: Colors.red,
                              ),
                            ),
                          )
                        ],
                      )
                    ],
                  ),
                ),
              ],
            );
          },
        );
}

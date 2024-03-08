import 'package:flutter/material.dart';
import "package:tracker/models/expense.dart";

class NewExpense extends StatefulWidget {
  const NewExpense({super.key});

  @override
  State<NewExpense> createState() => _NewExpenseState();
}

class _NewExpenseState extends State<NewExpense> {
  final _titleController = TextEditingController();
  final _priceController = TextEditingController();
  DateTime? _selectedDate;

  void _presentDatePicker() async {
    final initialDate = DateTime.now();
    final firstDate =
        DateTime(initialDate.year - 1, initialDate.month, initialDate.day);

    final pickedDate = await showDatePicker(
        context: context,
        initialDate: initialDate,
        firstDate: firstDate,
        lastDate: initialDate);
    setState(() {
      _selectedDate = pickedDate;
    });
  }

  @override
  void dispose() {
    _titleController.dispose();
    _priceController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          TextFormField(
            controller: _titleController,
            maxLength: 50,
            decoration: const InputDecoration(
              label: Text("Title"),
            ),
          ),
          Row(
            children: [
              Expanded(
                child: TextFormField(
                  controller: _priceController,
                  maxLength: 10,
                  decoration: const InputDecoration(
                    prefixText: "\$",
                    label: Text("Price"),
                  ),
                  keyboardType: TextInputType.number,
                ),
              ),
              const SizedBox(
                width: 16,
              ),
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      _selectedDate == null
                          ? "No date"
                          : formatter.format(_selectedDate!),
                    ),
                    IconButton(
                      onPressed: _presentDatePicker,
                      icon: const Icon(Icons.calendar_month),
                    )
                  ],
                ),
              )
            ],
          ),
          Row(
            children: [
              DropdownButton(
                items: Category.values
                    .map(
                      (c) => DropdownMenuItem(
                        value: c,
                        child: Text(
                          c.name.toUpperCase(),
                        ),
                      ),
                    )
                    .toList(),
                onChanged: (value) {
                  print(value);
                },
              ),
              TextButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text("Annulla"),
              ),
              ElevatedButton(
                  onPressed: () {
                    print(_titleController.text);
                  },
                  child: const Text("Send"),),

            ],
          )
        ],
      ),
    );
  }
}

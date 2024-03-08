import 'package:flutter/material.dart';
import 'package:tracker/models/expense.dart';
import "package:tracker/widgets/expenses_list/expense_item.dart";

class ExpensesList extends StatelessWidget {
  const ExpensesList({super.key, required this.expenses});
  final List<Expense> expenses;
  @override
  Widget build(context) {
    return ListView.builder(
      itemCount: expenses.length,
      itemBuilder: (ctx, index) {
        return ExpenseItem(
          expense: expenses[index],
        );
      },
    );
  }
}
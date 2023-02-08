import { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          closeForm={showFormHandler}
          onSaveExpenseData={SaveExpenseDataHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;

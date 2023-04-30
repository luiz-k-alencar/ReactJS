import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Toilet Paper",
    amount: 294.67,
    date: new Date(2022, 10, 27),
  },
  {
    id: "2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 10, 27),
  },
  {
    id: "3",
    title: "Toilet Paper",
    amount: 294.67,
    date: new Date(2022, 10, 27),
  },
  {
    id: "4",
    title: "New desk (wooden)",
    amount: 294,
    date: new Date(2022, 10, 27),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  useEffect(() => {
    const transformToObjects = (numberArray) => {
      // // Todo: Add your logic
      // // should return an array of objects
      const newArray = [];
      numberArray.map(number => newArray.push(
        {
          val: number
        }
      ))
      return newArray
    };

    transformToObjects([1, 2, 3]);
  }, []);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

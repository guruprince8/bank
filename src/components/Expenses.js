import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from './Card';
import './Expenses.css'
import React,{useState} from 'react';

function Expenses (props){
  const [changedYear,setChangedYear] = useState("2022");
  const addChangeYearHandler = (value) => {
    console.log("In Expenses - addChangeYearHandler ");
    setChangedYear(value);

  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === changedYear;
  });
  let dummy = "No data found";
  let expenseContent = <p> {dummy}</p>;
  if(filteredExpenses.length > 0 ) {
    expenseContent = filteredExpenses.map((expense) => {
      return (<ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />);  
    });
  }
    
    return (
        <Card>
            <ExpenseFilter selected={changedYear} onChangeYear={addChangeYearHandler}></ExpenseFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            {expenseContent}
            {/* {filteredExpenses.length===0?
              <p> No data found</p> :
              (filteredExpenses.map((expense) => {
                return (<ExpenseItem 
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />);  
              }))
            } */}
            {/* {filteredExpenses.map((expense) => {
              return (<ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />);  
            })} */}
            {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> */}
        </Card>
    );
}

export default Expenses;
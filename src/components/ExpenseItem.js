import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import React from 'react';


function ExpenseItem(props) {
    //let title = props.tile;

    //const [title,setTitle] = useState(props.title);
    //console.log('reevaluation happened');

    //useState(props.title);

    const clickHandle = () => {
        //console.log("Clicked!!!");
        //title = "Updated!";
        console.log('Updated');
        //setTitle('Updated!');
    }
    //const month = props.date.toLocaleString('en-US',{month:'long'});
    //const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    //const year = props.date.getFullYear();
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandle}>Chage title</button>
        </div>
    );
}
export default ExpenseItem;
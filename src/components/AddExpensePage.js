import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.startAddExpense(expense); //with mapsdispatch to make testing easy
    //props.dispatch(addExpense(expense)); -> without mapdispatch to props
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);


// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         props.onSubmit(expense); //with mapsdispatch to make testing easy
//         //props.dispatch(addExpense(expense)); -> without mapdispatch to props
//         props.history.push('/');
//       }}
//     />
//   </div>
// );
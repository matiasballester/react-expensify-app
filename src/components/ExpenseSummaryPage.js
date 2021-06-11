import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenses-total';

const ExpenseSummaryPage = (props) => {
    const word = (props.expenseCount === 1) ? 'expense' : 'expenses';
    const totalFormatted = numeral(props.expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h2>
                Viewing {props.expenseCount} {word} totalling {totalFormatted}
            </h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: expenses.length,
        expensesTotal: expenseTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummaryPage);
export default (expenses) => {
    return expenses.reduce((accum, expense) => (accum + expense.amount), 0);
};
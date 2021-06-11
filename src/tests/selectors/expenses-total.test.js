import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('empty array', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0);
});

test('1 item', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(195);
});

test('2 items', () => {
  const result = selectExpensesTotal([expenses[0], expenses[1]]);
  expect(result).toEqual(295);
});
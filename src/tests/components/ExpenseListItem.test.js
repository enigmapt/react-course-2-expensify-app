import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem  from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
    console.log(expenses[0])
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
});

// const wrapper = shallow(<ExpenseListItem {expense[0]}/>)
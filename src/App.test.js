import React from "react";
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  let component;
  beforeEach(() => {
    Date.parse = jest.fn(() => 1482363367071);
    component = shallow(<App />);
  });
  it('renders Filter', () => {
    expect(component.find('Filter')).toHaveLength(1);
  });

  it('renders Poster', () => {
    expect(component.find('Poster')).toHaveLength(1);
  });

  it('renders Metadata', () => {
    expect(component.find('Metadata')).toHaveLength(1);
  });
});

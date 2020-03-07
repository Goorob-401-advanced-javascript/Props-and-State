/* eslint-disable no-unused-vars */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Form from '../components/form.js';

Enzyme.configure({adapter: new Adapter() });

describe('<Form />', ()=>{
    it('if it exsit or not ',()=>{
        let app = shallow(<Form />);
        expect(app.find('form').exists()).toBeTruthy();
        expect(app.find('button').exists()).toBeTruthy();
    
      });
  it('render Form',()=>{
    let app = mount(<Form/>);
    let form = app.find('form');
    expect(form.exists()).toBeTruthy();
  });

  it('can render to the DOM',()=>{
    const rendered = renderer.create(<Form />).toJSON();
    expect(rendered).toMatchSnapshot();
  });


});
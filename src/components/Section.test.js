import React from 'react';
// import { Shallow } from 'enzyme'
// import React, { Component } from 'react'
import SiteCard from './SiteCard';

// import ReactDOM from 'react-dom';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Section />, div);
// });

// describe('<SiteCard/>', () => {
//   it ('renders without crashing', () => {
//     const sectioncard = shallow(<SiteCard/>);
//     expect(sectioncard.find('.descriptionList'));
//   })
//
// })

import { mount } from 'enzyme';
const wrapper = mount(<SiteCard/>);

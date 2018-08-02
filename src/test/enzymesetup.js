import './setup';
import React from 'react';
import 'raf/polyfill';
import Enzyme, {mount, render, shallow} from 'enzyme';
import {assert, expect} from "chai";
import Adapter from 'enzyme-adapter-react-16';
import {createMockStore} from "redux-test-utils";
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
// React 16 Enzyme adapter
Enzyme.configure({adapter: new Adapter()});
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Make React function available in all test files without importing
global.React = React;
// Make chai function available in all test files without importing
global.assert = assert;
global.expect = expect;
global.createMockStore = createMockStore;
global.configureStore = configureStore;
global.sinon = sinon;

global.shallowWithStore = (component, store) => {
    const context = {
        store,
    };
    return shallow(component, {context});
};

global.mountWithStore = (component, store) => {
    const context = {
        store,
    };
    return mount(component, {context});
};

global.localStorage = {
    getItem: () => {
    },
    setItem: () => {
    }
};
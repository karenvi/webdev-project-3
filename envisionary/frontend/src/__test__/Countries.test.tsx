import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from "react-router-dom";
import { create, ReactTestRenderer } from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import Countries from '../components/Countries';
import { mocks } from './mocks/mocks';
export {};



describe("Testing Countries component", () => {
    
    it("snapshot test", () => {

        const component = renderer.create(
            <Router>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <RecoilRoot>
                        <Countries />
                    </RecoilRoot>
                </MockedProvider>
            </Router>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Contains the right elements', () => {
        let component: ReactTestRenderer = create(
            <Router >
                <MockedProvider mocks={mocks} addTypename={false}>
                    <RecoilRoot>
                        <Countries />
                    </RecoilRoot>
                </MockedProvider>
            </Router>
        );
        expect(component.root.findAllByType('span')[5].props.children).toBe('Sort by:');
    });

});
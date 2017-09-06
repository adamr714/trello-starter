import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function() {
    it('Renders the card', function() {
        const text = "This is a card";
        
        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);
        const result = renderer.getRenderOutput();
        const className = result.props.className;
        // console.log(result.props);
        result.props.className.should.equal('card');
        
        const div = result.props.children;
        console.log(result.props);
        div.type.should.equal('div');
    });
});
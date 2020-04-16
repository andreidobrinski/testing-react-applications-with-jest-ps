import React from 'react';
import renderer from 'react-test-renderer';
import TagsList from './TagsList';

describe('the tags list', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<TagsList tags={['css', 'html', 'swift']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
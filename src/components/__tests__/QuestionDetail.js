import React from 'react';
import renderer from 'react-test-renderer';
import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail';

describe('The Question Detail Component', () => {
  describe('The container element', () => {
    describe('mapStateToProps', () => {
      it('should map the state to props correctly', () => {
        const sampleQuestion = {
          question_id: 42,
          body: 'the answer',
        };
        const appState = {
          questions: [sampleQuestion]
        };
        const ownProps = {
          question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);
        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });
  describe('the display element', () => {
    it('should not regress', () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="the answer"
          body="42"
          answer_count={0}
          tags={['hitchhiking']}
        />
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
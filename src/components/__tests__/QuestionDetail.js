import { mapStateToProps } from '../QuestionDetail';

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
  it('should not regress', () => {
    
  });
});
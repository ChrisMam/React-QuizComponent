import React,{Component} from 'react';
 import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component
{

  constructor(props ) {
    super(props);
    this.state = {incorrectAnswer : false};
  }

  render() {

    this.questions = this.props.quiz_question.answer_options.map((question, index) =>
        <QuizQuestionButton key = {index} button_text = {question} clickHandler = {this.handleClick.bind(this)}/>
    );

    let errorDialog;
    if (this.state.incorrectAnswer) {
        errorDialog = <p className='error'>Sorry, that's not right</p>
    } else {
      errorDialog = <p>null</p>
    }

    return (
            <main>
              <section>
                <p>{this.props.quiz_question.instruction_text}</p>
              </section>

              <section className="buttons">
                <ul>
                  {this.questions}
                </ul>
              </section>
              {errorDialog}
            </main>
    )
  }

  handleClick(buttonText) {
      if (buttonText === this.props.quiz_question.answer) {
        this.props.showNextQuestionHandler();
        this.setState({incorrectAnswer : false});
      } else {
        this.setState({incorrectAnswer : true});
      }
  }

}

export default QuizQuestion

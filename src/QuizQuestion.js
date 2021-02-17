import React,{Component} from 'react';
 import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component
{
  render() {

    this.questions = this.props.quiz_question.answer_options.map((question, index) =>
        <QuizQuestionButton key = {index} button_text = {question} clickHandler = {this.handleClick.bind(this)}/>
    );

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

            </main>
    )
  }

  handleClick(buttonText) {
      if (buttonText === this.props.quiz_question.answer)
        this.props.showNextQuestionHandler();
  }

}

export default QuizQuestion

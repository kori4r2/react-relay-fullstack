import React, {Component} from "react";
import {createFragmentContainer} from "react-relay";
import graphql from "babel-plugin-relay/macro";


const maxPreviewCharacters = 400;

class QuestionPreview extends Component{

	render(){
		const question = this.props.question;

		const text = (question.text.length <= maxPreviewCharacters)? question.text : (question.text.substring(0, maxPreviewCharacters-3)+"...");
		return(
			<div className="horizontal-container border">
				<div className="left-text">
					{text}
				</div>
				<div className="right-buttons">
					<div className="vertical-container">
						<button type="button" onClick={this.props.onQuestionDetail} id={question.id}>Detalhes</button>
						<button type="button" onClick={this.props.onEditQuestion} id={question.id} question={question}>Editar</button>
						<button type="button" onClick={this.props.onDeleteQuestion} id={question.id}>Apagar</button>
					</div>
				</div>
			</div>
		);
	}
}

export default createFragmentContainer(QuestionPreview, {
	question: graphql`
		fragment QuestionPreview_question on Question{
			id
			text
		}
	`}
);

import React, {Component} from "react";
import UpdateQuestionMutation from "../mutations/UpdateQuestionMutation"
import CreateQuestionMutation from "../mutations/CreateQuestionMutation"
import {createFragmentContainer} from "react-relay";
import graphql from "babel-plugin-relay/macro";

const defaultQuestion ={
	"text": "",
	"correct":{
		"text": ""
	},
	"wrong": [
		{
			"id": 1,
			"text": "",
			"weight": 0
		},{
			"id": 2,
			"text": "",
			"weight": 0
		},{
			"id": 3,
			"text": "",
			"weight": 0
		},{
			"id": 4,
			"text": "",
			"weight": 0
		}
	]
}

class QuestionEditForm extends Component{
	constructor(props){
		super(props);

		if(props.id == -1){
			this.state = {question: defaultQuestion};
		}else{
			let question = {
				"id": props.question.id,
				"text": props.question.text,
				"correct": props.question.correct
			}
			let array = [];

			props.question.wrong.edges.map(({node}) =>{
				array.push(node);
				return null;
			});
			question.wrong = array;

			this.state = {question: question};
		}

		this.onChangeWeight = this.onChangeWeight.bind(this);
		this.onChangeText = this.onChangeText.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onSave = this.onSave.bind(this);
	}

	render(){
		if(!this.props.visible)
			return null;

		const isNewQuestion = (this.props.id == -1);


		return(
			<div className="container">
				<div className="overlay" />
				<div className="container modal edit-box">
					{isNewQuestion? <em>Nova Pergunta</em> : <em>Editar pergunta</em>}
					<p><em>Enunciado:</em></p>
					<textarea className="text-field" onInput={this.onChangeText} defaultValue={this.state.question.text} savelocation="statement" />
					<p><em>Resposta:</em></p>
					<textarea className="text-field" onInput={this.onChangeText} defaultValue={this.state.question.correct.text} savelocation="answer" />
					<p><em>Alternativas:</em></p>
					<div className="container border vertical-container">
						{this.state.question.wrong.map((option, index) =>
							<div className="container border" key={option.id}>
								<p>Pontuação da alternativa, de 0 a 1:<input type="number" id={option.id} index={index} defaultValue={option.weight} onInput={this.onChangeWeight} /></p>
								<p><em>Texto:</em></p>
								<textarea className="text-field" onInput={this.onChangeText} savelocation="option" id={option.id} index={index} defaultValue={option.text} />
							</div>
						)}
					</div>
					<div className="horizontal-container">
						<button onClick={this.onSave}>Salvar</button>
						<button onClick={this.onCancel}>Cancelar</button>
					</div>
				</div>
			</div>
		);
	}

	onCancel(event){
		event.preventDefault();

		this.props.onClose();
	}

	onSave(event){
		event.preventDefault();

		let question = {
			"id": this.state.question.id,
			"text": this.state.question.text,
			"correct": {
				"text": this.state.question.correct.text
			}
		}
		let array = [];
		this.state.question.wrong.map((option) =>{
			let newOption = {
				text: option.text,
				weight: option.weight
			}
			array.push(newOption);
			return null;
		});
		question.wrong = array;

		if(this.props.id == -1){
			CreateQuestionMutation(question.text, question.correct, question.wrong, this.props.onClose);
		}else{
			UpdateQuestionMutation(question.id, question.text, question.correct, question.wrong, this.props.onClose);
		}
	}

	onChangeText(event){
		const textType = event.target.getAttribute("savelocation");
		let newQuestion = this.state.question;

		switch(textType){
			case("statement"):
				newQuestion.text = event.target.value;
				break;
			case("answer"):
				newQuestion.correct.text = event.target.value;
				break;
			case("option"):
				newQuestion.wrong[event.target.getAttribute("index")].text = event.target.value;
				break;
			default:
				break;
		}

		this.setState({question: newQuestion});
	}

	onChangeWeight(event){
		event.preventDefault();

		if(isNaN(event.target.value))
			event.target.value = 0;

		if(event.target.value > 1)
			event.target.value = 1;
		if(event.target.value < 0)
			event.target.value = 0;

		let newQuestion = this.state.question;
		newQuestion.wrong[event.target.getAttribute("index")].weight = event.target.value;

		this.setState({question: newQuestion});
	}
}


export default createFragmentContainer(QuestionEditForm, {
	question: graphql`
		fragment QuestionEditForm_question on Question {
			id
			text
			correct{
				id
				text
			}
			wrong{
				edges{
					node{
						id
						text
						weight
					}
				}
			}
		}
	`}
);

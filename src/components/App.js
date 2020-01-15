import React, {Component} from "react";
import DeleteQuestionDialogue from "./DeleteQuestionDialogue";
import QuestionEditFormRender from "./QuestionEditFormRender";
import QuestionListRender from "./QuestionListRender";

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
};

class App extends Component{
	constructor(props){
		super(props);
		this.state = {deleteDialogueVisible: false, editQuestionVisible: false, selectedID: -1, view: "list", question:defaultQuestion};

		this.createNewQuestion = this.createNewQuestion.bind(this);
		this.showDeleteDialogue = this.showDeleteDialogue.bind(this);
		this.hideDeleteDialogue = this.hideDeleteDialogue.bind(this);
		this.viewQuestionDetail = this.viewQuestionDetail.bind(this);
		this.backToList = this.backToList.bind(this);
		this.showEditQuestion = this.showEditQuestion.bind(this);
		this.hideEditQuestion = this.hideEditQuestion.bind(this);
	}

	render(){
		const isList = (this.state.view === "list");
		const isDetail = (this.state.view === "details");

		return(
			<div className="container">
				{/* Cria os botoes sticky se necessario */}
				{isList &&
					<div className="stickyTop horizontal-container">
						<button onClick={this.showEditQuestion} id={-1} question={defaultQuestion}>Nova Pergunta</button>
					</div>
				}
				{isDetail &&
					<div className="stickyTop horizontal-container">
						<button onClick={this.showEditQuestion} id={this.state.selectedID} question={this.state.question}>Editar</button>
						<button onClick={this.showDeleteDialogue} id={this.state.selectedID}>Apagar</button>
						<button onClick={this.backToList}>Voltar</button>
					</div>
				}

				{/* Cria a lista de perguntas ou os detalhes da pergunta sendo avaliada */}
				{isList && <QuestionListRender onDeleteQuestion={this.showDeleteDialogue} onEditQuestion={this.showEditQuestion} onQuestionDetail={this.viewQuestionDetail} />}
				{/* Os detalhes não foram implementados por motivos de tempo, mas eles podem ser vistos na tela de edição */}

				{/* Objetos de overlay */}
				{/* Caixa de dialogo para confirmação de apagar pergunta */}
				<DeleteQuestionDialogue visible={this.state.deleteDialogueVisible} id={this.state.selectedID} onClose={this.hideDeleteDialogue} />
				{/* Caixa de edição de pergunta para criar nova pergunta ou editar existente */}
				<QuestionEditFormRender visible={this.state.editQuestionVisible} id={this.state.selectedID} onClose={this.hideEditQuestion} question={defaultQuestion} />
			</div>
		);
	}

	backToList(){
		this.setState({view: "list", deleteDialogueVisible: false, editQuestionVisible: false, selectedID: -1});
	}

	showDeleteDialogue(event){
		event.preventDefault();

		if(this.state.editQuestionVisible || this.state.deleteDialogueVisible)
			return;

		this.setState({deleteDialogueVisible: true, selectedID: event.target.id});
	}

	hideDeleteDialogue(){
		const newID = (this.state.view === "list")? -1 : this.state.selectedID;

		this.setState({deleteDialogueVisible: false, selectedID: newID});
	}

	createNewQuestion(event){
		alert("Tentou criar uma nova pergunta");
		event.preventDefault();
	}

	showEditQuestion(event){
		event.preventDefault();

		if(this.state.editQuestionVisible || this.deleteDialogueVisible)
			return;

		this.setState({editQuestionVisible: true, selectedID: event.target.id});
	}

	hideEditQuestion(){
		const newID = (this.state.view === "list")? -1 : this.state.selectedID;
		const newQuestion = (this.state.view === "list")? defaultQuestion : this.state.question;

		this.setState({editQuestionVisible: false, selectedID: newID, question: newQuestion});
	}

	viewQuestionDetail(event){
		this.setState({view: "details", deleteDialogueVisible: false, editQuestionVisible: false, selectedID: event.target.id});
	}
}

export default App;

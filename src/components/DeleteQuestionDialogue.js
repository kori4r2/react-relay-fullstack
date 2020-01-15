import React, {Component} from "react";
import DeleteQuestionMutation from "../mutations/DeleteQuestionMutation"

class DeleteQuestionDialogue extends Component {
	constructor(props){
		super(props);

		this.closeDialogue = this.closeDialogue.bind(this);
	}

	render(){
		if(!this.props.visible)
			return null;

		return(
			<div className="overlay">
				<div className="modal warning vertical-container">
					<div className="container">
					{"Deseja apagar essa pergunta da base de dados ?"}
					</div>
					<div className="horizontal-container">
						<button onClick={this.closeDialogue} data-delete={true}>Sim</button>
						<button onClick={this.closeDialogue} data-delete={false}>Não</button>
					</div>
				</div>
			</div>
		);
	}

	closeDialogue(event){
		event.preventDefault();

		if(event.target.getAttribute("data-delete") === "true"){
			DeleteQuestionMutation(this.props.id, this.props.onClose);
		}else{
			this.props.onClose();
		}
	}
}

export default DeleteQuestionDialogue;

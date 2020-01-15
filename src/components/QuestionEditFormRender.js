import React, {Component} from "react";
import {QueryRenderer} from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../Environment";
import QuestionEditForm from "./QuestionEditForm";

const QuestionEditFormQuery = graphql`
	query QuestionEditFormRenderQuery($input: ID!){
		node(id: $input){
			...QuestionEditForm_question
		}
	}
`;

class QuestionListRender extends Component{
	render(){

		return(
		<QueryRenderer
			environment={environment}
			query={QuestionEditFormQuery}
			render={({error, props}) => {
				if(error){
					return <div className="container border">{error.message}</div>;
				}else if(props){
					return <QuestionEditForm visible={this.props.visible} id={this.props.id} onClose={this.props.onClose} question={props.node}  />;
				}else{
					return <div className="container border">Loading</div>;
				}
			}}
			variables={{input: this.props.id}}
		/>);
	}
}

export default QuestionListRender;

import React, {Component} from "react";
import {QueryRenderer} from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../Environment";
import QuestionList from "./QuestionList";

const QuestionListQuery = graphql`
	query QuestionListRenderQuery{
		viewer{
			...QuestionList_viewer
		}
	}
`;

class QuestionListRender extends Component{
	render(){
		return(
		<QueryRenderer
			environment={environment}
			query={QuestionListQuery}
			render={({error, props}) => {
				if(error){
					return <div className="container border">{error.message}</div>;
				}else if(props){
					return <QuestionList viewer={props.viewer} onDeleteQuestion={this.props.onDeleteQuestion} onEditQuestion={this.props.onEditQuestion} onQuestionDetail={this.props.onQuestionDetail} />;
				}else{
					return <div className="container border">Loading</div>;
				}
			}}
		/>);
	}
}

export default QuestionListRender;

import React, {Component} from "react";
import QuestionPreview from "./QuestionPreview";
import {createFragmentContainer} from "react-relay";
import graphql from "babel-plugin-relay/macro";

class QuestionList extends Component{
	render(){
		return(
			<div className="vertical-container border">
				{this.props.viewer.allQuestions.edges.map(({node}) => (
					<QuestionPreview key={node.__id} question={node} onDeleteQuestion={this.props.onDeleteQuestion} 
						onEditQuestion={this.props.onEditQuestion} onQuestionDetail={this.props.onQuestionDetail} />) )}
			</div>
		);
	}
}

export default createFragmentContainer(QuestionList, {
	viewer: graphql`
		fragment QuestionList_viewer on Viewer{
			allQuestions(last: 100, orderBy: id_DESC) @connection(key: "QuestionList_allQuestions", filters:[]){
				edges{
					node{
						...QuestionPreview_question
					}
				}
			}
		}
	`}
);

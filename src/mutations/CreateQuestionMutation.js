import graphql from "babel-plugin-relay/macro";
import {commitMutation} from "react-relay";
import environment from "../Environment";

const mutation = graphql`
	mutation CreateQuestionMutation($input: CreateQuestionInput!){
		createQuestion(input: $input){
			question{
				id
			}
		}
	}
`;

export default (text, correct, wrong, callback) => {

	const variables = {
		input:{
			text,
			correct,
			wrong,
			clientMutationId: "ayy"
		}
	};

	commitMutation(environment,
		{
			mutation, variables,
			onCompleted: () => {
				console.log("terminou create");
				callback();
			},
			onError: (error) => {
				console.error(error);
				alert("Erro salvando operação!");
			}
		}
	);
};

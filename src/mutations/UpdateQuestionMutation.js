import graphql from "babel-plugin-relay/macro";
import {commitMutation} from "react-relay";
import environment from "../Environment";

const mutation = graphql`
	mutation UpdateQuestionMutation($input: UpdateQuestionInput!){
		updateQuestion(input: $input){
			question{
				id
			}
		}
	}
`;

export default (id, text, correct, wrong, callback) => {

	const variables = {
		input:{
			id,
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
				console.log("terminou update");
				callback();
			},
			onError: (error) => {
				console.error(error);
				alert("Erro salvando operação!");
			}
		}
	);
};

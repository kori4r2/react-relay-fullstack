import graphql from "babel-plugin-relay/macro";
import {commitMutation} from "react-relay";
import environment from "../Environment";

const mutation = graphql`
	mutation DeleteQuestionMutation($input: DeleteQuestionInput!){
		deleteQuestion(input: $input){
			question{
				id
			}
		}
	}
`;

export default (id, callback) => {

	const variables = {
		input:{
			id,
			clientMutationId: "ayy"
		}
	};

	commitMutation(environment,
		{
			mutation, variables,
			onCompleted: () => {
				console.log("terminou delete");
				callback();
			},
			onError: (error) => {
				console.error(error);
				alert("Erro apagando pergunta!");
			}
		}
	);
};

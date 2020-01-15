const{
	Environment,
	Network,
	RecordSource,
	Store,
} = require('relay-runtime');


const store = new Store(new RecordSource());

const network = Network.create(async function (operation, variables){
	// Endereço do host local criado com grapcool
	let response = await fetch("http://localhost:60000/relay/v1/ck58dkc3m00040185h8p31pg5",{
		method: "POST",
		headers:{
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			query: operation.text,
			variables
		})
	});
	return response.json();
});

const environment = new Environment({
	network,
	store
});

export default environment;

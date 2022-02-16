const BASE_URL ='https://jsonplaceholder.typicode.com/todos'

export const ToDoApi = () => fetch(`${BASE_URL}`,{
	method: 'GET',
	headers: {
		Accept: 'application/json',
		'Content-type': 'application/json'
	}
})
	.then((res) => res.json())
	.catch((err) => console.log(err))


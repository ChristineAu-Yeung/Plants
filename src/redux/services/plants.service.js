import axios from 'axios';
const url = process.env.REACT_APP_BACKEND_URL;


const getPlants = async () => {
	const requestOptions = {
		method: 'GET',
	};
	return await axios.get(`${url}/plants`, requestOptions)
		.then(data => {
			return data.data;
		})
		.catch(error => {
			return error;
		});

}

const getPlantsbyType = async (plantType) => {
	const requestOptions = {
		method: 'GET',
	};
	return await axios.get(`${url}/plants?type=${plantType}`, requestOptions)
	.then(data => {
		return data.data;
	})
	.catch(error => {
		return error;
	});
}

const userService = {
	getPlants, 
	getPlantsbyType
}
export default userService;
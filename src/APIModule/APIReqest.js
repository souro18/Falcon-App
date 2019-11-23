let token = "";
const headers = {
	'Accept': 'application/json',
	'Content-Type' :'application/json'
}
const setToken = t => {
	token = t;
}

const getToken = () =>
	fetch('https://findfalcone.herokuapp.com/token' , {
		method : 'POST',
		headers: { 'Accept': 'application/json' }
	}).then( res => res.json())

const getVehicle = () =>
	fetch('https://findfalcone.herokuapp.com/vehicles')
		.then( res => res.json())

const getPlanets = () =>
	fetch('https://findfalcone.herokuapp.com/planets')
		.then( res => res.json())

const findFalcone = (planets , vehicle) =>
	fetch('https://findfalcone.herokuapp.com/find' , {
		method : 'POST',
		headers: headers,
		body: JSON.stringify( {
			token : token,
			planet_names : planets,
			vehicle_names : vehicle
		})
    }).then(res =>res.json())

export { setToken ,  getToken, getVehicle, getPlanets, findFalcone};
import React, { useState, useEffect ,useMemo } from 'react';
import ReactLoading from "react-loading";

import './app-container.scss'
import InputGroup from './../pair/InputGroup'
import Modal from '../modal/Modal';
import Status from './../status/Status';
import ErrorBoundary from './../error/ErrorBoundary'

import { getPlanets, getVehicle, findFalcone } from './../../APIModule/APIReqest'

const Container = props => {
    const [planets, setPlanets] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [selectedPlanet, setSelectedPlanet] = useState([])
    const [selectedVehicle, setSelectedVehicle] = useState([])
    const [response, setResponse] = useState({})
    const [currentSelect, setCurrentSelect] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [isfinding, setFind] = useState(true)
    const [toggle, setToggle] = useState(false)
    const numberOfChoice = 4
    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([getPlanets().then(data => setPlanets(data)).catch(err => console.log(err)),
            getVehicle().then(data => setVehicles(data)).catch(err => console.log(err))])
            setIsLoading(false)
        }
        fetchData()
    }, [])
    
    const getTime = () => {
        let t = 0;
        for (let i = 0; i <= currentSelect; i++) {
            if (selectedPlanet[i] && selectedVehicle[i]) {
                const distance = planets.filter(p => p.name === selectedPlanet[i])[0].distance
                const speed = vehicles.filter(v => v.name === selectedVehicle[i])[0].speed
                t+= distance / speed
            }
        }
        return t;
    }
    const time = useMemo(()=> getTime(), [selectedPlanet,selectedVehicle])
    const onFindFalcone = () => {
        setToggle(true)
        findFalcone(selectedPlanet, selectedVehicle)
            .then(res => {
                setResponse(res)
                setFind(false)
            }).catch(err => console.log(err))
    }
    const resetGame = () => {
        setSelectedPlanet([])
        setSelectedVehicle([])
        setCurrentSelect(0)
    }
    return (
        <main>
            <div className="container">

                <h2>Find Falcon</h2>
                <ErrorBoundary>
                {isLoading ? (<div className='loading'><ReactLoading type={"bars"} color={"black"} /></div>) : [...Array(numberOfChoice).keys()].map(id => {
                    return <InputGroup key={id} id={id} planets={planets} vehicles={vehicles}
                        selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet}
                        selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle}
                        currentSelect={currentSelect} />
                })}
                </ErrorBoundary>
                <div>
                    <p>Time Taken: {time}</p>
                    <div className='container-footer'>
                        <button onClick={() => resetGame()}>Reset</button>
                        <button onClick={() => setCurrentSelect(currentSelect + 1)} disabled={selectedVehicle.length !== currentSelect + 1 || currentSelect + 1 === numberOfChoice}>Next</button>
                        <button onClick={() => onFindFalcone()} disabled={selectedVehicle.length !== numberOfChoice}>Find Falcon</button>
                    </div>
                    {toggle && <Modal><Status loading={isfinding} res={response} setToggle={setToggle} /></Modal>}
                </div>
            </div>
        </main>
    )
}
export default Container;
import React, { useState, useEffect ,useRef} from 'react'

import Vehicle from './../vehicle/Vehicle'
import Planet from '../planet/Planet'
import ErrorBoundary from '../error/ErrorBoundary'
const InputGroup = props => {
    const [filteredPlanet, setFilterPlanets] = useState([])
    const [filteredVehicle, setFilterVehicle] = useState([])
    const [distance , setDistance] = useState(0)
    const planetRef = useRef(null)
    useEffect(() => {
        setFilterPlanets(props.planets)
    }, [props.planets])
    useEffect(() => {
        setFilterPlanets(getFilteredPlanets())
    }, [props.selectedPlanet])
    useEffect(() => {
        setFilterVehicle(props.vehicles)
    }, [props.vehicles])
    useEffect(() => {
        setFilterVehicle(getFilteredVehicle())
    }, [props.selectedVehicle])
    useEffect(()=>{
        planetRef.current.load()
        if(props.currentSelect === 0) {
            setDistance(0)
        }
    },[props.currentSelect])
    const getFilteredPlanets=() => {
        return props.planets.filter(p => !props.selectedPlanet.slice(0, props.id).includes(p.name))
    }
    const getFilteredVehicle = () => {
        return props.vehicles.map(m => {
            let num = props.selectedVehicle.slice(0, props.id).filter(s => s === m.name).length
            if (num > 0) {
                return Object.assign({},m , {total_no: m.total_no - num})
            }
            else return m;
        })
    }
    const onPlanetChange = (planet) => {
        const x = [...props.selectedPlanet.slice(0, props.id), planet]
        props.setSelectedPlanet(x)
        setDistance(props.planets.filter(p => p.name === planet)[0].distance)
    }
    const onVehicleChange = (vehicle) => {
        const y = [...props.selectedVehicle.slice(0, props.id), vehicle]
        props.setSelectedVehicle(y)
    }
    return (
        <div className='group' style={{ 'display': props.currentSelect === props.id ? 'block': 'none'}}>
            <ErrorBoundary><Planet planet={filteredPlanet} onInput={onPlanetChange} ref={planetRef}/></ErrorBoundary>
            <ErrorBoundary><Vehicle vehicle={filteredVehicle} id={props.id} onInput={onVehicleChange} distance={distance}/></ErrorBoundary>
        </div>
    )
}
export default InputGroup
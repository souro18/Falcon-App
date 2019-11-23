import React from 'react';
import {render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Vehicle from './Vehicle'

afterEach(cleanup)
const vehicle = [
    {
        name: "pod",
        max_distance : 200,
        total_no: 2
    },
    {
        name: "sapce ship",
        max_distance : 600,
        total_no: 1
    }
]
it("renders vehicle" , ()=> {
    const {asFragment} = render(<Vehicle vehicle={vehicle} onInput={ e => {}} id={1} distance={300}/>)
    expect(asFragment()).toMatchSnapshot()
})
it("renders correct number of vehicle" , ()=> {
    const {getAllByTestId } = render(<Vehicle vehicle={vehicle} onInput={ e => {}} id={1} distance={300}/>)
    expect(getAllByTestId('vehicle').length).toBe(vehicle.length)
})
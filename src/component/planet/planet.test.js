import React from 'react';
import {render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Planet from './Planet'

afterEach(cleanup)
const planets = [
    {
        name: "abs",
        distance : 200
    },
    {
        name: "earth",
        distance: 300
    }
]
it("renders planet" , ()=> {
    const {asFragment} = render(<Planet planet={planets} onInput={ e => {}}/>)
    expect(asFragment()).toMatchSnapshot()
})
it("renders correct number of planets" , ()=> {
    const {getAllByTestId } = render(<Planet planet={planets} onInput={ e => {}}/>)
    expect(getAllByTestId('planets').length).toBe(planets.length)
})
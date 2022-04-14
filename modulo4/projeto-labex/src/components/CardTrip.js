import React from 'react'
import planets from '../constants/planets'
import {Container, AreaImg, AreaText} from '../Styles/StyleCardTrip'


export default function CardTrip(props) {
  return (
    <Container>
        <AreaImg url={planets(props.trip.planet)}><p>{props.trip.planet}</p></AreaImg>
        <AreaText>
          <h3>{props.trip.name}</h3>
          <p>{props.trip.description}</p>
          <h3>{props.trip.date}</h3>
          <p>   Duração de <b>{props.trip.durationInDays}</b> dias</p>
        </AreaText>
    </Container>
  )
}

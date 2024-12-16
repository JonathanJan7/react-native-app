import React from 'react'
import { BASE_URL } from '../../../config'
import DetailCard from '../../../components/DetailCard'

const FleetDetail = (props) => {
    const item = props.route.params.item;
    
    const details = {
        'Modelo': item.model,
        'Marca': item.brand,
        'Consumo': item.consumption,
        'Motor': item.engine,
        'Velocidad': item.speed,
        'Patente': item.plate
    }

    return (
        <DetailCard details={details} imgUrl={`${BASE_URL}/airplane/img/${item.plate}`} title={item.model}/>
    )
}

export default FleetDetail
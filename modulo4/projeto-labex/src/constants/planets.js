import mercurio from '../assets/planets/mercurio.jpg'
import venus from '../assets/planets/venus.jpg'
import terra from '../assets/planets/terra.jpg'
import marte from '../assets/planets/marte.png'
import jupiter from '../assets/planets/jupiter.jpg'
import saturno from '../assets/planets/saturno.jpg'
import urano from '../assets/planets/urano.jpg'
import netuno from '../assets/planets/netuno.jpg'
import plutao from '../assets/planets/plutao.jpg'
import React from 'react'

export default function planets(planet) {
    const thePlanet = () => {
        switch (planet){
            case 'Mercúrio':
                return mercurio
            case 'Vênus':
                return venus
            case "Terra":
                return terra
            case "Marte":
                return marte
            case 'Jupiter':
                return jupiter
            case 'Saturno':
                return saturno
            case 'Urano':
                return urano
            case 'Netuno':
                return netuno
            case 'Plutão':
                return plutao
        }

    }

  return (
    [thePlanet]
  )
}

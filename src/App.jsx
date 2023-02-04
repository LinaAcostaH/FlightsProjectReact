import Arrivals from "./components/Arrivals"
import React from 'react'
import styled from 'styled-components'
import Departures from "./components/Departures";
import NewArrival from "./components/NewArrival";
import ModalClass from "./components/ModalClass";
import { useState } from "react";
import NewDeparture from "./components/NewDeparture";
const App = ()=> {
  const [modalStateArrival, setModalStateArrival] = useState(false);
  const [modalStateDeparture, setModalStateDeparture] = useState(false);
  return (
    <>
        <NavContainer>
                <h2>Flights</h2>
        </NavContainer>
        <div className="arrivals">
          <header>Arrivals</header>
          <Arrivals/>
        </div>
        <div className="arrivals">
          <header>Departures</header>
          <Departures/>
        </div>
        <button id = "button" onClick={()=> setModalStateArrival(!modalStateArrival)}>New Arrival Flight</button>
        <ModalClass state={modalStateArrival}
        setModalState={setModalStateArrival}>
          <NewArrival/>
        </ModalClass>
        <div>
        <button id = "button" onClick={()=> setModalStateDeparture(!modalStateDeparture)}>New Departure Flight</button>
        <ModalClass state={modalStateDeparture}
        setModalState={setModalStateDeparture}>
          <NewDeparture/>
        </ModalClass>
        </div>
    </>
  ); 
}

const NavContainer = styled.nav`
    h2{
        font-weight: 400;
        span{
            font-weight: bold;
        }
        color: black;
    }
    padding: .4rem;
    background-color: gold;
    display: flex;
    align-itemms: center;
    justify-content: space-between;
    `
export default App

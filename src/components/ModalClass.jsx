import React from 'react';
import styled from 'styled-components';

const ModalClass = ({children, state, setModalState}) => {
    return (
        <>
        {state && 
        <Overlay>
            <ContainerModal>
                <HeadModal>
                    <h3>Create flight</h3>
                </HeadModal>
                <CloseButton onClick={() => setModalState(false)}>X</CloseButton>
                {children}
            </ContainerModal>
        </Overlay>
        }
        </>
    );
}
export default ModalClass;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left:0;

    display: flex;
    padding: 40px;
    align-items: center;
    justify-content: center;
`

const ContainerModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: white;
    position: relative;
    justify-content: center;
`

const HeadModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: black;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover {
        background: #f2f2f2;
    }
`
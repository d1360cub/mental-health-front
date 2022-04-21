/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ModalAppointment({ children, stateModal, setStateModal }) {
  return (
    <>
      {stateModal
      && (
      <Overlay>
        <ContenedorModal>
          <EncabezadoModal>
            <h3>Aun paso de MENTAL HEALTH</h3>
          </EncabezadoModal>

          <BotonCerrar onClick={() => setStateModal(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
            </svg>
          </BotonCerrar>
          {children}
        </ContenedorModal>
      </Overlay>
      )}
    </>
  );
}

export default ModalAppointment;

ModalAppointment.propTypes = {
  children: PropTypes.node,
  stateModal: PropTypes.bool,
  setStateModal: PropTypes.func,
};
ModalAppointment.defaultProps = {
  children: '',
  stateModal: false,
  setStateModal: () => {},
};

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);
  align-items:center;
  display: flex;
  justify-content: center;
  padding: 40px;
  z-index: 100;
`;
const ContenedorModal = styled.div`
  width: 500px;
  height: 300px;
  position: relative;
  boder-radius:5px;
  background:#fff;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding: 20px;
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:20px;
  padding-bottom:20px;
  border-bottom:1px solid #E8E8E8;

  h3{
    font-weight: 500;
    font-size: 16px;
    color: #1766DC
  }
`;
const BotonCerrar = styled.button`
  position: absolute;
  top:20px;
  right: 20px;
  width: 30px;
  height:30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: #1766DC;

  &:hover{
    background: #f2f2f2;
  }
  svg{
    width: 100%;
    height: 100%;
  }
`;

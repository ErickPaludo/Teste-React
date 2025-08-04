import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './App.css';
import ItemBar from './Components/ItemBar/ItemBar';

function App() {
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [dataCadastro, setDataCadastro] = useState(new Date().toISOString().slice(0, 16));
  const [teste, setTeste] = useState(false);

  const tipoCredito = (e) => {
    const value = e.target.value;
    setTeste(value === '2');
    setTipoSelecionado(value);
  };

  const [modalAberto, setModalAberto] = useState(false);
  return (
    <>
      <div className='d-flex'>
        <div className='lateralbar d-flex flex-column justify-content-between'>
          <div className='d-flex flex-column align-items-center gap-2 m-2'>
            <ItemBar value={'Dash'} />
            <ItemBar value={'Finanças'} />
          </div>
          <div className='d-flex flex-column align-items-center gap-2 m-2'>
            <ItemBar value={'Config'} />
            <ItemBar value={'Sair'} />
          </div>
        </div>
      </div>
      <div className='containerBody'>
        <div className='m-4'>
          <Form>
            <Form.Group>
              <div className='d-flex gap-5'>
                <div className='gap-3'>
                  <div>
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control style={{ fontSize: '0.8rem', width: '400px' }} type='text' placeholder='MyBalls' />
                  </div>
                  <div>
                    <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control
                        style={{ fontSize: '0.8rem', width: '400px', height: '95px', minHeight: '95px', maxHeight: '95px' }}
                        as='textarea'
                        placeholder='peixe bola gato'
                      />
                    </Form.Group>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <Form.Label>Tipo</Form.Label>
                      <Form.Select style={{ fontSize: '0.8rem', width: '184px', borderRadiu: 'px' }} defaultValue='Selecione'>
                        <option>Débito</option>
                        <option>Crédito</option>
                        <option>Saldo</option>
                      </Form.Select>
                    </div>
                    <div>
                      <Form.Label>Data</Form.Label>
                      <Form.Control type='datetime-local' style={{ fontSize: '0.8rem', width: '184px', height: '36px' }} defaultValue='' />
                    </div>
                  </div>
                </div>
                <div className='gap-3'>
                  <div>
                    <Form.Label>Valor Total</Form.Label>
                    <Form.Control style={{ fontSize: '0.8rem', width: '184px' }} type='number' placeholder='R$00,00' />
                  </div>
                  <div>
                    <Form.Label>Valor Parcela</Form.Label>
                    <Form.Control style={{ fontSize: '0.8rem', width: '184px' }} type='number' placeholder='R$00,00' />
                  </div>
                  <div>
                    <Form.Label>Parcela</Form.Label>
                    <Form.Control style={{ fontSize: '0.8rem', width: '184px' }} type='number' placeholder='1' />
                  </div>
                </div>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}

export default App;

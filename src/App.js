import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./App.css";
import ItemBar from "./Components/ItemBar/ItemBar";

function App() {
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [dataCadastro, setDataCadastro] = useState(
    new Date().toISOString().slice(0, 16)
  );
  const [teste, setTeste] = useState(false);

  const tipoCredito = (e) => {
    const value = e.target.value;
    setTeste(value === "2");
    setTipoSelecionado(value);
  };

  const [modalAberto, setModalAberto] = useState(false);
  return (
    <>
      <div className="d-flex">
        <div className="lateralbar d-flex flex-column justify-content-between">
          <div className="d-flex flex-column align-items-center gap-2 m-2">
            <ItemBar value={"Dash"} />
            <ItemBar value={"Finanças"} />
          </div>
          <div className="d-flex flex-column align-items-center gap-2 m-2">
            <ItemBar value={"Config"} />
            <ItemBar value={"Sair"} />
          </div>
        </div>
      </div>
      <div className="containerBody">
        <div className="p-4">
          <Form>
            <Row className="mb-1">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="w-50"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default App;

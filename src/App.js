import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

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
    <div className="container mt-3">
      <form className="row g-3">
        <div className="col-lg-4">
          <div id="cad1">
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">
                Título
              </label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Meu Gasto"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição
              </label>
              <textarea
                style={{ height: "30px" }}
                className="form-control"
                id="descricao"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="tipo" className="form-label">
                Tipo
              </label>
              <select
                className="form-select"
                id="tipo"
                value={tipoSelecionado}
                onChange={tipoCredito}
              >
                <option value="">Selecione...</option>
                <option value="1">Débito</option>
                <option value="2">Crédito</option>
                <option value="3">Saldo</option>
              </select>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkChecked"
              />
              <label className="form-check-label" htmlFor="checkChecked">
                Pago
              </label>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div id="cad2">
            <div className="mb-3">
              <label htmlFor="valorIntegral" className="form-label">
                Valor Integral
              </label>
              <input
                type="number"
                className="form-control"
                id="valorIntegral"
                placeholder="R$ 00,00"
                required
              />
            </div>
            {teste && (
              <>
                <div className="mb-3">
                  <label htmlFor="valorParcela" className="form-label">
                    Valor Parcela
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="valorParcela"
                    placeholder="R$ 00,00"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="parcela" className="form-label">
                    Parcela
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="parcela"
                    placeholder="1"
                    required
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="col-lg-3">
          <div id="cad3" className="mb-3">
            <label htmlFor="data" className="form-label">
              Data cadastro
            </label>
            <input
              type="datetime-local"
              id="data"
              name="data"
              className="form-control"
              value={dataCadastro}
              onChange={(e) => setDataCadastro(e.target.value)}
            />
          </div>
        </div>
      </form>

      {/* Segunda parte - pesquisa e datas */}
      <form className="pb-5 mt-3">
        <div className="row g-4 align-items-end">
          <div className="col-md-3">
            <label htmlFor="dataInicio" className="form-label">
              Data Início
            </label>
            <input
              type="datetime-local"
              id="dataInicio"
              name="dataInicio"
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="dataFim" className="form-label">
              Data Fim
            </label>
            <input
              type="datetime-local"
              id="dataFim"
              name="dataFim"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="pesquisa" className="form-label">
              Pesquise
            </label>
            <div className="d-flex gap-2">
              <input type="text" className="form-control" id="pesquisa" />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setModalAberto(true)}
              >
                Pesquisar
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Modal React-Bootstrap */}
      <Modal show={modalAberto} onHide={() => setModalAberto(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filtrar</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // centraliza horizontalmente os elementos filhos
              gap: "15px", // espaço vertical entre os selects e botão
            }}
          >
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <label htmlFor="tipo" className="form-label text-center d-block">
                Tipo
              </label>
              <select
                className="form-select"
                id="tipo"
                value={tipoSelecionado}
                onChange={tipoCredito}
              >
                <option value="">Selecione...</option>
                <option value="1">Débito</option>
                <option value="2">Crédito</option>
                <option value="3">Saldo</option>
              </select>
            </div>

            <div style={{ width: "100%", maxWidth: "300px" }}>
              <label
                htmlFor="status"
                className="form-label text-center d-block"
              >
                Status
              </label>
              <select
                className="form-select"
                id="status"
                value={tipoSelecionado}
                onChange={tipoCredito}
              >
                <option value="">Selecione...</option>
                <option value="1">Pago</option>
                <option value="2">Pendente</option>
                <option value="3">Cancelado</option>
              </select>
            </div>

            <Button variant="primary">Salvar filtro</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Tabela com scroll */}
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                <input type="checkbox" id="selectAll" />
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                Título
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                Descrição
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                Valor
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                Dthr
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                Parcela
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                Categoria
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                Status
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                GpId
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                Id
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  background: "#fff",
                  zIndex: 1,
                }}
              >
                IdFixo
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, i) => (
              <tr key={i} className="table-success">
                <td>
                  <input type="checkbox" />
                </td>
                <td>Uber</td>
                <td>Teste</td>
                <td>R$ 10,89</td>
                <td>01/07/2025</td>
                <td>1/1</td>
                <td>Crédito</td>
                <td>Pago</td>
                <td>68</td>
                <td>72</td>
                <td>0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

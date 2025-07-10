import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [dataCadastro, setDataCadastro] = useState(
    new Date().toISOString().slice(0, 16)
  );
  const [teste, setTeste] = useState(false);

  const tipoCredito = (e) =>{
    const value = e.target.value;
    if(value === "2"){
    setTeste(true)
    }else{
     setTeste(false)
    }
    setTipoSelecionado(value);
  };

  const handleTipoChange = (e) => {
    setTipoSelecionado(e.target.value);
  };

  return (
    <div className="container mt-4">
      <form className="row g-3">
        <div className="d-lg-flex gap-5">
          <div className="align-items-md-start">
            <div className="col-md-auto mb-2">
              <label htmlFor="titulo" className="form-label">Título</label>
              <input type="text" className="form-control" id="titulo" placeholder="Meu Gasto" required />
            </div>

            <div className="col-md-auto mb-2">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <input type="text" className="form-control" id="descricao" required />
            </div>

            <div className="col-md-auto mb-2">
              <label htmlFor="tipo" className="form-label">Tipo</label>
              <select className="form-select" id="tipo" value={tipoSelecionado} onChange={tipoCredito}>
                <option value="1">Débito</option>
                <option value="2">Crédito</option>
                <option value="3">Saldo</option>
              </select>
            </div>

            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="checkChecked" />
              <label className="form-check-label" htmlFor="checkChecked">Pago</label>
            </div>
          </div>

          <div>
            <div className="col-md-auto mb-2">
              <label htmlFor="valorIntegral" className="form-label">Valor Integral</label>
              <input type="number" className="form-control" id="valorIntegral" placeholder="R$00,00" required />
            </div>
            {teste && (<>
            <div className="col-md-auto mb-2">
              <label htmlFor="valorParcela" className="form-label">Valor Parcela</label>
              <input type="number" className="form-control" id="valorParcela" placeholder="R$00,00" required />
            </div>

            <div className="col-md-auto mb-2">
              <label htmlFor="parcela" className="form-label">Parcela</label>
              <input type="number" className="form-control" id="parcela" placeholder="1" required />
            </div>
            </>
            )
}
          </div>

          <div>
            <label htmlFor="data" className="form-label">Data cad:</label>
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

      <table className="table table-hover mt-5">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" id="selectAll" /></th>
            <th scope="col">Título</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col">Dthr</th>
            <th scope="col">Parcela</th>
            <th scope="col">Categoria</th>
            <th scope="col">Status</th>
            <th scope="col">GpId</th>
            <th scope="col">Id</th>
            <th scope="col">IdFixo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" className="row-checkbox" /></td>
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
        </tbody>
      </table>
    </div>
  );
}

export default App;

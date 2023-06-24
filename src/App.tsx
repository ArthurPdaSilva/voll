import "./App.css";
import { Cabecalho, Container, Rodape, Tabela, Titulo } from "./components";
import useDadosConsulta from "./hooks/useDadosConsulta";

function App() {
  const { dados, erro } = useDadosConsulta();

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Area Administrativa</Titulo>
        <Tabela consultas={dados} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;

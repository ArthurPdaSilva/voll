import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { IConsulta, IProfissional } from "../../types";
import useDadosGrafico from "../../hooks/useDadosGrafico";
import IDados from "../../types/IDados";
import styled from "styled-components";

interface Props {
  profissionais: IProfissional[] | null;
  consultas: IConsulta[] | null;
}

const SecaoEstilizada = styled.section`
  background-color: var(--branco);
  border-radius: 16px;
`;

function Grafico({ profissionais, consultas }: Props) {
  const dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });

  return (
    <SecaoEstilizada>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={dados}
          margin={{ top: 25, right: 20, left: 40, bottom: 20 }}
        >
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey="nome"></YAxis>
          <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </SecaoEstilizada>
  );
}

export default Grafico;

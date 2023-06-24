import React from "react";
import avaliacao from "./assets/avaliacao.png";
import grafico from "./assets/grafico.png";
import consulta from "./assets/consulta.png";
import styled from "styled-components";

interface Props {
  image?: string;
  children?: React.ReactNode;
}

interface IImagens {
  avalicao: string;
  grafico: string;
  consulta: string;
}

const SpanEstilizado = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: conver;
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "none"};
`;

const TituloEstilizado = styled.h2`
  color: var(--azul-claro);
`;

const ContainerEstilizado = styled.div`
  display: flex;
  align-items: center;
`;

function Titulo({ image, children }: Props) {
  const listaDeImagens: IImagens = {
    avalicao: avaliacao,
    grafico: grafico,
    consulta: consulta,
  };

  return (
    <ContainerEstilizado>
      {image && (
        <SpanEstilizado image={listaDeImagens[image as keyof IImagens]} />
      )}
      <TituloEstilizado>{children}</TituloEstilizado>
    </ContainerEstilizado>
  );
}

export default Titulo;

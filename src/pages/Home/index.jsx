import React from 'react';
import styled from 'styled-components';
import dadosIniciais from '../../data/dados_iniciais.json';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media(max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é ..."
      />

      {dadosIniciais.categorias.map(
        (category) => (<Carousel key={category.titulo} ignoreFirstVideo category={category} />),
      )}

      <Footer />
    </AppWrapper>

  );
}

export default Home;

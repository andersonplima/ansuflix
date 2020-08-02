import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import * as categoriasRepository from '../../repositories/categorias';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media(max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await categoriasRepository.getAllWithVideos();
      setDadosIniciais([...data]);
    })();
  }, []);

  return (
    <AppWrapper>
      <Menu />

      {dadosIniciais.length > 0 && (
        <BannerMain
          videoTitle={dadosIniciais[0].videos[0].titulo}
          url={dadosIniciais[0].videos[0].url}
          videoDescription="O que é ..."
        />
      )}

      {dadosIniciais.map(
        (category, i) => (
          <Carousel key={category.id} ignoreFirstVideo={i === 0} category={category} />
        ),
      )}

      <Footer />
    </AppWrapper>

  );
}

export default Home;

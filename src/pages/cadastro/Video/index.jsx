import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/Carousel/components/FormField';
import Button from '../../../components/Button';
import * as videosRepository from '../../../repositories/videos';
import * as categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const initialValues = { titulo: 'Video aleatório', url: 'https://www.youtube.com/watch?v=GC5LWdxCl00', categoria: 'Front End' };
  const { values: video, handleChange } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  const history = useHistory();

  function handleSubmit(event) {
    (async () => {
      const { categoria, ...data } = video;
      const categoriaId = categorias.find((c) => c.titulo === video.categoria).id;
      await videosRepository.create({ ...data, categoriaId });
    })();

    history.push('/');

    event.preventDefault();
  }

  useEffect(() => {
    (async () => {
      const data = await categoriasRepository.getAll();
      setCategorias([...data]);
    })();
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de vídeo:
        {' '}
        {video.titulo}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          value={video.titulo}
          caption="Título"
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          type="url"
          value={video.url}
          caption="Url"
          name="url"
          onChange={handleChange}
        />

        <FormField
          type="text"
          value={video.categoria}
          caption="Categoria"
          name="categoria"
          hintList={categorias.map((c) => c.titulo)}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;

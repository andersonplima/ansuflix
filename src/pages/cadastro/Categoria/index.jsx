import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Carousel/components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import * as categoriasRepository from '../../../repositories/categorias';
import CategoryTable from './components/CategoryTable';

function CadastroCategoria() {
  const initialValues = {
    titulo: '', descricao: '', cor: '#454598', url: '',
  };
  const { values: categoria, handleChange, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await categoriasRepository.getAll();
      setCategorias(data.map(
        ({ titulo, cor, link_extra: linkExtra }) => {
          const categoriaResult = { titulo, cor };
          if (linkExtra) {
            return { ...categoriaResult, descricao: linkExtra.text, url: linkExtra.url };
          }

          return categoriaResult;
        },
      ));
    })();
  }, [refresh]);

  function handleSubmit(event) {
    (async () => {
      const categoriaToSave = {
        titulo: categoria.titulo,
        cor: categoria.cor,
        link_extra: {
          url: categoria.url,
          text: categoria.descricao,
        },
      };

      await categoriasRepository.create(categoriaToSave);
    })();

    clearForm();
    setRefresh(true);

    event.preventDefault();
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {categoria.titulo}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          value={categoria.titulo}
          caption="Título"
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          value={categoria.descricao}
          caption="Descrição"
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          type="color"
          value={categoria.cor}
          caption="Cor"
          name="cor"
          onChange={handleChange}
        />

        <FormField
          type="url"
          value={categoria.url}
          caption="Url"
          name="url"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      { categorias && categorias.length > 0 && (
      <CategoryTable>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((item) => (
            <tr key={item.id}>
              <td>
                {item.titulo}
              </td>
              <td>
                {item.descricao}
              </td>
              <td style={{ backgroundColor: item.cor }}>
                &nbsp;
              </td>
            </tr>
          ))}
        </tbody>
      </CategoryTable>
      ) }

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Carousel/components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = { nome: '', descricao: '', cor: '#454598' };

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(initialValues);

  function handleSubmit(event) {
    setCategorias([...categorias, categoria]);
    setCategoria(initialValues);

    event.preventDefault();
  }

  function handleChange({ target: { value, name } }) {
    setCategoria({ ...categoria, [name]: value });
  }

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';

    fetch(url).then(async (response) => {
      const data = await response.json();
      setCategorias([...data]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {categoria.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          value={categoria.nome}
          caption="Nome"
          name="nome"
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

        <Button>
          Cadastrar
        </Button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((item) => (
            <tr key={item.nome}>
              <td>
                {item.nome}
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
      </table>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

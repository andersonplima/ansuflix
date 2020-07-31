import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
        <Route path="/cadastro/video" component={CadastroVideo} exact />
        <Route path="/" component={Home} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

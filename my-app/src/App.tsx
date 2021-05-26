import React, { useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Search from './components/Search/Search';

function App() {

  const [modalActive, setModalActive] = useState(false);
  
  return (
    <div className="container">
      <Header />
      <Search />
      <button onClick={() => setModalActive(true)}>click me</button>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;

import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Search from './components/Search/Search';

function App() {

  const { modalActive, setModalActive } = useSelector((state:any) => state.modalReducer);
  
  return (
    <div className="container">
      <Header />
      <Search />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;

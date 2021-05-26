import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Search from './components/Search/Search';

function App() {

  const { isModalActive } = useSelector((state:any) => state.modalReducer);
  
  return (
    <div className="container">
      <Header />
      <Search />
      <Modal isActive={isModalActive} />
    </div>
  );
}

export default App;

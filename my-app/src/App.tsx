import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Main from './components/Main/Main';

function App() {
  const { isModalActive } = useSelector((state:any) => state.modalReducer);
  
  return (
    <div className="container">
      <Header />
      <Main />
      <Modal isActive={isModalActive} />
    </div>
  );
}

export default App;

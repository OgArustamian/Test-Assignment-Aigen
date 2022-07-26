import './App.css';
import 'antd/dist/antd.min.css';
import { useSelector } from 'react-redux';
import EntryForm from './Components/entryForm/EntryForm';
import DocsList from './Components/DocsList/DocsList';

function App() {
  const documents = useSelector((state) => state.documents);

  return (
    <div className="App">
      <EntryForm />
      <DocsList />
    </div>
  );
}

export default App;

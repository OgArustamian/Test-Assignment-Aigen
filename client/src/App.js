import './App.css';
import 'antd/dist/antd.min.css';
import EntryForm from './Components/entryForm/EntryForm';
import DocsList from './Components/DocsList/DocsList';

function App() {
  return (
    <div className="App">
      <EntryForm />
      <DocsList />
    </div>
  );
}

export default App;

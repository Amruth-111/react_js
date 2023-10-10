
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About"></Navbar>
    <TextForm title="Enter the text to analyze"></TextForm>
    </>
  );
}

export default App;

import Index from './index.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Index/>
    </div>
  );
}

const root = 
ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

export default App;

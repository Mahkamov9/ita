import './App.css';
import Collector from './Collector';
import Layouts from './Layouts/Layouts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="app">
        <Layouts>
          <Collector/>
        </Layouts>
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';

function App() {
  var today = new Date()
   const datetoday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <p>Created on: <strong>{datetoday}</strong></p>
    </div>
  );
}

export default App;

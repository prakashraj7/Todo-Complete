import * as React from 'react';
import './style.css';

export default function App() {
  const [userIn, setUserIn] = React.useState('');
  const [item, setItem] = React.useState([]);

  const handAdd = () => {
    setItem([...item, userIn]);
    setUserIn('');
  };

  const renderList = item.map((ite) => {
    return (
      <div>
        <h5>{ite}</h5>
      </div>
    );
  });
  return (
    <div>
      <h1>Prakash Joaquin!</h1>
      <input
        type="text"
        value={userIn}
        onChange={(e) => setUserIn(e.target.value)}
      />
      <button onClick={handAdd}>Add</button>
      <hr />
      {renderList}
    </div>
  );
}

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
    const [list, setList] = useState([]);
    const url = process.env.URL_API || 'http://127.0.0.1:5000';
    console.log( process.env.URL_API,'env');
    console.log(url,'url');
    const fetchData = () => {
      console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((res) => setList(res['example']));
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    {list?.map((i) => {
                        return <li>Dũng óc chó {i}</li>;
                    })}
                </ul>
            </header>
        </div>
    );
}

export default App;

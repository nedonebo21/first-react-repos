import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div>
                    <h1>Fixed</h1>

                    <p>Lorem ipsum dolor.</p>
                    <p>Lorem ipsum dolor.</p>
                    <p>Lorem ipsum dolor.</p>
                    <p>Dev branch commit 1</p>
                </div>
                <a
                    className="App-link"
                    href="https://reactjs-2.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        <p>Dev branch commit 2</p>
                        <p>Learn React</p>
                        <p>Dev branch commit 3</p>
                        <p>Learn React</p>
                        <p>Dev branch commit 1</p>
                    </div>
                    <div>
                        <p>developer/popup branch commit 1</p>
                        <p>developer/popup branch commit 2</p>
                    </div>

                    <div>
                        <p>developer/login branch commit 1</p>
                        <p>developer/login branch commit 2</p>
                    </div>

                    <div>
                        1
                        22
                        333
                    </div>
                </a>
            </header>
        </div>
    );
}

export default App;

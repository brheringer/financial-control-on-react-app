import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountsContext from '../contexts/AccountsContext';
import AccountsList from './AccountsList';
import Login from './Login';
import Navbar from './Navbar';

const App = () => {
    return(
        <Router>
            <Navbar></Navbar>
            <br/>
            <div className="container">
                <Switch>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/accounts">
                        <AccountsContext>
                            <AccountsList></AccountsList>
                        </AccountsContext>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
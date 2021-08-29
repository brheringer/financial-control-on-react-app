import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountsContext from '../contexts/AccountsContext';
import AccountsList from './AccountsList';
import Login from './Login';
import Navbar from './Navbar';

const App = () => {
    return(
                        <AccountsContext>
        <Router>
            <Navbar></Navbar>
            <br/>
            <div>
                <Switch>
                    <Route path="/">
                        <Login></Login>
                    </Route>
                    <Route path="/accounts">
                            <AccountsList></AccountsList>
                    </Route>
                </Switch>
            </div>
        </Router>
                        </AccountsContext>
    );
}

export default App;
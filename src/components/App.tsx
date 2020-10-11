import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountsContext from '../contexts/AccountsContext';
import AccountsList from './AccountsList';
import AddAccount from './AddAccount';
import Navbar from './Navbar';

const App = () => {
    return(
        <AccountsContext>
            <Router>
                <Navbar></Navbar>
                <br/>
                <div>
                    <Switch>
                        <Route path="/addAccount">
                            <AddAccount></AddAccount>
                        </Route>
                        <Route path="/">
                            <AccountsList></AccountsList>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </AccountsContext>
    );
}

export default App;
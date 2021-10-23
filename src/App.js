import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store, persistor } from './redux/store';
import Menu from './Components/Menu';
import AddMenu from './Components/AddMenu';
import EditMenu from './Components/EditMenu';
import Table from './Components/Table';


class App extends React.Component {


  render() {

    return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Router>

              <Switch>
                <Route exact path="/" component={Menu} />
                <Route exact path="/addmenu" component={AddMenu} />
                <Route exact path="/editmenu" component={EditMenu} />
                <Route exact path="/table" component={Table} />
              </Switch>

            </Router>

          </div>
        </PersistGate>
      </Provider>



    );

  }

}

export default App;

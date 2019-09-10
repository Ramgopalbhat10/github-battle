import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Navbar';
import Loading from './containers/Loading';
import NotFound from './components/NotFound';
import { ThemeProvider } from './contexts/Theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./index.css";

const Popular = React.lazy(() => import('./containers/Popular'));
const Battle = React.lazy(() => import('./containers/Battle'));
const Results = React.lazy(() => import('./containers/Results'));

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/' component={Popular}/>
                  <Route exact path='/battle' component={Battle}/>
                  <Route path='/battle/results' component={Results}/>
                  <Route component={NotFound}/>
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
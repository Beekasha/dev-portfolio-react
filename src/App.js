//global styling
import GlobalStyle from './components/GlobalStyle'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import Nav from './components/Nav'
import MovieDetail from './pages/MovieDetail'

import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/work" exact>
          <OurWork />
        </Route>
        
        {/* Brings us to MovieDetail when there is anything after /work/ */}
        <Route path="/work/:id">
          <MovieDetail />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

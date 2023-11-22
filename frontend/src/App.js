import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
// import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
// import Loginpage from './views/Loginpage'
// import Dashboard from './views/Dashboard'
// import Navbar from './views/Navbar'

function App() {
  return (
    <Route component={Registerpage} path="/register" exact />
    // <Router>
    //   <AuthProvider>
    //     < Navbar/>
    //     <Switch>
    //       <PrivateRoute component={Dashboard} path="/dashboard" exact />
    //       <Route component={Loginpage} path="/login" />
    //       <Route component={Homepage} path="/" exact />
    //     </Switch>
    //   </AuthProvider>
    // </Router>
  )
}

export default App

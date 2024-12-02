import { BrowserRouter as Router } from "react-router-dom";
import Layout from './components/Layout/layout';

function App() {

  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  )
}

export default App
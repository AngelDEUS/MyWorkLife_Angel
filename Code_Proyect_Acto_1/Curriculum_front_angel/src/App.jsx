import { BrowserRouter as Router } from "react-router-dom";
import Layout from './components/Layout/layout';
import Layout_2 from './components/Layout/layout_2';

function App() {

  return (
    <>
      <Router>
        {/* <Layout /> */}
        <Layout_2 />
      </Router>
    </>
  )
}

export default App
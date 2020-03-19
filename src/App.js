import React from "react";
import { Card } from "react-bootstrap";
import FormikHackForm from "./components/hack_form";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <div className="tile">
          <Card body>
            <div className="formTitle m-2">Hack UCI Application</div>
            <FormikHackForm />
          </Card>
        </div>

        <div className="tile">image</div>
      </main>
    </React.Fragment>
  );
}

export default App;

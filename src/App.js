import React, { Component } from "react";
import { Card } from "react-bootstrap";
import FormikHackForm from "./components/hack_form";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="mycontainer">
          <div className="mytile">
            <Card body>
              <div className="formTitle m-2">Hack UCI Application</div>
              <FormikHackForm />
            </Card>
          </div>

          <div className="mytile">
            <div className="petr">
              <img
                src={process.env.PUBLIC_URL + "/img/petr.png"}
                alt=""
                height="326"
                width="242"
              />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

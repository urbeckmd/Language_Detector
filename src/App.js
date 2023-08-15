import { useEffect, useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Flag from './Flag';
import Spinner from 'react-bootstrap/Spinner';


function App() {
  // variable for text to analyze
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [language, setLanguage] = useState("");
  const [confidence, setConfidence] = useState();

  // POST AND RECEIVE DATA TO AND FROM BACKEND===============
  async function postData(data = {}) {
    setLoading(true);
    const response = await fetch('http://localhost:5000/inputData', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    setLoading(false);
    setDataReceived(true);
    return response;
  }

  function sendAPI() {
    postData({ 'input': input })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLanguage(data.prediction)
        setConfidence(data.confidence + "%")
      })
  }
  // ==========================================================

  function resetInput() {
    setInput("");
    setDataReceived(false);
    setLanguage("");
    setConfidence();
  }

  return (
    <div className="App">
      <div className="app_container">
        <div className="content_container">
          <div className="content_flag_container">
            <div className="flag_component">
              <Flag language="" loading={loading} dataReceived={dataReceived} />
            </div>
            <div className="flag_component">
              <Flag className="flag_component" language={language} loading={loading} dataReceived={dataReceived} />
            </div>
          </div>
          <div className="prediction_container">
            <div className="language">{language}</div>
            <div className="confidence">{confidence}</div>
          </div>
          <Form.Control
            as="textarea"
            className="text_area_container"
            style={{ height: '200px', width: '500px', borderRadius: '10px' }}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="button_container">
            {(!loading && !dataReceived) && <Button className="button" onClick={() => sendAPI()} variant="light" size="lg">Predict</Button>}
            {(loading) && <div className="loading_button_container">
              <Spinner className="spinner" animation="border" role="status" />
              <Button className="button button_loading" onClick={() => sendAPI()} variant="light" size="lg">Analyzing</Button>
            </div>}
            {(dataReceived) && <Button className="button" onClick={() => resetInput()} variant="light" size="lg">Predict Another</Button>}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import { generate } from "generate-password";
import { useState } from "react";
import "./App.css";

function App() {
  const [passLength, setPassLength] = useState(5);
  const [numPass, setNumPass] = useState(false);
  const [password, setPassword] = useState("");

  const handlePassLength = (e) => {
    setPassLength(e.target.value);
  };

  const handleNumPass = () => {
    setNumPass(!numPass);
  };

  const handleGenPass = () => {
    setPassword(
      generate({
        length: passLength,
        numbers: numPass,
      })
    );
  };

  const handleCopyPass = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="App">
      <div>
        <select
          className="pass__length"
          onChange={handlePassLength}
          name="passLength"
          id="passLength"
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      <div className="addNum__pass">
        <input
          type="checkbox"
          id="numPass"
          name="numPass"
          value={numPass}
          onChange={handleNumPass}
        />
        <label htmlFor="numPass">Add numbers in password</label>
      </div>
      <div className="gen__pass">
        <button className="genPass__btn" type="button" onClick={handleGenPass}>
          Generate password
        </button>
      </div>

      {password && (
        <div className="pass__info">
          <input
            className="gen__pass-input"
            type="text"
            value={password}
            disabled
          />{" "}
          <button className="copy__pass" type="button" onClick={handleCopyPass}>
            copy
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

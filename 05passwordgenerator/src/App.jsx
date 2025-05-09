import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [lenght, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");
  
  const generatePassword = useCallback(() => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let characterSet = lowerCase + upperCase;
    let generatedPassword = "";

    if (includeNumber) {
      characterSet += numbers;
    }
    if (includeSymbol) {
      characterSet += symbols;
    }

    for (let i = 0; i < lenght; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatedPassword += characterSet[randomIndex];

    }

    setPassword(generatedPassword);
  }, [lenght, includeNumber, includeSymbol]);

  useEffect( ()=>{
    generatePassword();
  },[setLength,setIncludeNumber,setIncludeSymbol,generatePassword] )
  
  // Copy to clipboard functionality
  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    });
  }, [password]);
  const copyButton = useRef(null);

  return (
    <>
      <div className="item-center flex flex-col justify-center h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-200">
          Password Generator
        </h1>

        <div className="flex flex-col items-center mt-5">
          <input
            type="text"
            value={password}
            ref={copyButton}
            readOnly
            className="w-64 h-10 text-center text-gray-200 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />{" "}
          <span className="text-gray-200 p-2">
            {" "}
            <button
              className="p-3 text-gray-950"
              style={{ background: "white" }}
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </span>
          <div className="flex flex-col items-center mt-5">
            <input
              type="range"
              min={8}
              max={20}
              value={lenght}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-gray-200">Password Length: {lenght}</label>
          </div>
          <input
            type="checkbox"
            onChange={() => {
              setIncludeNumber((prev) => !prev);
            }}
          />
          <label className="text-gray-200">Include Numbers</label>
        </div>
        <div className="flex flex-col items-center mt-5">
          <input
            type="checkbox"
            onChange={() => {
              setIncludeSymbol((prev) => !prev);
            }}
          />
          <label className="text-gray-200">Include Symbols</label>
        </div>
        <div className="flex flex-col items-center mt-5">
          <button
            className="p-3 text-gray-950"
            style={{ background: "white" }}
            onClick={generatePassword}
          >
            Generate Password
          </button> 
        </div>

       
      </div>
    </>
  );
}

export default App;

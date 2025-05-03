import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './sections/NavBar';
import CodeEditor from './sections/CodeEditor';
import UserInput from './sections/UserInput';
import OutputConsole from './sections/OutputConsole';
import CustomLibraries from './sections/CustomLibraries';
import Footer from '../../components/Footer';
import { encodeCode, decodeCode } from './sections/utils';
import PythonBackground from '../../components/PythonBackground';

const PythonCompiler = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [libs, setLibs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [saveCode, setSaveCode] = useState(true);
  const [userInput, setUserInput] = useState('');

  // Load saved data
  useEffect(() => {
    const savedCode = localStorage.getItem('pythonCode');
    const savedLibs = localStorage.getItem('pythonLibs');
    const savedInput = localStorage.getItem('pythonInput');
    
    if (saveCode && savedCode) setCode(savedCode);
    if (savedLibs) setLibs(JSON.parse(savedLibs));
    if (savedInput) setUserInput(savedInput);
  }, []);

  // Save code changes
  useEffect(() => {
    if (saveCode) {
      localStorage.setItem('pythonCode', code);
      localStorage.setItem('pythonInput', userInput);
    }
  }, [code, userInput, saveCode]);

  const executePythonCode = async () => {
    setIsLoading(true);
    setError('');
    setOutput('');
  
    try {
      // Hardcoded API configuration
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_HOST = 'judge0-ce.p.rapidapi.com';
  
      // Split input into lines
      const inputLines = userInput.split('\n').filter(line => line.trim() !== '');
      let currentInput = 0;
  
      // Create initial submission
      const submissionRes = await fetch(
        'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': API_HOST,
            'x-rapidapi-key': API_KEY,
          },
          body: JSON.stringify({
            source_code: encodeCode(code),
            language_id: 71,
            stdin: encodeCode(inputLines[currentInput++] || ''),
            redirect_stderr_to_stdout: true,
          }),
        }
      );
  
      const submissionData = await submissionRes.json();
      if (!submissionData?.token) throw new Error('No token received');
  
      // Process execution with input streaming
      let result;
      let outputText = '';
      
      while (true) {
        const resultRes = await fetch(
          `https://judge0-ce.p.rapidapi.com/submissions/${submissionData.token}?base64_encoded=true`,
          { headers: { 'x-rapidapi-host': API_HOST, 'x-rapidapi-key': API_KEY } }
        );
        
        result = await resultRes.json();
        
        // Handle output
        if (result.stdout) outputText += decodeCode(result.stdout);
        if (result.stderr) outputText += decodeCode(result.stderr);
        setOutput(outputText);
  
        // Handle completion
        if (result.status?.id > 2) {
          if (result.status.id === 3) { // Successful execution
            break;
          }
          throw new Error(result.status?.description || 'Execution failed');
        }
  
        // Handle input requests
        if (result.status?.id === 11) { // Waiting for input
          if (currentInput >= inputLines.length) {
            throw new Error('Not enough inputs provided');
          }
  
          await fetch(
            `https://judge0-ce.p.rapidapi.com/submissions/${submissionData.token}/stdin`,
            {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY,
              },
              body: JSON.stringify({
                stdin: encodeCode(inputLines[currentInput++])
              })
            }
          );
        }
  
        await new Promise(resolve => setTimeout(resolve, 500));
      }
  
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLibsChange = (newLibs) => {
    setLibs(newLibs);
    localStorage.setItem('pythonLibs', JSON.stringify(newLibs));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <PythonBackground />
      <NavBar />

      <div className=" max-w-7xl mx-auto">
      <div className="z-50 flex flex-col lg:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
            PyStatLab Compiler
          </h1>
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <label className="flex items-center gap-2 text-sm">
              <input 
                type="checkbox" 
                checked={saveCode} 
                onChange={(e) => setSaveCode(e.target.checked)}
                className="form-checkbox h-4 w-4 text-orange-500"
              />
              Persist Code
            </label>
            <button
              onClick={executePythonCode}
              disabled={isLoading}
              className="z-100 px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-md font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Running...' : 'Run Code'}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor Section */}
          <div className="lg:col-span-2">
            <CodeEditor 
              code={code} 
              setCode={setCode} 
            />

            <UserInput 
              userInput={userInput} 
              setUserInput={setUserInput} 
            />

            <OutputConsole 
              output={output} 
              error={error} 
              isLoading={isLoading} 
            />
          </div>

          {/* Custom Libraries Panel */}
          <CustomLibraries 
            libs={libs} 
            onLibsChange={handleLibsChange} 
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default PythonCompiler;
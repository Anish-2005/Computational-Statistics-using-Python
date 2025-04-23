import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom';
const encodeCode = (str) => {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch (e) {
    return btoa(
      unescape(
        encodeURIComponent(
          str.replace(/[\u0080-\u07ff]/g, m => 
            String.fromCharCode(
              0xc0 | m.charCodeAt(0) >> 6, 
              0x80 | m.charCodeAt(0) & 0x3f
            )
          )
        )
      )
    );
  }
};

const decodeCode = (b64) => {
  return decodeURIComponent(escape(atob(b64)));
};

const PythonCompiler = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [libs, setLibs] = useState([]);
  const [newLib, setNewLib] = useState({ name: '', content: '' });
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
      const API_KEY = '269deccffcmshb8bcfc66a0fca92p1546fajsn1593f894014a';
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

  const handleAddLib = () => {
    if (newLib.name.trim() && newLib.content.trim()) {
      const updatedLibs = [...libs, {
        name: newLib.name.trim(),
        content: newLib.content.trim()
      }];
      setLibs(updatedLibs);
      localStorage.setItem('pythonLibs', JSON.stringify(updatedLibs));
      setNewLib({ name: '', content: '' });
    }
  };

  const handleDeleteLib = (index) => {
    const updatedLibs = libs.filter((_, i) => i !== index);
    setLibs(updatedLibs);
    localStorage.setItem('pythonLibs', JSON.stringify(updatedLibs));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <nav className="mb-8 backdrop-blur-xl bg-gray-900/80 border border-orange-500/20 rounded-2xl p-4 mx-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg transform group-hover:rotate-12 transition-all">
              <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
              PyStatLab
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link 
              to="/"
              className="px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 rounded-md font-medium flex items-center gap-2 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
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
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-md font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Running...' : 'Run Code'}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor Section */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 h-[500px]">
              <Editor
                height="100%"
                defaultLanguage="python"
                defaultValue="# Start coding..."
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>

            {/* User Input Section */}
            <div className="mt-4 bg-gray-800 rounded-xl border border-gray-700 p-4">
              <h3 className="text-sm font-mono text-orange-400 mb-2">
                Interactive Input (Enter line by line)
              </h3>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full bg-gray-700 rounded-md p-2 text-sm font-mono text-gray-300"
                rows="3"
                placeholder="Enter inputs line by line (e.g., 5↵+↵3)"
              />
            </div>

            <div className="mt-4 space-y-4">
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
                <h3 className="text-sm font-mono text-orange-400 mb-2">Execution Session</h3>
                <div className="font-mono text-sm space-y-2">
                  {output.split('\n').map((line, index) => (
                    <div 
                      key={index}
                      className={`p-1 rounded ${line.startsWith('Result:') ? 'bg-green-900/20' : ''}`}
                    >
                      <span className="text-amber-200">➜</span>
                      <span className="ml-2 text-gray-300 whitespace-pre-wrap">
                        {line}
                      </span>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center text-gray-400">
                      <div className="animate-pulse">⏳ Processing...</div>
                    </div>
                  )}
                </div>
              </div>

              {error && (
                <div className="bg-red-900/30 rounded-xl border border-red-500 p-4">
                  <h3 className="text-sm font-mono text-red-400 mb-2">Runtime Error</h3>
                  <pre className="text-sm font-mono text-red-300 whitespace-pre-wrap">
                    {error}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Custom Libraries Panel */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 h-fit lg:sticky lg:top-6">
            <h2 className="text-lg font-semibold mb-4 text-orange-400">Custom Libraries</h2>
            
            <div className="mb-4 space-y-3">
              <input
                type="text"
                value={newLib.name}
                onChange={(e) => setNewLib({...newLib, name: e.target.value})}
                placeholder="Library name"
                className="w-full bg-gray-700 rounded-md px-3 py-2 text-sm border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
              <div className="bg-gray-700 rounded-md border border-gray-600 h-32">
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  theme="vs-dark"
                  value={newLib.content}
                  onChange={(value) => setNewLib({...newLib, content: value || ''})}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 12,
                    lineNumbers: 'off',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                  }}
                />
              </div>
              <button
                onClick={handleAddLib}
                className="w-full px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded-md text-sm transition-colors"
              >
                Add Library
              </button>
            </div>

            <div className="space-y-2">
              {libs.map((lib, index) => (
                <div key={index} className="group flex items-center justify-between bg-gray-700 rounded-md px-3 py-2 hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-mono">{lib.name}</span>
                  <button
                    onClick={() => handleDeleteLib(index)}
                    className="text-red-400 hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    ×
                  </button>
                </div>
              ))}
              
              {libs.length === 0 && (
                <p className="text-sm text-gray-400">No libraries added yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-sm text-gray-400 border-t border-gray-800 pt-4">
          <p>Note: Custom libraries can be imported using 'import library_name'</p>
        </div>
      </div>
    </div>
  );

};

export default PythonCompiler;
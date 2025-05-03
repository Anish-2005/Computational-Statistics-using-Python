import React from 'react';

const Hero = ({ saveCode, setSaveCode, executePythonCode, isLoading }) => {
  return (
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
  );
};

export default Hero;

import React from 'react';

const OutputConsole = ({ output, error, isLoading }) => {
  return (
    <div className="mb-32 mt-4 space-y-4">
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
  );
};

export default OutputConsole;
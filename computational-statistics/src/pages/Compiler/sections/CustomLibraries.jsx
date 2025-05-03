import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const CustomLibraries = ({ libs, onLibsChange }) => {
  const [newLib, setNewLib] = useState({ name: '', content: '' });

  const handleAddLib = () => {
    if (newLib.name.trim() && newLib.content.trim()) {
      const updatedLibs = [...libs, {
        name: newLib.name.trim(),
        content: newLib.content.trim()
      }];
      onLibsChange(updatedLibs);
      setNewLib({ name: '', content: '' });
    }
  };

  const handleDeleteLib = (index) => {
    const updatedLibs = libs.filter((_, i) => i !== index);
    onLibsChange(updatedLibs);
  };

  return (
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
  );
};

export default CustomLibraries;
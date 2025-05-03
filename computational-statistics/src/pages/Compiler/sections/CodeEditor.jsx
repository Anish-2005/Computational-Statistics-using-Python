import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode }) => {
  return (
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
  );
};

export default CodeEditor;
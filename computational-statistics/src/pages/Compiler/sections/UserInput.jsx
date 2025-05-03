import React from 'react';

const UserInput = ({ userInput, setUserInput }) => {
  return (
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
  );
};

export default UserInput;
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-blue-700">
        Meta Aptitude Test
      </h1>
      <div className="text-sm text-gray-600">
        <span>Powered by </span>
        <strong>Meta Platforms, Inc.</strong>
      </div>
    </header>
  );
};

export default Header;

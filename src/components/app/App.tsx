import React from 'react'
import UsersList from '../users-list/UsersList';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am adding text</h1>
        Friday Night Magic!
      </header>
      <body>
        <UsersList></UsersList>
      </body>
    </div>
  );
}
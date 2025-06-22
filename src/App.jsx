import React, { Suspense } from 'react';
import { useAuth } from './AuthContext';
import Login from './Login';
import './App.css'; 

const MusicLibrary = React.lazy(() => import('music_library/MusicLibrary'));

function App() {
  const { user, logout } = useAuth();

  if (!user) return <Login />;

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">🎧 Music App ({user.role})</h1>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>

      <Suspense fallback={<div>Loading Music Library...</div>}>
        <MusicLibrary user={user} />
      </Suspense>
    </div>
  );
}

export default App;

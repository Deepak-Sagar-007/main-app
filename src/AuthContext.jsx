import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const dummyUsers = {
  admin: { username: 'admin', password: 'admin123', role: 'admin' },
  user: { username: 'user', password: 'user123', role: 'user' },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('auth');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, password) => {
    const found = Object.values(dummyUsers).find(
      u => u.username === username && u.password === password
    );
    if (found) {
      const token = `fake-jwt-${found.role}`;
      const authData = { username: found.username, role: found.role, token };
      localStorage.setItem('auth', JSON.stringify(authData));
      setUser(authData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

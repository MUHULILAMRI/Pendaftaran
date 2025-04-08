import React from 'react';
import { Link } from 'react-router-dom';
import { Guitar as Hospital } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Hospital className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-800">RS Sehat</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Beranda</Link>
            <Link to="/registration" className="text-gray-700 hover:text-blue-600">Pendaftaran</Link>
            <Link to="/check-status" className="text-gray-700 hover:text-blue-600">Cek Status</Link>
            {isAuthenticated ? (
              <>
                <Link to="/admin" className="text-gray-700 hover:text-blue-600">Dashboard Admin</Link>
                <button onClick={logout} className="text-gray-700 hover:text-blue-600">Keluar</button>
              </>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-blue-600">Masuk</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
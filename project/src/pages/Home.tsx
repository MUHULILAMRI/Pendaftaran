import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ClipboardCheck, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Selamat Datang di RS Sehat</h1>
        <p className="text-xl text-gray-600">Kesehatan Anda adalah prioritas kami</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Calendar className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Pendaftaran Mudah</h2>
          <p className="text-gray-600 text-center">Daftar untuk janji temu Anda secara online dengan proses pendaftaran yang sederhana</p>
          <div className="mt-4 text-center">
            <Link to="/registration" className="text-blue-600 hover:text-blue-800">Daftar Sekarang →</Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Search className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Cek Status</h2>
          <p className="text-gray-600 text-center">Pantau status pendaftaran Anda dengan mudah secara online</p>
          <div className="mt-4 text-center">
            <Link to="/check-status" className="text-blue-600 hover:text-blue-800">Cek Status →</Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <ClipboardCheck className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Dokter Ahli</h2>
          <p className="text-gray-600 text-center">Dapatkan perawatan dari tenaga medis profesional kami yang berpengalaman</p>
          <div className="mt-4 text-center">
            <Link to="/registration" className="text-blue-600 hover:text-blue-800">Temui Dokter Kami →</Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Layanan Kami</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Dokter Umum',
            'Spesialis Jantung',
            'Spesialis Anak',
            'Spesialis Ortopedi',
            'Spesialis Saraf',
            'Spesialis Kulit'
          ].map((service) => (
            <div key={service} className="p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-gray-600">Perawatan dan pengobatan profesional di bidang {service.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
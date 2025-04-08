import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function CheckStatus() {
  const [registrationId, setRegistrationId] = useState('');
  const [searchResult, setSearchResult] = useState<null | {
    id: string;
    name: string;
    specialization: string;
    doctor: string;
    date: string;
    time: string;
    status: string;
    paymentMethod: string;
  }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock search result
    if (registrationId) {
      setSearchResult({
        id: registrationId,
        name: 'Budi Santoso',
        specialization: 'Spesialis Jantung',
        doctor: 'dr. Sarah Johnson, Sp.JP',
        date: '2024-03-20',
        time: '09:00',
        paymentMethod : 'Bpjs',
        status: 'Dikonfirmasi'
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-center mb-8">
          <Search className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-900">Cek Status Pendaftaran</h1>
        </div>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Masukkan nomor pendaftaran Anda"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={registrationId}
              onChange={(e) => setRegistrationId(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cari
            </button>
          </div>
        </form>

        {searchResult && (
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Detail Pendaftaran</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nama Pendaftaran</p>
                <p className="font-medium">{searchResult.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Nama Pasien</p>
                <p className="font-medium">{searchResult.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Spesialisasi</p>
                <p className="font-medium">{searchResult.specialization}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dokter</p>
                <p className="font-medium">{searchResult.doctor}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tanggal Kunjungan</p>
                <p className="font-medium">{searchResult.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Waktu Kunjungan</p>
                <p className="font-medium">{searchResult.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Cara Pembayaran</p>
                <p className="font-medium">{searchResult.paymentMethod}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Status</p>
                <span className={`px-2 py-1 inline-flex text-sm font-semibold rounded-full ${
                  searchResult.status === 'Dikonfirmasi' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {searchResult.status}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
}

const SPECIALIZATIONS = [
  'Dokter Umum',
  'Spesialis Jantung',
  'Spesialis Anak',
  'Spesialis Ortopedi',
  'Spesialis Saraf',
  'Spesialis Kulit'
];

const DOCTORS: Doctor[] = [
  { id: 1, name: 'dr. John Smith', specialization: 'Dokter Umum' },
  { id: 2, name: 'dr. Sarah Johnson, Sp.JP', specialization: 'Spesialis Jantung' },
  { id: 3, name: 'dr. Michael Brown, Sp.A', specialization: 'Spesialis Anak' },
  { id: 4, name: 'dr. Emily Davis, Sp.OT', specialization: 'Spesialis Ortopedi' },
  { id: 5, name: 'dr. Robert Wilson, Sp.S', specialization: 'Spesialis Saraf' },
  { id: 6, name: 'dr. Lisa Anderson, Sp.KK', specialization: 'Spesialis Kulit' },
];

const PAYMENT_METHODS = [
  'BPJS',
  'Asuransi',
  'Tunai',
  'Debit/Kredit'
];

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    birthPlace: '',
    birthDate: '',
    gender: '',
    address: '',
    paymentMethod: '',
    guardianName: '',
    phoneNumber: '',
    complaint: '',
    specialization: '',
    doctorId: '',
    date: '',
    time: '',
  });

  const availableDoctors = DOCTORS.filter(
    doctor => doctor.specialization === formData.specialization
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call
    console.log('Form submitted:', formData);
    alert('Pendaftaran berhasil! Nomor pendaftaran Anda: ' + Math.random().toString(36).substr(2, 9));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-center mb-8">
          <Calendar className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-900">Pendaftaran Pasien</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap Pasien
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tempat Lahir
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Lahir
              </label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jenis Kelamin
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Laki-laki"
                  required
                  className="form-radio text-blue-600"
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <span className="ml-2">Laki-laki</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Perempuan"
                  required
                  className="form-radio text-blue-600"
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <span className="ml-2">Perempuan</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alamat Lengkap
            </label>
            <textarea
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cara Pembayaran
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
            >
              <option value="">Pilih Cara Pembayaran</option>
              {PAYMENT_METHODS.map((method) => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Penanggung Jawab
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.guardianName}
                onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Telepon
              </label>
              <input
                type="tel"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keluhan
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.complaint}
              onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
              placeholder="Jelaskan keluhan Anda secara detail"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Spesialisasi
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.specialization}
              onChange={(e) => setFormData({ ...formData, specialization: e.target.value, doctorId: '' })}
            >
              <option value="">Pilih Spesialisasi</option>
              {SPECIALIZATIONS.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dokter
            </label>
            <select
              required
              disabled={!formData.specialization}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.doctorId}
              onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
            >
              <option value="">Pilih Dokter</option>
              {availableDoctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Kunjungan
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Waktu Kunjungan
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
              <option value="">Pilih Waktu</option>
              {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Kirim Pendaftaran
          </button>
        </form>
      </div>
    </div>
  );
}
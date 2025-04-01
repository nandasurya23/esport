/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function TeamRegistrationForm() {
  const router = useRouter();
  const [teamName, setTeamName] = useState('');
  const [teamLogo, setTeamLogo] = useState<File | null>(null);
  const [players, setPlayers] = useState([
    { fullName: '', ign: '', idIgn: '', phone: '', email: '', position: 'ketua' as const },
    { fullName: '', ign: '', idIgn: '', phone: '', email: '', position: 'anggota' as const },
    { fullName: '', ign: '', idIgn: '', phone: '', email: '', position: 'anggota' as const },
    { fullName: '', ign: '', idIgn: '', phone: '', email: '', position: 'anggota' as const },
    { fullName: '', ign: '', idIgn: '', phone: '', email: '', position: 'anggota' as const },
    { fullName: '', ign: '', idIgn: '', phone: '', email: '', position: 'anggota' as const },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlayerChange = (index: number, field: string, value: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = {
      ...updatedPlayers[index],
      [field]: value
    };
    setPlayers(updatedPlayers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const isFormValid = (
      teamName.trim() !== '' && 
      teamLogo !== null &&
      players.every(player => (
        player.fullName.trim() !== '' &&
        player.ign.trim() !== '' &&
        player.idIgn.trim() !== '' &&
        player.phone.trim() !== '' &&
        player.email.trim() !== ''
      ))
    );

    if (!isFormValid) {
      toast.error('Harap lengkapi semua data dengan benar!', {
        position: 'top-center',
        style: {
          background: '#FEE2E2',
          color: '#B91C1C',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(
        <div>
          <h3 className="font-bold">Pendaftaran Berhasil!</h3>
          <p className="text-sm">Tim {teamName} telah terdaftar</p>
        </div>, 
        {
          position: 'top-center',
          duration: 4000,
          style: {
            background: '#DCFCE7',
            color: '#166534',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          },
          iconTheme: {
            primary: '#22C55E',
            secondary: '#FFFFFF',
          }
        }
      );

      // Redirect after toast disappears
      setTimeout(() => router.push('/'), 4000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Gagal mendaftarkan tim. Silakan coba lagi.';
      toast.error(errorMessage, {
        position: 'top-center',
        style: {
          background: '#FEE2E2',
          color: '#B91C1C',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {/* Toast Notifications */}
      <Toaster />
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 to-blue-600 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Pendaftaran Tim Esports</h1>
          <p className="text-center text-purple-100 mt-2">
            Lengkapi data tim dan anggota untuk bergabung dalam tournament
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          {/* Team Information */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="px-4 text-lg font-semibold text-gray-700">Informasi Tim</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Tim</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  placeholder="Masukkan nama tim"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Logo Tim</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input
                      type="file"
                      className="w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-purple-50 file:text-purple-700
                        hover:file:bg-purple-100 transition"
                      accept="image/*"
                      onChange={(e) => setTeamLogo(e.target.files ? e.target.files[0] : null)}
                      required
                    />
                  </div>
                  {teamLogo && (
                    <div className="w-16 h-16 rounded-full border-2 border-purple-200 overflow-hidden">
                      <img 
                        src={URL.createObjectURL(teamLogo)} 
                        alt="Team logo preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                <p className="mt-1 text-xs text-gray-500">Format: JPG, PNG (Maks. 2MB)</p>
              </div>
            </div>
          </div>

          {/* Players Information */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="h-px flex-1 bg-gray-200"></div>
              <h2 className="px-4 text-lg font-semibold text-gray-700">Informasi Pemain</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
            
            <div className="space-y-6">
              {players.map((player, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-800">Player {index + 1}</h3>
                    {index === 0 && (
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        Ketua Tim
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                        value={player.fullName}
                        onChange={(e) => handlePlayerChange(index, 'fullName', e.target.value)}
                        required
                        placeholder="Nama sesuai KTP"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama IGN</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                        value={player.ign}
                        onChange={(e) => handlePlayerChange(index, 'ign', e.target.value)}
                        required
                        placeholder="Nama dalam game"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ID IGN</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                        value={player.idIgn}
                        onChange={(e) => handlePlayerChange(index, 'idIgn', e.target.value)}
                        required
                        placeholder="ID player dalam game"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">No Telepon</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                        value={player.phone}
                        onChange={(e) => handlePlayerChange(index, 'phone', e.target.value)}
                        required
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                        value={player.email}
                        onChange={(e) => handlePlayerChange(index, 'email', e.target.value)}
                        required
                        placeholder="email@contoh.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Posisi</label>
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition text-gray-800"
                        value={player.position}
                        onChange={(e) => handlePlayerChange(index, 'position', e.target.value)}
                        required
                        disabled={index === 0}
                      >
                        <option value="anggota">Anggota</option>
                        {index === 0 && <option value="ketua">Ketua</option>}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md transition-all transform focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                isSubmitting 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:from-purple-700 hover:to-blue-700 hover:scale-[1.01]'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memproses...
                </span>
              ) : 'Daftarkan Tim'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
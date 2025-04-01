/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Tournament } from '../../types'

const getTournamentDetails = async (id: number): Promise<Tournament> => {
    return {
        id: id,
        name: "Esports Championship 2023",
        game: "Mobile Legends",
        description: "Turnamen Mobile Legends terbesar se-Indonesia dengan total hadiah 500 juta rupiah",
        date: "2023-12-15",
        prize: "Rp 500.000.000",
        teams: 32,
        maxTeams: 64,
        format: "Double Elimination",
        status: "upcoming",
        image: "/valorant-event.jpg",
        registrationDeadline: "2023-12-01",
        rules: "https://example.com/rules.pdf",
        platform: "mobile",
        entryFee: 250000,
        organizer: {
            id: 1,
            name: "Esports Indonesia",
            logo: '/teams/phoenix.png',
        },
        location: "Jakarta Convention Center",
        schedule: [
            {
                date: "2023-12-15",
                stage: "Penyisihan",
                matches: ["09:00 - 12:00", "13:00 - 16:00"]
            },
            {
                date: "2023-12-16",
                stage: "Semifinal",
                matches: ["10:00 - 12:00", "13:00 - 15:00"]
            },
            {
                date: "2023-12-17",
                stage: "Final",
                matches: ["14:00 - 17:00"]
            }
        ],
        prizeDistribution: [
            { position: 1, prize: "Rp 250.000.000" },
            { position: 2, prize: "Rp 150.000.000" },
            { position: 3, prize: "Rp 100.000.000" }
        ]
    }
}

export default function TournamentDetails() {
    const params = useParams<{ id: string }>()
    const [tournament, setTournament] = useState<Tournament | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTournamentDetails(Number(params.id))
            setTournament(data)
            setIsLoading(false)
        }
        fetchData()
    }, [params.id])

    if (isLoading) return <div className="text-center py-8">Loading...</div>
    if (!tournament) return <div className="text-center py-8">Tournament not found</div>

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-900 to-blue-800 rounded-xl p-6 mb-8 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {tournament.image && (
                        <div className="w-full md:w-1/3">
                            <img
                                src={tournament.image}
                                alt={tournament.name}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    )}
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-2">{tournament.name}</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                                {tournament.game}
                            </span>
                            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                                {tournament.platform}
                            </span>
                            <span className="bg-gray-600 px-3 py-1 rounded-full text-sm">
                                {tournament.status === 'upcoming' ? 'Coming Soon' :
                                    tournament.status === 'ongoing' ? 'Live Now' : 'Completed'}
                            </span>
                        </div>
                        <p className="text-lg mb-4">{tournament.description}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <p className="text-sm text-purple-200">Total Hadiah</p>
                                <p className="text-xl font-bold">{tournament.prize}</p>
                            </div>
                            <div>
                                <p className="text-sm text-purple-200">Tanggal</p>
                                <p className="text-xl font-bold">
                                    {new Date(tournament.date).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-purple-200">Lokasi</p>
                                <p className="text-xl font-bold">{tournament.location || 'Online'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-purple-200">Biaya Pendaftaran</p>
                                <p className="text-xl font-bold">
                                    {tournament.entryFee ? `Rp ${tournament.entryFee.toLocaleString('id-ID')}` : 'Free'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* About Tournament */}
                    <div className="bg-gray-800 rounded-xl shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4 text-white">Tentang Turnamen</h2>
                        <div className="prose max-w-none">
                            <p>{tournament.description}</p>

                            <h3 className="text-xl font-semibold mt-6 mb-3">Format Turnamen</h3>
                            <p>{tournament.format}</p>

                            <h3 className="text-xl font-semibold mt-6 mb-6">Peraturan</h3>
                            {tournament.rules ? (
                                <Link href={tournament.rules} className="text-white border border-purple-600 px-3 py-3 rounded-full hover:underline">
                                    Download Peraturan Lengkap
                                </Link>
                            ) : (
                                <p>Peraturan akan diumumkan segera</p>
                            )}
                        </div>
                    </div>

                    {/* Schedule */}
                    {tournament.schedule && tournament.schedule.length > 0 && (
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Jadwal Turnamen</h2>
                            <div className="space-y-4">
                                {tournament.schedule.map((day: { date: string; stage: string; matches: string[] }, index: number) => (
                                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                                        <h3 className="text-lg font-semibold text-gray-700">
                                            {new Date(day.date).toLocaleDateString('id-ID', {
                                                weekday: 'long',
                                                day: 'numeric',
                                                month: 'long'
                                            })}
                                        </h3>
                                        <p className="text-gray-600 mb-2">{day.stage}</p>
                                        <ul className="space-y-2">
                                            {day.matches.map((match: string, i: number) => (
                                                <li key={i} className="flex items-center">
                                                    <span className="w-24 text-gray-500">{match}</span>
                                                    <span className="text-gray-800">Babak {day.stage}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Organizer */}
                    {tournament.organizer && (
                        <div className="bg-gray-800 rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4 text-white">Penyelenggara</h2>
                            <div className="flex items-center gap-4">
                                {tournament.organizer.logo && (
                                    <img
                                        src={tournament.organizer.logo}
                                        alt={tournament.organizer.name}
                                        className="w-16 h-16 rounded-full object-contain"
                                    />
                                )}
                                <div>
                                    <h3 className="text-lg font-semibold">{tournament.organizer.name}</h3>
                                    <p className="text-gray-400">Organizer</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Prize Distribution */}
                    {tournament.prizeDistribution && tournament.prizeDistribution.length > 0 && (
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Hadiah</h2>
                            <div className="space-y-3">
                                {tournament.prizeDistribution.map((prize: { position: number; prize: string }, index: number) => (
                                    <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                                        <div className="flex items-center">
                                            <span className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-800 rounded-full mr-3">
                                                {prize.position}
                                            </span>
                                            <span className="font-medium text-gray-700">
                                                {prize.position === 1 ? 'Juara 1' :
                                                    prize.position === 2 ? 'Juara 2' :
                                                        prize.position === 3 ? 'Juara 3' :
                                                            `Posisi ${prize.position}`}
                                            </span>
                                        </div>
                                        <span className="font-bold text-gray-800">{prize.prize}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Registration Info */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Pendaftaran</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-600">Tim Terdaftar</p>
                                <p className="text-lg text-gray-800 font-bold">
                                    {tournament.teams}{tournament.maxTeams ? `/${tournament.maxTeams}` : ''}
                                </p>
                            </div>

                            {tournament.registrationDeadline && (
                                <div>
                                    <p className="text-gray-600">Batas Pendaftaran</p>
                                    <p className="text-lg text-gray-800 font-bold">
                                        {new Date(tournament.registrationDeadline).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            )}

                            {tournament.status === 'upcoming' && (
                                <Link
                                    href={`/forms/team-registration?tournamentId=${tournament.id}`}
                                    className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 px-4 rounded-lg font-medium transition"
                                >
                                    Daftarkan Tim
                                </Link>
                            )}

                            {tournament.status === 'ongoing' && tournament.streamLink && (
                                <Link
                                    href={tournament.streamLink}
                                    target="_blank"
                                    className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg font-medium transition"
                                >
                                    Tonton Live
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
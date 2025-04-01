"use client";
import { useState } from 'react';

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Bagaimana cara mendaftar turnamen?",
            answer: "Anda bisa mendaftar dengan mengklik tombol 'Register Now' pada kartu turnamen yang tersedia. Pastikan Anda sudah membuat tim terlebih dahulu dan memiliki data semua anggota tim."
        },
        {
            question: "Apa persyaratan untuk mengikuti turnamen?",
            answer: "Persyaratan bervariasi tergantung turnamen, tetapi umumnya meliputi: memiliki akun game yang valid, memenuhi persyaratan usia, membayar biaya pendaftaran (jika ada), dan menyetujui peraturan turnamen."
        },
        {
            question: "Berapa biaya pendaftaran turnamen?",
            answer: "Beberapa turnamen gratis sementara yang lain memerlukan biaya pendaftaran. Anda dapat melihat informasi biaya di halaman detail turnamen."
        },
        {
            question: "Bagaimana sistem hadiah bekerja?",
            answer: "Hadiah akan dibagikan setelah turnamen selesai dan hasil final dikonfirmasi. Pembayaran biasanya dilakukan melalui transfer bank atau dompet digital dalam waktu 7-14 hari kerja."
        },
        {
            question: "Apa yang terjadi jika tim saya tidak bisa hadir?",
            answer: "Anda harus memberi tahu panitia setidaknya 24 jam sebelum turnamen dimulai. Bergantung pada kebijakan turnamen, Anda mungkin mendapatkan refund parsial atau kehilangan biaya pendaftaran."
        },
        {
            question: "Bagaimana cara membuat tim?",
            answer: "Anda bisa membuat tim dari halaman profil Anda. Klik 'Buat Tim Baru', isi informasi tim, dan undang anggota melalui email atau ID game mereka."
        },
        {
            question: "Apakah ada batasan jumlah anggota tim?",
            answer: "Ya, setiap turnamen memiliki batasan jumlah anggota. Biasanya antara 5-7 pemain termasuk cadangan. Lihat halaman detail turnamen untuk informasi spesifik."
        },
        {
            question: "Bagaimana jika terjadi masalah teknis selama turnamen?",
            answer: "Segera hubungi panitia melalui fitur live support kami. Sediakan bukti screenshot atau rekaman video untuk membantu penyelesaian masalah."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">FAQ</h1>
                <p className="text-xl text-gray-400">
                    Pertanyaan yang sering diajukan tentang turnamen esports kami
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                        <button
                            className={`w-full flex justify-between items-center p-6 text-left bg-gray-800 hover:bg-gray-700 transition ${activeIndex === index ? 'bg-gray-700' : ''
                                }`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2 className="text-lg font-medium text-white">{faq.question}</h2>
                            <svg
                                className={`w-6 h-6 text-purple-400 transform transition ${activeIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div
                            className={`bg-gray-800 px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 py-6' : 'max-h-0 py-0'
                                }`}
                        >
                            <p className="text-gray-300">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Masih ada pertanyaan?</h2>
                <p className="text-gray-400 mb-6">
                    Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim dukungan kami.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition">
                    Hubungi Support
                </button>
            </div>
        </div>
    );
}
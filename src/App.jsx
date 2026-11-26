import { useState, useEffect } from "react";
import "./App.css";

const DATA_AWAL = [
  { id: 1, nim: "2301001", nama: "Andi Saputra", noHp: "081234567801", email: "andi@mail.com", alamat: "Surabaya", prodi: "Informatika", tahun: 2023 },
  { id: 2, nim: "2301002", nama: "Budi Santoso", noHp: "081234567802", email: "budi@mail.com", alamat: "Malang", prodi: "Sistem Informasi", tahun: 2023 },
  { id: 3, nim: "2301003", nama: "Citra Amelia", noHp: "081234567803", email: "citra@mail.com", alamat: "Lumajang", prodi: "Informatika", tahun: 2023 },
  { id: 4, nim: "2401001", nama: "Dinda Putri", noHp: "081234567804", email: "dinda@mail.com", alamat: "Jember", prodi: "Manajemen", tahun: 2024 },
  { id: 5, nim: "2401002", nama: "Eko Pratama", noHp: "081234567805", email: "eko@mail.com", alamat: "Kediri", prodi: "Informatika", tahun: 2024 },
];

function LiveClock() {
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setWaktu(new Date()), 1000);
    return () => clearInterval(interval); // cleanup saat unmount
  }, []);

  const tanggal = waktu.toLocaleDateString("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
  const jam = waktu.toLocaleTimeString("id-ID", { hour12: false }).replace(/\./g, ":");

  return (
    <div className="clock" aria-live="off">
      <span className="clock-time">{jam}</span>
      <span className="clock-date">{tanggal}</span>
    </div>
  );
}

export default function App() {
  const [mahasiswa] = useState(DATA_AWAL);

  return (
    <main className="page">
      <header className="top">
        <div>
          <h1>Student Management</h1>
          <h2>Daftar Data Mahasiswa</h2>
          <p className="count">
            Total mahasiswa: <strong>{mahasiswa.length}</strong>
          </p>
        </div>
        <LiveClock />
      </header>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. HP</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((m) => (
              <tr key={m.id}>
                <td>{m.nim}</td>
                <td className="name">{m.nama}</td>
                <td>{m.noHp}</td>
                <td><a href={`mailto:${m.email}`}>{m.email}</a></td>
                <td>{m.alamat}</td>
                <td>{m.prodi}</td>
                <td>{m.tahun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>LMS Dashboard</h1>
      </main>
    </div>
  );
}
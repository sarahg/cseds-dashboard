import Head from "next/head";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="container py-4">
      <Head>
        <title>CSE Dedicated Support</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="container mx-auto px-4">
        <main>
          <h1 className="title py-4 text-2xl">CSE Dedicated Support Dashboard</h1>
          <p>Tickets shown here are grouped by Lead and are not necessarily assigned to this person.</p>
        </main>

        <div className="py-5">
          <Team />
        </div>

        <footer>
          <a href="https://github.com/sarahg/cseds-dashboard">View source on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

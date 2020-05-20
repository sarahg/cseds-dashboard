import Head from "next/head";
import TeamReport from "../components/TeamReport";

export default function Home() {
  return (
    <div className="container">
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
          <h1 className="title py-4">CSE Dedicated Support Dashboard</h1>
        </main>

        <div className="py-5">
          <TeamReport />
        </div>

        <footer>
          <a href="#">View source on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Ofsand's portfolio !</title>
      </Head>

      <Header/>
      
      {/* Hero */}
      <section id="hero">
        <Hero/>
      </section>
      
      {/* Experience */}
      
      {/* Projects */}

      {/* Contact me */}
    </div>
  );
}

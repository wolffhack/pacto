"use client";
import Head from "next/head";
import Heeader from "./Cabeza";
import Portada from "./Portada";
import Nosotros from "./Nosotros";
import Contratos from "./Contratos";
import Team from "./team";
import Contacto from "./Contacto";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Pacto DAO</title>
        <meta name="description" content="DAO Builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Pacto_Socios.svg" />
      </Head>

      <header>
        <Heeader />
      </header>
      <main>
        <Portada />
      </main>
      <section>
        <Nosotros />
      </section>
      <section>
        <Contratos />
      </section>
      <section>
        <Team />
      </section>
      <footer>
        <Contacto />
      </footer>
    </>
  );
}

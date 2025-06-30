import Head from "next/head";
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import styles from './styles/Home.module.scss';
import Me from "./components/Me/Me";
import Events from "./components/Events/Events";


export default function Home() {
  return (
    <>
      <Head>
        <title>Ravi Bhalala</title>
        <meta name="description" content="Ravi Bhalala" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.container} `}>
        <Me />
        <Contact />
        <About />
        <Experience />
        <Education />
        <Events />
      </main>
    </>
  );
}

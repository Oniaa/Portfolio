import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Hi there! My name is Onyinyechi Ogbuebele and I am a Full Stack
              Developer who is still learning and constantly improving my
              skills. I have always been passionate about technology and how it
              can be used to solve problems and make our lives easier. My
              journey in development just started but I have been on a mission
              to learn as much as I can about web development and software
              engineering. I am currently learning proficient Css, Html, React
              and JavaScript. While I may still have a lot to learn, I am
              excited about the possibilities and challenges that lie ahead and
              look forward to continuing to grow and develop my skills as a Full
              Stack Developer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

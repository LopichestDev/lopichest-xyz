import "./App.css";
import Home from "./components/hero/Home";
import NavBar from "./components/nav/Nav";
import FixedComponents from "./components/FixedComponents/fixed-components";
import Skills from "./components/skills/Skills";
import Works from "./components/works/works";
import Contact from "./components/contact/Contact";
import { Redirect } from "wouter";
import Section from "./components/Section/section";

function App() {
  return (
    <>
      <Redirect to="/" />
      <FixedComponents />
      <Section>
        <NavBar />
        <Home />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Works />
      </Section>
      <Section>
        <Contact />
      </Section>
    </>
  );
}

export default App;

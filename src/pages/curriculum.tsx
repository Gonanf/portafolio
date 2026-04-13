import "./curriculum.css";
import { useState, useRef, } from "react";
import ReactDOM from "https://jspm.dev/react-dom@17.0.2";
import selfie from "../assets/selfie.jpg";
import down_icon from "../assets/down.svg";
import github from "../assets/github-mark.svg";
import email from "../assets/email-1572-svgrepo-com.svg";
import phone from "../assets/phone-svgrepo-com.svg";
import download from "../assets/download-square-svgrepo-com.svg";
import { createRoot, Root } from "react-dom/client";
import { Margin, usePDF } from 'react-to-pdf';
import dotenv from "dotenv"
import process from "node:process";
function dropdown_menu() {
  const toggle = document.getElementById("menu-toggle");
  const contents = document.getElementById("contents");
  if (!contents) {
    return;
  }
  if (!contents.classList.contains("active")) {
    toggle?.classList.add("active_button");
    contents.classList.add("active");
  } else {
    toggle?.classList.remove("active_button");
    contents.classList.remove("active");
  }
}



function CurriculumPage() {
  console.log("AUTH",import.meta.env.AUTH)
  const [isLoading, setIsLoading] = useState(true);
  var [repositories, setRepos] = useState(Array<JSON>);
    if (isLoading){fetch("https://api.github.com/users/Gonanf/repos", {}).then((res) => {
      if (!res.ok){
          return localStorage['repos'] || [];
      }
      return res.json();
    }).then((rep) => {setRepos(rep); console.log(rep)}).finally(function(){
      console.log("REPO",repositories)
      localStorage['repos'] = repositories;
      setIsLoading(false);
    });}

    const { toPDF, targetRef } = usePDF({
      filename: 'use-pdf-example.pdf',
      page: { margin: Margin.MEDIUM, orientation: 'landscape' },
    });
  return (
    <div className="main" ref={targetRef}>
      <div id="menu" className="inverse">
        <div className="center-x flex-column">
          <img src={selfie} className="portada" alt="Selfie" />
          <h2 className="title">Gabriel Solotorevsky</h2>
          <p className="title">
            <i>Desarrollador de Software</i>
          </p>
        </div>
        <br />
        <div className="flex flex-between">
          <h5 id="contenido-text">Contacto</h5>
          <button id="menu-toggle" onClick={dropdown_menu}>
            <img src={down_icon} />
          </button>
        </div>
        <hr />
        <div id="contents" className="flex-column dropdown">
        <div className="link">
            <img src={github} alt="" />
            <a href="https://github.com/Gonanf" className="inverse">Gonanf</a>
          </div>
          <div className="link">
            <img src={email} alt="" />
            <a href="mailto:solotorevskygabrieltrabajo@gmail.com" className="inverse">solotorevskygabrieltrabajo@gmail.com</a>
          </div>
          <div className="link">
            <img src={email} alt="" />
            <a href="mailto:solotorevskygabriel@gmail.com" className="inverse">solotorevskygabriel@gmail.com</a>
          </div>
          <div className="link">
            <img src={phone} alt="" />
            <a href="tel:+5491134021451" className="inverse">+5491134021451</a>
          </div>
          <div className="link">
            <img src={download} onClick={toPDF} alt="" />
          </div>
        </div>
      </div>

      <div id="page">
        <div id="perfil">
          <h1>Perfil</h1>
          <hr />
          <p>
            Estudiante de Desarrollo de Software, me especializo en la
            programacion de bajo nivel y desarrollos de APIs.
            <br />
            Me considero una persona adaptable a cualquier tecnologia con un
            enfoque en la investigacion y optimizacion mis metodos de
            programacion.
            <br />
            Me interesa profundizar en el desarrollo de sistemas de bajo nivel,
            sistemas operativos y graficos por computadoras.
            <br />
            Siempre busco contribuir a la comunidad de software libre con mis
            proyectos personales.
          </p>
        </div>
        <br />
        <div id="educacion">
          <h1>Educacion</h1>
          <hr />
          <ul>
            <li>
              Nuevo Colegio Glew <br />
              2012-2018
            </li>
            <li>
              E.E.S.T N°2 "Ceferino Namuncura" <br />
              2018-2025 <br />
              Programacion
            </li>
            <li>
              ...
            </li>
          </ul>
        </div>
        <br />
        <div id="habilidades">
          <h1>Habilidades</h1>
          <hr />
          <div id="habilidades-box">
            <h3>Lenguajes</h3>

            <button>C</button>
            <button>C++</button>
            <button>Rust</button>
            <button>Python</button>
            <button>Javascript</button>
            <button>Typescript</button>

            <h3>Frameworks</h3>

            <button>Django</button>

            <h3>Conceptos</h3>

            <button>Programacion Embedida</button>
            <button>Programacion Funcional</button>
            <button>Programacion Orientado a Objetos</button>

            <h3>Herramientas</h3>

            <button>Linux</button>
            <button>Git</button>
            <button>Github</button>
            <button>CLI</button>

            <h3>PseudoLenguajes</h3>

            <button>HTML</button>
            <button>CSS</button>
          </div>
        </div>

        <div id="escolares">
          <h1>Actividades escolares (Extra curriculares)</h1>
          <hr />
          <ul>
            <li>
              <p>Dar clases particulares para alumnos de la tecnicatura de programacion (7timo año)</p>
            </li>
            <li>
              <p>Presentacion de Gabinator en la UNAB (Universidad nacional de guillermo brown)</p>
            </li>
            <li>
              <p>Organizador del equipo de desarrollo de software del club de robotica de la Escuela Tecnica N°2</p>
            </li>
          </ul>
        </div>
        <br />
        <div id="lenguaje">
          <h1>Nivel de ingles</h1>
          <hr />
          <p>Medio</p>
        </div>
        <br />
        <h1 id="proy">Proyectos</h1>
          <hr />
        <br />
        <div id="proyectos">
          {isLoading ? (<p>Cargando repositorios...</p>) : (
            repositories.map((rep,index) => (
              <a key={index} className="repo adaptable inverse all" href={rep.clone_url} target="_blank">
                <p>{rep.name}</p>
                <p>{rep.description}</p>
                <p>{rep.created_at} - {rep.updated_at}</p>
                <p>{rep.language}</p>
              </a>
            ))
          )}
        </div>
        <br />
      </div>
    </div>
  );
}

export default CurriculumPage;

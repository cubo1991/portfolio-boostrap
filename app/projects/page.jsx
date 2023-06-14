import React from 'react';
import s from './projects.module.css';
import { IoLogoYoutube, IoLogoGithub } from 'react-icons/io5';
import weather from '../../Media/Videos/Weather.mp4';
import changapp from '../../Media/Videos/Changapp.mp4';
import dogs from '../../Media/Videos/Dogs.mp4';

const Projects = () => {
  return (
    <div className={`col-9 ${s.colD2}`} style={{ padding: '2rem' }}>
      <div className={`row mt-1 p-1`}>
        <h3 className={s.titulo}>Mis Proyectos</h3>

        <div className={`album py-5 bg-light`}>
          <div className={`container-fluid`}>
            <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3`}>
              <div className={`col`}>
                <div className={`card shadow-sm`}>
                  <video src={weather} height="151rem" autoPlay="true" muted="true" loop="true">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </video>
                  <div className={`card-body`}>
                    <h5 className={`card-title ${s.title}`}>Wheather App</h5>
                    <p className={`card-text ${s.paragraph}`}>Pequeña app que consume una API de clima y nos da la información de la ciudad que buscamos. Realizada con React y Redux. Solo Front.</p>
                    <div className={`d-flex justify-content-between align-items-center`}>
                      <a href='https://youtu.be/UpU9lYdXyYM'>
                        <IoLogoYoutube className={`${s.flechaBtn}`} />
                      </a>
                      <a href='https://github.com/cubo1991/WeatherApp'>
                        <IoLogoGithub className={`${s.flechaBtn}`} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col`}>
                <div className={`card shadow-sm`}>
                  <video src={changapp} height="151rem" autoPlay="true" muted="true" loop="true">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </video>
                  <div className={`card-body`}>
                    <h5 className={`card-title ${s.title}`}>Changapp</h5>
                    <p className={`card-text ${s.paragraph}`}>Proyecto grupal que realicé junto a otros 7 compañeros. Me encargué principalmente del Front. Hecho con React, Redux, Bootstrap y más.</p>
                    <div className={`d-flex justify-content-between align-items-center`}>
                      <a href='https://www.youtube.com/watch?v=5FqolQbA9dw'>
                        <IoLogoYoutube className={`${s.flechaBtn}`} />
                      </a>
                      <a href='https://github.com/cubo1991/Changapp'>
                        <IoLogoGithub className={`${s.flechaBtn}`} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col`}>
                <div className={`card shadow-sm`}>
                  <video src={dogs} height="151rem" autoPlay="true" muted="true" loop="true">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </video>
                  <div className={`card-body`}>
                    <h5 className={`card-title ${s.title}`}>Dogs App</h5>
                    <p className={`card-text ${s.paragraph}`}>App que consume datos de una API y nos permite filtrar, ordenar y crear razas de perros. Me encargué por mí mismo del Front y del Back.</p>
                    <div className={`d-flex justify-content-between align-items-center`}>
                      <a href='https://youtu.be/1_5Zig2uc1Q'>
                        <IoLogoYoutube className={`${s.flechaBtn}`} />
                      </a>
                      <a href='https://github.com/cubo1991/dogs'>
                        <IoLogoGithub className={`${s.flechaBtn}`} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nueva card: CosmicApp */}
              <div className={`col`}>
                <div className={`card shadow-sm`}>
                  {/* <img src={cosmicappImage} alt="CosmicApp Thumbnail" height="151rem" /> */}
                  <div className={`card-body`}>
                    <h5 className={`card-title ${s.title}`}>CosmicApp</h5>
                    <p className={`card-text ${s.paragraph}`}>Aplicación web para liga local del juego Cosmic Encounters. El back esta hecho en MongoDB y es plenamente funcional para su objetivo.</p>
                    <div className={`d-flex justify-content-between align-items-center`}>
                      <a href='https://github.com/cubo1991/cosmicapp'>
                        <IoLogoGithub className={`${s.flechaBtn}`} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col`}>
                <div className={`card shadow-sm`}>
                  {/* <img src={alienListImage} alt="AlienList Thumbnail" height="151rem" /> */}
                  <div className={`card-body`}>
                    <h5 className={`card-title ${s.title}`}>AlienList</h5>
                    <p className={`card-text ${s.paragraph}`}>Aplicacion Mobile para fanáticos de Cosmic Encounters que no lean ingles. Esta hecha en React Native con Expo.</p>
                    <div className={`d-flex justify-content-between align-items-center`}>
                      <a href='https://github.com/cubo1991/alienList'>
                        <IoLogoGithub className={`${s.flechaBtn}`} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col`}>
                <div className={`card shadow-sm`}>
                  {/* <img src={starTrekSelectorImage} alt="Star Trek Selector Thumbnail" height="151rem" /> */}
                  <div className={`card-body`}>
                    <h5 className={`card-title ${s.title}`}>Star Trek Selector</h5>
                    <p className={`card-text ${s.paragraph}`}>Aplicacion Mobile para fanáticos de Star Trek. Esta hecha en React Native con Expo. Su objetivo es dar un capitulod e forma aleatoria entre todas las series.</p>
                    <div className={`d-flex justify-content-between align-items-center`}>
                      <a href='https://github.com/cubo1991/starTrekSelector'>
                        <IoLogoGithub className={`${s.flechaBtn}`} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

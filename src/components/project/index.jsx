// import React from 'react'
import style from './style.module.css'
function Project() {
  return (
    <>
      <section className={style.service} id='project'>
        <div className={style.row}>
          <h2 className={style.section_heading}>Our Portfolio🧩
          </h2>

        </div>
        <div className={style.row}>
          <div className={style.column}>
            <div className={style.card}>
              <div className={style.icon_wrapper}>
                <img src='/images/favicon.png' alt='' className={style.images} />
              </div>
              <h3>Portfolio Website 🐱‍💻</h3>
              <p>
                This is my First project which is a Portfolio Website. This website includes multiple functionalities
              </p>
              <div className={style.language}>
                  <h1 className={style.language_1}>ReactJs</h1>
                  <h1 className={style.language_1}>CSS</h1>
              </div>
              <div className={style.button_cont}>
                <button  className={style.btn} href="#">Live demo</button>
                <button className={style.btn}>Git hub</button>
              </div>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.card}>
              <div className={style.icon_wrapper}>
                <img src='/images/favicon.png' alt='' className={style.images} />
              </div>
              <h3>Fiverr Clone  👀
              </h3>
              <p>
                This is my second project which is a Fiverr Clone. This website includes multiple functionalities

              </p>
              <div className={style.language}>
                  <h1 className={style.language_1}>ReactJs</h1>
                  <h1 className={style.language_1}>CSS</h1>
              </div>
              <div className={style.button_cont}>
                <button className={style.btn}>Live demo</button>
                <button className={style.btn}>Git hub</button>
              </div>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.card}>
              <div className={style.icon_wrapper}>
                <img src='/images/favicon.png' alt='' className={style.images} />
              </div>
              <h3>Real time Crypto Prices 💰

              </h3>
              <p>
This project is one of my first project, Crypto Price App. Here you can see the updated prices of digital currencies. 💸

              </p>
              <div className={style.language}>
                  <h1 className={style.language_1}>ReactJs</h1>
                  <h1 className={style.language_1}>CSS</h1>
              </div>
              <div className={style.button_cont}>
                <button className={style.btn}>Live demo</button>
                <button className={style.btn}>Git hub</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project

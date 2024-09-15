// import React from 'react'
import style from './style.module.css'
function Service() {
  return (
  <>
   <section className={style.service} id='service'>
      <div className={style.row}>
        <h2 className={style.section_heading}>Our Services📍</h2>
      </div>
      <div className={style.row}>
        <div className={style.column}>
          <div className={style.card}>
            <div className={style.icon_wrapper}>
            <img src='/images/html-5.png' alt='' className={style.images} />
            </div>
            <h3>Html</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={style.column}>
        <div className={style.card}>
        <div className={style.icon_wrapper}>
            <img src='/images/css-3.png' alt='' className={style.images} />
            </div>
            <h3>Css</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={style.column}>
        <div className={style.card}>
        <div className={style.icon_wrapper}>
            <img src='/images/js.png' alt='' className={style.images} />
            </div>
            <h3>Javascript</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={style.column}>
        <div className={style.card}>
        <div className={style.icon_wrapper}>
            <img src='/images/atom.png' alt='' className={style.images} />
            </div>
            <h3>React.js</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={style.column}>
        <div className={style.card}>
        <div className={style.icon_wrapper}>
            <img src='/images/nodejs.png' alt='' className={style.images} />
            </div>
            <h3>Node.js</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.card}>
            <div className={style.icon_wrapper}>
              <img src='/images/wordpress.png' alt='' className={style.images} />
            </div>
            <h3>Wordpress(CMS)</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Service

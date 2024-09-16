import style from "./style.module.css";

const Section = () => {
    return (
      <main className={style.container} id="home">
        <div className={style.first_content}>
          <h1>YOUR Business DESERVE <br/>THE BEST</h1>
          <p>
            YOUR Business DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SERVICES.YOUR Business DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SERVICES.
          </p>
  
          <div className={style.section_btn}>
            <button className={style.primary_btn} href='#contact'>Contact Me</button>
          </div>
  
          <div className={style.reading}>
            <p>Also Available On</p>
  
            <div className={style.brand_icons}>
              <img className={style.brand_icon} src="/images/github.png" alt="github-logo" />
              <img  className={style.brand_icon} src="/images/email.png" alt="email-logo" />
              <img className={style.brand_icon} src="/images/linkedin.png" alt="linkedin-logo" />
            </div>
          </div>
        </div>
        <div className={style.Section_image}>
          <img src="/images/profpic.png" alt="hero-image" className={style.image}/>
        </div>
      </main>

      
    );
  };
  
  export default Section;
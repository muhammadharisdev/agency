import style from './style.module.css'
function About() {
    return (
        <>
            <div className={style.container} id='about'>
                <div className={style.content}>
                    <h1 className={style.heading}>Company Logo Designs for Your Brand</h1>
                    <h2 className={style.second_heading}>Reach your target audience with creative logo design.</h2>
                    <p className={style.text}>
                        A logo is the need of every business or brand. Without it people won’t be able to recall the brand or company. Potential customers will not turn into actual customers if your business does not have a strong brand identity, i.e. a memorable logo.
                    </p>
                </div>
                <div className={style.image}>
                    <img src="/images/infosection.jpg" alt="Various branded items including a t-shirt, bag, and business cards with the Birdland logo" className="w-full h-auto object-cover" />
                </div>
            </div>
        </>
    )
}

export default About
// text-xl font-medium text-gray-700 mb-4
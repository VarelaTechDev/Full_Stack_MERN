import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
    return  (
        <main>
            <nav>
                <img src={logo} alt="jobify" className='logo'/>
            </nav>

            <div className="container page">
                <div className="info">
                    <h1>job <span>tracking</span> app</h1>
                    <p>
                    I'm baby tofu four dollar toast 8-bit, keffiyeh unicorn kale chips single-origin coffee 
                    intelligentsia neutra yr DIY helvetica ugh food truck. Woke trust fund flannel next level 
                    mlkshk kitsch paleo. Tousled artisan subway tile bitters. Sustainable hella palo santo, viral 
                    shabby chic craft beer mumblecore fashion axe hashtag cornhole activated charcoal butcher vice 
                    hell of. 3 wolf moon shoreditch vinyl four dollar toast helvetica la croix. Slow-carb pitchfork 
                    messenger bag deep v skateboard cray umami.
                    </p>
                    <button className='btn btn-hero'>
                        Login/Register
                    </button>
                </div>
                <img src={main} alt="job hunt" className='img main-img'/>
            </div>
        </main>
    )
};

export default Landing;
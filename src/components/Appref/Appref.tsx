// import styleSheet 
import './style-appref.scss'

// import icons 
import googleicon from './IconsApp/pngwing.com.png' 
import appleicon from './IconsApp/pngwing.com (1).png'

export default function Appref() {
  return (
    <div className='app-ref'>
      <div className='text'>
        <h1 className='title-text'>
          Discover the new <span>ORDERY</span> app
        </h1>
        <p>Get what you need,when you need it.</p>
      </div>
      <div className='icons-app' >
        <div className='playstore'>
          <div className='icon-app'>
            <img src={googleicon} alt="googleicon" />
          </div>
          <div className='disc'>
            <p>GET IT ON</p>
            <h1>Google Play</h1>
          </div>
        </div>
        <div className='appstore'>
          <div className='icon-app'>
            <img src={appleicon} alt="appleicon"/>
          </div>
          <div className='disc'>
            <p>Available on the</p>
            <h1>App Store</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

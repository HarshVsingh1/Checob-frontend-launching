import BannerOne from '../assets/bannerimageone.jpg'
import Bannertwo  from '../assets/bannertwo.png'
import './banner.css'
export default function Banner() {
    return (
        <div className='bannerContainer' >
                <div className='bcImageContainer' >
                      <img src={Bannertwo} alt='bannerimage' />
                </div>
                <div className='bcImageContainer' >
                    <img src={BannerOne} alt='bannerimage' />
                </div>
        </div>
    )
}
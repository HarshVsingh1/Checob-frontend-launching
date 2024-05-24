import logo from '../assets/primarylogo.png'
import './footer.css'
export default function Footer() {
    return (
        <div>
               <div className='footerContainer' >
                               <div className='footerContainerFirst' >
                                               <div>
                                                 <img  style={{height : "30px"}} src={logo} alt='logo' />
                                               </div>
                                               <div className='footerContainerFirstText' >
                                                 @2024 CHECOB,ALL RIGHT RESERVED
                                               </div>
                               </div>
                               <div className='footerContainerSecond' >
                                              <div className='footerTextContainer' >
                                                           <div className='footerContainerSecondText' >
                                                            HOME
                                                           </div>
                                                           <div className='footerContainerSecondText' >
                                                            MEMBERSHIP LOGIN
                                                           </div>
                                                           <div className='footerContainerSecondText' >
                                                            PLACE AN EXCHANGE/RETURN REQUEST
                                                           </div>
                                                           <div className='footerContainerSecondText' >
                                                            EXCHANGE/RETURN POLICY
                                                           </div>
                                                           <div className='footerContainerSecondText' >
                                                            FAQ
                                                           </div>
                                                           <div className='footerContainerSecondText' >
                                                            TERMS
                                                           </div>
                                                           <div className='footerContainerSecondText' >
                                                            SHIPPING
                                                           </div>
                                              </div>
                                              <div className='footerTextContainer' >
                                                          <div className='footerContainerSecondText' >
                                                            COMPANY
                                                          </div>
                                                          <div className='footerContainerSecondText' >
                                                            STORY
                                                          </div>
                                                          <div className='footerContainerSecondText' >
                                                            OUR STORES
                                                          </div>
                                                          <div className='footerContainerSecondText' >
                                                            CAREERS
                                                          </div>
                                                          <div className='footerContainerSecondText' >CONTACT US</div>
                                                          <div className='footerContainerSecondText' >
                                                            COLLABORATIONS
                                                          </div>
                                              </div>
                               </div>
               </div>
               <div className='footerStrip' > 
                                  <div className='connectLinkone' >
                                  <div className='footerStripText' >
                                    CONNECT
                                 </div>
                                  </div>
                                
                                 <div className='connectLink' >
                                       <div className='footerStripText' >
                                        INSTAGRAM
                                       </div>
                                       <div className='footerStripText' >
                                        YOUTUBE
                                       </div>
                                       <div className='footerStripText' >
                                        LINKEIN
                                       </div>

                                 </div>
               </div>
        </div>
    )
}
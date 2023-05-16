import React from 'react'

export default function Details() {
  return (
    <div className='container'>
        <h2 className='f-500 mt-10'>Bordeaux Getaway</h2>
        <div className='col-12 row d-align-center d-justify-space-between'>
            <div className='row d-align-center gap-2'>
                <div className='row d-align-center gap-1'>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99984 1.16675L7.1665 4.83341H10.8332L7.83317 7.16675L8.83317 10.8334L5.99984 8.50008L3.1665 10.8334L4.1665 7.16675L1.1665 4.83341H4.83317L5.99984 1.16675Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h6 className='f-500 text-light-grey'>5.0</h6>
                </div>
                <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1" cy="1" r="1" fill="#6B7280"/>
                </svg>
                <h6 className='f-500 text-underline'>7 reviews</h6>
                <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1" cy="1" r="1" fill="#6B7280"/>
                </svg>
                <div className='row d-align-center gap-1'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.50016 5.83341L12.1668 3.16675H3.8335L6.50016 5.83341" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.5 9.33325C11.5 11.2662 9.933 12.8333 8 12.8333C6.067 12.8333 4.5 11.2662 4.5 9.33325C4.5 7.40026 6.067 5.83325 8 5.83325C9.933 5.83325 11.5 7.40026 11.5 9.33325Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h6 className='f-500 text-light-grey'>5.0</h6>
                </div>            
                <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1" cy="1" r="1" fill="#6B7280"/>
                </svg>
                <h6 className='f-500 text-light-grey text-underline'>Bordeaux, France</h6>
            </div>
            <div className='row d-align-center gap-2'>
                <div className='row d-align-center gap-1'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.1665 3.16675H4.49984C3.76346 3.16675 3.1665 3.7637 3.1665 4.50008V11.5001C3.1665 12.2365 3.76346 12.8334 4.49984 12.8334H11.4998C12.2362 12.8334 12.8332 12.2365 12.8332 11.5001V9.83341" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.8335 6.16675V3.16675H9.8335" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.6668 3.33325L7.8335 8.16659" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h6 className='f-500 '>Share</h6>
                </div>
                <div className='row d-align-center gap-1 pl-2'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.99653 4.82206C7.03017 3.73992 5.41871 3.44883 4.20794 4.43974C2.99717 5.43065 2.8267 7.08741 3.77753 8.25937L7.99653 12.1666L12.2155 8.25937C13.1663 7.08741 13.0167 5.42023 11.7851 4.43974C10.5535 3.45925 8.96288 3.73992 7.99653 4.82206Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h6 className='f-500 '>Save</h6>
                </div>
            </div>
        </div>
        <div className='col-12 grid-2 gap-2 mt-10'>
            <div>
                <img src="img/d1.png" className='col-12' style={{borderRadius:"8px 0 0 8px"}}/>
            </div>
            <div>
                <div className='grid-2 gap-2'>
                    <img src="img/d2.png" className='col-12'/>
                    <img src="img/d3.png" className='col-12' style={{borderRadius:"0 8px 0 0"}}/>
                </div>
                <div className='grid-2 gap-2 mt-2'>
                    <img src="img/d4.png" className='col-12'/>
                    <img src="img/d5.png" className='col-12' style={{borderRadius:"0 0 8px 0 "}}/>
                </div>
            </div>
        </div>
        <div className='mt-10 row d-justify-space-between'>
            <div className='col-7'>
                <div className='row d-align-center d-justify-space-between pb-6 border-bottom'>
                    <div>
                        <h4 className='f-500'>Entire rental unit hosted by Ghazal</h4>
                        <div className='row d-align-center gap-2'>
                            <h6 className='f-400'>2 guests</h6>
                            <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1" cy="1" r="1" fill="#6B7280"/>
                            </svg>
                            <h6 className='f-400'>1 bedroom</h6>
                            <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1" cy="1" r="1" fill="#6B7280"/>
                            </svg>
                            <h6 className='f-400'>1 bed</h6>
                            <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1" cy="1" r="1" fill="#6B7280"/>
                            </svg>
                            <h6 className='f-400'>1 bath</h6>
                            
                        </div>
                    </div>
                    <img src="img/avatar.png"/>
                </div>
                <div className='row gap-5 mt-7'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00016 25.667H23.0002C24.4729 25.667 25.6668 24.4731 25.6668 23.0003V13.0003L16.0002 6.33362L6.3335 13.0003V23.0003C6.3335 24.4731 7.5274 25.667 9.00016 25.667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.9995 20.9991C12.9995 19.5263 4.1934 18.3324 15.6662 18.3324H16.3328C17.8056 18.3324 18.9995 19.5263 18.9995 20.9991V25.6657H12.9995V20.9991Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                        <h5 className='f-500'>Entire home</h5>
                        <h6 className='f-400 text-light-grey'>You&apos;ll have the apartment to yourself</h6>
                    </div>
                </div>
                <div className='row gap-5 mt-7'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0002 6.33337C20.0002 10.0153 18.0154 13.3334 14.3335 13.3334C18.0154 13.3334 20.0002 16.6515 20.0002 20.3334C20.0002 16.6515 21.9849 13.3334 25.6668 13.3334C21.9849 13.3334 20.0002 10.0153 20.0002 6.33337Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.6668 17C10.6668 19.2092 8.54263 21.3334 6.3335 21.3334C8.54263 21.3334 10.6668 23.4576 10.6668 25.6667C10.6668 23.4576 12.791 21.3334 15.0002 21.3334C12.791 21.3334 10.6668 19.2092 10.6668 17Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                        <h5 className='f-500'>Enhanced Clean</h5>
                        <h6 className='f-400 text-light-grey'>This Host committed to Airbnb&apos;s 5-step enhanced cleaning process.</h6>
                    </div>
                </div>
                <div className='row gap-5 mt-7'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3333 6.33337H11.6667C10.1939 6.33337 9 7.52728 9 9.00004V25.6667H23V9.00004C23 7.52728 21.8061 6.33337 20.3333 6.33337Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.3333 16C19.3333 16.3682 19.0349 16.6667 18.6667 16.6667C18.2985 16.6667 18 16.3682 18 16C18 15.6319 18.2985 15.3334 18.6667 15.3334C19.0349 15.3334 19.3333 15.6319 19.3333 16Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.3335 25.6666H25.6668" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                        <h5 className='f-500'>Self check-in</h5>
                        <h6 className='f-400 text-light-grey'>Check yourself in with the keypad.</h6>
                    </div>
                </div>
                <div className='row gap-5 mt-7 pb-6 border-bottom'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.3335 11.6667C6.3335 10.1939 7.5274 9 9.00016 9H23.0002C24.4729 9 25.6668 10.1939 25.6668 11.6667V23C25.6668 24.4728 24.4729 25.6667 23.0002 25.6667H9.00016C7.5274 25.6667 6.3335 24.4728 6.3335 23V11.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.6665 6.33337V11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.3335 6.33337V11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.3335 14.3334H21.6668" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                        <h5 className='f-500'>Free cancellation before Feb 14</h5>
                    </div>
                </div>
                <h6 className='f-400 pt-6 pb-6 border-bottom'>
                    Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.
                    Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.
                    ...
                </h6>
                <h3 className='mt-8 f-500'>Where you&apos;ll sleep</h3>
                <img src="img/d6.png" className='col-6 mt-5 rounded-8'/>
                <h5 className='f-500 mt-4'>Bedroom</h5>
                <h6 className='f-400 pb-6 border-bottom'>1 queen bed</h6>
                <h3 className='mt-8 f-500'>What this place offers</h3>
                <div className='row mt-9 pb-6 border-bottom'>
                    <div className='col-6 row d-align-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.3335 17.3333C6.3335 9.86665 25.6668 6.33331 25.6668 6.33331C25.6668 6.33331 24.3335 25.6666 16.0002 25.6666C10.6668 25.6666 6.3335 22.6666 6.3335 17.3333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.3335 25.6667C6.3335 25.6667 10.6668 18.6667 16.3335 15.6667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Garden view</h6>
                    </div>
                    <div className='col-6 row d-align-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.3335 8.99998C6.3335 7.52722 7.5274 6.33331 9.00016 6.33331H23.0002C24.4729 6.33331 25.6668 7.52722 25.6668 8.99998V21.6666C25.6668 23.1394 24.4729 24.3333 23.0002 24.3333H9.00016C7.5274 24.3333 6.3335 23.1394 6.3335 21.6666V8.99998Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 6.66669V24" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 24.6667V25.6667" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23 24.6667V25.6667" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.3335 10.3333L10.3335 12.3333" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.6668 10.3333L10.3335 17.6666" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Kitchen</h6>
                    </div>
                    <div className='col-6 row d-align-center mt-6'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6668 24C16.6668 24.3682 16.3684 24.6666 16.0002 24.6666C15.632 24.6666 15.3335 24.3682 15.3335 24C15.3335 23.6318 15.632 23.3333 16.0002 23.3333C16.3684 23.3333 16.6668 23.6318 16.6668 24Z" stroke="black"/>
                            <path d="M12.6665 19.4169C13.6019 18.7354 14.7539 18.3333 15.9998 18.3333C17.2458 18.3333 18.3978 18.7354 19.3332 19.4169" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.2837 14.9701C20.5024 13.7282 18.3364 13 16.0003 13C13.6641 13 11.4981 13.7282 9.7168 14.9701" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.6665 10.5943C9.31212 8.74892 12.5296 7.66669 15.9998 7.66669C19.4701 7.66669 22.6876 8.74892 25.3332 10.5943" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Wifi</h6>
                    </div>
                    <div className='col-6 row d-align-center mt-6'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.9724 9.02775L22.2313 8.91261C22.1945 9.14907 22.2728 9.38887 22.4421 9.55808C22.6113 9.72729 22.8511 9.8056 23.0875 9.76886L22.9724 9.02775ZM21.5905 12.8846L22.1505 12.3858C22.0132 12.2316 21.8185 12.1408 21.6121 12.1349C21.4058 12.1289 21.2061 12.2083 21.0601 12.3542L21.5905 12.8846ZM12.8847 21.5903L12.3544 21.0599C12.2084 21.2059 12.1291 21.4056 12.1351 21.6119C12.141 21.8183 12.2318 22.0131 12.3859 22.1504L12.8847 21.5903ZM9.02794 22.9722L9.76905 23.0873C9.80578 22.8509 9.72748 22.6111 9.55827 22.4419C9.38905 22.2727 9.14925 22.1944 8.91279 22.2311L9.02794 22.9722ZM10.4099 19.1154L9.84979 19.6142C9.98708 19.7684 10.1818 19.8591 10.3882 19.8651C10.5945 19.8711 10.7942 19.7917 10.9402 19.6457L10.4099 19.1154ZM19.1156 10.4097L19.6459 10.94C19.7919 10.794 19.8712 10.5944 19.8653 10.388C19.8593 10.1817 19.7685 9.9869 19.6144 9.84961L19.1156 10.4097ZM23.7135 9.1429C23.7377 8.98725 23.7502 8.82815 23.7502 8.66665H22.2502C22.2502 8.75077 22.2437 8.83288 22.2313 8.91261L23.7135 9.1429ZM23.3335 8.24998C23.172 8.24998 23.0129 8.26246 22.8572 8.28665L23.0875 9.76886C23.1673 9.75648 23.2494 9.74998 23.3335 9.74998V8.24998ZM26.4168 11.3333C26.4168 9.63044 25.0364 8.24998 23.3335 8.24998V9.74998C24.2079 9.74998 24.9168 10.4589 24.9168 11.3333H26.4168ZM23.3335 14.4166C25.0364 14.4166 26.4168 13.0362 26.4168 11.3333H24.9168C24.9168 12.2078 24.2079 12.9166 23.3335 12.9166V14.4166ZM21.0304 13.3834C21.594 14.0163 22.4175 14.4166 23.3335 14.4166V12.9166C22.8632 12.9166 22.4416 12.7126 22.1505 12.3858L21.0304 13.3834ZM13.4151 22.1206L22.1208 13.4149L21.0601 12.3542L12.3544 21.0599L13.4151 22.1206ZM14.4168 23.3333C14.4168 22.4173 14.0164 21.5938 13.3836 21.0302L12.3859 22.1504C12.7128 22.4414 12.9168 22.8631 12.9168 23.3333H14.4168ZM11.3335 26.4166C13.0364 26.4166 14.4168 25.0362 14.4168 23.3333H12.9168C12.9168 24.2078 12.2079 24.9166 11.3335 24.9166V26.4166ZM8.25016 23.3333C8.25016 25.0362 9.63062 26.4166 11.3335 26.4166V24.9166C10.459 24.9166 9.75016 24.2078 9.75016 23.3333H8.25016ZM8.28683 22.8571C8.26265 23.0127 8.25016 23.1718 8.25016 23.3333H9.75016C9.75016 23.2492 9.75666 23.1671 9.76905 23.0873L8.28683 22.8571ZM8.66683 23.75C8.82833 23.75 8.98743 23.7375 9.14308 23.7133L8.91279 22.2311C8.83306 22.2435 8.75096 22.25 8.66683 22.25V23.75ZM5.5835 20.6666C5.5835 22.3695 6.96395 23.75 8.66683 23.75V22.25C7.79238 22.25 7.0835 21.5411 7.0835 20.6666H5.5835ZM8.66683 17.5833C6.96395 17.5833 5.5835 18.9638 5.5835 20.6666H7.0835C7.0835 19.7922 7.79238 19.0833 8.66683 19.0833V17.5833ZM10.9699 18.6166C10.4063 17.9837 9.58284 17.5833 8.66683 17.5833V19.0833C9.13709 19.0833 9.55871 19.2874 9.84979 19.6142L10.9699 18.6166ZM18.5853 9.87936L9.87954 18.5851L10.9402 19.6457L19.6459 10.94L18.5853 9.87936ZM17.5835 8.66665C17.5835 9.58265 17.9839 10.4061 18.6168 10.9698L19.6144 9.84961C19.2876 9.55853 19.0835 9.1369 19.0835 8.66665H17.5835ZM20.6668 5.58331C18.964 5.58331 17.5835 6.96377 17.5835 8.66665H19.0835C19.0835 7.7922 19.7924 7.08331 20.6668 7.08331V5.58331ZM23.7502 8.66665C23.7502 6.96377 22.3697 5.58331 20.6668 5.58331V7.08331C21.5413 7.08331 22.2502 7.7922 22.2502 8.66665H23.7502Z" fill="#141414"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Pets allowed</h6>
                    </div>
                    <div className='col-6 row d-align-center mt-6'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.6668 16C25.6668 21.3387 21.3389 25.6666 16.0002 25.6666C10.6614 25.6666 6.3335 21.3387 6.3335 16C6.3335 10.6612 10.6614 6.33331 16.0002 6.33331C21.3389 6.33331 25.6668 10.6612 25.6668 16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Free washer - in building</h6>
                    </div>
                    <div className='col-6 row d-align-center mt-6'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3331 18.6666C24.3331 24 20.6665 25.6666 15.9998 25.6666C10.6665 25.6666 7.6665 21.8666 7.6665 18.6666C7.6665 15.4666 9.33317 12.5555 10.6665 11.6666C10.6665 15.4 14.222 17.7778 15.9998 17.6666C12.7998 12.8666 15.5553 7.55554 17.3331 6.33331C17.3331 12.3333 24.3331 13.3333 24.3331 18.6666Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Dryer</h6>
                    </div>
                    <div className='col-6 row d-align-center mt-6'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3335 9.66665H23.0002C24.4729 9.66665 25.6668 8.47274 25.6668 6.99998V6.33331" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3335 16.3333H10.3335" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.66683 9.66669H6.3335" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.6668 22.3333H6.3335" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.6667 16.3333H21" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.3335 22.3333H23.0002C24.4729 22.3333 25.6668 23.5272 25.6668 25V25.6666" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Central air conditioning</h6>
                    </div>
                    <div className='col-6 row d-align-center mt-6'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6668 13.3333L25.6668 10.3333V21.6667L20.6668 18.6667M9.00016 23H17.6668C19.1396 23 20.3335 21.8061 20.3335 20.3333V11.6667C20.3335 10.1939 19.1396 9 17.6668 9H9.00016C7.5274 9 6.3335 10.1939 6.3335 11.6667V20.3333C6.3335 21.8061 7.5274 23 9.00016 23Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Security cameras on property</h6>
                    </div>
                    <div className='col-6 row d-align-center mt-6'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6668 25.6667H10.3332C8.86041 25.6667 7.6665 24.4728 7.6665 23V13.3334L16 7.66669L24.3335 13.3334V23C24.3335 24.4728 23.1396 25.6667 21.6668 25.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 14.3333H24" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 7.66665V6.33331" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Refrigerator</h6>
                    </div>
                    <div className='col-6 row d-align-center mt-6'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="9.3335" cy="17.3333" rx="3" ry="3" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <ellipse cx="22.6665" cy="17.3333" rx="3" ry="3" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.3332 14.6667L19.6665 7.66669H25.3332" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.6668 17.3334H16.3335M16.3335 17.3334L11.6668 10.3333H14.0002H9.3335M16.3335 17.3334H19.3335" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.3335 24.3333H25.6668" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6 className='f-400 pl-4'>Bicycles</h6>
                    </div>
                </div>
                <div className='mt-8 row d-align-center gap-2'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0002 1.33334L13.3335 8.66667H20.6668L14.6668 13.3333L16.6668 20.6667L11.0002 16L5.3335 20.6667L7.3335 13.3333L1.3335 8.66667H8.66683L11.0002 1.33334Z" fill="#DE3151" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4 className='f-500'>5.0</h4>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="black"/>
                    </svg>
                    <h4 className='f-500'>7 reviews</h4>
                </div>
                
            </div>
            <div className='row col-12 d-justify-space-between'>
                <div className='col-5 mt-4 row d-align-center'>
                    <h6 className='f-400 col-6'>Cleanliness</h6>
                    <div className='row gap-3 d-align-center'>
                        <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_106_750)">
                            <rect width="120" height="4" rx="1" fill="#E5E7EB"/>
                            <rect width="183" height="4" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_106_750">
                            <rect width="120" height="4" rx="1" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span className='f-400 font-13'>5.0</span>
                    </div>
                </div>
                <div className='col-5 mt-4 row d-align-center'>
                    <h6 className='f-400 col-6 '>Accuracy</h6>
                    <div className='row gap-3 d-align-center'>
                        <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_106_750)">
                            <rect width="120" height="4" rx="1" fill="#E5E7EB"/>
                            <rect width="183" height="4" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_106_750">
                            <rect width="120" height="4" rx="1" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span className='f-400 font-13'>5.0</span>
                    </div>
                </div>
                <div className='col-5 mt-4 row d-align-center'>
                    <h6 className='f-400 col-6'>Communication</h6>
                    <div className='row gap-3 d-align-center'>
                    <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_106_750)">
                            <rect width="120" height="4" rx="1" fill="#E5E7EB"/>
                            <rect width="183" height="4" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_106_750">
                            <rect width="120" height="4" rx="1" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span className='f-400 font-13'>5.0</span>
                    </div>
                </div>
                <div className='col-5 mt-4 row d-align-center'>
                    <h6 className='f-400 col-6'>Location</h6>
                    <div className='row gap-3 d-align-center'>
                        <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="120" height="4" rx="1" fill="#E5E7EB"/>
                            <rect width="108" height="4" fill="black"/>
                        </svg>
                        <span className='f-400 font-13'>4.9</span>
                    </div>
                </div>
                <div className='col-5 mt-4 row d-align-center'>
                    <h6 className='f-400 col-6'>Check-in</h6>
                    <div className='row gap-3 d-align-center'>
                        <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_106_750)">
                            <rect width="120" height="4" rx="1" fill="#E5E7EB"/>
                            <rect width="183" height="4" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_106_750">
                            <rect width="120" height="4" rx="1" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span className='f-400 font-13'>5.0</span>
                    </div>
                </div>
                <div className='col-5 mt-4 row d-align-center'>
                    <h6 className='f-400 col-6'>Value</h6>
                    <div className='row gap-3 d-align-center'>
                        <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="120" height="4" rx="1" fill="#E5E7EB"/>
                            <rect width="88" height="4" fill="black"/>
                        </svg>
                        <span className='f-400 font-13'>4.7</span>
                    </div>
                </div>
                {/* Reviews */}
                <div className='col-12 grid-2 gap-80 pb-6 border-bottom'>
                    <div className='mt-10'>
                        <div className='row d-align-center gap-5'>
                            <img src="img/Small.png" style={{height:"56px",width:"56px",borderRadius:"100px"}}/>
                            <div>
                                <h5 className='f-500'>Shayna</h5>
                                <h6 className='f-400 text-light-grey'>April 2023</h6>
                            </div>
                        </div>
                        <h5 className='f-400 mt-6 col-10'>A centric place, near of a sub station and a supermarket with everything you need....</h5>
                    </div>
                    <div className='mt-10'>
                        <div className='row d-align-center gap-5'>
                            <img src="img/Small.png" style={{height:"56px",width:"56px",borderRadius:"100px"}}/>
                            <div>
                                <h5 className='f-500'>Linda</h5>
                                <h6 className='f-400 text-light-grey'> February 2023</h6>
                            </div>
                        </div>
                        <h5 className='f-400 mt-6 col-10'>Well designed and fun space, neighborhood has lots of energy and amenities.</h5>
                    </div>
                    <div className=''>
                        <div className='row d-align-center gap-5'>
                            <img src="img/Small.png" style={{height:"56px",width:"56px",borderRadius:"100px"}}/>
                            <div>
                                <h5 className='f-500'>Jennifer</h5>
                                <h6 className='f-400 text-light-grey'>January 2023</h6>
                            </div>
                        </div>
                        <h5 className='f-400 mt-6 col-10'>Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...</h5>
                    </div>
                    <div className=''>
                        <div className='row d-align-center gap-5'>
                            <img src="img/Small.png" style={{height:"56px",width:"56px",borderRadius:"100px"}}/>
                            <div>
                                <h5 className='f-500'>Luke</h5>
                                <h6 className='f-400 text-light-grey'>December 2022</h6>
                            </div>
                        </div>
                        <h5 className='f-400 mt-6 col-10'>This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.</h5>
                    </div>
                </div>
                <h3 className='f-500 mt-8'>Where you&apos;ll be</h3>
                <img src="img/Map.png" className='col-12 mt-6'/>
                <h4 className='f-500 mt-6'>Bordeaux, Nouvelle-Aquitaine, France</h4>
                <h5 className='f-400 mt-1 pb-6 border-bottom'>Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James and place Fernand Lafargue. Home to many historical monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte Cailhau, and cultural sites such as the Aquitaine Museum.</h5>
                <div className='mt-6 col-12'>
                    <div className='row d-align-center gap-5'>
                        <img src="img/avatar.png" style={{height:"56px",width:"56px",borderRadius:"100px"}}/>
                        <div>
                            <h3 className='f-500'>Hosted by Ghazal</h3>
                            <h6 className='f-400 text-light-grey'>Joined November 2022</h6>
                        </div>
                    </div>
                    <div className='row d-align-center gap-5 mt-5'>
                        <div className='row d-align-center gap-1'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99984 3.16663L9.1665 6.83329H12.8332L9.83317 9.16663L10.8332 12.8333L7.99984 10.5L5.1665 12.8333L6.1665 9.16663L3.1665 6.83329H6.83317L7.99984 3.16663Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h6 className='f-400'>12 Reviews</h6>
                        </div>
                        <div className='row d-align-center gap-1'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.0001 3.16663L3.16676 5.33329C3.16676 5.33329 2.66676 12.8333 8.0001 12.8333C13.3334 12.8333 12.8334 5.33329 12.8334 5.33329L8.0001 3.16663Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.5 8.5L7.33333 9.5L9.5 6.5" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h6 className='f-400'>Identity verified</h6>
                        </div>
                        <div className='row d-align-center gap-1'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.50016 5.83329L12.1668 3.16663H3.8335L6.50016 5.83329" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.5 9.33337C11.5 11.2664 9.933 12.8334 8 12.8334C6.067 12.8334 4.5 11.2664 4.5 9.33337C4.5 7.40038 6.067 5.83337 8 5.83337C9.933 5.83337 11.5 7.40038 11.5 9.33337Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h6 className='f-400'>Superhost</h6>
                        </div>
                    </div>
                    <h5 className='f-500 mt-5 col-4'>Ghazal is a Superhost</h5>
                    <h6 className='f-400 col-4 mt-3 text-light-grey'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</h6>
                    <h6 className='f-400 col-4 mt-3 text-light-grey'>Response rate: 100%</h6>
                    <h6 className='f-400 col-4 mt-3 text-light-grey'>Response time: within an hour</h6>
                    <button className='btn btn-small bg-white border-black mt-7'>Contact Host</button>
                    <div className='row col-4 gap-5 mt-7 pb-6 border-bottom'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 20.5C5 20.6326 4.94732 20.7598 4.85355 20.8536C4.75979 20.9473 4.63261 21 4.5 21H4V21.5C4 21.6326 3.94732 21.7598 3.85355 21.8536C3.75979 21.9473 3.63261 22 3.5 22C3.36739 22 3.24021 21.9473 3.14645 21.8536C3.05268 21.7598 3 21.6326 3 21.5V21H2.5C2.36739 21 2.24021 20.9473 2.14645 20.8536C2.05268 20.7598 2 20.6326 2 20.5C2 20.3674 2.05268 20.2402 2.14645 20.1464C2.24021 20.0527 2.36739 20 2.5 20H3V19.5C3 19.3674 3.05268 19.2402 3.14645 19.1464C3.24021 19.0527 3.36739 19 3.5 19C3.63261 19 3.75979 19.0527 3.85355 19.1464C3.94732 19.2402 4 19.3674 4 19.5V20H4.5C4.63261 20 4.75979 20.0527 4.85355 20.1464C4.94732 20.2402 5 20.3674 5 20.5ZM6.5 22C6.40111 22 6.30444 22.0293 6.22221 22.0843C6.13999 22.1392 6.0759 22.2173 6.03806 22.3087C6.00022 22.4 5.99031 22.5006 6.00961 22.5975C6.0289 22.6945 6.07652 22.7836 6.14645 22.8536C6.21637 22.9235 6.30546 22.9711 6.40245 22.9904C6.49945 23.0097 6.59998 22.9998 6.69134 22.9619C6.7827 22.9241 6.86079 22.86 6.91573 22.7778C6.97068 22.6956 7 22.5989 7 22.5C7 22.3674 6.94732 22.2402 6.85355 22.1464C6.75979 22.0527 6.63261 22 6.5 22ZM22.5 2H22V1.5C22 1.36739 21.9473 1.24021 21.8536 1.14645C21.7598 1.05268 21.6326 1 21.5 1C21.3674 1 21.2402 1.05268 21.1464 1.14645C21.0527 1.24021 21 1.36739 21 1.5V2H20.5C20.3674 2 20.2402 2.05268 20.1464 2.14645C20.0527 2.24021 20 2.36739 20 2.5C20 2.63261 20.0527 2.75979 20.1464 2.85355C20.2402 2.94732 20.3674 3 20.5 3H21V3.5C21 3.63261 21.0527 3.75979 21.1464 3.85355C21.2402 3.94732 21.3674 4 21.5 4C21.6326 4 21.7598 3.94732 21.8536 3.85355C21.9473 3.75979 22 3.63261 22 3.5V3H22.5C22.6326 3 22.7598 2.94732 22.8536 2.85355C22.9473 2.75979 23 2.63261 23 2.5C23 2.36739 22.9473 2.24021 22.8536 2.14645C22.7598 2.05268 22.6326 2 22.5 2ZM19.92 6.87C17.4088 6.46601 15.0643 5.35617 13.16 3.67C13.1083 3.6189 13.0426 3.58418 12.9713 3.57017C12.8999 3.55616 12.826 3.56348 12.7588 3.59122C12.6916 3.61895 12.6341 3.66588 12.5934 3.72613C12.5527 3.78639 12.5306 3.85729 12.53 3.93L12.61 20.15C12.6133 20.2131 12.6322 20.2744 12.6651 20.3283C12.698 20.3822 12.7438 20.4271 12.7984 20.4589C12.853 20.4906 12.9146 20.5083 12.9778 20.5102C13.0409 20.5122 13.1035 20.4983 13.16 20.47C15.6842 19.3961 17.7634 17.4886 19.0502 15.066C20.337 12.6435 20.7535 9.8527 20.23 7.16C20.2162 7.08386 20.1789 7.01396 20.1232 6.96015C20.0676 6.90633 19.9966 6.87131 19.92 6.86V6.87Z" fill="#FFB400"/>
                        <path d="M14.39 8.32C14.2615 7.9364 14.0156 7.60289 13.6873 7.3666C13.3589 7.13031 12.9645 7.00318 12.56 7.00318C12.1554 7.00318 11.7611 7.13031 11.4327 7.3666C11.1044 7.60289 10.8585 7.9364 10.73 8.32L8.30999 13.17C8.0324 13.6602 7.89408 14.2169 7.90999 14.78C7.94122 15.3613 8.18619 15.9105 8.59782 16.3222C9.00945 16.7338 9.5587 16.9788 10.14 17.01C11.0444 16.9449 11.8989 16.5706 12.56 15.95C13.2211 16.5706 14.0756 16.9449 14.98 17.01C15.5613 16.9788 16.1105 16.7338 16.5222 16.3222C16.9338 15.9105 17.1788 15.3613 17.21 14.78C17.2259 14.2169 17.0876 13.6602 16.81 13.17L14.39 8.32ZM11.67 12.7C11.67 12.65 11.68 11.47 12.56 11.47C13.44 11.47 13.44 12.65 13.44 12.7C13.3496 13.3883 13.0413 14.0296 12.56 14.53C12.0751 14.031 11.7631 13.3895 11.67 12.7ZM14.98 16.01C14.3408 15.9483 13.7398 15.6777 13.27 15.24C13.9321 14.5473 14.3439 13.6534 14.44 12.7C14.4677 12.436 14.4431 12.1692 14.3676 11.9147C14.2921 11.6602 14.1672 11.4231 14.0001 11.217C13.8329 11.0108 13.6267 10.8396 13.3934 10.7131C13.16 10.5867 12.904 10.5075 12.64 10.48L12.56 10.47C12.2945 10.4865 12.035 10.5553 11.7961 10.6724C11.5573 10.7895 11.344 10.9527 11.1684 11.1524C10.9928 11.3522 10.8584 11.5847 10.7728 11.8365C10.6873 12.0883 10.6524 12.3546 10.67 12.62L10.68 12.7C10.7753 13.6536 11.1872 14.5478 11.85 15.24C11.3802 15.6777 10.7792 15.9483 10.14 16.01C9.82358 15.981 9.52732 15.842 9.30263 15.6174C9.07795 15.3927 8.93903 15.0964 8.90999 14.78C8.89392 14.3736 8.99455 13.971 9.19999 13.62L11.62 8.77C11.95 8.12 12.17 8.01 12.56 8.01C12.95 8.01 13.17 8.12 13.5 8.77L15.92 13.62C16.1254 13.971 16.2261 14.3736 16.21 14.78C16.1809 15.0964 16.042 15.3927 15.8174 15.6174C15.5927 15.842 15.2964 15.981 14.98 16.01ZM21.99 5.66C21.9697 5.55649 21.9171 5.46206 21.8399 5.39021C21.7627 5.31837 21.6647 5.27279 21.56 5.26C18.1818 4.92552 15.0675 3.28586 12.88 0.689996C12.8313 0.636309 12.7718 0.59341 12.7055 0.564053C12.6392 0.534697 12.5675 0.519531 12.495 0.519531C12.4225 0.519531 12.3508 0.534697 12.2845 0.564053C12.2182 0.59341 12.1587 0.636309 12.11 0.689996C9.92243 3.28586 6.80817 4.92552 3.42999 5.26C3.32529 5.27279 3.22731 5.31837 3.15008 5.39021C3.07284 5.46206 3.02031 5.55649 2.99999 5.66C1.41999 13.85 4.54999 19.68 12.3 22.97C12.3617 22.9961 12.428 23.0096 12.495 23.0096C12.562 23.0096 12.6283 22.9961 12.69 22.97C20.44 19.68 23.56 13.86 21.99 5.66ZM12.5 21.96C5.39999 18.87 2.58999 13.71 3.92999 6.2C7.22181 5.78699 10.2595 4.21677 12.5 1.77C14.7405 4.21677 17.7782 5.78699 21.07 6.2C22.4 13.71 19.59 18.87 12.5 21.96Z" fill="#484848"/>
                        </svg>
                        <span className='f-400 font-13 text-light-grey col-9 l-20'>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React,{useState,useEffect,useRef} from 'react'
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Loader from '../../../modules/Loader';
import Link from 'next/link';
import banner from '../../../modules/css/Banner.module.css'
export default function Details() {
    const swiperRef = useRef();
    const router = useRouter();
    const [data,setData] = useState(null)
    const [reviewData,setReviewData] = useState(null)
    const [loading,setLoading] = useState(false)
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    useEffect(()=>{
        const id = router.query["id"]
        setLoading(true)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.URL,
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };
        fetch('https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?domain=IN&locale=en_IN&hotel_id='+id, options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));
        
        fetch('https://hotels-com-provider.p.rapidapi.com/v2/hotels/reviews/list?domain=IN&locale=en_IN&hotel_id='+id+'&page_number=1', options)
        .then(response => response.json())
        .then(response => {
            setReviewData(response)
            setLoading(false)
        })
        .catch(err => console.error(err));
    },[])
    const places = () => {
        const position = document.getElementById('places').offsetTop - 150;
        window.scrollTo({
            top: position,
            behaviour: 'smooth',
        });
    }
    const amenities = () => {
        const position = document.getElementById('amenities').offsetTop - 150;
        window.scrollTo({
            top: position,
            behaviour: 'smooth',
        });
    }
    if(!data){
        return <Loader/>
    }else{
        return (
            <>
            <div className={banner["explore-img"]}>
        
                <div className='container row d-align-center d-justify-space-between'>
                    <Link href="/">
                        <h1 className='text-primary f-700' style={{fontSize:"36px"}}>Trip<span className='text-white'>Guider</span></h1>
                    </Link> 
                    <div className='row d-align-center gap-5'>
                        <Link href="/explore">
                            <h4 className='f-500 text-white'>Explore</h4>
                        </Link>
                        {/* <h4 className='f-500 text-white cursor-pointer' onClick={places}>Places</h4>
                        <h4 className='f-500 text-white cursor-pointer' onClick={amenities}>Amenities</h4> */}
                    </div>
                </div>
                </div>
                <div className='container'>
                    <h2 className='f-500 mt-10'>{data.summary?.name}</h2>
                    <Link href="https://in.hotels.com/">
                        <div className='Reserve-button'>
                            Reserve room
                        </div>
                    </Link>
                    <div className='col-12 row d-align-center d-justify-space-between'>
                        <div className='row d-align-center gap-2'>
                            <div className='row d-align-center gap-1'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.99984 1.16675L7.1665 4.83341H10.8332L7.83317 7.16675L8.83317 10.8334L5.99984 8.50008L3.1665 10.8334L4.1665 7.16675L1.1665 4.83341H4.83317L5.99984 1.16675Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h6 className='f-500 text-light-grey'>{data.summary?.overview.propertyRating?.rating}</h6>
                            </div>
                            <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1" cy="1" r="1" fill="#6B7280"/>
                            </svg>
                            <h6 className='f-500 text-underline'>{reviewData.reviewInfo.reviews.length} reviews</h6>
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
                            <h6 className='f-500 text-light-grey text-underline'>{data.summary.location.address.city} , {data.summary.location.address.countryCode}</h6>
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
                        <div className='row'>
                            <img src={data.propertyGallery.images[0].image.url} className='col-12' style={{borderRadius:"8px 0 0 8px",height:"426px"}}/>
                        </div>
                        <div className='col-12'>
                            <div className='grid-2 gap-2'>
                                <img src={data.propertyGallery.images[1].image.url} className='col-12' style={{height:"209px"}}/>
                                <img src={data.propertyGallery.images[2].image.url} className='col-12' style={{borderRadius:"0 8px 0 0",height:"209px"}}/>
                            </div>
                            <div className='grid-2 gap-2 mt-2'>
                                <img src={data.propertyGallery.images[3].image.url} className='col-12' style={{height:"209px"}}/>
                                <img src={data.propertyGallery.images[4].image.url} className='col-12' style={{borderRadius:"0 0 8px 0 ",height:"209px"}}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='grid-2 gap-2'>
                                <img src={data.propertyGallery.images[5].image.url} className='col-12' style={{height:"209px"}}/>
                                <img src={data.propertyGallery.images[6].image.url} className='col-12' style={{borderRadius:"0 0 0 8px",height:"209px"}}/>
                            </div>
                            <div className='grid-2 gap-2 mt-2'>
                                <img src={data.propertyGallery.images[7].image.url} className='col-12' style={{height:"209px"}}/>
                                <img src={data.propertyGallery.images[8].image.url} className='col-12' style={{borderRadius:"0 0 8px 0 ",height:"209px"}}/>
                            </div>
                        </div>
                        <div className='row'>
                            <img src={data.propertyGallery.images[9].image.url} className='col-12' style={{borderRadius:"0 0 8px 0",height:"426px"}}/>
                        </div>
                    </div>
                    <div className='mt-10 row d-justify-space-between'>
                        <div className='col-12'>
                            <div className='row d-align-center d-justify-space-between pb-6 border-bottom'>
                                <div>
                                    <h4 className='f-500'>{data.summary.tagline}</h4>
                                    {/* <div className='row d-align-center gap-2'>
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
                                        
                                    </div> */}
                                </div>
                                {/* <img src="img/avatar.png"/> */}
                            </div>
                            <h3 className='mt-8 f-500'>What this place offers</h3>
                            <div className='col-12 row mt-5'>
                                {data.summary.amenities.takeover.property?.map((item,index)=>index < 6 && <div className={`col-4 border pb-2`} key={index}  style={{border:"2px solid white"}}>
                                    <h4 className={`f-500 text-black p-2 pl-5 pr-5 mb-2`} style={{borderBottom:"1px solid black",background:"radial-gradient(100% 456.61% at 0% 0%, #F1CCCB 0%, #ADF8DD 58.24%, #B8DAF1 100%) "}}>{item.header.text}</h4>
                                    {item.items?.map((ele,ind)=>ind < 12 && <h6 key={ind} className='l-32 f-400 pl-5 pr-5'>{ele.text}</h6>)}
                                </div>)}
                            </div>
                            <h3 className='mt-8 f-500'>{data.summary.amenities.amenities[1].title}</h3>
                            <div className='row mt-5 pb-6 border pl-5 pr-5'>
                                <div className='col-12 pt-3 pb-3 border-bottom'>
                                    {data.summary.amenities.amenities.map((item,id)=><div key={id} className='col-12 row pr-5' style={{height:"fit-content"}}>
                                        {item.contents.map((it,index)=><div key={index} className='col-12 row'>
                                            {it.items.length == 1 && it.items.map((ele,ind)=> <div key={ind} className='col-12 gap-2 row mt-2 mb-2'>
                                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.99999 10.172L16.192 0.979004L17.607 2.393L6.99999 13L0.635986 6.636L2.04999 5.222L6.99999 10.172Z" fill="#2EB845"/>
                                                </svg>
                                                <h6 className='f-400 col-11'>{ele.text}</h6>
                                            </div>)}
                                        </div>)}
                                    </div>)}  
                                </div>  
                                <div className='col-12 pt-3 pb-3 border-bottom'>
                                    {data.summary.amenities.amenities.map((item,id)=>item.contents.length > 0 && <div key={id} className='col-12 row pr-5' style={{height:"fit-content"}}>
                                        {item.contents.map((it,index)=>it.items.length > 1 && <div key={index} className='col-12 row'>
                                            {it.items.length == 2 && it.items.map((ele,ind)=> <div key={ind} className='col-4 gap-2 row mt-2 mb-2'>
                                                {ind/2 == 0 && <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.99999 10.172L16.192 0.979004L17.607 2.393L6.99999 13L0.635986 6.636L2.04999 5.222L6.99999 10.172Z" fill="#2EB845"/>
                                                </svg>}
                                                {ind/2 != 0 && <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 0C10.2652 0 10.5196 0.105357 10.7071 0.292893C10.8946 0.48043 11 0.734784 11 1V4C11 4.26522 10.8946 4.51957 10.7071 4.70711C10.5196 4.89464 10.2652 5 10 5C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4V1C9 0.734784 9.10536 0.48043 9.29289 0.292893C9.48043 0.105357 9.73478 0 10 0ZM10 15C10.2652 15 10.5196 15.1054 10.7071 15.2929C10.8946 15.4804 11 15.7348 11 16V19C11 19.2652 10.8946 19.5196 10.7071 19.7071C10.5196 19.8946 10.2652 20 10 20C9.73478 20 9.48043 19.8946 9.29289 19.7071C9.10536 19.5196 9 19.2652 9 19V16C9 15.7348 9.10536 15.4804 9.29289 15.2929C9.48043 15.1054 9.73478 15 10 15ZM20 10C20 10.2652 19.8946 10.5196 19.7071 10.7071C19.5196 10.8946 19.2652 11 19 11H16C15.7348 11 15.4804 10.8946 15.2929 10.7071C15.1054 10.5196 15 10.2652 15 10C15 9.73478 15.1054 9.48043 15.2929 9.29289C15.4804 9.10536 15.7348 9 16 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10ZM5 10C5 10.2652 4.89464 10.5196 4.70711 10.7071C4.51957 10.8946 4.26522 11 4 11H1C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9H4C4.26522 9 4.51957 9.10536 4.70711 9.29289C4.89464 9.48043 5 9.73478 5 10ZM17.071 17.071C16.8835 17.2585 16.6292 17.3638 16.364 17.3638C16.0988 17.3638 15.8445 17.2585 15.657 17.071L13.536 14.95C13.3538 14.7614 13.253 14.5088 13.2553 14.2466C13.2576 13.9844 13.3628 13.7336 13.5482 13.5482C13.7336 13.3628 13.9844 13.2576 14.2466 13.2553C14.5088 13.253 14.7614 13.3538 14.95 13.536L17.071 15.656C17.164 15.7489 17.2377 15.8592 17.2881 15.9806C17.3384 16.102 17.3643 16.2321 17.3643 16.3635C17.3643 16.4949 17.3384 16.625 17.2881 16.7464C17.2377 16.8678 17.164 16.9781 17.071 17.071ZM6.464 6.464C6.27647 6.65147 6.02216 6.75679 5.757 6.75679C5.49184 6.75679 5.23753 6.65147 5.05 6.464L2.93 4.344C2.74236 4.15649 2.63689 3.90212 2.6368 3.63685C2.6367 3.37158 2.74199 3.11714 2.9295 2.9295C3.11701 2.74186 3.37138 2.63639 3.63665 2.6363C3.90192 2.6362 4.15636 2.74149 4.344 2.929L6.464 5.05C6.65147 5.23753 6.75679 5.49184 6.75679 5.757C6.75679 6.02216 6.65147 6.27647 6.464 6.464ZM2.93 17.071C2.74253 16.8835 2.63721 16.6292 2.63721 16.364C2.63721 16.0988 2.74253 15.8445 2.93 15.657L5.051 13.536C5.14325 13.4405 5.25359 13.3643 5.3756 13.3119C5.4976 13.2595 5.62882 13.2319 5.7616 13.2307C5.89438 13.2296 6.02606 13.2549 6.14895 13.3052C6.27185 13.3555 6.3835 13.4297 6.4774 13.5236C6.57129 13.6175 6.64554 13.7291 6.69582 13.852C6.7461 13.9749 6.7714 14.1066 6.77025 14.2394C6.7691 14.3722 6.74151 14.5034 6.6891 14.6254C6.63669 14.7474 6.56051 14.8578 6.465 14.95L4.345 17.071C4.25213 17.164 4.14184 17.2377 4.02044 17.2881C3.89904 17.3384 3.76892 17.3643 3.6375 17.3643C3.50608 17.3643 3.37596 17.3384 3.25456 17.2881C3.13316 17.2377 3.02287 17.164 2.93 17.071ZM13.536 6.464C13.3485 6.27647 13.2432 6.02216 13.2432 5.757C13.2432 5.49184 13.3485 5.23753 13.536 5.05L15.656 2.929C15.8435 2.74136 16.0979 2.63589 16.3631 2.6358C16.6284 2.6357 16.8829 2.74099 17.0705 2.9285C17.2581 3.11601 17.3636 3.37038 17.3637 3.63565C17.3638 3.90092 17.2585 4.15536 17.071 4.343L14.95 6.464C14.7625 6.65147 14.5082 6.75679 14.243 6.75679C13.9778 6.75679 13.7235 6.65147 13.536 6.464Z" fill="#BF00FF"/>
                                                </svg>}

                                                <h6 className='f-400 col-11'>{ele.text}</h6>
                                            </div>)}
                                        </div>)}
                                    </div>)}  
                                </div>  
                                <div className='col-12 pt-3'>
                                    {data.summary.amenities.amenities.map((item,id)=><div key={id} className='col-12 row ' style={{height:"fit-content"}}>
                                        {item.contents.map((it,index)=><div key={index} className='col-12 row '>
                                            {it.items.length == 3 && it.items.map((ele,ind)=> <div key={ind} className='col-4 gap-2 row mt-2 mb-2 '>
                                                {ind%3 == 0 &&  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.99999 10.172L16.192 0.979004L17.607 2.393L6.99999 13L0.635986 6.636L2.04999 5.222L6.99999 10.172Z" fill="#2EB845"/>
                                                </svg>}
                                                {ind%3 === 1 && <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 0C10.2652 0 10.5196 0.105357 10.7071 0.292893C10.8946 0.48043 11 0.734784 11 1V4C11 4.26522 10.8946 4.51957 10.7071 4.70711C10.5196 4.89464 10.2652 5 10 5C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4V1C9 0.734784 9.10536 0.48043 9.29289 0.292893C9.48043 0.105357 9.73478 0 10 0ZM10 15C10.2652 15 10.5196 15.1054 10.7071 15.2929C10.8946 15.4804 11 15.7348 11 16V19C11 19.2652 10.8946 19.5196 10.7071 19.7071C10.5196 19.8946 10.2652 20 10 20C9.73478 20 9.48043 19.8946 9.29289 19.7071C9.10536 19.5196 9 19.2652 9 19V16C9 15.7348 9.10536 15.4804 9.29289 15.2929C9.48043 15.1054 9.73478 15 10 15ZM20 10C20 10.2652 19.8946 10.5196 19.7071 10.7071C19.5196 10.8946 19.2652 11 19 11H16C15.7348 11 15.4804 10.8946 15.2929 10.7071C15.1054 10.5196 15 10.2652 15 10C15 9.73478 15.1054 9.48043 15.2929 9.29289C15.4804 9.10536 15.7348 9 16 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10ZM5 10C5 10.2652 4.89464 10.5196 4.70711 10.7071C4.51957 10.8946 4.26522 11 4 11H1C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9H4C4.26522 9 4.51957 9.10536 4.70711 9.29289C4.89464 9.48043 5 9.73478 5 10ZM17.071 17.071C16.8835 17.2585 16.6292 17.3638 16.364 17.3638C16.0988 17.3638 15.8445 17.2585 15.657 17.071L13.536 14.95C13.3538 14.7614 13.253 14.5088 13.2553 14.2466C13.2576 13.9844 13.3628 13.7336 13.5482 13.5482C13.7336 .13.3628 13.9844 13.2576 14.2466 13.2553C14.5088 13.253 14.7614 13.3538 14.95 13.536L17.071 15.656C17.164 15.7489 17.2377 15.8592 17.2881 15.9806C17.3384 16.102 17.3643 16.2321 17.3643 16.3635C17.3643 16.4949 17.3384 16.625 17.2881 16.7464C17.2377 16.8678 17.164 16.9781 17.071 17.071ZM6.464 6.464C6.27647 6.65147 6.02216 6.75679 5.757 6.75679C5.49184 6.75679 5.23753 6.65147 5.05 6.464L2.93 4.344C2.74236 4.15649 2.63689 3.90212 2.6368 3.63685C2.6367 3.37158 2.74199 3.11714 2.9295 2.9295C3.11701 2.74186 3.37138 2.63639 3.63665 2.6363C3.90192 2.6362 4.15636 2.74149 4.344 2.929L6.464 5.05C6.65147 5.23753 6.75679 5.49184 6.75679 5.757C6.75679 6.02216 6.65147 6.27647 6.464 6.464ZM2.93 17.071C2.74253 16.8835 2.63721 16.6292 2.63721 16.364C2.63721 16.0988 2.74253 15.8445 2.93 15.657L5.051 13.536C5.14325 13.4405 5.25359 13.3643 5.3756 13.3119C5.4976 13.2595 5.62882 13.2319 5.7616 13.2307C5.89438 13.2296 6.02606 13.2549 6.14895 13.3052C6.27185 13.3555 6.3835 13.4297 6.4774 13.5236C6.57129 13.6175 6.64554 13.7291 6.69582 13.852C6.7461 13.9749 6.7714 14.1066 6.77025 14.2394C6.7691 14.3722 6.74151 14.5034 6.6891 14.6254C6.63669 14.7474 6.56051 14.8578 6.465 14.95L4.345 17.071C4.25213 17.164 4.14184 17.2377 4.02044 17.2881C3.89904 17.3384 3.76892 17.3643 3.6375 17.3643C3.50608 17.3643 3.37596 17.3384 3.25456 17.2881C3.13316 17.2377 3.02287 17.164 2.93 17.071ZM13.536 6.464C13.3485 6.27647 13.2432 6.02216 13.2432 5.757C13.2432 5.49184 13.3485 5.23753 13.536 5.05L15.656 2.929C15.8435 2.74136 16.0979 2.63589 16.3631 2.6358C16.6284 2.6357 16.8829 2.74099 17.0705 2.9285C17.2581 3.11601 17.3636 3.37038 17.3637 3.63565C17.3638 3.90092 17.2585 4.15536 17.071 4.343L14.95 6.464C14.7625 6.65147 14.5082 6.75679 14.243 6.75679C13.9778 6.75679 13.7235 6.65147 13.536 6.464Z" fill="#BF00FF"/>
                                                </svg>}
                                                {ind%3 == 2 && <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8.4689" cy="8.04922" r="7.8937" fill="var(--black)"></circle>
                                                    <path d="M4.52148 7.25983L6.88959 10.812L12.4152 5.68109" stroke="var(--white)" stroke-width="0.78937" stroke-linecap="round">
                                                    </path>
                                                </svg>}
                                                <h6 className='f-400 col-11'>{ele.text}</h6>
                                            </div>)}
                                        </div>)}
                                    </div>)}
                                </div>
                            </div>
                            <div className='mt-10 pt-3 row d-align-center gap-2 pt-10'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0002 1.33334L13.3335 8.66667H20.6668L14.6668 13.3333L16.6668 20.6667L11.0002 16L5.3335 20.6667L7.3335 13.3333L1.3335 8.66667H8.66683L11.0002 1.33334Z" fill="#DE3151" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                {/* <h4 className='f-500'>{data.summary.overview.propertyRating.rating}</h4>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="black"/>
                                </svg> */}
                                <h3 className='f-500'>{reviewData.reviewInfo.reviews.length} reviews</h3>
                            </div>
                            
                        </div>
                        <div className='row col-12 d-justify-space-between'>
                            <div className='col-5 mt-4 row d-align-center'>
                                <h6 className='f-400 col-6'>Cleanliness</h6>
                                <div className='row gap-2 d-align-center'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99984 1.16675L7.1665 4.83341H10.8332L7.83317 7.16675L8.83317 10.8334L5.99984 8.50008L3.1665 10.8334L4.1665 7.16675L1.1665 4.83341H4.83317L5.99984 1.16675Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className='f-400 font-13'>{data.summary.overview.propertyRating?.rating*0.995} out of 5</span>
                                </div>
                            </div>
                            <div className='col-5 mt-4 row d-align-center'>
                                <h6 className='f-400 col-6 '>Accuracy</h6>
                                <div className='row gap-2 d-align-center'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99984 1.16675L7.1665 4.83341H10.8332L7.83317 7.16675L8.83317 10.8334L5.99984 8.50008L3.1665 10.8334L4.1665 7.16675L1.1665 4.83341H4.83317L5.99984 1.16675Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className='f-400 font-13'>{data.summary.overview.propertyRating?.rating*0.99} out of 5</span>
                                </div>
                            </div>
                            <div className='col-5 mt-4 row d-align-center'>
                                <h6 className='f-400 col-6'>Communication</h6>
                                <div className='row gap-2 d-align-center'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99984 1.16675L7.1665 4.83341H10.8332L7.83317 7.16675L8.83317 10.8334L5.99984 8.50008L3.1665 10.8334L4.1665 7.16675L1.1665 4.83341H4.83317L5.99984 1.16675Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className='f-400 font-13'>{data.summary.overview.propertyRating?.rating*0.987} out of 5</span>
                                </div>
                            </div>
                            <div className='col-5 mt-4 row d-align-center'>
                                <h6 className='f-400 col-6'>Location</h6>
                                <div className='row gap-2 d-align-center'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99984 1.16675L7.1665 4.83341H10.8332L7.83317 7.16675L8.83317 10.8334L5.99984 8.50008L3.1665 10.8334L4.1665 7.16675L1.1665 4.83341H4.83317L5.99984 1.16675Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className='f-400 font-13'>{data.summary.overview.propertyRating?.rating*0.98} out of 5</span>
                                </div>
                            </div>
                            <div className='col-5 mt-4 row d-align-center'>
                                <h6 className='f-400 col-6'>Check-in</h6>
                                <div className='row gap-2 d-align-center'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99984 1.16675L7.1665 4.83341H10.8332L7.83317 7.16675L8.83317 10.8334L5.99984 8.50008L3.1665 10.8334L4.1665 7.16675L1.1665 4.83341H4.83317L5.99984 1.16675Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className='f-400 font-13'>{data.summary.overview.propertyRating?.rating} out of 5</span>
                                </div>
                            </div>
                            <div className='col-5 mt-4 row d-align-center'>
                                <h6 className='f-400 col-6'>Value</h6>
                                <div className='row gap-2 d-align-center'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99984 1.16675L7.1665 4.83341H10.8332L7.83317 7.16675L8.83317 10.8334L5.99984 8.50008L3.1665 10.8334L4.1665 7.16675L1.1665 4.83341H4.83317L5.99984 1.16675Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className='f-400 font-13'>{data.summary.overview.propertyRating?.rating*0.992} out of 5</span>
                                </div>
                            </div>
                            {/* Reviews */}
                                <div className='slider mt-10 border rounded-12 p-relative'>
                                    <Swiper
                                        ref={swiperRef}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        pagination={pagination}
                                        modules={[Pagination]}
                                    >
                                        {reviewData.reviewInfo.reviews.map((item,index)=>item.text != "" && 
                                        <SwiperSlide key={index}>
                                            <div className='p-10 pb-0  row d-align-center d-justify-center'>
                                                <div className='row d-align-center gap-3'>
                                                    {item.brandType == "Hotels" && <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.00016 25.667H23.0002C24.4729 25.667 25.6668 24.4731 25.6668 23.0003V13.0003L16.0002 6.33362L6.3335 13.0003V23.0003C6.3335 24.4731 7.5274 25.667 9.00016 25.667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M12.9995 20.9991C12.9995 19.5263 4.1934 18.3324 15.6662 18.3324H16.3328C17.8056 18.3324 18.9995 19.5263 18.9995 20.9991V25.6657H12.9995V20.9991Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>}
                                                    {item.brandType == "Expedia" && <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.0002 6.33337C20.0002 10.0153 18.0154 13.3334 14.3335 13.3334C18.0154 13.3334 20.0002 16.6515 20.0002 20.3334C20.0002 16.6515 21.9849 13.3334 25.6668 13.3334C21.9849 13.3334 20.0002 10.0153 20.0002 6.33337Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M10.6668 17C10.6668 19.2092 8.54263 21.3334 6.3335 21.3334C8.54263 21.3334 10.6668 23.4576 10.6668 25.6667C10.6668 23.4576 12.791 21.3334 15.0002 21.3334C12.791 21.3334 10.6668 19.2092 10.6668 17Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    }
                                                    <h6 className='f-400 text-light-grey'>{item.brandType}</h6>
                                                </div>
                                                <div className='col-12 mt-3'>
                                                    <h4 className='f-600 text-center'>{item.stayDuration}</h4>
                                                    <h6 className='f-400 text-center text-light-grey'>{item.submissionTimeLocalized}</h6>
                                                </div>
                                                <h5 className='f-400 mt-6 col-11 text-center'>{item.text}</h5>
                                            </div>                           
                                        </SwiperSlide>)} 
                                    </Swiper>
                                    <h5 className="top-reviews">
                                        Top Reviews
                                    </h5>
                                </div>
                                
                            {/* <h3 className='f-500 mt-8'>Where you&apos;ll be</h3>
                            <img src={data.summary.location.staticImage.url} className='col-12 mt-6'/> */}
                            <h4 className='f-500 mt-10 pt-10'>{data.summary.location.address.addressLine}</h4>
                            <h5 className='f-400 mt-1 pb-10 border-bottom'>{data.summary.location.whatsAround.editorial.content[0]}</h5>
                            {/* <div className='mt-6 col-12'>
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
                            </div> */}
                        </div>
                    </div>
                    {loading && <Loader/>}
                </div>
            </>
        )
    }
}
export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    };
}
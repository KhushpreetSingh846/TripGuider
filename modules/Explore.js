import React from 'react'
import { useRouter } from 'next/router'
export default function Explore() {
    const router = useRouter()
    const handler = (e) => {
        let id = e.currentTarget.getAttribute("id")
        router.push(`/explore?id=${id}`)
    }
    
    return (
        <section>
        <div className="container">
            <div className='row mt-10 d-justify-space-between pt-5 pb-5'>
                <h2 className='col-12 mt-2  mb-3'>Nearby Places</h2>
                <div className='col-12 row' id="places">
                    <div className='row col-3 mt-5 d-justify-space-between cursor-pointer' id="444" onClick={handler}>
                        <div className='col-3'>
                            <img className="col-12 rounded-8 op-cover  height" src="/img/amritsar.jpg"></img>
                        </div>
                        <div className=' col-8 '>
                            <span className='col-12 m-0 font-15 l-17 text-black f-700 pt-1 pb-0 pl-0 pr-0'>Amritsar</span>
                            <h6 className='col-12 m-0 l-16 f-400 text-light-grey pt-px-2 pb-0 pl-0 pr-0'>15 minute drive</h6>
                        </div> 
                    </div>
                    <div className='row col-3 mt-5 d-justify-space-between cursor-pointer' id="6126245" onClick={handler}>
                        <div className='col-3'>
                            <img className="col-12 rounded-8 op-cover  height" src="/img/jalandhar.jpg"></img>
                        </div>
                        <div className=' col-8'>
                            <span className='col-12 m-0 font-15 l-17 text-black f-700 pt-1 pb-0 pl-0 pr-0'>Jalandhar</span>
                            <h6 className='col-12 m-0 l-16 f-400 text-light-grey pt-px-2 pb-0 pl-0 pr-0'>15 minute drive</h6>
                        </div>
                    </div>
                    <div className='row col-3 mt-5 d-justify-space-between cursor-pointer' id="2158" onClick={handler}>
                        <div className='col-3'>
                            <img className="col-12 rounded-8 op-cover height" src="/img/ludhiana.jpg"></img>
                        </div>
                        <div className='col-8'>
                            <span className='col-12 m-0 font-15 l-17 text-black f-700 pt-1 pb-0 pl-0 pr-0'>Ludhiana</span>
                            <h6 className='col-12 m-0 l-16 f-400 text-light-grey pt-px-2 pb-0 pl-0 pr-0'>15 minute drive</h6>
                        </div>
                    </div>
                    <div className='row col-3 mt-5 d-justify-space-between cursor-pointer' id="9038" onClick={handler}>
                        <div className='col-3'>
                            <img className="col-12 rounded-8 op-cover  height" src="/img/patiala.jpg"></img>
                        </div>
                        <div className='col-8'>
                            <span className='col-12 m-0 font-15 l-17 text-black f-700 pt-1 pb-0 pl-0 pr-0'>Patiala</span>
                            <h6 className='col-12 m-0 l-16 f-400 text-light-grey pt-px-2 pb-0 pl-0 pr-0' >15 minute drive</h6>
                        </div>
                    </div>
                    <div className='row col-3 mt-5 d-justify-space-between cursor-pointer' id="6126252" onClick={handler}>
                        <div className='col-3'>
                            <img className="col-12 rounded-8 op-cover  height" src="/img/srinagar.jpg"></img>
                        </div>
                        <div className='col-8'>
                            <span className='col-12 m-0 font-15 l-17 text-black f-700 pt-1 pb-0 pl-0 pr-0'>SriNagar</span>
                            <h6 className='col-12 m-0 l-16 f-400 text-light-grey pt-px-2 pb-0 pl-0 pr-0'>15 minute drive</h6>
                        </div>
                    </div>
                    <div className='row col-3 mt-5 d-justify-space-between cursor-pointer' id="657" onClick={handler}>
                        <div className='col-3'>
                            <img className="col-12 rounded-8 op-cover  height" src="/img/mumbai.jpg"></img>
                        </div>
                        <div className='col-8'>
                            <span className='col-12 m-0 font-15 l-17 text-black f-700 pt-1 pb-0 pl-0 pr-0'>Mumbai</span>
                            <h6 className='col-12 m-0 l-16 f-400 text-light-grey  pt-px-2 pb-0 pl-0 pr-0'>15 minute drive</h6> 
                        </div>
                    </div>
                    <div className='row col-3 mt-5 d-justify-space-between cursor-pointer' id="372" onClick={handler}>
                        <div className='col-3'>
                            <img className="col-12 rounded-8 op-cover  height" src="/img/ahemdabad.jpg"></img>
                        </div>
                        <div className='col-8'>
                            <span className='col-12 m-0 font-15 l-17 text-black f-700 pt-1 pb-0 pl-0 pr-0'>Ahemdabad</span>
                            <h6 className='col-12 m-0 l-16 f-400 text-light-grey pt-px-2 pb-0 pl-0 pr-0'>15 minute drive</h6>
                        </div>
                    </div>
                    <div className='row col-3 mt-5 d-justify-space-between cursor-pointer' id="1669" onClick={handler}>
                        <div className='col-3'>
                            <img className="col-12 rounded-8 op-cover  height" src="/img/download.jpg"></img>
                        </div>
                        <div className='col-8'>
                            <span className='col-12 m-0 font-15 l-17 text-black f-700 pt-1 pb-0 pl-0 pr-0'>Jaipur</span>
                            <h6 className='col-12 m-0 l-16 f-400 text-light-grey pt-px-2 pb-0 pl-0 pr-0'>15 minute drive</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

import React from 'react'
import styles from './css/Banner.module.css'
import Link from 'next/link'
export default function Banner() {
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
  return (
   <>
   
    <div className={styles["section-img"]}>
        <div className='container'>
            <div className={`${styles["header"]} pt-10 col-12 row d-align-center d-justify-space-between`}>
                <h1 className='text-primary f-700' style={{fontSize:"36px"}}>Trip<span className='text-white'>Guider</span></h1>
                <div className='row d-align-center gap-5'>
                    <Link href="/explore">
                        <h4 className='f-500 text-white'>Explore</h4>
                    </Link>
                    <h4 className='f-500 text-white cursor-pointer' onClick={places}>Places</h4>
                    <h4 className='f-500 text-white cursor-pointer' onClick={amenities}>Amenities</h4>
                </div>
            </div>
            <div className='col-12 row d-justify-center mt-100'>
                <h1 className='f-800 text-white col-8 text-center'>Explore the world beyond the limits.</h1>
                <div className='col-12 row d-justify-center'>
                    <Link href="/explore">
                        <button>Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

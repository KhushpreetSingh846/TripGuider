import React from 'react'
import styles from './css/card.module.css'
import { useRouter } from 'next/router'
export default function FourCard() {
    const router = useRouter()
    const handler = (e) => {
        let id = e.currentTarget.getAttribute("type")
        router.push(`/explore?type=${id}`)
    }
    return (
        <div className='container'>
            <h2 className='f-700 mt-10 pt-10'>Search by Type</h2>
            <div className={styles["four-card-grid"]}>
                <div onClick={handler} type="HOTEL">
                    <img src="img/hotel.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>Hotel</h4>
                </div>
                <div onClick={handler} type="APARTMENT">
                    <img src="img/apartment.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>Apartment</h4>
                </div>
                <div onClick={handler} type="CHALET">
                    <img src="img/chalet.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>Chalet</h4>
                </div>
                <div onClick={handler} type="HOSTEL">
                    <img src="img/hostel.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>Hostel</h4>
                </div>
                <div onClick={handler} type="RYOKAN">
                    <img src="img/ryokan.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>Ryokan</h4>
                </div>
                <div onClick={handler} type="APART_HOTEL">
                    <img src="img/apartment-hotel.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>Apartment Hotel</h4>
                </div>
                <div onClick={handler} type="HOSTAL">
                    <img src="img/hostal.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>Hostal</h4>
                </div>
                <div onClick={handler} type="BED_AND_BREAKFAST">
                    <img src="img/bed & breakfast.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>Bed & Breakfast</h4>
                </div>
            </div>
        </div>
    )
}

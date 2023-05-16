import React from 'react'
import styles from './css/card.module.css'
import { useRouter } from 'next/router'
export default function ThreeCard() {
    const router = useRouter()
    const handler = (e) => {
        let id = e.currentTarget.getAttribute("type")
        router.push(`/explore?payment=${id}`)
    }
    return (
        <div className='container'>
                <h2 className='f-700 mt-10'>Payment Type</h2>
            <div className={styles["three-card-grid"]}>
                <div onClick={handler} type="PAY_LATER">
                    <img src="img/pay-later.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>PAY LATER</h4>
                    {/* <span className='f-500 font-13 mt-2 text-light-grey'>Find unforgettable activities near you</span> */}
                </div>
                <div onClick={handler} type="GIFT_CARD">
                    <img src="img/gift-card.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>GIFT CARD</h4>
                    {/* <span className='f-500 font-13 mt-2 text-light-grey'>Find unforgettable activities near you</span> */}
                </div>
                <div onClick={handler} type="FREE_CANCELLATION">
                    <img src="img/free-cancellation.jpg" className='col-12 rounded-8 op-cover  height'/>
                    <h4 className='f-500 mt-2'>FREE CANCELLATION</h4>
                    {/* <span className='f-500 font-13 mt-2 text-light-grey'>Find unforgettable activities near you</span> */}
                </div>
            </div>
        </div>
    )
}

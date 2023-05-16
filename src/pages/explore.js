import React,{useEffect, useState} from 'react'
import Search from '../../modules/Search'
import CardSlider from '../../modules/CardSlider'
import styles from '../../modules/css/explore.module.css'
import Loader from '../../modules/Loader'
import { useRouter } from 'next/router'
export default function Explore() {
    const router = useRouter();
    const [hotels,setHotels] = useState([])
    const [loading,setLoading] = useState(false)
    const hotelsListing = (checkout,checkin,adult,regionId) => {
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.URL,
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };
        fetch('https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=IN&sort_order=RECOMMENDED&locale=en_IN&checkout_date='+checkout+'&region_id='+regionId+'&adults_number='+adult+'&checkin_date='+checkin, options)
        .then(response => response.json())
        .then(response => {
            setHotels(response.properties)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        });    
    }
    const hotelsListingWithType = (checkout,checkin,adult,regionId,type) => {
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.URL,
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };
        fetch('https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=IN&sort_order=RECOMMENDED&locale=en_IN&checkout_date='+checkout+'&region_id='+regionId+'&adults_number='+adult+'&checkin_date='+checkin+'&loadging_type='+type, options)
        .then(response => response.json())
        .then(response => {
            setHotels(response.properties)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        });    
    }
    const hotelsListingWithPayment = (checkout,checkin,adult,regionId,type) => {
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.URL,
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };
        fetch('https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=IN&sort_order=RECOMMENDED&locale=en_IN&checkout_date='+checkout+'&region_id='+regionId+'&adults_number='+adult+'&checkin_date='+checkin+'&payment_type='+type, options)
        .then(response => response.json())
        .then(response => {
            setHotels(response.properties)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        });    
    }
    const hotelsListingWithAmenities = (checkout,checkin,adult,regionId,type) => {
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.URL,
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };
        fetch('https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=IN&sort_order=RECOMMENDED&locale=en_IN&checkout_date='+checkout+'&region_id='+regionId+'&adults_number='+adult+'&checkin_date='+checkin+'&amenities='+type, options)
        .then(response => response.json())
        .then(response => {
            setHotels(response.properties)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        });    
    }
    const hotelsListingWithAccessibilities = (checkout,checkin,adult,regionId,type) => {
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.URL,
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };
        fetch('https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=IN&sort_order=RECOMMENDED&locale=en_IN&checkout_date='+checkout+'&region_id='+regionId+'&adults_number='+adult+'&checkin_date='+checkin+'&accessibility='+type, options)
        .then(response => response.json())
        .then(response => {
            setHotels(response.properties)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        });    
    }
    const hotelsListingWithMealPlan = (checkout,checkin,adult,regionId,type) => {
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.URL,
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };
        fetch('https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=IN&sort_order=RECOMMENDED&locale=en_IN&checkout_date='+checkout+'&region_id='+regionId+'&adults_number='+adult+'&checkin_date='+checkin+'&meal_plan='+type, options)
        .then(response => response.json())
        .then(response => {
            setHotels(response.properties)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setLoading(false)
        });    
    }
    useEffect(()=>{
        if(router.query["id"]){
            hotelsListing('2023-25-29','2023-25-17',2,router.query["id"])
        }else if(router.query["type"]){
            hotelsListingWithType('2023-25-29','2023-25-17',2,444,router.query["type"])
        }else if(router.query["payment"]){
            hotelsListingWithPayment('2023-25-29','2023-25-17',2,444,router.query["payment"])
        }else if(router.query["amenities"]){
            hotelsListingWithAmenities('2023-25-29','2023-25-17',2,444,router.query["amenities"])
        }else if(router.query["accessibility"]){
            hotelsListingWithAccessibilities('2023-25-29','2023-25-17',2,444,router.query["accessibility"])
        }else if(router.query["meal_plan"]){
            hotelsListingWithMealPlan('2023-25-29','2023-25-17',2,444,router.query["meal_plan"])
        }else{
            hotelsListing('2023-25-29','2023-25-17',2,444)
        }
    },[])
    return (
        <div className='container'>
            <div className={`col-12 row d-justify-center mt-10 ${styles["wrapper"]}`}>
                <Search handler={hotelsListing}/>
            </div>
            <div className='grid-3 gap-5 mt-10'>
                {hotels?.map((item,id)=><CardSlider data={item} key={id}/>)}
            </div>
            {loading && <Loader/>}
        </div>
    )
}

import React,{useState,useRef} from 'react'
import styles from './css/getaways.module.css'
import { useRouter } from 'next/router'
export default function GetAways() {
  const router = useRouter();
  const tabRef = useRef()
  const [tab,setTab] = useState("amenities")
  const tabHandler = (e) => {
    tabRef.current.querySelectorAll("h4").forEach(item => {
      item.classList.remove(styles.active)
    });
    e.currentTarget.classList.add(styles.active)
    setTab(e.currentTarget.getAttribute("value"))
  }
  const accessibilityHandler = (e) => {
    let val = e.currentTarget.getAttribute("value")
    router.push(`/explore?accessibility=${val}`)
  }
  const mealHandler = (e) => {
    let val = e.currentTarget.getAttribute("value")
    router.push(`/explore?meal_plan=${val}`)
  }
  const amenitiesHandler = (e) => {
    let val = e.currentTarget.getAttribute("value")
    router.push(`/explore?amenities=${val}`)
  }
  return (
    <div className='container'>
        <h2 className='f-700 mt-10 pt-10' id="amenities">Inspiration for future getaways</h2>
        <div ref={tabRef} className={styles["tabs"]}>
            <h4 value="amenities"className={styles["active"]} onClick={tabHandler}>Amenities</h4>
            <h4 value="accessibility"  onClick={tabHandler}>Accessibility</h4>
            <h4 value="meal" className='' onClick={tabHandler}>Meal plan</h4>
        </div>
        {tab == "accessibility" &&<div className='row mt-5 mb-10 pb-5'>
            <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="SIGN_LANGUAGE_INTERPRETER" onClick={accessibilityHandler}>Sign Language Interpreter</h5>
            <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="STAIR_FREE_PATH" onClick={accessibilityHandler}>Stair Free Path</h5>
            <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="SERVICE_ANIMAL" onClick={accessibilityHandler}>Service Animal</h5>
            <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="IN_ROOM_ACCESSIBLE" onClick={accessibilityHandler}>In Room Accessibility</h5>
            <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="ROLL_IN_SHOWER" onClick={accessibilityHandler}>ROLL In Shower</h5>
            <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="ACCESSIBLE_BATHROOM" onClick={accessibilityHandler}>Accessible Bathroom</h5>
            <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="ELEVATOR" onClick={accessibilityHandler}>Elevator</h5>
            <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="ACCESSIBLE_PARKING" onClick={accessibilityHandler}>Accessible Parking</h5>
        </div>}
        {tab == "meal" && <div className='row mt-5 mb-10' style={{minHeight:"200px"}}>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="ALL_INCLUSIVE" onClick={mealHandler}>All Inclusive</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="FULL_BOARD" onClick={mealHandler}>Full Board</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="HALF_BOARD" onClick={mealHandler}>Half Board</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="FREE_BREAKFAST" onClick={mealHandler}>Free Breakfast</h5>
        </div>}
        {tab == "amenities" && <div className='row mt-5 mb10'>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="SPA_ON_SITE" onClick={amenitiesHandler}>Spa On Site</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="WIFI" onClick={amenitiesHandler}>Wifi</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="HOT_TUB" onClick={amenitiesHandler}>Hot-Tub</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="FREE_AIRPORT_TRANSPORTATION" onClick={amenitiesHandler}>Free Airport Transportation</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="POOL" onClick={amenitiesHandler}>Pool</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="GYM" onClick={amenitiesHandler}>GYM</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="OCEAN_VIEW" onClick={amenitiesHandler}>Ocean-View</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="WATER_PARK" onClick={amenitiesHandler}>Water-park</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="BALCONY_OR_TERRACE" onClick={amenitiesHandler}>Balcony Or Terrace</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="KITCHEN_KITCHENETTE" onClick={amenitiesHandler}>Kitchen Kitchenette</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="ELECTRIC_CAR" onClick={amenitiesHandler}>Electric Car</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="PARKING" onClick={amenitiesHandler}>Parking</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="CRIB" onClick={amenitiesHandler}>Crib</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="RESTAURANT_IN_HOTEL" onClick={amenitiesHandler}>Restaurant In Hotel</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="PETS" onClick={amenitiesHandler}>Pets</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="WASHER_DRYER" onClick={amenitiesHandler}>Washer Dryer</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="CASINO" onClick={amenitiesHandler}>Casino</h5>
          <h5 className='col-3 mt-3 mb-3 f-500 cursor-pointer' value="AIR_CONDITIONING" onClick={amenitiesHandler}>Air Conditioning</h5>


        </div>}
    </div>
  )
}

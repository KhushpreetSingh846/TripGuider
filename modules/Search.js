import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from './css/explore.module.css'
import dayjs from "dayjs";
import Loader from "./Loader";
export default function Search(props) {
    const bgref = useRef();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    //   for regionname,regionId , regionDropdown
    const [regionText, setRegionText] = useState("");
    const [regionId,setRegionId] = useState('')
    const [regionDropdown,setRegionDropdown] = useState(false)
    //   for checkin date
    const [checkin,setCheckin] = useState('')
    //   for checkout date
    const [checkout,setCheckout] = useState('')
    // for adult
    const [adult,setAdult] = useState('')
    const [hotels,setHotels] = useState([])
    const [datas, setDatas] = useState([]);
    const parent = useRef(null);
    const child = useRef(null);
    const router = useRouter();
    // validator for checking all required fields
    const validator = () => {
        let res = true;
        if(regionId == ""){
            res = false;
            alert("Please select region")
        }else if(checkin == ""){
            res = false;
            alert("Please select checkin time")
        }else if (checkout == ""){
            res = false;
            alert("Please select checkout time")
        }else if(adult == ""){
            res = false;
            alert("Please enter adults number")
        }
        return res;
    }
    const searchHandler = () => {
        const result = validator();
        if (result) {
            props.handler(checkout,checkin,adult,regionId);
        } else {
            parent.current.classList.remove(styles["open"]);
        }
    };
    // handler for select checkin time
    const checkinHandler = (e) => {
        setCheckin(e.currentTarget.value)
    }
    // handler for select checkout time
    const checkoutHandler = (e) => {
        const inTime = dayjs(checkin);
        const outTime = dayjs(e.currentTarget.value)
        const difference = outTime.diff(inTime,"d")
        if(difference >=0){
            setCheckout(e.currentTarget.value)
        }
        else{
            alert("Not valid")
        }
    }
    // handler for selecting regionId from dropdown
    const regionSelectHandler = (e) => {
        let id = e.currentTarget.getAttribute("id");
        let name = e.currentTarget.getAttribute("name");
        setRegionText(name)
        setRegionId(id)
        setRegionDropdown(false)
    };
    // handler for search in region
    const regionHandler = (e) => {
        let keyword = e.currentTarget.value;
        setRegionText(keyword)
        keyword = encodeURIComponent(keyword);
        if(keyword.length > 3){
            setLoading(true)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.URL,
                    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                }
            };
            
            fetch('https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=en_IN&query='+keyword+'&domain=IN', options)
            .then(response => response.json())
            .then(response => {
                setDatas(response.data)
                setRegionDropdown(true)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            });
        }else{
            setDatas([])
        }
    }
    // handler for selecting adults
    const adultHandler = (e) => {
        if(e.currentTarget.value > 0){
            setAdult(e.currentTarget.value)
        }
    }
    useEffect(() => {

    }, []);

    return (
        <div className={`col-12`} ref={parent}>
            <div ref={bgref} className={`col-12 ${styles["search-grid"]}`}>
                {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.9999 21L16.6499 16.65" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> */}
                <div className="row pl-5 pr-5 border-right p-relative">
                    <h6 className='f-600 col-12'>Where</h6>
                    <input
                        ref={child}
                        type="text"
                        placeholder="Enter Location"
                        onChange={regionHandler}
                        value={regionText}
                    />
                    {regionDropdown && <div className={styles["search-result"]}>
                        {datas?.length > 0 &&
                        datas?.map((item, id) => (
                            <div key={id} className={`cursor-pointer pl-5 pr-5 pt-2 pb-2 row border-bottom d-align-center d-justify-space-between ${id%2 == 0 && styles["stripped"]}`} id={item.gaiaId} name={item.regionNames.fullName} onClick={regionSelectHandler}>
                                <h5 className="f-400 l-24 text-black col-11">{item.regionNames.fullName}</h5>
                                {item.hasOwnProperty("query") && (
                                    <svg
                                        width="12"
                                        height="11"
                                        viewBox="0 0 12 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M9.33618 2.845L2.16368 10.0175L0.985352 8.83917L8.15702 1.66667H1.83619V0H11.0029V9.16667H9.33618V2.845Z"
                                        fill="#333333"
                                    />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>}
                </div>
                <div className='pl-5 pr-5 border-right'>
                    <h6 className='f-600'>Check-in </h6>
                    <input type="date" placeholder="Add date" value={checkin} onChange={checkinHandler} />
                </div>
                <div className='pl-5 pr-5 border-right'>
                    <h6 className='f-600'>Check-out </h6>
                    <input type="date" placeholder="Add date" value={checkout} onChange={checkoutHandler}/>
                </div>
                <div className='pl-5 pr-5 border-right'>
                    <h6 className='f-600'>Adults </h6>
                    <input type="number" placeholder="Add guests" value={adult} onChange={adultHandler}/>
                </div>
                <div className="row d-align-center d-justify-center" onClick={searchHandler}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="#FF5A5F"/>
                        <path d="M23 31C27.4183 31 31 27.4183 31 23C31 18.5817 27.4183 15 23 15C18.5817 15 15 18.5817 15 23C15 27.4183 18.5817 31 23 31Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M32.9999 33L28.6499 28.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                {/* {loading && (
                <div className="col-1 d-flex d-align-center">
                    <LoaderSmall type="2" />
                </div>
                )} */}

            </div>
            
        </div>
    );
  
}

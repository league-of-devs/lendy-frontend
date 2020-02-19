// react
import React, { useState, useEffect } from 'react'

// backend
import api from './../../services/api'
import ErrorMsgs from './../../services/error_msgs'

// main components
import MainHeader from './../../main_components/main_header'
import MainRightAside from './../../main_components/main_right_aside'
import MainLeftAside from './../../main_components/main_left_aside'
import MyOffer from './../../main_components/my_offer'

// css
import './style.css'

// component function
function MyOffersFeed(){
    const [offersList, setOffersList] = useState([])

    useEffect(() => {
        api.get('/offer/my_offers')
        .then(response => {
            setOffersList(response.data.list)
        })
        .catch(err => alert(ErrorMsgs[err.response.data.error]))
    }, [])

    return(
        <div id="my-offers-feed">
            <div className="content">
                <MainHeader></MainHeader>
                <MainLeftAside></MainLeftAside>
                <MainRightAside></MainRightAside>
                <main>
                    {offersList.map(offer => (
                        <MyOffer key={offer.id}  offer={offer}></MyOffer>
                    ))}
                </main>
            </div>
        </div>
    )
}

// exporting
export default MyOffersFeed
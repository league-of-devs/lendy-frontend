// react
import React from 'react'

// component function
function FoundOffer({offer}){
    return(
        <div className="contract">
            <strong>Você pega R$ {offer.value}</strong>
            <div className="line">
                <p>
                    Você paga <b>R$ {offer.value*(1+(offer.fee/100))}</b>
                    <br></br>
                    Em <b>{offer.days}</b>
                </p>
                <button>eu quero!</button>
            </div>
        </div>
    )
}

// exporting
export default FoundOffer
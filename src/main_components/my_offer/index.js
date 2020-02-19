// react
import React from 'react'
import api from '../../services/api'
import ErrorMsgs from '../../services/error_msgs'

// component function
function MyOffer( { offer } ){
    async function handleDeleteOffer(e){
        
        await api.put('/offer/delete', {
            offer,
        })
        .then(response => {
           alert("Oferta cancelada com êxito!")
        })
        .catch(err => alert(ErrorMsgs[err.response.data.error]))
    }
       
    return(
        <div className="contract">
            <strong>Você investiu R$ {offer.value}</strong>
            <div className="line">
                <p>
                    Alguém irá te pagar <b>R$ {offer.value*(1+(offer.fee/100))}</b>
                    <br></br>
                    Em até <b>{offer.days}</b> dias após {offer.created_at}
                </p>
                <button onClick={handleDeleteOffer} type="submit">quero cancelar!</button>
            </div>
        </div>
    )
}

// exporting
export default MyOffer
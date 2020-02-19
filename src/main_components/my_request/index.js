// react
import React from 'react'

// backend
//import api from './../../services/api'
//import ErrorMsgs from './../../services/error_msgs'

// component function
function MyRequest( { request } ){
    return(
        <div className="contract">
            <strong>Você solicitou R$ {request.value}</strong>
            <div className="line">
                <p>
                    Você deve pagar <b>R$ {request.value*(1+(request.fee/100))}</b>
                    <br></br>
                    Em até <b>{request.days}</b> dias após <b>{request.created_at}</b>
                </p>
                <button>pagar agora!</button>
            </div>
        </div>
    )
}

// exporting
export default MyRequest
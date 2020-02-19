// react
import React from 'react'

// css
import './style.css'

// component function
function Request(){
    return (
        <div id="request">
            <strong>R$ 100,00</strong>
            <div className="line">
                <p>
                    Você deve pagar <b>R$ 110,00</b>
                    <br></br>
                    Até o dia <b>20/02/2020</b>
                </p>
                <button>pagar agora!</button>
            </div>
        </div>
    )
}

// exporting
export default Request
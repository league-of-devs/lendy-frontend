// react
import React, {useEffect, useState} from 'react'

// backend
import api from './../../services/api'
import ErrorMsgs from './../../services/error_msgs'

// img
import IconUser from './../../img/icon-user.svg' 
import IconStar from './../../img/icon-star.svg' 

// css
import './style.css'

function MainRightAside(){
    const [name, setName] = useState('')
    const [addr_street, setAddrStreet] = useState('')
    const [addr_number, setAddrNumber] = useState('')
    const [addr_complement, setAddrComplement] = useState('')
    const [created_at, setCreatedAt] = useState('')

    useEffect(() => {
        api.get('/user/my_info')
        .then(response => {
            setName(response.data.data.name)
            setAddrStreet(response.data.data.addr_street)
            setAddrNumber(response.data.data.addr_number)
            setAddrComplement(response.data.data.addr_complement)
            setCreatedAt(response.data.data.created_at)
        })
        .catch(err => alert(ErrorMsgs[err.response.data.error]))
    }, [])
    
    return(
        <aside id="main-right-aside">
            <div className="user-core">
                <img className="user-img" src={IconUser} alt="user"/>
                <span>{name.split(' ').slice(0, 1)}</span>
                <div className="star-group">
                    <img src={IconStar} alt="stars"/>
                    <img src={IconStar} alt="stars"/>
                    <img src={IconStar} alt="stars"/>
                    <img src={IconStar} alt="stars"/>
                    <img src={IconStar} alt="stars"/>
                </div>
            </div>
            <div className="user-data">
                <div className="data-block">
                    <strong>seu saldo é de R$ 0,00</strong>
                </div>
                <div className="data-block">
                    <span>nome</span>
                    <p>{name}</p>
                </div>
                <div className="data-block">
                    <span>endereço</span>
                    <p>{addr_street}, {addr_number}{addr_complement}</p>
                </div>
                <div className="data-block">
                    <span>membro desde</span>
                    <p>{created_at}</p>
                </div>
            </div>
        </aside>
    )
}

export default MainRightAside
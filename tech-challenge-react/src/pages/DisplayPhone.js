import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function DisplayPhone() {
    const {phoneId} = useParams()
    const [displayPhone, setDisplayPhone] = useState()

    useEffect(() => {
        const fetchDisplayPhone = async () => {
            let response = await axios.get(`http://localhost:5005/phones/${phoneId}`);
            console.log(response.data)
            setDisplayPhone(response.data)
        }
        fetchDisplayPhone()
    }, [])

    return displayPhone ? (
<div>
<p>{displayPhone.name}</p>
<p>{displayPhone.manufacturer}</p>
<p>{displayPhone.description}</p>
<p>{displayPhone.color}</p>
<p>{displayPhone.price}</p>
<img src={`./images/${displayPhone.imageFileName}`}/>
<p>{displayPhone.screen}</p>
<p>{displayPhone.processor}</p>
<p>{displayPhone.ram}</p>
</div>
    ) : (
        <h1>Loading...</h1>
    )
}

export default DisplayPhone;
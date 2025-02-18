
import axios from "axios";
import { useState } from "react";

function GetSeller() {


    const [sellers, setSellers] = useState("");



    function handleClick() {


        axios.get("http://localhost:8080/seller/display")
            .then(response => {
                setSellers(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))

    };


    const displaySellers = [];
    //the below is to convert the json data into html so that it can be rendered on the page

    for (const seller of sellers) {

        //use a table or cards to include all of the data or else get rid of the button 

        displaySellers.push(

            
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>

                            <div className='card-text'>

                                <p className='card-title '><b>Title:</b> {seller.title}</p>
                                <p><b>First Name:</b> {seller.firstName}</p>
                                <p><b>Surname:</b> {seller.surname}</p>
                                <p><b>Tel:</b> {seller.tel}</p>
                                

                            </div>
                        </div>
                    </div>
                </div>
            

        )

    }


    return (
        <>
        <br />
        <button class="btn btn-light btn-lg" onClick={handleClick}>Display all Sellers</button>
            <br />
            <div className='container'>
                <div className='row'>

                <br />
                    {displaySellers}
                </div>
            </div>
        </>
    );
}

export default GetSeller;
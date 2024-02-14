
import axios from "axios";
import { useState } from "react";

function GetSeller() {


    const [sellers, setSellers] = useState("");



    function handleClick() {


        axios.get("http://localhost:8082/seller/display")
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
                        <div id="cardBody" className='card-body'>

                            <div id="cardText" className='card-text'>

                                <p id="title" className='card-title '><b>Title:</b> {seller.title}</p>
                                <p id="first-name"><b>First Name:</b> {seller.firstName}</p>
                                <p id="surname"><b>Surname:</b> {seller.surname}</p>
                                <p id="tel"><b>Tel:</b> {seller.tel}</p>

                                <p><button type="button" className="btn btn-danger" onClick={() => {
                        axios.delete("http://localhost:8082/seller/remove/" + seller.id)
                            .then(res => {


                                axios.get("http://localhost:8082/seller/display")
                                    .then(response => {
                                        setSellers(response.data)
                                        console.log(response);
                                    })
                                    .catch(err => console.error(err))
                        
                            })
                            .catch(err => console.error(err));
                    }}>DELETE</button></p>
                                

                            </div>
                        </div>
                    </div>
                </div>
            

        )

    }


    return (
        <>
        <br />
        <button id="getSellersButton"  className="btn btn-primary btn-lg " onClick={handleClick}>Display all Sellers</button>
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
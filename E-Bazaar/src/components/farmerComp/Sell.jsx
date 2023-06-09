import React from 'react'
import{ useState, useEffect } from 'react';
import './sell.css'

const Sell = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const response = await fetch('http://localhost:3000/getpreorder');
      console.log(response);
      const data = await response.json();
      setCards(data);
    }

    fetchCards();
  }, []);



  return (
    <div className="Buy">
      <div>
        <h1>Take pre-order</h1>
      </div>

      <div>
        <div>
          <div className='parent1'>
        
            {cards.map((card) => (
               <div class="px-3 child1">
               <div class="card">
                 <div class="card-body">
                   <h5 class="card-title">{card.product}</h5>
                   <p class="card-text">{card.description}</p>
                   <p class="card-text"><b>Location : </b> {card.location}</p>
                   <p class="card-text"><b>Stoke : </b> {card.quntity_in_kg} kg left</p>
                   <p class="card-text"><b>Price :</b> {card.price_per_kg}/kg</p>

                   <a href="#" class="btn btn-primary">buy</a>
                 </div>
               </div>
             </div>
            

            ))}

          </div>
        </div>

      </div>

      {/* <button class='btn btn-primary'><Link to="/#home" >HOMEPAGE</Link></button> */}
    </div>

  )
}

export default Sell

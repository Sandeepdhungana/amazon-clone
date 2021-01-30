import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import StripeCheckout from "react-stripe-checkout";
require("dotenv").config();


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [value, setValue] = useState();


  useEffect(() => {
    setValue(getBasketTotal(basket))
    
  }, [basket]);

  const makePayment = (token) => {
    const body = {
      token,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("http://localhost:8282/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("STATUS", status);
        history.replace('/orders')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(
          <Link to="/checkout">
            {basket?.length}
            items
          </Link>
          )
        </h1>
        {/* payment section-deliveray address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Delivary Address </h3>
          </div>
          <div className="payment__address">
            <p> {user?.email}</p>
            <p> 123 Sirkhali Lane </p> <p> Los Angeles, CA </p>
          </div>
        </div>
        {/* payment section - review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review Item and Delivery </h3>
          </div>
          <div className="payment__items">
            {/* all the products that we wanna show. */}
            {basket.map((item, i) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment section-payment method. */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Payment Method </h3>
          </div>
          <div className="payment__details">
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3> Order Total {value} </h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <StripeCheckout
                stripeKey="pk_test_51IEZTUEixsqp4awkzmXRLVPX31e7sYRYup3SzbdFGP20KlQnVLWa5Q3Jho4n7bMOokffLjmMrU4nQPTpykTuHnPv00RpbG8Gbf"
                token={makePayment}
                name="Buy Now"
                amount={value * 100}
              >
                <button className="payment__button">Buy now</button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

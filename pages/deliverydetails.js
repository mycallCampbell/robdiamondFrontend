import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styles from "../styles/deliverydetails.module.css";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CardSection from "../components/CardSection";
import { ProductPageContext } from "../productPageContext";
// import Meta from "../components/Meta";

function Deliverydetails() {
  const [cart, setCart] = useContext(ProductPageContext);

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentStripe, setPaymentStripe] = useState(false);
  const [errorPayment, setErrorPayment] = useState(false);

  const [cartStorage, setCartStorage] = useState(() => {
    let carts;

    if (typeof window !== "undefined") {
      carts = localStorage.getItem("cartStorage");
    }
    return carts ? JSON.parse(carts) : [];
  });

  const totalPrice = cartStorage.reduce((acc, item) => acc + item.price, 0);

  const [deliveryDetails, setDeliveryDetails] = useState(() => {
    let storage;

    if (typeof window !== "undefined") {
      storage = localStorage.getItem("delivery");
    }
    return storage
      ? JSON.parse(storage)
      : {
          name: "",
          sureName: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          postcode: "",
          email: "",
          confirmEmail: "",
          phone: "",
          delivery: "",
        };
  });

  useEffect(() => {
    const fetchClientSecret = () => {
      window
        .fetch("https://www.robdiamond-be.co.uk/api/client-secret/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartStorage),
        })
        .then((res) => res.json())
        .then((jsonData) => {
          setClientSecret(jsonData.client_secret);
          // Make sure to delete console log
          console.log(jsonData.client_secret);
          console.log(cartStorage);
        });
    };
    if (cartStorage.length > 0) {
      fetchClientSecret();
    }
  }, []);

  // Make Card Payment
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          address: {
            city: deliveryDetails.city,
            country: "GB",
            line1: deliveryDetails.addressLine1,
            line2: deliveryDetails.addressLine2,
            postal_code: deliveryDetails.postcode,
          },
          email: deliveryDetails.email,
          name: deliveryDetails.name + deliveryDetails.sureName,
          phone: deliveryDetails.phone,
        },
      },
    });

    if (result.error) {
      setErrorPayment(true);
      // Need to display an error message to the user
      console.log("This is the error message" + result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        // Send Cart Data to the backend addOrder View
        const cartData = {
          cartStorage,
          deliveryDetails,
          delivery,
        };
        // Post Fetch to addOrder View
        fetch("https://www.robdiamond-be.co.uk/api/addorder/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        }).then(() => {
          console.log("Reached here");
          setOrderConfirmation(true);
          localStorage.removeItem("delivery");
          localStorage.removeItem("cartStorage");
          setCart([]);
        });
      }
    }
  };

  const [invalid, setInvalid] = useState({
    name: null,
    sureName: null,
    city: null,
    email: null,
    phone: null,
  });

  const [finalCheckAlert, setFinalCheckAlert] = useState([]);
  const [collapseStep1, setCollapseStep1] = useState(false);
  const [collapseStep2, setCollapseStep2] = useState(false);
  const [delivery, setDelivery] = useState("Standard");
  const [review, setReview] = useState(false);

  // Form Validation
  const checkRequired = () => {
    const filledOut = [];
    Object.entries(deliveryDetails).map((item) => {
      console.log(item);
      if (item[0] !== "addressLine2" && item[0] !== "delivery") {
        if (deliveryDetails[item[0]] === "") {
          setFinalCheckAlert((finalCheckAlert) => [
            ...finalCheckAlert,
            item[0],
          ]);
        } else {
          filledOut.push(item);
        }
      } else {
        filledOut.push(item);
      }
    });
    if (filledOut.length === 10) {
      let newDeliveryDetails = {};
      filledOut.map((item) => (newDeliveryDetails[item[0]] = item[1]));
      setCollapseStep1(true);
      setCollapseStep2(false);
      localStorage.setItem("delivery", JSON.stringify(newDeliveryDetails));
    }
  };

  const handlePhone = (e) => {
    if (!e.target.validity.valid) {
      setDeliveryDetails({
        ...deliveryDetails,
        [e.target.name]: e.target.value,
      });
      setInvalid({ ...invalid, phone: true });
    } else {
      setDeliveryDetails({
        ...deliveryDetails,
        [e.target.name]: e.target.value,
      });
      setInvalid({ ...invalid, phone: null });
    }
  };

  const handleChange = (e) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [e.target.name]: e.target.value,
    });
  };

  const finalFormValidation = () => {
    if (finalCheckAlert.length > 0) {
      setFinalCheckAlert([]);
    }
    checkRequired();
  };

  const handleDeliveryMethod = () => {
    setCollapseStep2(true);
    deliveryDetails.delivery = delivery;
    localStorage.setItem("delivery", JSON.stringify(deliveryDetails));
    setReview(true);
    setPaymentStripe(true);
  };

  const handleEditMethod = () => {
    setReview(false);
    setCollapseStep1(false);
    setPaymentStripe(false);
  };

  const handleEditMethod2 = () => {
    setReview(false);
    setCollapseStep2(false);
    setPaymentStripe(false);
  };

  return (
    <>
    {/* <Meta /> */}
      {!orderConfirmation && (
        <>
          <div className={styles.checkoutHeader}>Checkout</div>
          <Link href="/Cart">
            <div className={styles.breadCrumbs}>
              <a>Back</a>
            </div>
          </Link>

          {/* Step 1 Titel Content*/}
        <div className={styles.tabletContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.numberTitleContainer}>
              <div className={styles.number}>
                <a>1</a>
              </div>
              <div className={styles.title}>Delivery Details</div>
            </div>
            <div
              className={collapseStep1 ? styles.edit : styles.displayNone}
              onClick={handleEditMethod}
            >
              <a>Edit</a>
            </div>
          </div>
          <div className={styles.greyBreak}></div>
          {/* Step 2 */}
          <div
            className={
              collapseStep1 ? styles.step2Container : styles.displayNone
            }
          >
            <div className={styles.titleContainer}>
              <div className={styles.numberTitleContainer}>
                <div className={styles.number}>
                  <a>2</a>
                </div>
                <div className={styles.title}>Delivery Method</div>
              </div>
              <div
                className={collapseStep2 ? styles.edit : styles.displayNone}
                onClick={handleEditMethod2}
              >
                <a>Edit</a>
              </div>
            </div>
            <div className={styles.container}>
              <div className={collapseStep2 ? styles.displayNone : undefined}>
                <div
                  className={
                    delivery === "Standard"
                      ? styles.boxParentContainer
                      : styles.boxNoSelect
                  }
                  onClick={() => setDelivery("Standard")}
                >
                  <div className={styles.boxLeftContainer}>
                    <div
                      className={
                        delivery === "Standard"
                          ? styles.circle
                          : styles.noSelect
                      }
                    ></div>

                      <div className={styles.itemContent}>
                        <h3>Standard Delivery</h3>
                        <div>Delivery Within 2-4 days (Excluding Sunday)</div>
                      </div>
                  </div>
                  <div>£2.99</div>
                </div>
                <div
                  className={
                    delivery === "Express"
                      ? styles.boxParentContainer
                      : styles.boxNoSelect
                  }
                  onClick={() => setDelivery("Express")}
                >
                  <div className={styles.boxLeftContainer}>
                    <div
                      className={
                        delivery === "Express" ? styles.circle : styles.noSelect
                      }
                    ></div>
                    <div className={styles.itemContent}>
                      <h3>Express Delivery</h3>
                      <div>
                        Next Day Delivery on orders placed by 8pm (Excluding
                        Saturdays and Bank Holidays)
                      </div>
                    </div>
                  </div>
                  <div>£5.99</div>
                </div>
                <div className={styles.button} onClick={handleDeliveryMethod}>
                  <a>NEXT {">"} PAYMENT</a>
                </div>
              </div>
            </div>
            <div className={styles.greyBreak}></div>
            <div className={review ? styles.container : styles.displayNone}>
              <div className={styles.orderReview}>Order Review</div>
              <div>
                {`Hi ${deliveryDetails.name}`}. Thank you for shopping with
                ROB DIAMOND
              </div>
              <div>
                {cartStorage.map((item, index) => (
                  <div key={index}>
                    <br />
                    <div>
                      <span className={styles.spanItemName}>{item.name}</span>{" "}
                      is a beautiful item.
                    </div>
                    <div>
                      As expected we will endaevour to expedite the secure
                      delivery of your product in accordance with your chosen
                      delivery method.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Container Step 1 */}
          <div
            className={
              !collapseStep1
                ? styles.deliveryDetailsContainer
                : styles.displayNone
            }
          >
            <div className={styles.input}>
              <input
                name="name"
                type="text"
                placeholder="Name*"
                value={deliveryDetails.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={invalid.name ? styles.warning : styles.displayNone}>
              <p>Invalid Character</p>
            </div>
            <div className={styles.input}>
              <input
                name="sureName"
                type="text"
                placeholder="Surename*"
                value={deliveryDetails.sureName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div
              className={invalid.sureName ? styles.warning : styles.displayNone}
            >
              <p>Invalid Character</p>
            </div>
            <div className={styles.input}>
              <input
                name="addressLine1"
                type="text"
                placeholder="Address Line 1*"
                value={deliveryDetails.addressLine1}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.input}>
              <input
                name="addressLine2"
                type="text"
                placeholder="Address Line 2"
                value={deliveryDetails.addressLine2}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.input}>
              <input
                name="city"
                type="text"
                placeholder="City*"
                value={deliveryDetails.city}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={invalid.city ? styles.warning : styles.displayNone}>
              <p>Invalid Character</p>
            </div>
            <div className={styles.input}>
              <input
                name="postcode"
                type="text"
                placeholder="Postcode*"
                value={deliveryDetails.postcode}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.unitedKingdom}>United Kingdom</div>
            <div className={styles.input}>
              <input
                name="email"
                type="text"
                placeholder="Email*"
                value={deliveryDetails.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.input}>
              <input
                name="confirmEmail"
                type="text"
                placeholder="Confirm Email*"
                value={deliveryDetails.confirmEmail}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div
              className={invalid.email ? styles.warning : styles.displayNone}
            >
              <p>Emails do not match</p>
            </div>
            <div className={styles.input}>
              <input
                name="phone"
                type="tel"
                placeholder="Phone*"
                pattern="^-?[0-9]\d*\.?\d*$"
                value={deliveryDetails.phone}
                onChange={(e) => handlePhone(e)}
              />
            </div>
            <div
              className={invalid.phone ? styles.warning : styles.displayNone}
            >
              <p>Numbers Only Please</p>
            </div>
            <div
              className={
                finalCheckAlert.length > 0
                  ? styles.finalCheck
                  : styles.displayNone
              }
            >
              {finalCheckAlert.map((item, index) => (
                <div key={index} className={styles.notFilledOut}>
                  {`The `}
                  <span className={styles.alert}>
                    {item.toUpperCase()}
                  </span>{" "}
                  {` has not been filled out`}
                </div>
              ))}
            </div>
            <div className={styles.button} onClick={finalFormValidation}>
              <a>NEXT {">"} DELIVERY METHOD</a>
            </div>
          </div>
          <div className={styles.greyBreak}></div>
          <div className={review ? styles.titleContainer : styles.displayNone}>
            <div className={styles.numberTitleContainer}>
              <div className={styles.number}>
                <a>3</a>
              </div>
              <div className={styles.title}>Payment</div>
            </div>
          </div>
          {/* Payment Stripe */}
          {paymentStripe && (
            <div className={styles.paymentContainer}>
              <form onSubmit={handleSubmit}>
                <CardSection />
                <button className={styles.button} disabled={!stripe}>
                  Confirm Order
                </button>
              </form>
            </div>
          )}

          {/* Error Payment */}
          {errorPayment && 
          <div className={styles.errorCard}>There was an error with the Card Payment. The payment did not go through. Please referesh the page to try again</div>
          }

          {/* Order Summary */}
          <div className={styles.orderSummaryTitle}>Order Summary</div>
          <div className={styles.orderSummary}>
            <div className={styles.orderSummaryContent}>SubTotal:</div>
            <div className={styles.orderSummaryContent}>£{totalPrice}</div>
          </div>
          <div className={styles.orderSummary}>
            <div className={styles.orderSummaryContent}>Delivery:</div>
            <div className={styles.orderSummaryContent}>
              {delivery === "Express" ? "£5.99" : "£2.99"}
            </div>
          </div>
          <div className={styles.orderSummary}>
            <div className={styles.orderSummaryContent}>Total:</div>
            <div className={styles.orderSummaryContent}>
              £{totalPrice + (delivery === "Express" ? 5.99 : 2.99)}
            </div>
          </div>

          <div className={styles.greyBreak}></div>
        </div>  
        </>
      )}
      {orderConfirmation && (
        <div className={styles.container}>
          <h2>Order Confirmation</h2>
          <div>
            Thank you for Placing your order. Your Items are being dispatched
            and will be with you shortly.
          </div>
          <div>
            for all enquiries, please drop us a message at contact@robdiamond.co.uk
          </div>
        </div>
      )}
    </>
  );
}

export default Deliverydetails;

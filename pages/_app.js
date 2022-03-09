import '../styles/globals.css'
import Layout from "../components/Layout";
import { ProductProvider } from "../productPageContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(
  "pk_live_51JgseNAB9i0B8xShz7YQSfnBjD0ayARQRcA2YGxo6BJPtdrwLPqUE3VVYahGFT5f2rGA8c3g6s0DIVQ7h5azyqJF00GKRrNcTd"
);

function MyApp({ Component, pageProps }) {
return (
  <Elements stripe={stripePromise}>
      <ProductProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductProvider>
    </Elements>
)
}

export default MyApp

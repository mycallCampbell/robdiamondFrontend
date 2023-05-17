import React from "react";
import styles from "../styles/terms.module.css";
import Footer from "../components/Footer";

function terms() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Terms and Conditions</h3>
      <div className={styles.content}>
        <p>
          By accessing and placing an order with ROB DIAMOND, you confirm that
          you are in agreement with and bound by the terms of service contained
          in the Terms and Conditions outlined below. These terms apply to the
          entire website and any email or other type of communication between
          you and ROB DIAMOND.
        </p>
        <br />
        <p>
          Under no circumstances shall ROB DIAMOND be liable for any direct,
          indirect, special, incidental, or consequential damages, including,
          but not limited to, loss of data or profit, arising out of the use, or
          the inability to use, the materials on this site, even if Posted ltd
          team or an authorized representative has been advised of the
          possibility of such damages. If your use of materials from this site
          results in the need for servicing, repair, or correction of equipment
          or data, you assume any costs thereof.
        </p>
        <br />

        <p>
          ROB DIAMOND will not be responsible for any outcome that may occur
          during the course of usage of our resources. We reserve the right to
          change prices and revise the resource usage policy at any moment.
        </p>
        <br />
        <p>
          ROB DIAMOND grants you a revocable, non-exclusive, non-transferable,
          limited license to download, install and use the website strictly in
          accordance with the terms of this Agreement.
        </p>
        <br />
        <p>
          These Terms and Conditions are a contract between you and ROB DIAMOND
          (referred to in these Terms and Conditions as “ROB DIAMOND“, “us”,
          “we” or “our”), the provider of the ROB DIAMOND website and the
          services accessible from the Posted website (which are collectively
          referred to in these Terms and Conditions as “ROB DIAMOND”).
        </p>
        <br />
        <p>
          You are agreeing to be bound by these Terms and Conditions. If you do
          not agree to these Terms and Conditions, please do not use the ROB
          DIAMOND Service. In these Terms and Conditions, “you” refers both to
          you as an individual and to the entity you represent. If you violate
          any of these Terms and Conditions, we reserve the right to cancel your
          account or block access to your account without notice.
        </p>
        <br />
        <p>
          Definitions and key terms To help explain things as clearly as
          possible in this Terms and Conditions, every time any of these terms
          are referenced, are strictly defined as:
        </p>
        <br />
        <p>
          Cookie: small amount of data generated by a website and saved by your
          web browser. It is used to identify your browser, provide analytics,
          remember information about you such as your language preference or
          login information. Company: when this policy mentions “Company,” “we,”
          “us,” or “our,” it refers to ROB DIAMOND, 32 Hatton Garden, London
          EC1N 8DH that is responsible for your information under this Terms and
          Conditions. Country: where ROB DIAMOND or the owners/founders of ROB
          DIAMOND are based, in this case, is Uk Device: any internet-connected
          device such as a phone, tablet, computer, or any other device that can
          be used to visit ROB DIAMOND and use the services. Service: refers to
          the service provided by ROB DIAMOND as described in the relative terms
          (if available) and on this platform. Third-party service: refers to
          advertisers, contest sponsors, promotional and marketing partners, and
          others who provide our content or whose products or services we think
          may interest you. Website: ROB DIAMONDs site, which can be accessed
          via this URL: www.robdiamond.co.uk You: a person or entity that is
          registered with Posted ltd to use the Services. Restrictions You agree
          not to, and you will not permit others to:
        </p>
      </div>
      <Footer src={"/rolexFooter.jpg"} width={1704} height={700} />
    </div>
  );
}

export default terms;

import React from "react"

import Layout from "../layouts/layout"
import BodySection from "../components/bodySection/bodySection.js"
import Btn from "../components/button/button.js"


class ContactPage extends React.Component {
  render(){
    return(
      <Layout title="contact">
        {/* CONTACT */}
        <BodySection
          sectionID="contact"
          sectionHdr="Keep In Touch!">
          <p>
            Think you have a project or opportunity that I would be a good fit for?<br/>I would love to meet up for a coffee, or simply a chat!
          </p>

          <section className="flexContainer">
            <form
              action="mailto:me@caitlinhaaf.com" method="post">
              <Btn
                buttonTxt="Drop Me A Line"
                buttonStyle="dark"
                buttonIcon="imgs/email.svg"
                iconAlt="Email icon"/>
            </form>

            <form action="https://www.linkedin.com/in/caitlin-haaf-6517487b/" method="get" target="_blank">
              <Btn
                buttonTxt="Visit My LinkedIn"
                buttonStyle="light"
                buttonIcon="imgs/linkedinLogo.svg"
                iconAlt="LinkedIn logo"/>
            </form>

            <form
              action="docs/haafresume_2019.pdf"
              method="get"
              target="_blank">
              <Btn
                buttonTxt="Download Resume"
                buttonStyle="dark"
                buttonIcon="imgs/pdf.svg"
                iconAlt="PDF logo"/>
            </form>
          </section>
        </BodySection>
      </Layout>
    )
  }
}

export default ContactPage;

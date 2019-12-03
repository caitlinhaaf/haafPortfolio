import React from "react";

import SEO from "../components/seo"
import Nav from "../components/nav/nav.js";
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js";

class Layout extends React.Component {
  render() {
    const { children, header, title } = this.props

    return (
      <div>
        <Nav/>
        <SEO title={title} />

        { header && <Header/> }

        <main className="bodyColumn">
          {children}
        </main>

        <Footer/>
      </div>
    )
  }
}

export default Layout

import React from "react";

import SEO from "../components/seo"
import Nav from "../components/nav/nav.js";
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js";

class Layout extends React.Component {
  render() {
    const { children, splashPage, title } = this.props

    return (
      <div>
        <Nav colorVariation={splashPage ? `dark` : `light`}/>
        <SEO title={title} />
      
        { splashPage && <Header/> }

        <main className="bodyColumn">
          {children}
        </main>

        <Footer colorVariation={splashPage ? `dark` : `light`}/>
      </div>
    )
  }
}

export default Layout

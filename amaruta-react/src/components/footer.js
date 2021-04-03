
import React from "react"

function Footer() {
    const date=new Date();
    const year=date.getFullYear();
    return (
        <footer>
            <footer class="fixed">
                &#169; {year}   &nbsp;Made with &#9829; in &#10006;&#10006;&#10006;
            </footer>

        </footer>
        
  );
}

export default Footer;

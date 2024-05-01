if (location.href == "https://www.printsplash.repl.co/")
  import('./back.css')

export default function Home() {
  return (
    <>
      <div id="welcome">Découvrez les produits et nos créations
      <button id="visit" ><a  href="/magasin">Notre Magasin!</a></button>
      </div>
      <div id="about">The <span className="logotag">Print Splash</span> store 57 ,Belveder Casablanca<br/>all rights reserved &copy;</div>
    </>
  )
}

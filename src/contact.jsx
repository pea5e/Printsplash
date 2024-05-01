
export default function Contact() {
  return (
    <>
      <div id="contact">
        <h1>Contact Us</h1>
        <h2>We'd love to Hear from you</h2>
        <div id="form">
          <label>Ton email:</label>
          <input type="email" ></input>
          <label>Message:</label>
          <textarea rows="4" cols="50" maxLength="120"  />
          <button onClick={sendmessage} >Envoyer</button>
          
        </div>
        <div id = "social">
            <a href="mailto:printsplash@gmail.com">printsplash@gmail.com</a>
            <a href="https://www.facebook.com/" ><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/" ><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com/" ><i className="fa-brands fa-instagram"></i></a>
            <br/>
            <a href="tel:0767907528" ><i className="fa-solid fa-phone"></i><i>+212 767-907528</i></a>
        </div>
      </div>
    </>
  )
}

function sendmessage(e)
{
  var email = e.target.parentElement.getElementsByTagName('input')[0].value
  var message = e.target.parentElement.getElementsByTagName('textarea')[0].value
  fetch("https://api.printsplash.repl.co/sendmessage",
        {
            method: "POST", 
            mode: "cors", 
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({"email":email,"message":message}),
        }).then( response => 
                response.json()
            ).then( (data) => location.reload())
}
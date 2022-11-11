import "./Contactform.css";


function contactform() {
  return (
    <div>

<h1>Contact Me </h1>
<p> Please leave a note and I will get back to you within 48 hours. Thanks.</p>
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname" placeholder="First Name" ></input>

<label for="fname" placeholder="Last Name">Last name:</label>
<input type="text" id="lname" name="lname" placeholder="Last Name" ></input>

<label for="fname">Email:</label>
<input type="text" id="lname" name="lname" value="Doe"></input>
<form className="box">
<input type="submit" value="Submit"></input>

</form>
    </div>
  )
}

export default contactform
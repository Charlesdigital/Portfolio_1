import "./Contactform.css";


function contactform() {
  return (
    <div>
<form className="box">
<div className= "header-info">
<h1 c>Contact Me </h1>
<p> Please leave a note and I will get back to you within 48 hours. Thanks.</p>
</div>

<div className="input-info">

<div>
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname" placeholder="First Name" ></input>
</div>
<div >
<label for="fname" placeholder="Last Name">Last name:</label>
<input type="text" id="lname" name="lname" placeholder="Last Name" ></input>
</div>
<div className="email">

<label for="fname">Email:</label>
<input type="text" id="lname" name="lname" value="Doe"></input>
</div>
<div>
<textarea placeholder="message"> </textarea>
<input type="submit" value="Submit"></input>
</div>

</div>

</form>
    </div>
  )
}

export default contactform
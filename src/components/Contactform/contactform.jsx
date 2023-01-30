import "./Contactform.css";


function contactform() {
  return (
    <div>
<form className="box">
<div className= "header-info">
<h1>Contact Me </h1>
<p> Please leave a note and I will get back to you within 48 hours. Thanks.</p>

</div>
<div className="input-info">
<div className="formContainer">

<label for="fname"></label>
<input type="text" id="fname" name="fname" placeholder="Name" size="40" ></input>
</div>

<div className="email">
<label for="fname"></label>
<input type="text" id="lname" name="lname" placeholder="Email" size="40"></input>
</div>
<div>
<textarea placeholder="Message" cols="60" rows="25"></textarea>
<div>
<input type="submit" value="Submit"></input>
</div>
</div>

</div>

</form>
    </div>

  )
}

export default contactform
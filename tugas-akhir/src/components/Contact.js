const Contact = ()  =>{
  return(
  <div className="contact">
      <div className="container">
      <h1 id="header_menu_contact">Contact</h1>
  <form>      
<input name="name" type="text" class="feedback-input" placeholder="Name" />   
<input name="email" type="text" class="feedback-input" placeholder="Email" />
<textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
<input type="submit" value="SUBMIT"/>
</form>
  </div>
  </div>

  );
}

export default Contact;
import React from "react";
import "./Contact.css";


const Contact = () => (

<div id="contact" className="container">
	<h3 className="text-center">Get in touch</h3>
	    <p className="text-center"><em>We are here to help you!</em></p>
			<div className="row">
				<div className="col-md-4">
				<p>Fan? Drop a note.</p>
				<p><span className="glyphicon glyphicon-map-marker"></span>Orlando, US</p>
				<p><span className="glyphicon glyphicon-phone"></span>Phone: +00 1515151515</p>
				<p><span className="glyphicon glyphicon-envelope"></span>Email: mail@mail.com</p>
			</div>
			<div className="col-md-8">
				<div className="row">
					<div className="col-sm-6 form-group">
						<form method="POST" action="https://formspree.io/robydoidao2006@yahoo.com" />
						<input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
								</div>
								<div className="col-sm-6 form-group">
									<input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
								</div>
							</div>
								<textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
									<div className="row">
										<div className="col-md-12 form-group">
											<button className="btn pull-right" type="submit">Send</button>
						</form> 
						</div>
			</div>
		</div>
</div>

);

export default Contact;
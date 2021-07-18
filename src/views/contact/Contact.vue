<template>
  <section id="contact">
  
<div class="container">
	<div class="row">
			<h4 style="text-align:center">We'd love to hear from you!</h4>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" style="float:right;">
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
</div>

<div class="ratingCard">
    <h2>Happy with us?</h2>
    <form method="post">
       <p class="p_class">
          <input id="radio1" type="radio" name="radio_rate" value="5">
            <label for="radio1">&#9786;</label>
          <input id="radio2" type="radio" name="radio_rate" value="4">
            <label for="radio2">&#9786;</label>
          <input id="radio3" type="radio" name="radio_rate" value="3">
            <label for="radio3">&#9786;</label>
          <input id="radio4" type="radio" name="radio_rate" value="2">
            <label for="radio4">&#9786;</label>
          <input id="radio5" type="radio" name="radio_rate" value="1">
            <label for="radio5">&#9786;</label>
      </p>
    </form>  
  </div>
<div class="footer-social-icons">
    <h4 class="_14">Follow us on</h4>
    <ul class="social-icons">
        <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
        <li><a href="https://twitter.com/elayagmur98" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
        <li><a href="tel:1-212-555-5555" class="contact-text phone"> <i class="fa fa-phone fa-2x"></i></a></li>
        <li><a href="http://www.linkedin.com/in/ela-yagmur" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
        <li><a href="https://github.com/Elayagmur" class="social-icon"> <i class="fa fa-github"></i></a></li>
    </ul>
</div>
<br>
</section>  
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #000;
  padding-bottom: 100px;
}

#contact {
  width: 100%;
  height: 100%;
}

body {
    background: linear-gradient(to left, #FF6347, #FFA500);
    padding-top: 85px;
}

h4 {
    font-family: 'Roboto', sans-serif, 'arial';
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    color: #bd2323;
    margin-top: 10px;
    line-height: 1.5;
}
input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
    font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
}

.styled-input {
    float: left;
    width: 293px;
    margin: 1rem 0;
    position: relative;
    border-radius: 4px;
}

@media only screen and (max-width: 768px){
    .styled-input {
        width:100%;
    }
}

.styled-input label {
    color: #bd2323;
    padding: 1.3rem 30px 1rem 30px;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
}

.styled-input.wide { 
    width: 650px;
    max-width: 100%;
}

input,
textarea {
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #d8d6d6;
    color:#bd2323;
    border-radius: 4px;
}

input:focus,
textarea:focus { outline: 0; }

input:focus ~ span,
textarea:focus ~ span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
}

textarea {
    width: 100%;
    min-height: 15em;
}

.input-container {
    width: 650px;
    max-width: 100%;
    margin: 20px auto 25px auto;
}

.submit-btn {

    padding: 7px 35px;
    border-radius: 60px;
    display: inline-block;
    background-color: #bd2323;
    color: white;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
              0 2px 10px 0 rgba(0,0,0,0.07);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
}

.submit-btn:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
              0 1px 1px 0 rgba(0,0,0,0.09);
}

@media (max-width: 768px) {
    .submit-btn {
        width:100%;
        float: none;
        text-align:center;
    }
}

input[type=checkbox] + label {
  color: #ccc;
  font-style: italic;
} 

input[type=checkbox]:checked + label {
  color: #f00;
  font-style: normal;
}
/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: white;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: white;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: black;
  text-decoration: none;
}

@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);
.ratingCard{
  padding: 40px;
  width: 270px;
 background: linear-gradient(to left, #FF6347, #FFA500);
  margin: 100px auto 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  
}
input[type="radio"] {
  display: none;
}
label{
  color: grey;
  text-shadow: 1px 1px 1px #c9c9c9;
  font-size: 25px;
}

form p {
  text-align: center;
  font-size: 20px;
}
form input[type="submit"]{
  width: 100%;
  height: 36px;
  display: block;
  position: relative;
  border: 0px;
  color: #fff;
  background-color: #4d90fe;
}

.p_class{
  direction: rtl;
  unicode-bidi: bidi-override;
}
form input[type="submit"]:hover{
  border: 0px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  background-color: #357ae8;
  cursor: pointer;
}

label:hover, label:hover ~ label {
  color: orange;
  cursor:pointer;
}

input[type="radio"]:checked ~ label {
  color: orange;
}

@import url(https://fonts.googleapis.com/css?family=Lato);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
body {
    font-family: 'Lato', sans-serif;
    color: #FFF;
    text-align: center;
   
}
a {
    text-decoration: none;
    color: #fff;
}
p > a:hover{
    color: #d9d9d9;
    text-decoration:  underline;
}
h1,
h2,h3,h4,h5,h6 {
    margin:  1% 0 1% 0;
}
._12 {
    font-size: 1.2em;
}
._14 {
    font-size: 1.4em;
}
ul {
    padding:0;
    list-style: none;
}
.footer-social-icons {
    width: 350px;
    display:block;
    margin: 0 auto;
    padding-left: 10px;
}
.social-icon {
    color: #fff;
}
ul.social-icons {
    margin-top: 10px;
}
.social-icons li {
    vertical-align: top;
    display: inline;
    height: 100px;
}
.social-icons a {
    color: #fff;
    text-decoration: none;
}
.fa-facebook {
    padding:10px 14px;
    background-color: #FF6347;
}
.fa-facebook:hover {
    background-color: #3d5b99;
}
.fa-twitter {
    padding:10px 12px;
    background-color:#FFA500;
}
.fa-twitter:hover {
    background-color: #00aced;
}
.phone{
  font-size:0.7em;
   margin-left:0;
}
.fa-phone{
     padding:7px 12px;
    background-color: #FF6347;
}
.fa-phone:hover {
    background-color: #5e5c5a;
}
.fa-linkedin {
    padding:10px 14px;
    background-color:#FFA500;
}
.fa-linkedin:hover {
    background-color: #0073a4;
}
.fa-github {
    padding:10px 14px;
    background-color: #FF6347;
}
.fa-github:hover {
    background-color: #5a32a3;
}
</style>
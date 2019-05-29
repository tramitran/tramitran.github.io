@import url(http://fonts.googleapis.com/css?family=Oswald);

body {
	background-color: #000;
	font-family: 'Oswald', 'Futura', sans-serif;
	margin: 0; 
	padding: 0;}

#page {
	background-color: #403c3b;
	margin: 0 auto 0 auto;}
	/* Responsive page rules at bottom of style sheet */

h1 {
	background-image: url(http://javascriptbook.com/code/c05/images/kinglogo.png);
	background-repeat: no-repeat;
	background-position: center center;
	text-align: center;
	text-indent: -1000%;
	height: 75px;
	line-height: 75px;
	width: 117px;
	margin: 0 auto 0 auto;
	padding: 30px 10px 20px 10px;}

h2 {
	color: #fff;
	font-size: 24px;
	font-weight: normal;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: .2em;
	margin: 0 0 23px 0;}

h2 span {
	border-radius: 50%;
	background-color: #000;
	font-size: 10px;
  text-align: center;
  display: inline-block;
  position: relative;
  top: -5px;
  height: 18px;
  width: 20px;
  margin-left: 5px;
  padding: 4px 0 0 4px;}

ul {
	background-color: #584f4d;
	border:none;
	padding: 0;
	margin: 0;}

li {
	background-color: #ec8b68;
	color: #fff;
	border-top: 1px solid #fe9772;
	border-bottom: 1px solid #9f593f;
	font-size: 24px;
	letter-spacing: .05em;
	list-style-type: none;
	text-shadow: 2px 2px 1px #9f593f;
	height: 50px;
	padding-left: 1em;
	padding-top: 10px;}

.hot {
	background-color: #d7666b;
	color: #fff;
	text-shadow: 2px 2px 1px #914141;
	border-top: 1px solid #e99295;
	border-bottom: 1px solid #914141;}

.cool {
	background-color: #6cc0ac;
	color: #fff;
	text-shadow: 2px 2px 1px #3b6a5e;
	border-top: 1px solid #7ee0c9;
	border-bottom: 1px solid #3b6a5e;}

.complete {
  background-color: #999;
	color: #fff;
	background-image: url("../images/icon-trash.png");
	background-position: center, right;
	background-repeat: no-repeat;
	border-top: 1px solid #666;
	text-shadow: 2px 2px 1px #333;}

li a {
	color: #fff;
	text-decoration: none;
	background-image: url("../images/icon-link.png");
	background-position: center, right;
	background-repeat: no-repeat;
    padding-right: 36px;}

p {
	color: #403c3b; 
	background-color: #fff;
	border-radius: 5px;
	text-align: center;
	padding: 10px;
	margin: 20px auto 20px auto;
	min-width: 20%; 
	max-width: 80%; }

#scriptResults {
	padding-bottom: 10px;}

/* Small screen - acts like the app would */
@media only screen and (max-width: 500px) {
    body {
        background-color: #584f4d;
    }
    #page {
        max-width: 480px;
    }
}
@media only screen and (min-width: 501px) and (max-width: 767px) {
    #page {
        max-width: 480px;
        margin: 20px auto 20px auto;
    }
}
@media only screen and (min-width: 768px) and (max-width: 959px) {
    #page {
        max-width: 480px;
        margin: 20px auto 20px auto;
    }
}
/* Larger screens act like a demo for the app */
@media only screen and (min-width: 960px) {
    #page {
        max-width: 480px;
        margin: 20px auto 20px auto;
   	}
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { 
    h1{
        background-image: url(../img/2xkinglogo.png);
        background-size: 72px 72px;
    }
}

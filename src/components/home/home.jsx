import React from 'react';
import Puff from './assets/img/logo/logo-default.png';
import BG from './assets/img/bg/img-bg-34.jpg';
import TW from './assets/img/other/twconnect.png';
import './assets/css/core/bootstrap.css';
import './assets/css/core/animate.min.css'
import "./assets/css/main/main.css"
import "./assets/css/main/setting.css"
import "./assets/css/main/hover.css"
import "./assets/css/magnific/magic.min.css"
import "./assets/css/magnific/magnific-popup.css"
import "./assets/css/magnific/magnific-popup-zoom-gallery.css"
// import "./assets/css/owl-carousel/owl.carousel.css"
// import "./assets/css/owl-carousel/owl.theme.css"
import "./assets/css/owl-carousel/owl.transitions.css"
import "./assets/css/color/pasific.css"
import "./assets/css/icon/font-awesome.css"
import "./assets/css/icon/et-line-font.css"

/* JS scripts */

// import "./assets/js/core/jquery.min.js"
// import "./assets/js/core/bootstrap.min.js"
// import "./assets/js/magnific-popup/jquery.magnific-popup.min.js"
// import "./assets/js/magnific-popup/magnific-popup-zoom-gallery.js"
// import "./assets/js/progress-bar/bootstrap-progressbar.js"
// import "./assets/js/progress-bar/bootstrap-progressbar-main.js"
// import "./assets/js/text-rotator/jquery.simple-text-rotator.min.js"
// import "./assets/js/particle/particles.min.js"
// import "./assets/js/particle/particles.main2.js"
// import "./assets/js/main/jquery.appear.js"
// // import "./assets/js/main/isotope.pkgd.min.js"
// import "./assets/js/main/parallax.min.js"
// import "./assets/js/main/jquery.countTo.js"
// import "./assets/js/main/owl.carousel.min.js"
// // import "./assets/js/main/jquery.sticky.js"
// import "./assets/js/main/imagesloaded.pkgd.min.js"
// import "./assets/js/main/main.js"

export var showHome = true;

export default class HomeComponent extends React.Component {
    render() {
        return (
    <div  id="page-top" data-spy="scroll" data-target=".navbar" data-offset="100">
        
        {/* <!-- Page Loader
        ===================================== --> */}
		<div id="pageloader">
			<div className="loader-item">
                <img src={Puff} alt="page loader" />
            </div>
		</div>
        
        <a href="#page-top" className="go-to-top">
            <i className="fa fa-long-arrow-up"></i>
        </a>
        
        <div id="particles-js2"></div>
        
{/* <!-- Navigation Area
        ===================================== --> */}
        <nav className="navbar navbar-pasific navbar-mp megamenu navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">
                        <img src={Puff} alt="logo" />
                        Pasific
                    </a>
                </div>
        
                <div className="navbar-collapse collapse navbar-main-collapse">
                    <ul className="nav navbar-nav">
                        <li className="dropdown megamenu-fw has-dropdown-menu"><a href="#" data-toggle="dropdown" className="dropdown-toggle color-light">Home </a>
                        </li>
                        <li className="dropdown megamenu-fw"><a href="#" data-toggle="dropdown" className="dropdown-toggle color-light">Page </a>
                        </li>
                        <li className="dropdown"><a href="#" data-toggle="dropdown" className="dropdown-toggle color-light">Shortcode  </a>
                        </li>
                    
                        <li className="dropdown"><a href="#" data-toggle="dropdown" className="dropdown-toggle color-light">Portfolio </a>
                        </li>
                    
                        <li className="dropdown"><a href="#" data-toggle="dropdown" className="dropdown-toggle color-light">Blog </a>
                        </li>
                        
                        <li className="dropdown"><a href="#" data-toggle="dropdown" className="dropdown-toggle color-light">Shop </a>
                        </li>
                        <li><a href="#" data-toggle="modal" data-target="#searchModal"><i className="fa fa-search fa-fw color-pasific"></i></a></li>
                        
                    </ul>
                
                </div>
            </div>
        </nav>
       
        
        {/* <!-- Login Modal Dialog Box
        ===================================== --> */}
        <div id="loginModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

                {/* <!-- modal content start --> */}
                <div className="modal-content">
                    <div className="modal-header bg-gray">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h5 className="modal-title text-center"><i className="fa fa-lock fa-fw"></i> Sign In</h5>
                    </div>
                    <div className="modal-body pt25">
                        <div className="text-center">
                            <span className="color-dark">Sign in with your social account</span><br/>
                            <a href="#">
                                <img src={BG} alt="" className="mt10 mb10" />
                            </a>
                            <a href="#">
                                <img src={TW} alt="" className="mt10 mb10" /><br/><br/>
                            </a>
                            <span className="color-dark">- Or sign in with your email address -</span>
                        </div>
                        
                        <form className="form-horizontal mt25 ml50">
                          <div className="form-group">
                            <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-8">
                              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-8">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-8">
                              <button type="submit" className="button button-pasific button-block">Sign in</button>
                                
                            </div>
                          </div>
                        </form>
                    </div>
                    <div className="modal-footer bg-gray">
                        <span className="text-center">Don't have an account? <a href="#" className="color-dark">Register Now</a></span>
                    </div>
                </div>
                {/* <!-- modal content end --> */}

            </div>
        </div>
        
        
        {/* <!-- Search Modal Dialog Box
        ===================================== --> */}
        <div id="searchModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

                {/* <!-- modal content start --> */}
                <div className="modal-content">
                    <div className="modal-header bg-gray">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h5 className="modal-title text-center"><i className="fa fa-search fa-fw"></i> Search here</h5>
                    </div>
                    <div className="modal-body">                        
                        <form action="#" className="inline-form">
                            <input type="text" className="modal-search-input" autofocus />
                        </form>
                    </div>
                    <div className="modal-footer bg-gray">
                        <span className="text-center"><a href="#" className="color-dark">Advanced Search</a></span>
                    </div>
                </div>
                {/* <!-- modal content end --> */}

            </div>
        </div>
        
        
        {/* <!-- Canvas Area
        ===================================== -->        */}
        <header className="intro bg-dark3" style={{background:(require("./assets/img/bg/img-bg-34.jpg")) +'50%' +'50%'}}>            
            <div className="intro-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h1 className="brand-heading-big text-capitalize font-pacifico mt-100 color-light animated" data-animation="fadeInUp" data-animation-delay="100">
                                <span className="rotate">Pasific Winter Season, Modern Web Template, Responsive Ready</span>
                            </h1>
                            <p className="intro-text mt25 color-gray animated" data-animation="fadeInUp" data-animation-delay="200">The simplest way to create website <br/>and make your dream live.</p>
                            <a className="button button-pasific button-lg hover-ripple-out animated" data-animation="fadeInUp" data-animation-delay="300">Purchase Now</a>
                        </div>
                    </div>
                </div>
                
                <div className="intro-direction">
                    <a href="#welcome">
                        <div className="mouse-icon"><div className="wheel"></div></div>
                    </a>
                </div>
                
            </div>
        </header>
        
        
        {/* <!-- Welcome Area
        ===================================== --> */}
        <div id="welcome" className="pt75 bg-dark3">
            <div className="container">
                <div className="row">                    
                    {/* <!-- title start --> */}
                    <div className="col-md-12 text-center">
                        <h1 className="font-size-normal color-green">
                            <small className="color-pasific alpha10">Welcome to Pasific</small>
                            We Are Smart Creative Agency
                            <small className="heading heading-solid center-block"></small>
                        </h1>
                    </div>
                    {/* <!-- title end --> */}
                    
                    {/* <!-- title description start --> */}
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <p className="color-light alpha6">
                            <span className="lead color-light"><strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</strong></span><br/><br/>

                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                        </p>
                    </div>
                    {/* <!-- title description end --> */}
                </div>
                
                <div className="row mt50">
                    
                    {/* <!-- item one start --> */}
                    <div className="col-md-3 col-sm-6 col-xs-12 animated" data-animation="fadeInLeft" data-animation-delay="100">
                        <div className="content-box content-box-center">                        
                            {/* <img src="assets/img/flat-icon/briefcase.svg" alt="svg icon" className="img-responsive icon-svg" /> */}
                            <h4 className="color-light">Clean Code</h4>
                            <p className="color-light alpha6">Pellentesque ipsum erat facilisis ut venenatis eu sodales vel dolor.</p>
                      
                        </div>
                    </div>
                    {/* <!-- item one end --> */}
                    
                    {/* <!-- item two start --> */}
                    <div className="col-md-3 col-sm-6 col-xs-12 animated" data-animation="fadeInLeft" data-animation-delay="100">
                        <div className="content-box content-box-center">                        
                            {/* <img src="assets/img/flat-icon/close_up_mode.svg" alt="svg icon" className="img-responsive icon-svg" /> */}
                            <h4 className="color-light">Awesome Icons</h4>
                            <p className="color-light alpha6">Pellentesque ipsum erat facilisis ut venenatis eu sodales vel dolor.</p>
                      
                        </div>
                    </div>
                    {/* <!-- item two end --> */}
                    
                    {/* <!-- item three start --> */}
                    <div className="col-md-3 col-sm-6 col-xs-12 animated" data-animation="fadeInRight" data-animation-delay="100">
                        <div className="content-box content-box-center">                        
                            {/* <img src="assets/img/flat-icon/engineering.svg" alt="svg icon" className="img-responsive icon-svg"b/> */}
                            <h4 className="color-light">Easy to Customize</h4>
                            <p className="color-light alpha6">Pellentesque ipsum erat facilisis ut venenatis eu sodales vel dolor.</p>
                      
                        </div>
                    </div>
                    {/* <!-- item three end --> */}
                    
                    {/* <!-- item four start --> */}
                    <div className="col-md-3 col-sm-6 col-xs-12 animated" data-animation="fadeInRight" data-animation-delay="100">
                        <div className="content-box content-box-center">                        
                            {/* <img src="assets/img/flat-icon/assistant.svg" alt="svg icon" className="img-responsive icon-svg" /> */}
                            <h4 className="color-light">Ready Support</h4>
                            <p className="color-light alpha6">Pellentesque ipsum erat facilisis ut venenatis eu sodales vel dolor.</p>
                      
                        </div>
                    </div>
                    {/* <!-- item four start -->                     */}
                    
                </div>                
            </div>
        </div>
        
        
        {/* <!-- Portfolio Area
        ===================================== -->
        <div id="portfolioGrid" className="bg-dark3">
            <div className="pt50">&nbsp;</div>
            <div className="container bg-dark3 pt30">
                
                <div className="row">
                    <div className="col-md-12">
                        
                        <div className="portfolio center-block">
                            
                            <!-- portfolio item one start -->
                            <div className="portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 wordpress woocommerce" data-category="">
                                <a href="assets/img/portfolio/preview/1.jpg" className="magnific-popup">
                                    <span className="glyphicon glyphicon-search hover-bounce-out"></span>
                                </a>
                                <img src="assets/img/portfolio/thumbs/img-550x350-1.jpg" alt="portfolio woocommerce" className="img-responsive">     
                            </div>
                            <!-- portfolio item one end -->
                            
                            <!-- portfolio item two start -->
                            <div className="portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 joomla html">
                                <a href="assets/img/portfolio/preview/2.jpg" className="magnific-popup">
                                    <span className="glyphicon glyphicon-search hover-bounce-out"></span>
                                </a>
                                <img src="assets/img/portfolio/thumbs/img-550x350-3.jpg" alt="portfolio woocommerce" className="img-responsive">
                            </div>
                            <!-- portfolio item two end -->
                            
                            <!-- portfolio item three start -->
                            <div className="portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 wordpress joomla">
                                <a href="assets/img/portfolio/preview/img-370x165-1.jpg" className="magnific-popup">
                                    <span className="glyphicon glyphicon-search hover-bounce-out"></span>
                                </a>
                                <img src="assets/img/portfolio/thumbs/img-550x350-2.jpg" alt="portfolio woocommerce" className="img-responsive">
                            </div>
                            <!-- portfolio item three end -->
                            
                            <!-- portfolio item four start -->
                            <div className="portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 html wordpress">
                                <a href="assets/img/portfolio/preview/3.jpg" className="magnific-popup">
                                    <span className="glyphicon glyphicon-search hover-bounce-out"></span>
                                </a>
                                <img src="assets/img/portfolio/thumbs/img-550x350-4.jpg" alt="portfolio woocommerce" className="img-responsive">
                            </div>
                            <!-- portfolio item four end -->
                            
                            <!-- portfolio item five start -->                            
                            <div className="portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 html joomla wordpress">
                                <a href="assets/img/portfolio/preview/4.jpg" className="magnific-popup">
                                    <span className="glyphicon glyphicon-search hover-bounce-out"></span>
                                </a>
                                <img src="assets/img/portfolio/thumbs/img-550x350-6.jpg" alt="portfolio woocommerce" className="img-responsive">
                            </div>                            
                            <!-- portfolio item five end -->
                            
                            <!-- portfolio item six start -->
                            <div className="portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 html shopify joomla">
                                <a href="assets/img/portfolio/preview/5.jpg" className="magnific-popup">
                                    <span className="glyphicon glyphicon-search hover-bounce-out"></span>
                                </a>
                                <img src="assets/img/portfolio/thumbs/img-550x350-5.jpg" alt="portfolio woocommerce" className="img-responsive">
                            </div>
                            <!-- portfolio item six end -->
                            
                            <!-- portfolio item seven start -->                            
                            <div className="portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 wordpress magento woocommerce">
                                <a href="assets/img/portfolio/preview/6.jpg" className="magnific-popup">
                                    <span className="glyphicon glyphicon-search hover-bounce-out"></span>
                                </a>
                                <img src="assets/img/portfolio/thumbs/img-550x350-7.jpg" alt="portfolio woocommerce" className="img-responsive">                                
                            </div>
                            <!-- portfolio item seven end -->
                            
                            <!-- portfolio item eight start -->                            
                            <div className="portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 joomla html">
                                <a href="assets/img/portfolio/preview/7.jpg" className="magnific-popup">
                                    <span className="glyphicon glyphicon-search hover-bounce-out"></span>
                                </a>
                                <img src="assets/img/portfolio/thumbs/img-550x350-8.jpg" alt="portfolio woocommerce" className="img-responsive">
                            </div>
                            <!-- portfolio item eight end -->
       
                        </div><!-- portfolio end -->
                        
                    </div><!-- col-md-12 end -->
                </div><!-- row end -->
            </div><!-- container end -->
        </div><!-- section portfolio end -->
        
        
        <!-- Service Area
        ===================================== -->
        <div id="service" className="bg-dark3 pt75 pb100">
            <div className="container">
                <div className="row">
                    <!-- title start -->
                    <div className="col-md-12 text-center">
                        <h1 className="font-size-normal color-cyan">
                            <small className="color-pasific alpha10">Modern Services</small>
                            We Build Web &amp; App
                            <small className="heading heading-solid center-block"></small>
                        </h1>
                    </div>
                    <!-- title end -->
                    
                    <!-- title description start -->
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <p className="color-light alpha6">
                            <span className="lead color-light"><strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</strong></span>
                        </p>
                    </div>
                    <!-- title description end -->
                </div>
                <!-- title and short description end -->
                
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 pt50 pb75">
                        <img src="assets/img/other/img-other-18.png" alt="service" className="img-responsive center-block">
                    </div>
                </div>
                
                <div className="row">
                    
                    <div className="col-md-4 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-icon-o content-box-left-icon">                        
                            <i className="fa fa-wordpress color-pasific"></i>
                            <h5 className="color-light">Wordpress</h5>               
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit commodi pariatur magni omnis reiciendis architecto.</p>
                      
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-icon-o content-box-left-icon">                        
                            <i className="fa fa-joomla color-green"></i>
                            <h5 className="color-light">Joomla</h5>               
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit commodi pariatur magni omnis reiciendis architecto.</p>
                      
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-icon-o content-box-left-icon">                        
                            <i className="fa fa-drupal color-blue"></i>
                            <h5 className="color-light">Drupal</h5>               
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit commodi pariatur magni omnis reiciendis architecto.</p>                      
                        </div>
                    </div>              
                    
                    <div className="col-md-4 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-icon-o content-box-left-icon">                        
                            <i className="fa fa-html5 color-yellow"></i>
                            <h5 className="color-light">HTML5</h5>               
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit commodi pariatur magni omnis reiciendis architecto.</p>
                      
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-icon-o content-box-left-icon">                        
                            <i className="fa fa-mobile color-purple"></i>
                            <h5 className="color-light">Mobile App</h5>               
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit commodi pariatur magni omnis reiciendis architecto.</p>
                      
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-icon-o content-box-left-icon">                        
                            <i className="fa fa-gears color-purple"></i>
                            <h5 className="color-light">Customization</h5>               
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit commodi pariatur magni omnis reiciendis architecto.</p>
                      
                        </div>
                    </div>
                    
                </div>               
                
            </div><!-- container end -->
        </div><!-- section service end -->
        
        
        <!-- Team Area
        ===================================== -->
        <div id="team" className="bg-dark3 pt75" style="background:url(assets/img/bg/img-bg-33.jpg) 50% 40% no-repeat;">
            <div className="container">
                
                <!-- title and short description start -->
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="font-size-normal color-blue">
                            <small className="color-pasific alpha10">Amazing Team</small>
                            We have a lot of Smart People
                            <small className="heading heading-solid center-block"></small>
                        </h1>
                    </div>

                    <div className="col-md-8 col-md-offset-2 text-center">
                        <p className="color-light alpha6">
                            <span className="lead color-light"><strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</strong></span>
                        </p>
                    </div>
                </div>
                <!-- title and short description end -->
                
            </div>
            
            <div className="container">            
                <div className="row">
                    
                    <!-- team member one start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 hover-wobble-vertical mt30">                    
                        <div className="team team-four bg-info">
                            <h5>Harry Doe<small className="color-light alpha7">App Designer</small></h5>                            
                            <img src="assets/img/team/7-1.jpg" alt="" className="img-responsive">
                            <div className="team-social">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-github"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>                    
                    </div>
                    <!-- team member one end -->
                    
                    <!-- team member two start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 hover-wobble-vertical mt30">                    
                        <div className="team team-four bg-cyan">
                            <h5>Harry Doe<small className="color-light alpha7">App Designer</small></h5>                            
                            <img src="assets/img/team/8-1.jpg" alt="" className="img-responsive">
                            <div className="team-social">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-github"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>                    
                    </div>
                    <!-- team member two end -->
                    
                    <!-- team member three start -->                    
                    <div className="col-md-3 col-sm-6 col-xs-12 hover-wobble-vertical mt30">                    
                        <div className="team team-four bg-green">
                            <h5>Harry Doe<small className="color-light alpha7">App Designer</small></h5>                            
                            <img src="assets/img/team/9-1.jpg" alt="" className="img-responsive">
                            <div className="team-social">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-github"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>                    
                    </div>
                    <!-- team member three end -->
                    
                    <!-- team member four start -->                    
                    <div className="col-md-3 col-sm-6 col-xs-12 hover-wobble-vertical mt30">                    
                        <div className="team team-four bg-blue">
                            <h5>Harry Doe<small className="color-light alpha7">App Designer</small></h5>                            
                            <img src="assets/img/team/10-1.jpg" alt="" className="img-responsive">
                            <div className="team-social">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-github"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </div>                    
                    </div>
                    <!-- team member four end -->
                    
                </div><!-- row end -->                
                
                
                <!-- Skill Area -->
                <div id="progressBar2" className="row">
                    
                    <!-- left skill start -->
                    <div className="col-sm-6 col-md-6">
                        <h5 className="text-uppercase font-montserrat color-dark text-center mb25">Design Skills</h5>

                        <!-- skill one start -->
                        <h5 className="text-right color-light">Adobe Photoshop</h5>
                        <div className="progress-transparent progress-xs progress-circle right">
                            <div className="progress-bar bg-primary" role="progressbar" data-transitiongoal="40"></div>
                        </div>
                        <!-- skill one end -->

                        <!-- skill two start -->
                        <h5 className="text-right color-light">Adobe Illustrator</h5>
                        <div className="progress-transparent progress-sm progress-circle right">
                            <div className="progress-bar bg-success" role="progressbar" data-transitiongoal="60"></div>
                        </div>
                        <!-- skill two end -->

                        <!-- skill three start -->
                        <h5 className="text-right color-light">Adobe InDesign</h5>
                        <div className="progress-transparent progress-md progress-circle right">
                            <div className="progress-bar bg-info" role="progressbar" data-transitiongoal="80"></div>
                        </div>
                        <!-- skill three end -->

                        <!-- skill four start -->
                        <h5 className="text-right color-light">Sketch</h5>
                        <div className="progress-transparent progress-lg progress-circle right">
                            <div className="progress-bar bg-pasific" role="progressbar" data-transitiongoal="95"></div>
                        </div>
                        <!-- skill four end -->
                    </div>
                    <!-- left skill end -->
                    
                    <!-- right skill start -->
                    <div className="col-sm-6 col-md-6">
                        <h5 className="text-uppercase font-montserrat color-dark text-center mb25">CMS Programming Skills</h5>

                        <!-- skill five start -->
                        <h5 className="color-light">Wordpress</h5>
                        <div className="progress-transparent progress-circle progress-xs">
                            <div className="progress-bar bg-primary" role="progressbar" data-transitiongoal="40"></div>
                        </div>
                        <!-- skill five end -->

                        <!-- skill six start -->
                        <h5 className="color-light">WooCommerce</h5>
                        <div className="progress-transparent progress-circle progress-sm">
                            <div className="progress-bar bg-success" role="progressbar" data-transitiongoal="60"></div>
                        </div>
                        <!-- skill six end -->

                        <!-- skill seven start -->
                        <h5 className="color-light">Opencart</h5>
                        <div className="progress-transparent progress-circle progress-md">
                            <div className="progress-bar bg-info" role="progressbar" data-transitiongoal="80"></div>
                        </div>
                        <!-- skill seven end -->

                        <!-- skill eight start -->
                        <h5 className="color-light">Shopify</h5>
                        <div className="progress-transparent progress-circle progress-lg">
                            <div className="progress-bar bg-pasific" role="progressbar" data-transitiongoal="95"></div>
                        </div>
                        <!-- skill eight end -->
                    </div>
                    <!-- right skill end -->
                    
                </div><!-- row end -->

                
                <!-- Fun Fact -->
                <!-- title and short description start -->
                <div className="row mt100">
                    <div className="col-md-8 col-md-offset-2 text-center mb50">                        
                        <h1 className="font-size-normal color-pasific">
                            <small className="color-light">Your Business Partner</small>
                            Better Solution for Better Business
                        </h1>
                        
                    </div>
                </div>
                <!-- title and short description end -->
                
                <div className="row">
                    
                    <!-- fun fact left start -->
                    <div className="col-md-3">
                        <div className="row">
                            
                            <!-- fun fact one start -->
                            <div className="col-md-12 col-sm-6 col-xs-6">
                                <div className="fact">                                    
                                    <div className="fact-number timer" data-perc="387">
                                        <span className="factor color-green"></span>
                                    </div>                                    
                                    <span className="fact-title color-light alpha7">Projects Completed</span>
                                </div>
                            </div>
                            <!-- fun fact one end -->
                            
                            <!-- fun fact two start -->
                            <div className="col-md-12 col-sm-6 col-xs-6">
                                <div className="fact">
                                    <div className="fact-number timer" data-perc="578">
                                        <span className="factor color-cyan"></span>
                                    </div>
                                    <span className="fact-title color-light alpha7">Happy Clients</span>
                                </div>
                            </div>
                            <!-- fun fact two end -->
                            
                        </div>
                    </div>
                    <!-- fun fact left end -->
                    
                    <!-- fun fact right start -->
                    <div className="col-md-3 col-md-push-6">
                        <div className="row">
                            
                            <!-- fun fact three start -->
                            <div className="col-md-12 col-sm-6 col-xs-6">
                                <div className="fact">
                                    <div className="fact-number timer" data-perc="175">
                                        <span className="factor color-purple"></span>
                                    </div>
                                    <span className="fact-title color-light alpha7">Coffee Cups</span>
                                </div>
                            </div>
                            <!-- fun fact three end -->
                            
                            <!-- fun fact four start -->
                            <div className="col-md-12 col-sm-6 col-xs-6">
                                <div className="fact">
                                    <div className="fact-number timer" data-perc="350">
                                        <span className="factor color-green"></span>
                                    </div>
                                    <span className="fact-title color-light alpha7">Cupcakes</span>
                                </div>
                            </div>
                            <!-- fun fact four end -->
                            
                        </div>
                    </div>
                    <!-- fun fact right end -->
                    
                    <div className="col-md-6 col-md-pull-3">
                        <img src="assets/img/other/map.png" alt="macbook" className="img-responsive">
                    </div>
                    
                </div>
                
                <div className="row">
                    <div className="col-sm-8 col-sm-push-2 text-center">
                        <h4 className="pt25 color-light">Have an idea? We will do the rest!</h4>
                        <p className="pb10 color-light alpha8">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <a href="#" className="button button-md button-gray hover-ripple-out"><span className="color-dark">Start Project</span></a>
                    </div>
                </div>
                
            </div><!-- container end -->
        </div><!-- section fun fact end -->
        
        
        <!-- Features Area
        ===================================== -->
        <div id="features" className="bg-dark3 pt75">
            <div className="container">
                
                <!-- title and short description start -->
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="font-size-normal color-yellow">
                            <small className="color-pasific alpha10">Amazing Features</small>
                            Best Template with Tons of Features
                            <small className="heading heading-solid center-block"></small>
                        </h1>
                    </div>

                    <div className="col-md-8 col-md-offset-2 text-center">
                        <p className="color-light alpha6">
                            <span className="lead color-light"><strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</strong></span>
                        </p>
                    </div>
                </div>
                <!-- title and short description end -->
                
                <div className="row mt50">
                    <!-- feature one start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-center content-box-icon-o">
                            <img src="assets/img/flat-icon/multiple_devices.svg" alt="svg icon" className="img-responsive icon-svg">
                            <h4 className="color-light">Mobile Optimized</h4>
                            <p className="color-light alpha8">Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
                        </div>
                    </div>
                    <!-- feature one end -->
                    
                    <!-- feature two start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-center content-box-icon-o">
                            <img src="assets/img/flat-icon/paid.svg" alt="svg icon" className="img-responsive icon-svg">
                            <h4 className="color-light">Shop Ready</h4>
                            <p className="color-light alpha8">Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
                        </div>
                    </div>
                    <!-- feature two end -->
                    
                    <!-- feature three start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-center content-box-icon-o">
                            <img src="assets/img/flat-icon/reading.svg" alt="svg icon" className="img-responsive icon-svg">
                            <h4 className="color-light">Documentation</h4>
                            <p className="color-light alpha8">Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
                        </div>
                    </div>
                    <!-- feature three end -->
                    
                    <!-- feature four start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-center content-box-icon-o">
                            <img src="assets/img/flat-icon/idea.svg" alt="svg icon" className="img-responsive icon-svg">
                            <h4 className="color-light">Unique Idea</h4>
                            <p className="color-light alpha8">Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
                        </div>
                    </div>
                    <!-- feature four end -->
                    
                    <!-- feature five start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-center content-box-icon-o">
                            <img src="assets/img/flat-icon/donate.svg" alt="svg icon" className="img-responsive icon-svg">
                            <h4 className="color-light">Save Money</h4>
                            <p className="color-light alpha8">Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
                        </div>
                    </div>
                    <!-- feature five end -->
                    
                    <!-- feature six start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-center content-box-icon-o">
                            <img src="assets/img/flat-icon/gallery.svg" alt="svg icon" className="img-responsive icon-svg">
                            <h4 className="color-light">One &amp; Multi Pages</h4>
                            <p className="color-light alpha8">Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
                        </div>
                    </div>
                    <!-- feature six end -->
                    
                    <!-- feature seven start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-center content-box-icon-o">
                            <img src="assets/img/flat-icon/close_up_mode.svg" alt="svg icon" className="img-responsive icon-svg">
                            <h4 className="color-light">Flat Icons</h4>
                            <p className="color-light alpha8">Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
                        </div>
                    </div>
                    <!-- feature seven end -->
                    
                    <!-- feature eight start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 mb35">
                        <div className="content-box content-box-center content-box-icon-o">
                            <img src="assets/img/flat-icon/alarm_clock.svg" alt="svg icon" className="img-responsive icon-svg">
                            <h4 className="color-light">Save Your Time</h4>
                            <p className="color-light alpha8">Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
                        </div>
                    </div>
                    <!-- feature eight end -->
                    
                </div><!-- row end -->                
            </div><!-- container end -->
        </div><!-- section feature end -->
        
        
        <!-- SVG Cart Area
        ===================================== -->
        <div className="svg-container2 bg-dark3 pt50">
            <!-- svg start -->
            <svg id="svgLine" xmlns="http://www.w3.org/2000/svg" version="1.1" 
                 width="100%" height="300" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2000 250" preserveAspectRatio="xMinYMax">

                <polygon points="-150,300 200,90 550,140 800,60 1100,150 1400,100 1700,10 1900,50 2500,90 2500,300" 
                         fill="none" stroke="#ff4530">
                </polygon>

                <polyline points="-150,244 200,90 550,140 800,60 1100,150 1400,100 1700,10 1900,50 2500,90 2500,500" 
                          fill="none" stroke="#7668af" stroke-width="0">
                </polyline>                        

                <text x="170" y="20" fill="#5cb85c" style="font-size: 120%; font-weight: 400;">Lines of Code</text>
                <text x="170" y="60" fill="#5cb85c" style="font-size: 250%; font-weight: 300;">120K</text>

                <text x="510" y="60" fill="#ff4530" style="font-size: 120%; font-weight: 400;">Shortcodes</text>
                <text x="520" y="100" fill="#ff4530" style="font-size: 250%; font-weight: 300;">750</text>

                <text x="760" y="0" fill="#b2cc71" style="font-size: 120%; font-weight: 400;">Icons Included</text>
                <text x="760" y="40" fill="#b2cc71" style="font-size: 250%; font-weight: 300;">2000+</text>

                <text x="1060" y="70" fill="#3c88c6" style="font-size: 120%; font-weight: 400;">Happy Clients</text>
                <text x="1060" y="110" fill="#3c88c6" style="font-size: 250%; font-weight: 300;">950</text>

                <text x="1350" y="30" fill="#1abc9c" style="font-size: 120%; font-weight: 400;">Item Sales</text>
                <text x="1350" y="70" fill="#1abc9c" style="font-size: 250%; font-weight: 300;">5,780</text>

                <text x="1650" y="90" fill="#ff4530" style="font-size: 140%; font-weight: 300; font-family: 'Pacifico', cursive;">Counting..</text>

                <ellipse id="svg_1" rx="15" ry="15" cx="200" cy="90" fill="#5cb85c" stroke="#141c27" stroke-width="5"></ellipse>
                <ellipse id="svg_2" rx="10" ry="10" cx="550" cy="140" fill="#ff4530" stroke="#141c27" stroke-width="5"></ellipse>
                <ellipse id="svg_3" rx="15" ry="15" cx="800" cy="60" fill="#b2cc71" stroke="#141c27" stroke-width="5"></ellipse>
                <ellipse id="svg_4" rx="15" ry="15" cx="1100" cy="150" fill="#3c88c6" stroke="#141c27" stroke-width="5"></ellipse>
                <ellipse id="svg_5" rx="10" ry="10" cx="1400" cy="100" fill="#1abc9c" stroke="#141c27" stroke-width="5"></ellipse>
                <ellipse id="svg_6" rx="10" ry="10" cx="1700" cy="10" fill="#a85ad4" stroke="#141c27" stroke-width="5"></ellipse>
                <ellipse id="svg_7" rx="9" ry="9" cx="1900" cy="50" fill="#ff8b34" stroke="#141c27" stroke-width="5"></ellipse>
                <ellipse id="svg_8" rx="6" ry="6" cx="2500" cy="90" fill="#fd40b3" stroke="#141c27" stroke-width="5"></ellipse>
                <ellipse id="svg_9" rx="6" ry="6" cx="2200" cy="90" fill="#fd3635" stroke="#141c27" stroke-width="5"></ellipse>

                <defs>
                  <lineargradient id="BglinierGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop id="BgLinierGradientStop_1" stop-opacity="1" stop-color="#a85ad4" offset="0"></stop>
                      <stop id="BgLinierGradientStop_2" stop-opacity="1" stop-color="#a85ad4" offset="1"></stop>
                  </lineargradient>
                </defs>
            </svg>
            <!-- svg end -->
        </div><!-- svg container end -->
        
        
        <!-- Achievement Area
        ===================================== -->
        <div className="pt50 bg-dark3">
            <div className="container">
                
                <!-- title and short description start -->
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="font-source-sans-pro text-center mb50">                          
                            <small className="heading heading-icon heading-icon-rounded bg-grad-stellar center-block">
                                <i className="fa fa-trophy color-light"></i>
                            </small>
                            <span className="color-pasific">The Best Web &amp; App Developer 2016</span>
                            <small className="heading-desc text-lowercase color-light">
                                Every day, We makes thousands of customers happy.
                            </small>
                        </h2>
                    </div>
                </div>
                <!-- title and short description end -->
                
                <div className="row mb50 text-center">
                    <div className="col-sm-12">
                        <i className="fa fa-android fa-3x mr20 color-light alpha4"></i>
                        <i className="fa fa-apple fa-4x mr20 color-light alpha4"></i>
                        <i className="fa fa-amazon fa-4x mr20 color-light alpha4"></i>
                        <i className="fa fa-windows fa-3x color-light alpha4"></i>
                    </div>
                </div>
                
                <div className="col-md-12">
                    <img src="assets/img/other/img-other-6.png" alt="device" className="img-responsive center-block">
                </div>
                
            </div><!-- container end -->
        </div><!-- section achievment end -->
        
        
        <!-- Price Area
        ===================================== -->
        <div id="price" className="bg-dark3 pt75 pb30">
            <div className="container pb50">

                <!-- title start -->
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center mb50">                        
                        <h1 className="font-size-normal color-red">
                            <small className="color-light">Service Prices</small>
                            Family Price for Premium Services
                        </h1>

                    </div>
                </div>
                <!-- title start -->

                <div className="row">

                    <!-- table price one start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 hover-float">
                        <div className="price price-three bg-cyan">
                            <div className="price-header">
                                <span className="color-light"><sup>$</sup>49</span>
                                <h4>Regular</h4>								
                            </div>
                            <div className="price-body">
                                <ul>
                                    <li className="color-light">Two Web Designs</li>
                                    <li className="color-light">Unlimited Revision</li>
                                    <li className="color-light">Free One Year Domain</li>
                                    <li className="color-light">Free Six Months Hosting</li>
                                    <li className="color-light">Free Installation</li>
                                    <li className="color-light">Full Support</li>
                                </ul>
                            </div>
                            <div className="price-footer">

                                <a href="#" className="button-3d button-sm button-rounded button-pasific">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <!-- table price one end -->

                    <!-- table price two start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 hover-float">
                        <div className="price price-three bg-green">
                            <div className="price-badge bg-grad-blood-mary">Recommended</div>
                            <div className="price-header">
                                <span className="color-light"><sup>$</sup>59</span>
                                <h4>Extended</h4>								
                            </div>
                            <div className="price-body">
                                <ul>
                                    <li className="color-light">Two Web Designs</li>
                                    <li className="color-light">Unlimited Revision</li>
                                    <li className="color-light">Free One Year Domain</li>
                                    <li className="color-light">Free Six Months Hosting</li>
                                    <li className="color-light">Free Installation</li>
                                    <li className="color-light">Full Support</li>
                                </ul>
                            </div>
                            <div className="price-footer">

                                <a href="#" className="button-3d button-sm button-rounded button-pasific">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <!-- table price two end -->

                    <!-- table price three start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 hover-float">
                        <div className="price price-three bg-blue">
                            <div className="price-header">
                                <span className="color-light"><sup>$</sup>69</span>
                                <h4>Developer</h4>								
                            </div>
                            <div className="price-body">
                                <ul>
                                    <li className="color-light">Two Web Designs</li>
                                    <li className="color-light">Unlimited Revision</li>
                                    <li className="color-light">Free One Year Domain</li>
                                    <li className="color-light">Free Six Months Hosting</li>
                                    <li className="color-light">Free Installation</li>
                                    <li className="color-light">Full Support</li>
                                </ul>
                            </div>
                            <div className="price-footer">

                                <a href="#" className="button-3d button-sm button-rounded button-pasific">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <!-- table price three end -->

                    <!-- table price four start -->
                    <div className="col-md-3 col-sm-6 col-xs-12 hover-float">
                        <div className="price price-three bg-purple">
                            <div className="price-badge bg-grad-blood-mary">Popular</div>
                            <div className="price-header">
                                <span className="color-light"><sup>$</sup>79</span>
                                <h4>Team</h4>								
                            </div>
                            <div className="price-body">
                                <ul>
                                    <li className="color-light">Two Web Designs</li>
                                    <li className="color-light">Unlimited Revision</li>
                                    <li className="color-light">Free One Year Domain</li>
                                    <li className="color-light">Free Six Months Hosting</li>
                                    <li className="color-light">Free Installation</li>
                                    <li className="color-light">Full Support</li>
                                </ul>
                            </div>
                            <div className="price-footer">

                                <a href="#" className="button-3d button-sm button-rounded button-pasific">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <!-- table price four end -->

                </div><!-- row end -->

                <div className="row text-center mt50">
                    <h4 className="color-light">For custom price, please contact us at: <i className="fa fa-phone"></i> 1-234-567-890</h4>
                </div>

            </div><!-- container end -->
        </div><!-- section price end -->
           
        
        <!-- Blog Area
        ===================================== -->
        <div id="blogs" className="bg-dark3 pt75 pb75">
            <div className="container">
                
                <!-- title start -->
                <div className="row text-center mb25">
                    <h1 className="font-size-normal color-green">
                        <small>Our Blog</small>
                        We Have Freebies, News, Tutorial, etc.
                        <small className="heading heading-solid center-block"></small>
                    </h1>
                </div>
                <!-- title end -->
                
                <div className="row">
                    
                    <!-- blog post start -->
                    <div className="col-md-4 col-sm-6 col-xs-12 mb50">
                        <div className="blog-one">
                            <div className="blog-one-header">
                                <img src="assets/img/blog/img-blog-2.jpg" alt="image blog" className="img-responsive">
                            </div>
                            <div className="blog-one-attrib">                                
                                <img src="assets/img/other/photo-1.jpg" alt="photo blog" className="blog-author-photo">
                                <span className="blog-author-name">Harry Boo</span>
                                <span className="blog-date">PEB. 14 2016</span>                                                           
                            </div>
                            <div className="blog-one-body">
                                <h4 className="blog-title"><a href="#">Amazing Blog Post One</a></h4>
                                <p className="">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                                </p>
                            </div>
                            <div className="blog-one-footer">
                                <a href="#">Read More</a>
                                <i className="fa fa-heart"></i>59 Likes
                                <i className="fa fa-comments"></i><a href="#">120 Comments</a>
                            </div>
                        </div>
                    </div>
                    <!-- blog post end -->
                    
                    <!-- blog post start -->
                    <div className="col-md-4 col-sm-6 col-xs-12 mb50">
                        <div className="blog-one">
                            <div className="blog-one-header">
                                <img src="assets/img/blog/img-blog-4.jpg" alt="image blog" className="img-responsive">
                            </div>
                            <div className="blog-one-attrib">                                
                                <img src="assets/img/other/photo-4.jpg" alt="photo blog" className="blog-author-photo">
                                <span className="blog-author-name">Melanie Boo</span>
                                <span className="blog-date">PEB. 14 2016</span>                                                           
                            </div>
                            <div className="blog-one-body">
                                <h4 className="blog-title"><a href="#">Amazing Blog Post One</a></h4>
                                <p className="">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                                </p>
                            </div>
                            <div className="blog-one-footer">
                                <a href="#">Read More</a>
                                <i className="fa fa-heart"></i>59 Likes
                                <i className="fa fa-comments"></i><a href="#">120 Comments</a>
                            </div>
                        </div>
                    </div>
                    <!-- blog post end -->
                    
                    <!-- blog post start -->                    
                    <div className="col-md-4 col-sm-6 col-xs-12 mb50">
                        <div className="blog-one">
                            <div className="blog-one-header">
                                <img src="assets/img/blog/img-blog-3.jpg" alt="image blog" className="img-responsive">
                            </div>
                            <div className="blog-one-attrib">                                
                                <img src="assets/img/other/photo-2.jpg" alt="photo blog" className="blog-author-photo">
                                <span className="blog-author-name">Harry Boo</span>
                                <span className="blog-date">PEB. 14 2016</span>                                                           
                            </div>
                            <div className="blog-one-body">
                                <h4 className="blog-title"><a href="#">Amazing Blog Post One</a></h4>
                                <p className="">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                                </p>
                            </div>
                            <div className="blog-one-footer">
                                <a href="#">Read More</a>
                                <i className="fa fa-heart"></i>59 Likes
                                <i className="fa fa-comments"></i><a href="#">120 Comments</a>
                            </div>
                        </div>
                    </div>
                    <!-- blog post end -->                   
                    
                </div><!-- row end -->                
            </div><!-- container end -->
        </div><!-- section blog end -->
        
        
        <!-- Newsletter Area
        =====================================-->
        <div id="newsletter" className="bg-dark3 pt50 pb50">
            <div className="container">
                <div className="row">                    
                    <div className="col-md-2">
                        <h4 className="color-light">
                            Newsletter
                        </h4>
                    </div>
                    
                    <div className="col-md-10">
                        <form name="newsletter">
                            <div className="input-newsletter-container">
                                <input type="text" name="email" className="input-newsletter" placeholder="enter your email address">
                            </div>
                            <a href="#" className="button button-sm button-pasific hover-ripple-out">Subscribe<i className="fa fa-envelope"></i></a>
                        </form>
                    </div>
                </div><!-- row end -->
            </div><!-- container end -->
        </div><!-- section newsletter end -->
        
        
        <!-- Testimonial Area
        ===================================== -->
        <div id="testimonial" className="bg-dark3 pt75 pb75">
            <div className="container">
                
                <!-- title start -->
                <div className="row text-center mb25">
                    <h1 className="font-size-normal color-light">
                        <small className="color-pasific alpha10">Testimonials</small>
                        What Our Clients Say About Us
                        <small className="heading heading-solid center-block"></small>
                    </h1>
                </div>
                <!-- title end -->
                
                <div className="row">
                    
                    <div className="col-sm-12">                        
                        <div className="row">
                            
                            <div id="owlSectionThreeItem" className="owl-carousel">
                                    
                                <!-- Testimonial Item start -->
                                <div className="testimonial testimonial-triangle-isosceles bottom-left">
                                    <div className="testimonial-body">
                                        <p>
                                            Pasific template is the best template so far. So easy to customize and clean code. Recommended!
                                        </p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <img src="assets/img/other/photo-1.jpg" alt="testimonial author" className="img-responsive img-circle">
                                        <i className="fa fa-quote-left"></i>
                                        Martin Smith <a href="#">envato.com   </a>
                                    </div>
                                </div>
                                <!-- Testimonial Item end -->

                                <!-- Testimonial Item start -->
                                <div className="testimonial testimonial-triangle-isosceles bottom-left">
                                    <div className="testimonial-body">
                                        <p>
                                            Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio.
                                        </p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <img src="assets/img/other/photo-2.jpg" alt="testimonial author" className="img-responsive img-circle">
                                        <i className="fa fa-quote-left"></i>
                                        Steve Austin <a href="#">facebook.com   </a>
                                    </div>
                                </div>
                                <!-- Testimonial Item end -->

                                <!-- Testimonial Item start -->
                                <div className="testimonial testimonial-triangle-isosceles bottom-left">
                                    <div className="testimonial-body">
                                        <p>
                                            Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo. 
                                        </p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <img src="assets/img/other/photo-4.jpg" alt="testimonial author" className="img-responsive img-circle">
                                        <i className="fa fa-quote-left"></i>
                                        Gisselse <a href="#">Smashingmagazine.com   </a>
                                    </div>
                                </div>
                                <!-- Testimonial Item end -->

                                <!-- Testimonial Item start -->
                                <div className="testimonial testimonial-triangle-isosceles bottom-left">
                                    <div className="testimonial-body">
                                        <p>
                                            Pasific template is the best template so far. So easy to customize and clean code. Recommended!
                                        </p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <img src="assets/img/other/photo-1.jpg" alt="testimonial author" className="img-responsive img-circle">
                                        <i className="fa fa-quote-left"></i>
                                        Martin Smith <a href="#">Smashingmagazine.com   </a>
                                    </div>
                                </div>
                                <!-- Testimonial Item end -->

                                <!-- Testimonial Item start -->
                                <div className="testimonial testimonial-triangle-isosceles bottom-left">
                                    <div className="testimonial-body">
                                        <p>
                                            Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio.
                                        </p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <img src="assets/img/other/photo-2.jpg" alt="testimonial author" className="img-responsive img-circle">
                                        <i className="fa fa-quote-left"></i>
                                        Steve Austin <a href="#">envato.com   </a>
                                    </div>
                                </div>
                                <!-- Testimonial Item end -->

                                <!-- Testimonial Item start -->
                                <div className="testimonial testimonial-triangle-isosceles bottom-left">
                                    <div className="testimonial-body">
                                        <p>
                                            Fusce quam augue, gravida tincidunt dui nec, tempor iaculis justo. 
                                        </p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <img src="assets/img/other/photo-4.jpg" alt="testimonial author" className="img-responsive img-circle">
                                        <i className="fa fa-quote-left"></i>
                                        Goselle <a href="#">themeforest.com   </a>
                                    </div>
                                </div>
                                <!-- Testimonial Item end -->

                            </div><!-- owlSectionThreeItem end -->
                        </div><!-- row end -->
                    </div><!-- col end -->
                    
                </div><!-- row end -->
            </div><!-- container end -->
        </div><!-- section testimonial end -->
        
          
        <!-- Contact Us Area
        =====================================-->
        <div id="contact" className="pt100 pb100 bg-dark3" style="background:url(assets/img/bg/img-bg-32.jpg) 50% 100% no-repeat;">
            <div className="container pb50">
                <div className="row">
                    
                    <div className="col-md-6">
                        <div className="row">
                            
                            <!-- title start -->
                            <div className="col-md-12 mb50">
                                <h1 className="font-size-normal color-blue">
                                    <small className="color-light">Contact Us</small>
                                    Drop Us a Message
                                </h1>               
                                <h5 className="color-light">Please feel free to say anything to us. Our staff will reply any message<br/>as soon as possible.</h5>                        
                            </div>
                            <!-- title end -->
                            
                            <!-- contact info start -->
                            <div className="col-md-3 col-sm-3 col-xs-12">
                                <span className="icon-map color-green el-icon2x"></span>
                                <h5 className="color-green"><strong>Address</strong></h5>
                                <p className="color-dark">Address Business 123 London, UK.</p>
                            </div>
                            
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <span className="icon-megaphone color-cyan el-icon2x"></span>
                                <h5 className="color-cyan"><strong>Phone</strong></h5>
                                <p className="color-dark">123-456-789</p>
                            </div>
                            
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <span className="icon-envelope color-blue el-icon2x"></span>
                                <h5 className="color-blue"><strong>Email</strong></h5>
                                <p className="color-dark">email@domain.com</p>
                            </div>
                            <!-- contact info end -->
                            
                        </div><!-- row left end -->
                    </div><!-- col left end -->
                    
                    <div className="col-md-6">
                        <div className="contact contact-us-one">
                            <div className="col-sm-12 col-xs-12 text-center mb20">
                                <h4 className="pb25 bb-solid-1 text-uppercase">
                                    Get in Touch
                                    <small className="text-lowercase">Please complete the form and we will get back to you.</small>
                                </h4>
                            </div>
                            <form name="contactform" id="contactForm" method="post" action="assets/php/send.php">
                                
                                <!-- fullname start -->                            
                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="senderName" id="senderName" className="input-md input-rounded form-control" placeholder="fullname" maxlength="100" required>
                                </div>                                           
                                <!-- fullname end -->
                                
                                <!-- email start -->                            
                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="senderEmail" id="senderEmail" className="input-md input-rounded form-control" placeholder="email address" maxlength="100" required>
                                </div>                                        
                                 <!-- email end -->
                                
                                <!-- website start -->                        
                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <input type="url" name="senderWebsite" id="senderWebsite" className="input-md input-rounded form-control" placeholder="http://" maxlength="100">
                                </div>                                             
                                <!-- website end -->
                                
                                <!-- security start -->        
                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="senderHuman" id="senderHuman" className="input-md input-rounded form-control" placeholder="" required>
                                    <input type="hidden" name="checkHuman_a" id="checkHuman_a">
                                    <input type="hidden" name="checkHuman_b" id="checkHuman_b">
                                </div>                                      
                                  <!-- security end -->
                                
                                <!-- textarea start -->
                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                    <textarea className="form-control" name="message" id="message" rows="7" required></textarea>
                                </div>
                                <!-- textarea end -->
                                
                                <!-- button start -->
                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                    <button type="submit" name="sendMessage" id="sendMessage" className="button button-md button-block button-grad-stellar">Send Message</button>
                                </div>
                                <!-- button end -->
                                
                                <div id="sendingMessage" className="statusMessage sending-message"><p>Sending your message. Please wait...</p></div>
                                <div id="successMessage" className="statusMessage success-message"><p>Thanks for sending your message! We'll get back to you shortly.</p></div>
                                <div id="failureMessage" className="statusMessage failure-message"><p>There was a problem sending your message. Please try again.</p></div>
                                <div id="incompleteMessage" className="statusMessage"><p>Please complete all the fields in the form before sending.</p></div>

                            </form>
                        </div><!-- div contact end -->
                    </div><!-- col end -->
                    
                </div><!-- row end -->                
                
                <!-- Clients -->
                <div className="row mt75 mb75">
                    
                    <!-- logo client start -->
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <img src="assets/img/brand/paypal-gray.png" alt="client logo" className="img-responsive center-block animated" data-animation="fadeIn" data-animation-delay="300">
                    </div>
                    <!-- logo client end -->
                    
                    <!-- logo client start -->
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <img src="assets/img/brand/evernote-gray.png" alt="client logo" className="img-responsive center-block animated" data-animation="fadeIn" data-animation-delay="150">
                    </div>
                    <!-- logo client end -->
                    
                    <!-- logo client start -->
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <img src="assets/img/brand/microsoft-gray.png" alt="client logo" className="img-responsive center-block animated" data-animation="fadeIn" data-animation-delay="100">
                    </div>
                    <!-- logo client end -->
                    
                    <!-- logo client start -->
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <img src="assets/img/brand/smashing-gray.png" alt="client logo" className="img-responsive center-block animated" data-animation="fadeIn" data-animation-delay="150">
                    </div>
                    <!-- logo client end -->
                    
                    <!-- logo client start -->
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <img src="assets/img/brand/mashable-gray.png" alt="client logo" className="img-responsive center-block animated" data-animation="fadeIn" data-animation-delay="200">
                    </div>
                    <!-- logo client end -->
                    
                    <!-- logo client start -->
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <img src="assets/img/brand/guardian-gray.png" alt="client logo" className="img-responsive center-block animated" data-animation="fadeIn" data-animation-delay="300">
                    </div>
                    <!-- logo client end -->
                    
                </div><!-- row end -->               
                
                <!-- Footer -->
                <div id="footer" className="row footer-two">

                    <!-- footer about start -->
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <h6 className="font-montserrat text-uppercase color-light">About Us</h6>
                        <p className="color-light alpha7">Lorem ipsum dolor sit amet consectetur adipiscing elit morbi sagittis.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                    <!-- footer about end -->

                    <!-- footer menu one start -->
                    <div className="col-md-2 col-md-offset-1 col-sm-3 col-xs-4">
                        <h6 className="font-montserrat text-uppercase color-light">Menu</h6>
                        <ul className="no-icon-list">
                            <li><a href="#" className="color-light alpha7">Home</a></li>
                            <li><a href="#" className="color-light alpha7">About</a></li>
                            <li><a href="#" className="color-light alpha7">Service</a></li>
                            <li><a href="#" className="color-light alpha7">Member</a></li>
                        </ul>
                    </div>
                    <!-- footer menu one end -->

                    <!-- footer menu two start -->
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <h6 className="font-montserrat text-uppercase color-light">Learn more</h6>
                        <ul className="no-icon-list">
                            <li><a href="#" className="color-light alpha7">Tour</a></li>
                            <li><a href="#" className="color-light alpha7">Pricing</a></li>
                            <li><a href="#" className="color-light alpha7">New Features</a></li>
                            <li><a href="#" className="color-light alpha7">Payment</a></li>
                        </ul>
                    </div>
                    <!-- footer menu two end -->

                    <!-- footer menu three start -->
                    <div className="col-md-2 col-sm-3 col-xs-4">
                        <h6 className="font-montserrat text-uppercase color-light">Support</h6>
                        <ul className="no-icon-list">
                            <li><a href="#" className="color-light alpha7">FAQs</a></li>
                            <li><a href="#" className="color-light alpha7">Knowledgebase</a></li>
                            <li><a href="#" className="color-light alpha7">Forum</a></li>
                            <li><a href="#" className="color-light alpha7">Contact Us</a></li>
                        </ul>
                    </div>
                    <!-- footer menu three end -->

                    <!-- footer social icons start -->
                    <div className="col-md-2 col-sm-3 col-xs-12">
                        <h6 className="font-montserrat text-uppercase color-light">Social Media</h6>
                        <div className="social social-three">
                            <a href="#"><i className="fa fa-twitter color-blue"></i></a>
                            <a href="#"><i className="fa fa-facebook color-primary"></i></a>
                            <a href="#"><i className="fa fa-linkedin color-blue"></i></a><br/><br/>
                            <a href="#"><i className="fa fa-github color-dark"></i></a>
                            <a href="#"><i className="fa fa-pinterest color-red"></i></a>
                        </div>
                    </div>
                    <!-- footer social icons end -->

                </div><!-- row end -->

                <div className="row mt25">

                    <!-- copyright start -->
                    <div className="col-md-12 col-sm-12 col-xs-6 text-center">
                        <p>Copyright &copy;2016 <a href="#" className="color-light">Pasific Studio, LLC</a>. All rights reserved.</p>
                    </div>
                    <!-- copyright end -->

                </div><!-- row end -->
                
            </div><!-- container end -->
        </div><!-- footer end -->
        
        
        <!-- JQuery Core
        =====================================-->
        <script src="assets/js/core/jquery.min.js"></script>
        <script src="assets/js/core/bootstrap.min.js"></script>
        
        <!-- Magnific Popup
        =====================================-->
        <script src="assets/js/magnific-popup/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/magnific-popup/magnific-popup-zoom-gallery.js"></script>
        
        <!-- Progress Bars
        =====================================-->
        <script src="assets/js/progress-bar/bootstrap-progressbar.js"></script>
        <script src="assets/js/progress-bar/bootstrap-progressbar-main.js"></script>
        
        <!-- Text Rotator
        =====================================-->
        <script src="assets/js/text-rotator/jquery.simple-text-rotator.min.js"></script>
        
        <!-- Particle JS
        =====================================-->
        <script src="assets/js/particle/particles.min.js"></script>
        <script src="assets/js/particle/particles.main2.js"></script>
        
        <!-- JQuery Main
        =====================================-->
        <script src="assets/js/main/jquery.appear.js"></script>
        <script src="assets/js/main/isotope.pkgd.min.js"></script>
        <script src="assets/js/main/parallax.min.js"></script>
        <script src="assets/js/main/jquery.countTo.js"></script>
        <script src="assets/js/main/owl.carousel.min.js"></script>
        <script src="assets/js/main/jquery.sticky.js"></script>
        <script src="assets/js/main/imagesloaded.pkgd.min.js"></script>
        <script src="assets/js/main/main.js"></script> */}

    </div>
        );
    }
}
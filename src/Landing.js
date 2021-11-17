import React from 'react'
import './css/landing.css'
import { Link } from 'react-router-dom'
// window.loaction = 'link'
function Landing() {
  return (
    <>
      {/* <!-- Page Preloder --> */}
      <div id='preloder'>
        <div class='loader'></div>
      </div>

      {/* <!-- Header section --> */}
      <header class='header-section clearfix'>
        <div class='container-fluid'>
          <Link to='/' class='site-logo'>
            <img src='/img/logo.png' alt='hello' />
          </Link>
          <div class='responsive-bar'>
            <i class='fa fa-bars'></i>
          </div>
          <a href='' class='user'>
            <i class='fa fa-user'></i>
          </a>
          <Link to='https://bitsafe-dashboard.web.app/login' class='site-btn'>
            Dashboard
          </Link>
          <nav class='main-menu'>
            <ul class='menu-list'>
              <li>
                <Link to='/'>Solution</Link>
              </li>
              <li>
                <Link to='/'>Features</Link>
              </li>
              <li>
                <Link to='/'>News</Link>
              </li>
              <li>
                <Link to='/'>About</Link>
              </li>
              <li>
                <Link to='/'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <!-- Header section end --> */}

      {/* <!-- Hero section --> */}
      <section class='hero-section'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 hero-text'>
              <h2>
                Invest in <span>Bitcoin</span> <br />
                Bitcoin Trading
              </h2>
              <h4>
                Use modern progressive technologies of Bitcoin to earn money
              </h4>
              <form class='hero-subscribe-from'>
                <input type='text' placeholder='Enter your email' />
                <Link to='/' class='site-btn sb-gradients'>
                  Get Started
                </Link>
              </form>
            </div>
            <div class='col-md-6'>
              <img src='/img/laptop.png' class='laptop-image' alt='' />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero section end --> */}

      {/* <!-- About section --> */}
      <section class='about-section spad'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-6 offset-lg-6 about-text'>
              <h2>What is Bitcoin</h2>
              <h5>
                Bitcoin is an innovative payment network and a new kind of
                money.
              </h5>
              <p>
                Bitcoin is one of the most important inventions in all of human
                history. For the first time ever, anyone can send or receive any
                amount of money with anyone else, anywhere on the planet,
                conveniently and without restriction. It’s the dawn of a better,
                more free world.
              </p>
              <Link to='/' class='site-btn sb-gradients sbg-line mt-5'>
                Get Started
              </Link>
            </div>
          </div>
          <div class='about-img'>
            <img src='/img/about-img.png' alt='' />
          </div>
        </div>
      </section>
      {/* <!-- About section end --> */}

      {/* <!-- Features section --> */}
      <section class='features-section spad gradient-bg'>
        <div class='container text-white'>
          <div class='section-title text-center'>
            <h2>Our Features</h2>
            <p>
              Bitcoin is the simplest way to exchange money at very low cost.
            </p>
          </div>
          <div class='row'>
            {/* <!-- feature --> */}
            <div class='col-md-6 col-lg-4 feature'>
              <i class='ti-mobile'></i>
              <div class='feature-content'>
                <h4>Mobile Apps</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <Link to='/' class='readmore'>
                  Readmore
                </Link>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div class='col-md-6 col-lg-4 feature'>
              <i class='ti-shield'></i>
              <div class='feature-content'>
                <h4>Safe & Secure</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <Link to='/' class='readmore'>
                  Readmore
                </Link>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div class='col-md-6 col-lg-4 feature'>
              <i class='ti-wallet'></i>
              <div class='feature-content'>
                <h4>Wallet</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <Link to='/' class='readmore'>
                  Readmore
                </Link>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div class='col-md-6 col-lg-4 feature'>
              <i class='ti-headphone-alt'></i>
              <div class='feature-content'>
                <h4>Experts Support</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <Link to='/' class='readmore'>
                  Readmore
                </Link>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div class='col-md-6 col-lg-4 feature'>
              <i class='ti-reload'></i>
              <div class='feature-content'>
                <h4>Instant Exchange</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <Link to='/' class='readmore'>
                  Readmore
                </Link>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div class='col-md-6 col-lg-4 feature'>
              <i class='ti-panel'></i>
              <div class='feature-content'>
                <h4>Recuring Buys</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <Link to='/' class='readmore'>
                  Readmore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features section end --> */}

      {/* <!-- Process section --> */}
      <section class='process-section spad'>
        <div class='container'>
          <div class='section-title text-center'>
            <h2>Get Started With Bitcoin</h2>
            <p>
              Start learning about Bitcoin with interactive tutorials. It’s fun,
              easy, and takes only a few minutes!{' '}
            </p>
          </div>
          <div class='row'>
            <div class='col-md-4 process'>
              <div class='process-step'>
                <figure class='process-icon'>
                  <img src='/img/process-icons/1.png' alt='#' />
                </figure>
                <h4>Create Your Wallet</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
              </div>
            </div>
            <div class='col-md-4 process'>
              <div class='process-step'>
                <figure class='process-icon'>
                  <img src='/img/process-icons/2.png' alt='#' />
                </figure>
                <h4>Create Your Wallet</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
              </div>
            </div>
            <div class='col-md-4 process'>
              <div class='process-step'>
                <figure class='process-icon'>
                  <img src='/img/process-icons/3.png' alt='#' />
                </figure>
                <h4>Create Your Wallet</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Process section end --> */}

      {/* <!-- Fact section --> */}
      <section class='fact-section gradient-bg'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-6 col-md-6 col-lg-3'>
              <div class='fact'>
                <h2>60</h2>
                <p>
                  Support <br /> Countries
                </p>
                <i class='ti-basketball'></i>
              </div>
            </div>
            <div class='col-sm-6 col-md-6 col-lg-3'>
              <div class='fact'>
                <h2>12K</h2>
                <p>
                  Transactions <br /> per hour
                </p>
                <i class='ti-panel'></i>
              </div>
            </div>
            <div class='col-sm-6 col-md-6 col-lg-3'>
              <div class='fact'>
                <h2>5B</h2>
                <p>
                  Largest <br /> Transactions
                </p>
                <i class='ti-stats-up'></i>
              </div>
            </div>
            <div class='col-sm-6 col-md-6 col-lg-3'>
              <div class='fact'>
                <h2>240</h2>
                <p>
                  Years <br /> of Experience
                </p>
                <i class='ti-user'></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Fact section end --> */}

      {/* <!-- Newsletter section --> */}
      <section class='newsletter-section gradient-bg'>
        <div class='container text-white'>
          <div class='row'>
            <div class='col-lg-7 newsletter-text'>
              <h2>Subscribe to our Newsletter</h2>
              <p>
                Sign up for our weekly industry updates, insider perspectives
                and in-depth market analysis.
              </p>
            </div>
            <div class='col-lg-5 col-md-8 offset-lg-0 offset-md-2'>
              <form class='newsletter-form'>
                <input type='text' placeholder='Enter your email' />
                <button disabled>Get Started</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Newsletter section end --> */}

      {/* <!-- Blog section --> */}
      <section class='blog-section spad'>
        <div class='container'>
          <div class='section-title text-center'>
            <h2>Latest News</h2>
            <p>
              Bitcoin is the simplest way to exchange money at very low cost.
            </p>
          </div>
          <div class='row'>
            {/* <!-- blog item --> */}
            <div class='col-md-4'>
              <div class='blog-item'>
                <figure class='blog-thumb'>
                  <img src='/img/blog/1.jpg' alt='' />
                </figure>
                <div class='blog-text'>
                  <div class='post-date'>03 jan 2018</div>
                  <h4 class='blog-title'>
                    <Link to='/'>
                      Coinbase to Reopen the GDAX Bitcoin Cash-Euro Order Book
                    </Link>
                  </h4>
                  <div class='post-meta'>
                    <Link to='/'>
                      <span>by</span> Admin
                    </Link>
                    <Link to='/'>
                      <i class='fa fa-heart-o'></i> 234 Likes
                    </Link>
                    <Link to='/'>
                      <i class='fa fa-comments-o'></i> 08 comments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- blog item --> */}
            <div class='col-md-4'>
              <div class='blog-item'>
                <figure class='blog-thumb'>
                  <img src='/img/blog/2.jpg' alt='' />
                </figure>
                <div class='blog-text'>
                  <div class='post-date'>28 dec 2018</div>
                  <h4 class='blog-title'>
                    <Link to='/'>
                      Blockchain Rolls Out Trading Feature for 22 States in the
                      U.S
                    </Link>
                  </h4>
                  <div class='post-meta'>
                    <Link to='/'>
                      <span>by</span> Admin
                    </Link>
                    <Link to='/'>
                      <i class='fa fa-heart-o'></i> 234 Likes
                    </Link>
                    <Link to='/'>
                      <i class='fa fa-comments-o'></i> 08 comments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- blog item --> */}
            <div class='col-md-4'>
              <div class='blog-item'>
                <figure class='blog-thumb'>
                  <img src='/img/blog/3.jpg' alt='' />
                </figure>
                <div class='blog-text'>
                  <div class='post-date'>28 aug 2018</div>
                  <h4 class='blog-title'>
                    <Link to='/'>
                      This Week in Bitcoin: Up, Down and Sideways
                    </Link>
                  </h4>
                  <div class='post-meta'>
                    <Link to='/'>
                      <span>by</span> Admin
                    </Link>
                    <Link to='/'>
                      <i class='fa fa-heart-o'></i> 234 Likes
                    </Link>
                    <Link to='/'>
                      <i class='fa fa-comments-o'></i> 08 comments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog section end --> */}

      {/* <!-- Footer section --> */}
      <footer class='footer-section'>
        <div class='container'>
          <div class='row spad'>
            <div class='col-md-6 col-lg-3 footer-widget'>
              <img src='/img/logo.png' class='mb-4' alt='' />
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia dese mollit anim id est laborum.
              </p>
              <span>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{' '}
                <i class='fa fa-heart-o' aria-hidden='true'></i> by{' '}
                <Link to='/'>Colorlib</Link>
              </span>
            </div>
            <div class='col-md-6 col-lg-2 offset-lg-1 footer-widget'>
              <h5 class='widget-title'>Resources</h5>
              <ul>
                <li>
                  <Link to='/'>How to Buy Coin</Link>
                </li>
                <li>
                  <Link to='/'>Coin Overview</Link>
                </li>
                <li>
                  <Link to='/'>Blog News</Link>
                </li>
                <li>
                  <Link to='/'>How to Sell Coin</Link>
                </li>
                <li>
                  <Link to='/'>Purchase Theme</Link>
                </li>
              </ul>
            </div>
            <div class='col-md-6 col-lg-2 offset-lg-1 footer-widget'>
              <h5 class='widget-title'>Quick Links</h5>
              <ul>
                <li>
                  <Link to='/'>Network Stats</Link>
                </li>
                <li>
                  <Link to='/'>Block Explorers</Link>
                </li>
                <li>
                  <Link to='/'>Governance</Link>
                </li>
                <li>
                  <Link to='/'>Exchange Markets</Link>
                </li>
                <li>
                  <Link to='/'>Get Theme</Link>
                </li>
              </ul>
            </div>
            <div class='col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3'>
              <h5 class='widget-title'>Follow Us</h5>
              <div class='social'>
                <Link to='/' class='facebook'>
                  <i class='fa fa-facebook'></i>
                </Link>
                <Link to='/' class='google'>
                  <i class='fa fa-google-plus'></i>
                </Link>
                <Link to='/' class='instagram'>
                  <i class='fa fa-instagram'></i>
                </Link>
                <Link to='/' class='twitter'>
                  <i class='fa fa-twitter'></i>
                </Link>
              </div>
            </div>
          </div>
          <div class='footer-bottom'>
            <div class='row'>
              <div class='col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0'>
                <Link to='/'>
                  <img src='/img/appstore.png' alt='' class='mr-2' />
                </Link>
                <Link to='/'>
                  <img src='/img/playstore.png' alt='' />
                </Link>
              </div>
              <div class='col-lg-8 text-center text-lg-right'>
                <ul class='footer-nav'>
                  <li>
                    <Link to='/'>DPA</Link>
                  </li>
                  <li>
                    <Link to='/'>Terms of Use</Link>
                  </li>
                  <li>
                    <Link to='/'>Privacy Policy </Link>
                  </li>
                  <li>
                    <Link to='/'>support@company.com</Link>
                  </li>
                  <li>
                    <Link to='/'>(123) 456-7890</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Landing

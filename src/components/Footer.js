export default function Footer () {

  return (
    <div className="footer">
        <a className="footer__logo" href="#"></a>
        <hr className="footer__line" />
        <div className="footer__info">
          <div className="footer__left-side footer-side_width">
            <div>
              <select name="dropdown" className="footer__language">
                <option value="english">english</option>
                <option value="русский">русский</option>
              </select>
              <i className="icon-language"></i>
            </div>

            <div className="footer__social">
              <a className="footer__social-link" href="#"><span className="hashtag">#</span>UberEats</a>
              <ul className="footer__social-icons">
                <li>
                  <a href="#"><i className="social__icon-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i className="social__icon-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="social__icon-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__middle">
            <nav>
              <ul className="footer__middle-menu">
                <li><a href="#">About UberEats</a></li>
                <li><a href="#">Become a Delivery Partner</a></li>
                <li><a href="#">Become a Restaurant Partner</a></li>
              </ul>
            </nav>
          </div>

          <div className="footer__right-side">
            <nav>
              <ul className="footer__right-side-menu">
                <li><a href="#">See all cities</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <hr className="footer__line" />

        <div className="copyright">
          <p>© 2017 Uber Technologies Inc.</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>

  )
}
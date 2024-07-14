import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-base-content p-10 bg-yellow-400">
      <nav>
        <h6 className="footer-title">Explore</h6>
        <a className="link link-hover">Recipes</a>
        <a className="link link-hover">Healthy Eating</a>
        <a className="link link-hover">Cooking Tips</a>
        <a className="link link-hover">Meal Plans</a>
      </nav>
      <nav>
        <h6 className="footer-title">About Simple Food</h6>
        <a className="link link-hover">Our Story</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Join Our Team</a>
        <a className="link link-hover">Media Kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Subscribe to Our Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered join-item" />
            <button className="btn bg bg-white join-item text-yellow-400">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;

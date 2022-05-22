import React from 'react';

const Footer = () => {
    return (

        <footer className=''>
            <div className='footer py-10 lg:py-16 md:pl-28 bg-base-100 '>
                <div>
                    <span className="footer-title text-footerTitle">Services</span>
                    <a className="link link-hover text-footerText">Branding</a>
                    <a className="link link-hover text-footerText">Design</a>
                    <a className="link link-hover text-footerText">Marketing</a>
                    <a className="link link-hover  text-footerText">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-footerTitle">Company</span>
                    <a className="link link-hover text-footerText">About us</a>
                    <a className="link link-hover text-footerText" target='_blank' href="#">Contact</a>
                    <a className="link link-hover text-footerText">Jobs</a>
                    <a className="link link-hover text-footerText">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-footerTitle">Legal</span>
                    <a className="link link-hover text-footerText">Terms of use</a>
                    <a className="link link-hover text-footerText">Privacy policy</a>
                    <a className="link link-hover text-footerText text-footerText">Cookie policy</a>
                </div>
            </div>
            <div className='footer footer-center p-4 bg-base-100 text-base-content'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>


    );
};

export default Footer;
import React from 'react';
import './Footer.css';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    const today = new Date();
    const date = today.getFullYear();
    return (
        <section>
            <article className='footer'>
                <div>
                    <h4>Phone Garage</h4>
                </div>
                <div>
                    <h4>OFFICE</h4>
                    <p>Rupatali Battala</p>
                    <p>Barishal Sadar</p>
                    <p>Barishal Bangladesh</p>
                    <p>support@gmail.com</p>
                </div>
                <div>
                    <h4>LINKS</h4>
                    <p>About</p>
                    <p>Out Team</p>
                    <p>Sell Equipment</p>
                    <p>Buy Equipment</p>
                </div>
                <div>
                    <h4>SOCIAL</h4>
                    <h6 className='social-btn'><span><AiOutlineGoogle /></span> <span><RiFacebookFill /></span> <span><AiFillGithub /></span></h6>
                </div>
            </article>
            <article>
                <p className='footer-copyright text-center my-3 text-uppercase'>copyright &copy; {date} Phone Garage, All Right Reserved</p>
            </article>
        </section>
    );
};

export default Footer;
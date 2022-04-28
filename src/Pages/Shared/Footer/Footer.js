import React from 'react';
import './Footer.css';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <section className='footer d-flex justify-content-around'>
            <article>
                <h4>Phone Garage</h4>
            </article>
            <article>
                <h4>OFFICE</h4>
                <p>Rupatali Battala</p>
                <p>Barishal Sadar</p>
                <p>Barishal Bangladesh</p>
                <p>support@gmail.com</p>
            </article>
            <article>
                <h4>LINKS</h4>
                <p>About</p>
                <p>Out Team</p>
                <p>Sell Equipment</p>
                <p>Buy Equipment</p>
            </article>
            <article>
                <h4>SOCIAL</h4>
                <p><span><AiOutlineGoogle /></span> <span><RiFacebookFill /></span> <span><AiFillGithub /></span></p>
            </article>
        </section>
    );
};

export default Footer;
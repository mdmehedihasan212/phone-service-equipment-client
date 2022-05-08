import React from 'react';
import './Blogs.css';

const Blogs = () => {

    return (
        <section className='container blog-section'>
            <article>
                <h4>Ques: Difference between javascript and nodejs?</h4>
                <p>Javascript is a programming language || Nodejs is a runtime environment.</p>
                <p>Javascript can only be run in the browser || We can run javascript out side the browser with the help of NodeJs.</p>
                <p>It's basically used for the client site || It's is mostly used server site.</p>
                <p>Javascript is capable to add HTML and play with DOM || NodeJs not capable to add HTML tags.</p>
                <p>Javascript can run any browser like Js core in safari and Spidermonkey in firefox.</p>
            </article>
            <article>
                <h4>Ques: When should you use nodejs and when should you use mongodb?</h4>
                <p>Any project needs programming environment and a runtime library that offer you basic programming tools can compile interpret your code. So if you want to write some kind of stand alone program or server in javascript then you can use NodeJs for it.</p>
                <p>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later then you would typically use some from of database there are dozen of popular database Mongodb is noSql and popular database. So it's a whole deferent question to choose the right/best database for what your doing.</p>
            </article>
            <article>
                <h4>Ques: Differences between sql and noSql databases?</h4>
                <p>Relational database management system || Non-relational or distributed database system.</p>
                <p>These database is fixed or static or predefine schema || They have dynamic schema.</p>
                <p>Vertical scalable || horizontal scalable.</p>
                <p>Follows ACID property || Follows CAP (Consistency, Availability, and Pretention tolerance).</p>
            </article>
            <article>
                <h4>Ques: What is the purpose of jwt and how does it work?</h4>
                <p>JWT mainly use authorization purpose.</p>
                <p>First server create a token for the client.</p>
                <p>Client storage the token on local storage or browser cookies.</p>
                <p>Rest time client makes a request a copy of the token is send to the server for authorization.</p>
                <p>Server verify the JWT signature before giving the authorization</p>
                <p>Then server response to the clients request.</p>
            </article>
        </section>
    );
};

export default Blogs;
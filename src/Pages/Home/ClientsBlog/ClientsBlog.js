import React from 'react';
import './ClientBlog.css';
import man from '../../../Assets/client/man-2.png';
import woman from '../../../Assets/client/woman.png';

const ClientsBlog = () => {
    return (
        <section className='my-5'>
            <h1 className='text-center text-uppercase mb-4'>What Clients Say</h1>
            <article className='container d-flex'>
                <div className="card client-card border-start">
                    <div className="card-body">
                        <h5 className="card-text">This is the best phone I have ever owned, bar none! The camera is second to none, with regards to ease of use and quality (Sony experience 5 ii has an insane pro grade camera that can't be beat but I very difficult to use if you don't know pro cameras). The refresh rate is fast, I've downloaded plenty of RPG games for my kids, including Roblox and Minecraft.</h5>
                        <div className="client-info">
                            <img src={man} alt="img" />
                            <h5 className='ms-3'>Mark Henry</h5>
                        </div>
                    </div>
                </div>
                <div className="card client-card border-start">
                    <div className="card-body">
                        <h5 className="card-text">This battery comes with many certifications, and has built in safety features, so as to avoid certain inflammations, as seen from a popular phone maker, who's phone, literally was quite fired up. The battery uses Japanese capacitors on the PCB board, and uses 8-Japanese Panasonic brand, lithium 18650 cells. These are the same battery cells used in many CREE LED.</h5>
                        <div className="client-info">
                            <img src={woman} alt="img" />
                            <h5 className='ms-3'>Luchi Henry</h5>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ClientsBlog;
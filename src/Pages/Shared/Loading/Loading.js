import React from 'react';

const Loading = () => {
    return (
        <section>
            <div style={{ height: '400px' }} className="w-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </section>
    );
};

export default Loading;
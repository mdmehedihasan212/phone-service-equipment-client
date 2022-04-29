import React from 'react';

const Loading = () => {
    return (
        <section>
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </section>
    );
};

export default Loading;
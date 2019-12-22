import React from 'react';

export default function BlogHeader(props) {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.6rem',
        }}>
            <h1 style={{
                fontSize: '1.98rem',
                lineHeight: '2.62rem',
            }}>raisiqueira.dev</h1>
            <div>
                Go to home
            </div>
        </header>
    )
}
import React from 'react';
import Link from 'next/link';

export default function BlogHeader(props) {
    return (
        <>
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
            <Link
                href={`/`}
                passHref prefetch
            >
            <h4>Go to home</h4>
            </Link>
            </div>
        </header>
        <style jsx>
            {`
                header h4 {
                    cursor: pointer;
                }
            `}
        </style>
    </>
    )
}
'use client'; // Error components must be Client-side components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error }) {
    useEffect(() => {
        // Log the error to an error reporting service (optional)
        console.error('Error:', error);
    }, [error]);

    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>Sorry for the inconvenience, but an error has occurred.</p>

            <div>
                <Link href="/">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}

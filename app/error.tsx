'use client';
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex justify-center items-center flex-col h-screen">
            <h2 className="font-bold">Something went wrong!</h2>
            <button onClick={ () => reset() } >Try again</button>
        </div>
    )
}
import React from 'react'
import Link from 'next/link'

interface EventCardProps {
    link: string;
}

export default function EventCard (props:EventCardProps) {
    return(
        <div>
            <Link href={props.link}> Card to use </Link>
        </div>

    ) 
    
}
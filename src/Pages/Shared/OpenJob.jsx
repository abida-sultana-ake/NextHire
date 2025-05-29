import React from 'react';
import { useLoaderData } from 'react-router';

const OpenJob = () => {
    const job = useLoaderData();
    console.log(job)
    return (
        <div>
            hello
        </div>
    );
};

export default OpenJob;
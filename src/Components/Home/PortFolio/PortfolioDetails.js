import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PortfolioDetails = () => {

    const [details, setDetails] = useState([])

    const _id = useParams()
    console.log(_id)

    useEffect(() => {
        fetch('projectDetails.json')
            .then(res => res.json())
            .then(data => {
                const currentProject = data.find(project => project.id === parseInt(_id.id))
                setDetails(currentProject)
            })
    }, [_id])

    console.log(details)

    return (
        <div>

        </div>
    );
};

export default PortfolioDetails;
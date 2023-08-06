import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DisplatInterestComponent = () => {
    const navigate = useNavigate();
    const { id, interest, period } = useParams();

    const backToAccountPage = () => {
        navigate(`/access-account/${id}`)
    }

    return (
        <div>
            <h3 className="text-center">For a period of {period} years, you would earn ${interest} interest <button
                className="btn btn-primary"
                onClick={backToAccountPage}          
            >
                Back to Account
            </button></h3>
            
        </div>
    )
}

export default DisplatInterestComponent;


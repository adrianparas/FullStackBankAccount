import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountService from "../services/AccountService";

const CalculateInterestComponent = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const[account, setAccount] = useState({
        accountName: "",
        accountNumber: "",
        balance: ""
    })

    const [period, setPeriod] = useState("");

    useEffect(() => {
        if(id !== "_add") {
            AccountService.getAccountById(id)
                .then((res) => {
                    const{ accountName, accountNumber, balance } = res.data
                    setAccount( {accountName, accountNumber, balance } )
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [id])

    const handleSubmit = () => {
        const interest = account.balance * period * 0.025
        navigate(`/display-interest/${id}/${interest}/${period}`)
    }

    const handleCancel = () => {
        navigate(`/access-account/${id}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className="text-center">Calculate Interest Form</h3>
                <div className="form-group">
                    <strong>Enter a Period (in years): <input
                        type="number"
                        placeholder="Period"
                        name="period"
                        className="form-control"
                        required
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    /> </strong>
                    <br></br>
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Calculate
                    </button>
                    &nbsp;
                    <button
                        className="btn btn-danger"
                        onClick={handleCancel}          
                    >
                        Cancel
                    </button>
                </div>
            </form>
            
        </div>
    )
}

export default CalculateInterestComponent;
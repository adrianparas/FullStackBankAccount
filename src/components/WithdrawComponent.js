import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountService from "../services/AccountService";

const WithdrawComponent = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [account, setAccount] = useState({
        accountName: "",
        accountNumber: "",
        balance: ""
    })

    useEffect(() => {
        AccountService.getAccountById(id).then((res) => {
          setAccount(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        AccountService.withdrawFromAccount(id, account.balance).then(() => {
            navigate(`/access-account/${id}`)
        })
    }

    const handleCancel = () => {
        navigate(`/access-account/${id}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className="text-center">Withdraw Form</h3>
                <div className="form-group">
                    <strong>Enter Amount to Withdraw: <input
                        type="number"
                        step="0.01"
                        placeholder="Enter Amount"
                        name="balance"
                        className="form-control"
                        onChange={handleChange}
                        required
                    /> </strong>
                    <br></br>
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Withdraw Amount
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

export default WithdrawComponent;
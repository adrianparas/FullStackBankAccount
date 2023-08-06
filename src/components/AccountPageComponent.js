import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountService from "../services/AccountService";

const AccountPageComponent = () => {
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

    const backToAccountList = () => {
        navigate("/accounts")
    }

    const handleDeposit = () => {
        navigate(`/deposit/${id}`)
    }

    const handleWithdraw = () => {
        navigate(`/withdraw/${id}`)
    }

    const handleInterestRateCalc = () => {
        navigate(`/interestRate/${id}`)
    }

    return (
        <div>
            <h3 className="text-center">Account Details</h3>
            <br></br>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                    <div className="card-body">
                        <div className="row">
                            <div><strong>Account Holder Name:</strong> {account.accountName}</div>     
                        </div>
                        <br></br>
                        <div className="row">
                            <div><strong>Account Number:</strong> {account.accountNumber}</div>  
                        </div>
                        <br></br>
                        <div className="row">
                            <div><strong>Balance:</strong> ${account.balance}</div>  
                        </div>
                    </div>
                    <br></br>
                    <button className="btn btn-primary" onClick={handleDeposit} style={{width: '15%', backgroundColor:'green'}}>
                        Deposit
                    </button>
                    &nbsp;
                    <button className="btn btn-primary" onClick={handleWithdraw} style={{width: '15%', backgroundColor:'red'}}>
                        Withdraw
                    </button>
                    &nbsp;
                    <button className="btn btn-primary" onClick={handleInterestRateCalc} style={{width: '15%', backgroundColor:'blue'}}>
                        Calculate Interest Rate
                    </button>

                    <br></br>
                    <br></br>
                    <button className="btn btn-primary" onClick={backToAccountList}>
                        Back to Account List
                    </button>
                    </div>
                </div>           
            </div>
        </div>
    )
}

export default AccountPageComponent;
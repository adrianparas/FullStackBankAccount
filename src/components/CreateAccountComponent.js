import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountService from "../services/AccountService";

const CreateAccountComponent = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const[account, setAccount] = useState({
        accountName: "",
        accountNumber: "",
        balance: ""
    })

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

    const saveAccount = (event) => {
        event.preventDefault();
        if (id === "_add") {
            AccountService.createAccount(account)
                .then(() => {
                    navigate("/accounts");
                })
                .catch((error) => {
          console.log(error);
        });
        }
    }

    const handleChange = (a) => {
        const { name, value } = a.target;
        setAccount((prevAccount) => ({
          ...prevAccount,
          [name]: value,
        }));
      };

    const handleCancel = () => {
        console.log("Cancel button called")
        navigate("/accounts");
    }

    return (
        <div>
            <form onSubmit={saveAccount}>
                <h3 className="text-center">Create Account</h3>
                <div className="form-group">
                    <label>Account Holder Name:</label>
                    <input
                        placeholder="Enter Name"
                        name="accountName"
                        className="form-control"
                        value={account.accountName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Account Number:</label>
                    <input
                        placeholder="Enter Account Number"
                        name="accountNumber"
                        className="form-control"
                        value={account.accountNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Starting Balance:</label>
                    <input
                        placeholder="Enter Starting Balance"
                        name="balance"
                        className="form-control"
                        value={account.balance}
                        onChange={handleChange}
                    />
                </div> 
                <br></br>
                <button
                  type="submit"
                  className="btn btn-success"
                >
                  Save
                </button>
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={handleCancel}          
                >
                  Cancel
                </button>
            </form>
        </div>
    )
}

export default CreateAccountComponent;
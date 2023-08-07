import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountService from "../services/AccountService";

const ListAccountComponent = () => {
    const navigate = useNavigate();
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        AccountService.getAccounts().then((res) => {
          setAccounts(res.data);
        });
    }, []);

    const accessAccount = (id) => {
        navigate(`/access-account/${id}`);
    };

    const deleteAccount = (id) => {
        AccountService.deleteAccount(id).then(() => {
            setAccounts(accounts.filter((account) => account.id !== id))
        })
    }

    const addAccount = () => {
        navigate("/add-account/_add");
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h2>Bank Account Manager</h2>
                    <button className="btn btn-secondary mb-3" style={{ width: '20%', backgroundColor: 'blue' }} onClick={addAccount}>
                        Add Bank Account
                    </button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Account Name</th>
                                <th>Account Number</th>
                                <th>Balance</th>
                                <th>Management</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account) => (
                                <tr key={account.id}>
                                    <td>{account.accountName}</td>
                                    <td>{account.accountNumber}</td>
                                    <td>${account.balance}</td>
                                    <td>
                                        <button onClick={() => accessAccount(account.id)} className="btn btn-info">
                                            Manage Account
                                        </button>
                                        &nbsp;
                                        <button onClick={() => deleteAccount(account.id)} className="btn btn-danger">
                                            Close Account
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListAccountComponent;

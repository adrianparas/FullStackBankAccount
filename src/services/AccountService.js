import axios from 'axios';
const ACCOUNT_API_BASE_URL="http://localhost:8090/api";

class AccountService {
    createAccount(account)
    {
        return axios.post(ACCOUNT_API_BASE_URL + '/' + "accountCreated", account);
    }

    getAccounts()
    {
        return axios.get(ACCOUNT_API_BASE_URL + '/')
    }
    
    getAccountById(accountId)
    {
        return axios.get(ACCOUNT_API_BASE_URL+ '/' + "accountId" + "/" + accountId)
    }

    depositToAccount(accountId, amount) {
        return axios.put(
            ACCOUNT_API_BASE_URL + '/accountDeposit/' + accountId,
            amount,
            { headers: { 'Content-Type': 'application/json' } }
        );
    }

    withdrawFromAccount(accountId, amount) {
        return axios.put(
            ACCOUNT_API_BASE_URL + '/accountWithdraw/' + accountId,
            amount,
            { headers: { 'Content-Type': 'application/json' } }
        );
    }

}

export default new AccountService();
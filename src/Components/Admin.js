// import React from 'react'
// import { useAdminQuery } from '../store/AdminSlice'

// export const Admin = () => {

//     const {data,error,isLoading} = useAdminQuery()

//   return (
//     <div className='container'>
//         <h4>Admin</h4>

//         {
//             data && data.map(account=><p>{account.id} : {account.amount}</p>)
//         }
//     </div>
//   )
// }

import React from 'react';
import { useAddAccountsMutation, useDeleteAccountMutation, useGetAccountsQuery, useUpdateAccountMutation } from '../store/AdminSlice'; // Update the import to use the correct function name


export const Admin = () => {
  const { data, error, isLoading } = useGetAccountsQuery(); // Use the correct function name
    const[addAccounts,response] = useAddAccountsMutation();
    const[deleteAccount]=useDeleteAccountMutation();
    const[updateAccount]=useUpdateAccountMutation();

    if(error){
        return<p>{error}</p>;
    }

  return (
    <div className='container'>
      <h4>Admin</h4>
      {data && data.map((account) => <p key={account.id}>{account.id} : {account.amount}
      <button onClick={()=>deleteAccount(account.id)}>Delete Account</button>
      <button onClick={()=>updateAccount({id:account.id,amount:777})}>Update Account</button>
      </p>)}

      <button onClick={()=>{addAccounts(400,data.length+1)}}>Add Account</button>
    </div>
  );
};

import React from 'react'
import Header_admin from '../components/Header_admin';
import SignOut from '../components/SignOut';

const adminLanding = () => {
  return (
    <div>

      <div>
        <div>
          <Header_admin />

        </div>
        <div>
          <SignOut/>
        </div>
      </div>

        <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">Club ID </th>
                    <th scope="col">Club Name</th>
                    <th scope="col">edit </th>
                    <th scope="col">delete</th>
                </tr>
            </thead>
            <tbody>
                {/* (sample row just for checking )  */}
                <tr>
                    <td>1</td>
                    <td>RAF</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default adminLanding;
import React from 'react'
import Header_admin from '../components/Header_admin';
import SignOut from '../components/SignOut';

const Landing = () => {
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
                    <th scope="col">Post ID </th>
                    <th scope="col">Club Name</th>
                    <th scope="col">Post Link </th>
                    
                </tr>
            </thead>
            <tbody>
                {/* (sample row just for checking )  */}
                
                <tr>
                    <td>1</td>
                    <td>Music Club</td>
                    <td><button className="btn btn-warning">click to view</button></td>
                    
                </tr>
                <tr>
                    <td>2</td>
                    <td>Dance Club</td>
                    <td><button className="btn btn-warning">click to view</button></td>
                    
                </tr>
                <tr>
                    <td>11</td>
                    <td>Music Club</td>
                    <td><button className="btn btn-warning">click to view</button></td>
                    
                </tr>
                <tr>
                    <td>12</td>
                    <td>Dance Club</td>
                    <td><button className="btn btn-warning">click to view</button></td>
                    
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Landing;
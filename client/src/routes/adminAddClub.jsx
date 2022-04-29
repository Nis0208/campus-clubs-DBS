import React from 'react'
import Header_admin from '../components/Header_admin';
import SignOut from '../components/SignOut';

const adminAddClub = () => {
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

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Club Name</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <span class="input-group-text" id="inputGroup-sizing-default">Category</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Club Head 1" aria-label="First name"/>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Club Head 2" aria-label="Last name"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default adminAddClub;
import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export function Footer() {
  return (
    <MDBFooter className=' text-center text-black'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        © 2023 All Rights Reserved KristaCDesign
      </div>
    </MDBFooter>
  );
}
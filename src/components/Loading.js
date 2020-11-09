import React, { Fragment }  from 'react'
const Loading = () => {
  return (
    <Fragment>
      <div style = {{height : "100vh", display:'flex', justifyContent:'center',alignItems:'center'}}>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
    </Fragment>
  );
};

export default Loading;

import React from 'react';

export const Card = function(cat: any):any {
 return (
  <div className="col-md-1">
   <div className="card box-shadow">
      <div className="btn-group">
       <button
        type="button"
        className="btn btn-sm btn-outline-secondary"
       >
        View {cat}
       </button>
      </div>
   </div>
  </div>
 );
};
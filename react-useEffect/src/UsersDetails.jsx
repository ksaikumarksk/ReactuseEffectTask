import React from "react";

export const UsersDetails = (props) => {
  const { details } = props;
  const { id, body, subject, post_time } = details;
  return (
    
      
        
        <tr>
          <td>{id}</td>
          <td>{subject}</td>
          <td>{body}</td>
          <td>{post_time}</td>
        </tr>
      
    
  );
};

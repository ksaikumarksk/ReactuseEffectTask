import { useState, useEffect } from "react";

import axios from "axios";
import { UsersDetails } from "./UsersDetails";
export const User = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://khoros-server-vercel-bikhz4mt9-koushil-mankali.vercel.app/api/messages"
      )
      .then((res) => {
        console.log(res.data[0].data.items);
        setMessages(res.data[0].data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("messages data:", messages);
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Subject</th>
          <th>Body</th>
          <th>Date</th>
        </tr>
        {messages &&
          messages.map((user) => <UsersDetails key={user.id} details={user} />)}
      </table>
    </div>
  );
};

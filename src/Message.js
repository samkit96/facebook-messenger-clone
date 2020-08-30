import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUserLoggedIn = username === message.username;

  return (
    <div ref={ref} className={`message ${isUserLoggedIn && "message_user"}`}>
      <Card
        className={isUserLoggedIn ? "message_userCard" : "message_guestCard"}
      >
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUserLoggedIn && `${message.username || 'Unknown user'}: `} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

import React from "react";

const MessageItem = ({ avatar, name, message, time, isNew, unreadCount }) => {
  const messageStyles = {
      messageContainer: {
      width: "100%",
      maxWidth:'1000px',
     },
    messageItem: {
      display: "flex",
      alignItems: "flex-start",
      padding: "10px",
      borderBottom: "1px solid #e0e0e0",
      backgroundColor: "white",
      transition: "background-color 0.3s ease",
    
    },
    messageItemHover: {
      backgroundColor: "#eaeaea",
    },
    avatarWrapper: {
      position: "relative",
      marginRight: "10px",
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
    onlineDot: {
      position: "absolute",
      width: "10px",
      height: "10px",
      backgroundColor: "#0c8ce9",
      borderRadius: "50%",
      top: "0",
      right: "0",
      border: "2px solid white",
    },
    messageInfo: {
      display: "flex",
      flexDirection: "column",
    },
    headerName: {
      display: "flex",
      alignItems: "center",
      marginBottom: "5px",
      justifyContent: "space-between",
    },
    name: {
      fontWeight: "bold",
      marginRight: "5px",
    },
    new: {
      backgroundColor: "#ffd700",
      color: "#000",
      borderRadius: "5px",
      padding: "2px 4px",
      marginLeft: "5px",
      fontSize: "0.8em",
    },
    unreadCount: {
      backgroundColor: "#ff5722",
      color: "white",
      borderRadius: "50%",
      padding: "2px 6px",
      fontSize: "0.8em",
      marginLeft: "5px",
    },
    message: {
      color: "#757575",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    time: {
      color: "#b0b0b0",
      fontSize: "0.8em",
      marginLeft: "5px",
      alignSelf: "flex-start",
    },
  };

  return (
   
      <div style={messageStyles.messageContainer}>
        <div
          style={messageStyles.messageItem}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor =
              messageStyles.messageItemHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              messageStyles.messageItem.backgroundColor)
          }
        >
          <div style={messageStyles.avatarWrapper}>
            <img
              src={avatar}
              alt={`${name}'s avatar`}
              style={messageStyles.avatar}
            />
            <div style={messageStyles.onlineDot}></div>
          </div>
          <div style={messageStyles.messageInfo}>
            <div style={messageStyles.headerName}>
              <div style={messageStyles.name}>{name}</div>
              <div>
                {isNew && <span style={messageStyles.new}>New</span>}
                {unreadCount > 0 && (
                  <span style={messageStyles.unreadCount}>{unreadCount}</span>
                )}
              </div>
            </div>
            <div style={messageStyles.message}>
              {message} <span style={messageStyles.time}>{time}</span>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default MessageItem;

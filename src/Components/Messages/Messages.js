import React from 'react';
import MessageItem from './MessageItem';

const Messages = () => {
  return (
    <div style={{width:'100%',boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",borderRadius: "8px",  backgroundColor: "#ffffff",paddingBlock:'20px 20px', maxWidth:'450px'}}>
      <MessageItem
        avatar="https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Ftan1.png&w=48&q=75"
        name="Jane Doe"
        message="Hi, I want to make enquiries about your..."
        time="12:55 am"
        isNew={true}
        unreadCount={2}
      />
      <MessageItem
        avatar="https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Ftan1.png&w=48&q=75"
        name="Jane Doe"
        message="Hi, I want to make enquiries about your..."
        time="12:55 am"
        isNew={true}
        unreadCount={0}
      />
      <MessageItem
        avatar="https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Ftan1.png&w=48&q=75"
        name="Jane Doe"
        message="Hi, I want to make enquiries about your..."
        time="12:55 am"
        isNew={false}
        unreadCount={0}
      />
    </div>
  );
};

export default Messages;

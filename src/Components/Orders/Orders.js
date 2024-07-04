import React from 'react';

const orders = [
  { id: 1, name: 'iPhone 13', price: '₦730,000.00', date: '12 Sept 2022', status: 'Pending', image: 'https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Fphone1.png&w=48&q=75' },
  { id: 2, name: 'iPhone 13', price: '₦730,000.00', date: '12 Sept 2022', status: 'Completed', image: 'https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Fphone1.png&w=48&q=75' },
  { id: 3, name: 'iPhone 13', price: '₦730,000.00', date: '12 Sept 2022', status: 'Pending', image: 'https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Fphone1.png&w=48&q=75' },
  { id: 4, name: 'iPhone 13', price: '₦730,000.00', date: '12 Sept 2022', status: 'Completed', image: 'https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Fphone1.png&w=48&q=75' },
  { id: 5, name: 'iPhone 13', price: '₦730,000.00', date: '12 Sept 2022', status: 'Completed', image: 'https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Fphone1.png&w=48&q=75' },
  { id: 6, name: 'iPhone 13', price: '₦730,000.00', date: '12 Sept 2022', status: 'Pending', image: 'https://metrix-dashboard-ten.vercel.app/_next/image?url=%2Fimg%2Fphone1.png&w=48&q=75' },
];

const OrderList = () => {
  const OrderStyles = {
    orderList: {
      width: "100%",
      maxWidth:'600px',
      margin: "0", 
      padding: '20px',
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      backgroundColor: "#fff",
      position: "relative",
      left: "0",
    },
    h2: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    ul: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    orderItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #f0f0f0",
    },
    orderImage: {
      width: "50px",
      height: "50px",
      objectFit: "cover",
      borderRadius: "5px",
    },
    orderDetails: {
      flex: 1,
      marginLeft: "10px",
    },
    orderDetailsP: {
      margin: 0,
      color: "#555",
    },
    orderMeta: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    orderDate: {
      margin: 0,
      color: "#777",
    },
    orderStatus: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 10px",
      borderRadius: "28px",
      fontSize: "12px",
      textTransform: "uppercase",
      marginTop: "5px",
      width: '80px',
    },
    statusCompleted: {
      backgroundColor: "#d4edda",
      color: "#155724",
    },
    statusPending: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
    },
  };

  return (
    <div style={OrderStyles.orderList}>
      <h2 style={OrderStyles.h2}>Recent Orders</h2>
      <ul style={OrderStyles.ul}>
        {orders.map(order => (
          <li key={order.id} style={OrderStyles.orderItem}>
            <div className="order-image">
              <img src={order.image} alt={order.name} style={OrderStyles.orderImage} />
            </div>
            <div style={OrderStyles.orderDetails}>
              <p style={OrderStyles.orderDetailsP}>{order.name}</p>
              <p><strong>{order.price}</strong> x 1</p>
            </div>
            <div style={OrderStyles.orderMeta}>
              <p style={OrderStyles.orderDate}>{order.date}</p>
              <div className={`order-status ${order.status.toLowerCase()}`} style={Object.assign({}, OrderStyles.orderStatus, order.status === 'Completed' ? OrderStyles.statusCompleted : OrderStyles.statusPending)}>
                <p>{order.status}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;

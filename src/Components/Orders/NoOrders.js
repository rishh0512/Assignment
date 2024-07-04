import React from 'react';

const NoOrdersStyles = {
  noOrders: {
    maxWidth:'600px',
    width: "100%",
    margin: "0",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    backgroundColor: "#fff",
    position: "relative",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  h2: {
    textAlign: "left",
    marginBottom: "20px",
    color: "#333",
  },
  noOrdersContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
  noOrdersImage: {
    width: "220px",
    height: "220px",
    objectFit: "cover",
    marginBottom: "20px",
  },
  noOrdersText: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0",
    color: "#333",
  },
  noOrdersSubtext: {
    fontSize: "14px",
    color: "#777",
    margin: "10px 0",
  },
  newProductButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
    marginTop: "20px",
  },
  newProductButtonHover: {
    backgroundColor: "#0056b3",
  },
};

const NoOrders = () => {
  return (
    <div style={NoOrdersStyles.noOrders}>
      <h2 style={NoOrdersStyles.h2}>Recent Orders</h2>
      <div style={NoOrdersStyles.noOrdersContent}>
        <div style={NoOrdersStyles.noOrdersImage}>
          <img src="https://metrix-dashboard-ten.vercel.app/img/iconOrder.svg" alt="No Orders" style={{width:'220px',backgroundColor:"#e3f7fc",borderRadius:'94px',color:"757575"}}/>
        </div>
        <p style={NoOrdersStyles.noOrdersText}>No Orders Yet?</p>
        <p style={NoOrdersStyles.noOrdersSubtext}>Add products to your store and start selling to see orders here.</p>
        <button style={NoOrdersStyles.newProductButton}>+ New Product</button>
      </div>
    </div>
  );
};

export default NoOrders;

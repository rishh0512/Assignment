import React, { useState } from "react";

const Filter = () => {
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
      background: "#fff",
      width: "600px",
    },
    filterSection: {
      marginBottom: "15px",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    select: {
      marginLeft: "10px",
      padding: "5px",
      borderRadius: "5px",
      border: "1px solid #e0e0e0",
    },
    amountInputs: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "5px",
      borderRadius: "5px",
      border: "1px solid #e0e0e0",
    },
    button: {
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      background: "#007bff",
      color: "#fff",
      cursor: "pointer",
    },
  };
  const [orderType, setOrderType] = useState({
    homeDelivery: false,
    pickUp: false,
  });
  const [status, setStatus] = useState("All");
  const [customer, setCustomer] = useState("All");
  const [amount, setAmount] = useState({ from: 0.0, to: 0.0 });

  const handleOrderTypeChange = (event) => {
    const { name, checked } = event.target;
    setOrderType({ ...orderType, [name]: checked });
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };

  const handleAmountChange = (event) => {
    const { name, value } = event.target;
    setAmount({ ...amount, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ orderType, status, customer, amount });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.filterSection}>
        <label style={styles.label}>Filter</label>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="checkbox"
              name="homeDelivery"
              checked={orderType.homeDelivery}
              onChange={handleOrderTypeChange}
              style={{ fontSize: "20px" }}
            />
            <p>Home Delivery</p>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="checkbox"
              name="homeDelivery"
              checked={orderType.homeDelivery}
              onChange={handleOrderTypeChange}
              style={{ fontSize: "20px" }}
            />
            <p>Pick Up</p>
          </div>
        </div>
      </div>

      <div style={styles.filterSection}>
        <label style={styles.label}>Status:</label>
        <select
          value={status}
          onChange={handleStatusChange}
          style={styles.select}
        >
          <option value="All">All</option>
        </select>
      </div>

      <div style={styles.filterSection}>
        <label style={styles.label}>Customer:</label>
        <select
          value={customer}
          onChange={handleCustomerChange}
          style={styles.select}
        >
          <option value="All">All</option>
        </select>
      </div>

      <div style={styles.filterSection}>
        <label style={styles.label}>Amount:</label>
        <div style={styles.amountInputs}>
          <input
            type="number"
            name="from"
            value={amount.from}
            onChange={handleAmountChange}
            style={styles.input}
          />
          <input
            type="number"
            name="to"
            value={amount.to}
            onChange={handleAmountChange}
            style={styles.input}
          />
        </div>
      </div>

      <button type="submit" style={styles.button}>
        Filter
      </button>
    </form>
  );
};

export default Filter;

import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const Card = ({ icon, labels, values, percentage, isPositive }) => {
  const CardStyles = {
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      boxSizing: "border-box",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    icon: {
      maxWidth: "100%",
      height: "auto",
    },
    cardBody: {
      marginTop: "10px",
    },
    labelsValues: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: "10px",
    },
    labelValue: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    label: {
      fontSize: "14px",
      color: "#888",
    },
    value: {
      fontSize: "18px",
      color: "#333",
      textAlign: "right", 
    },
    valuePercentage: {
      display: "flex",
      alignItems: "center",
    },
    percentage: {
      marginLeft: "10px",
      fontSize: "16px",
      color: isPositive ? "green" : "red",
    },
  };

  return (
    <div style={CardStyles.card}>
      <div style={CardStyles.cardHeader}>
        <img src={icon} alt="icon" style={CardStyles.icon} />
        <Dropdown />
      </div>
      <div style={CardStyles.cardBody}>
        <div style={CardStyles.labelsValues}>
          {labels.map((label, index) => (
            <div key={index} style={CardStyles.labelValue}>
              <span style={CardStyles.label}>{label}</span>
              <span style={CardStyles.value}>
                {values[index]}{" "}
                <span style={CardStyles.percentage}>{percentage[index]}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

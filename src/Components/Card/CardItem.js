import React from "react";
import Card from "./Card";
import './CardItem.css'

function CardItem() {
  return (
  
      <div className="CardContainer">
        <Card
          icon="https://metrix-dashboard-ten.vercel.app/img/iconSales.svg"
          labels={["Total Sales"]}
          values={["₦0.00"]}
          percentage={["+0.00%"]}
          isPositive={true}
        />
        <Card
          icon="https://metrix-dashboard-ten.vercel.app/img/iconCus.svg"
          labels={["Customers", "Active"]}
          values={["0", "0"]}
          percentage={["+0.00%", "+0.00%"]}
          isPositive={true}
        />
        <Card
          icon="https://metrix-dashboard-ten.vercel.app/img/iconOrder.svg"
          labels={["All Orders", "Pending", "Completed"]}
          values={["0", "0", "0"]}
          percentage={["+0.00%", "+0.00%", "+0.00%"]}
          isPositive={true}
        />
      </div>
   
  );
}

export default CardItem;

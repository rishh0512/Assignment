import React from "react";
import CardItem from "../Components/Card/CardItem";
import ChartComponent from "../Components/Chart/Chart";
import ImageUploader from "../Components/ImageUploader/ImageUploader";
import Messages from "../Components/Messages/Messages";
import OrderList from "../Components/Orders/Orders";
import NoOrders from "../Components/Orders/NoOrders";
import DatePicker from "../Components/DatePicker/DatePicker";
import InputFields from "../Components/InputFields/InputFields";
import Button from "../Components/Button/Button";
import Toggle from "../Components/Toggle/Toggle";
import Checkbox from "../Components/Checkbox/Checkbox";
import Radio from "../Components/Radio/Radio";
import Tabs from "../Components/Tabs/Tabs";
import Stepper from "../Components/Stepper/Stepper";
import Filter from "../Components/Filter/Filter";

function MainSection() {
  return (
    <>
      <CardItem />
      <ChartComponent />
      <ImageUploader />
      <Messages />
      <OrderList />
      <NoOrders />
      <Filter/>
      <DatePicker />
      <InputFields />
      <Button />
      <Toggle />
      <Checkbox />
      <Radio />
      <Tabs/>
      <Stepper/>
      
    </>
  );
}

export default MainSection;

import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs","Cricket","Shoker","News","Gaming", "Songs","Cricket","Shoker","News"];

const ButtonList = () => {
  return (
    <div className="flex m-2">
      {list.map((data) => (
        <Button name={data} />
      ))}

      {/* <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Shoker"/>
      <Button name="News"/>

      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Shoker"/>
      <Button name="News"/> */}
    </div>
  );
};

export default ButtonList;

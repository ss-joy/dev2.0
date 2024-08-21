import React, { useState } from "react";
import { Button } from "./ui/button";

function VanillaForm() {
  const [user, setUser] = useState({
    name: "",
    petName: "",
    age: "",
  });
  function handleInputChange(
    identifier: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setUser((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("conosle log stuff");
    e.currentTarget.reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">your name </label>
        <input
          type="text"
          id="name"
          value={user.name}
          onChange={(e) => {
            handleInputChange("name", e);
          }}
        />

        <label htmlFor="pet-name">your pet's name </label>
        <input
          type="text"
          id="pet-name"
          value={user.petName}
          onChange={(e) => {
            handleInputChange("petName", e);
          }}
        />

        <label htmlFor="age">your age</label>
        <input
          type="number"
          id="age"
          value={user.age}
          onChange={(e) => {
            handleInputChange("age", e);
          }}
        />
        <Button type="submit" className="mx-auto block">
          submit
        </Button>
      </form>
    </div>
  );
}

export default VanillaForm;

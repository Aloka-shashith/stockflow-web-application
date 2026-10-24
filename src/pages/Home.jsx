import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Button as ShadCNButton } from "../components/ui/button";

function Home() {
  return (
    <div>
      <Card content="Card 1" />
      <Card content="Card 2" />
      <Button />
      <ShadCNButton>Click me</ShadCNButton>
    </div>
  );
}

export default Home;

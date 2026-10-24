import React from "react";

import Card from "../components/Card";
import {Button} from "../components/ui/button";
import TopNav from "../components/top-nav/TopNav";


function Home() {
  return (
    <div>
      <TopNav />
      <Card content="Card 1" />
      <Card content="Card 2" />
      <Button>Click me</Button>
    </div>
  );
}

export default Home;

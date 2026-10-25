import React from "react";

import DefaultLayout from "../layouts/DefaultLayout";

import Card from "../components/Card";
import {Button} from "../components/ui/button";


function Home() {
  return (
    <DefaultLayout>
      <Card content="Card 1" />
      <Card content="Card 2" />
      <Button>Click me</Button>
    </DefaultLayout>
  );
}

export default Home;

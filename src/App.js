import React from "react";
import { Header } from "./components";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-24 w-full p-8"></main>
    </div>
  );
}

export default App;

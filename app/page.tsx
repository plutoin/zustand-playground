import React from "react";

export default function Home() {
  return (
    <main>
      <h1>Zustand practice</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <a href="/count">Count</a>
        <a href="/todo">To-do</a>
      </div>
    </main>
  );
}

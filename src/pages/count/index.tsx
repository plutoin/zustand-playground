import React from "react";

import Header from "src/components/Layout/Header";
import Counter from "src/components/Count/Count";

export default function Count() {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center h-screen bg-stone-200">
        <Counter />
      </section>
    </>
  );
}

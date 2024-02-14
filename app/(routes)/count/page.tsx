"use client";

import React from "react";

import { useCountStore } from "../../store/store";
// import styled from "@emotion/styled";

export default function Count() {
  const { count, inc, dec } = useCountStore();

  return (
    <section>
      <h1>Count</h1>
      <span>{count}</span>
      <div>
        <button onClick={inc}>one up</button>
        <button onClick={dec}>one down</button>
      </div>
    </section>
  );
}

// const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

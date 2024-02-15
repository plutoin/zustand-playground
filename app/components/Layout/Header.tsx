import React from "react";

import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 px-5 py-4">
      <button
        type="button"
        className="text-gray-800"
        onClick={() => router.push("/")}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </header>
  );
}

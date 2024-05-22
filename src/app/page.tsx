import Link from "next/link";
import RandomMeal from "@/components/RandomMeal/RandomMeal";
import { useState, useEffect } from "react";
import { fetchMeal } from "@/utils/api";

export default function Home() {

  return (
    <div>

      <RandomMeal/>


    </div>
  );
}

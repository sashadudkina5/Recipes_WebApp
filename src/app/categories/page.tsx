"use client";
import {fetchMealsByCategory } from "@/utils/api";
import {
  extractIngredients,
  formatTextAsList,
  embedYouTubeUrl,
} from "@/utils/service";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss"
import useFetch from "@/utils/hooks";
import CategoriesList from "@/components/CategoriesList/CategoriesList";

export default function CategoriesPage() {

  return (
    <div className={styles.category_page}>
        <h1>Search meals by caregory</h1>
        <CategoriesList/>
    </div>
  );
}

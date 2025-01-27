"use client";

import Image from "next/image";
import CategoriesListStyles from "./CategoriesList.module.scss";
import Link from "next/link";
import { fetchCategoriesList, fetchRegionsList } from "@/utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import useFetch from "@/utils/hooks";


export default function CategoriesList() {
    const { data: categoriesList, loading } = useFetch(fetchCategoriesList);
  

  return (
    <section className={CategoriesListStyles.categories_wrapper}>
      {loading || categoriesList === null ? (
        <CircularProgress />
      ) : (
        <ul className={CategoriesListStyles.categories_list}>
          {categoriesList.meals.map((category: any) => {
            return (
              <Link href={`/categories/${category.strCategory}`} className={CategoriesListStyles.categories_item}>
                <span>{category.strCategory}</span>
              </Link>
            );
          })}
        </ul>
      )}
    </section>
  );
}

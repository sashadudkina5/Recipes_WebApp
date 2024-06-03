import RandomMeal from "@/components/RandomMeal/RandomMeal";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import dynamic from 'next/dynamic';

const RegionsMap = dynamic(() => import('@/components/RegionsMap/RegionsMap'), { ssr: false });

export default function Home() {

  return (
    <div>
      <RandomMeal/>
      <h1>Seach meals by category</h1>
      <CategoriesList />
      <h1>Seach meals by region</h1>
      <RegionsMap />
    </div>
  );
}

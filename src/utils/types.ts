export interface MealArea {
    strArea: string;
}

export interface MealAreaWithCode extends MealArea {
    countryCode: string | null;
}

export interface MealsData {
    meals: MealArea[];
}
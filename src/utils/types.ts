export type TBurgerIngredientInfo = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  calories: number;
  uuid?: string;
};

export type TOrder = {
  ingredients: string[];
  _id: string;
  status: "done" | "pending" | "created";
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export type TTab = {
  id: number;
  name: string;
  type: string;
}

export type TUser = {
  email: string;
  name: string
}

export type TResponseAuthUser = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: TUser;
}

export type TResponseRefreshToken = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}
export type TResponseGetProfile = {
  success: boolean;
  user: TUser
}

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type Properties = {
  id: string;
  name: string;
  price: number;
  country: string;
  imageUrl: string;
  tagline: string;
};

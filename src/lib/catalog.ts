export type Product = {
  slug: string;
  name: string;
  detail: string;
  price: number;
  tone: "sand" | "slate" | "clay";
  shape: "tee" | "shirt" | "trouser";
  tag?: string;
};

export const products: Product[] = [
  { slug: "everyday-tee", name: "Everyday Tee", detail: "Chalk / 240 GSM", price: 1890, tone: "sand", shape: "tee", tag: "New" },
  { slug: "studio-overshirt", name: "Studio Overshirt", detail: "Ink / brushed twill", price: 3290, tone: "slate", shape: "shirt" },
  { slug: "easy-trouser", name: "Easy Trouser", detail: "Olive / soft canvas", price: 3590, tone: "clay", shape: "trouser", tag: "Best seller" },
  { slug: "field-shirt", name: "Field Shirt", detail: "Stone / light twill", price: 2990, tone: "sand", shape: "shirt" },
];

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

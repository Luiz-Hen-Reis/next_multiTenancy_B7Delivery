import { Product } from "../types/Product";
import { Tenant } from "../types/Tenant";

const TEMPORARYoneProduct: Product = {
  id: 0,
  image: "/temp/burguer.png",
  categoryName: "Tradicional",
  name: "Texas Burguer",
  price: 25.5,
  description: '2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal, ',
};

export const useApi = (tenantSlug: string) => ({
  getTenant: (): boolean | Tenant => {
    switch (tenantSlug) {
      case "b7burguer":
        return {
          slug: "b7burguer",
          name: "B7Burguer",
          mainColor: "#FF0000",
          secondaryColor: "#00FF00",
        };
        break;

      case "b7pizza":
        return {
          slug: "b7pizza",
          name: "B7Pizza",
          mainColor: "#0000FF",
          secondaryColor: "#00FF00",
        };
        break;

      default:
        return false;
    }
  },

  getAllProducts: () => {
    let products = [];
    for (let q = 0; q < 10; q++) {
      products.push(TEMPORARYoneProduct);
    }
    return products;
  },

  getProduct: (id: string) => {
    return TEMPORARYoneProduct;
  },
});

import { products } from "../../index";

export default function handler(req, res) {
  const { productId } = req.query;
  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.status(404).json({});
    return;
  }
  const snipcartProduct = {
    ...product,
    image: product?.image?.src?.src ?? "",
  };

  res.status(200).json(snipcartProduct);
}

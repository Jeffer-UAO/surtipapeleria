import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { Advertisement, Listproducts } from "@/components";
import { Footer } from "@/components";

export default function category(props) {
  const { products, category } = props;
  const hasProduct = size(products) > 0;

  return (
    <div>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>
 
      {hasProduct ? <Listproducts products={products} title={category.name} /> : <h5>No products</h5>}

      <Footer />
    </div>
  );
}

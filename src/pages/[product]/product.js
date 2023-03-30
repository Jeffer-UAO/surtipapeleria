import { BasicLayout } from "@/layouts";
import { Advertisement } from "@/components";
import { DetailProduct } from "@/components";
import { Footer } from "@/components";

export default function ProductPage(props) {
  const { product, relate } = props;

  return (
    <div>
      <BasicLayout>
        <Advertisement />
      </BasicLayout>

      <DetailProduct product={product} relate={relate} />

      <Footer />
    </div>
  );
}

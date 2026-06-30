import { useParams } from "react-router-dom";
function ProductDetails() {
  const params = useParams();
  return (
    <>
      <main>
        <h1>ProductDetails</h1>
        <p>{params.productId}</p>
      </main>
    </>
  );
}

export default ProductDetails;

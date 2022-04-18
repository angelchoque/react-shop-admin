import FormProduct from '@components/FormProduct';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;

    async function getProduct() {
      try {
        const response = await axios.get(endPoints.products.getProduct(id));
        if (response) {
          setProduct(response.data);
        }
      } catch (error) {
        console.log(error);
        setNotFound(true);
      }
      // const response = await axios.get(endPoints.products.getProduct(id))
      // setProduct(response.data)
    }
    getProduct();
  }, [router?.isReady]);

  // return <FormProduct product={product} />
  return notFound ? <div> Product Not Found </div> : <FormProduct product={product} />;
}

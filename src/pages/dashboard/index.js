import { useState } from 'react';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { Chart } from '@common/Chart';

export default function Dashboard() {
  const PRODUCT_LIMIT = 15;
  const [offsetProducts, setOffsetProducts] = useState(15);
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, offsetProducts));
  const totalProducts = useFetch(endPoints.products.getProducts(0, 0)).length;

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoryCount),
        borderWidht: 2,
        backgroundColor: ['#ffbb11', '#C0C0C0', '#50AF95', '#F3BA2F', '#2A71D0'],
      },
    ],
  };
  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}

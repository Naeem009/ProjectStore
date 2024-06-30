import { GetStaticProps } from 'next';
import axios from 'axios';
import Layout from './components/Layout';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface HomePageProps {
  products: Product[];
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2"/>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>${product.price}</p>
            <button className="bg-blue-500 text-white p-2 rounded mt-2">Add to Cart</button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: products } = await axios.get('https://fakestoreapi.com/products');
  return {
    props: {
      products,
    },
  };
};

export default HomePage;

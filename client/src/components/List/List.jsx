import Card from '../Card/Card';
import './List.scss';

const List = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Product 1',
      isNew: true,
      oldPrice: 100,
      price: 500,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Product 2',
      isNew: true,
      oldPrice: 10,
      price: 5000,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Product 3',
      isNew: false,
      oldPrice: 1,
      price: 50000,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Product 4',
      isNew: false,
      oldPrice: 100000,
      price: 5,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;

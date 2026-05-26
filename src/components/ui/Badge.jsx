const styles = {
  bestseller: 'bg-primary text-white',
  sale: 'bg-red-500 text-white',
  new: 'bg-green-500 text-white',
};

const labels = {
  bestseller: 'Best Seller',
  sale: 'Sale',
  new: 'New',
};

export default function Badge({ type }) {
  if (!type) return null;
  return (
    <span
      className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-semibold rounded-full ${styles[type] || ''}`}
    >
      {labels[type] || type}
    </span>
  );
}

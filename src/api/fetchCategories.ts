export const fetchCategories = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data: string[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return false;
    }
  };
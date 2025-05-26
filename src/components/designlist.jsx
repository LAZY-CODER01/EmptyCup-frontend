import { useSelector } from "react-redux";
import { DesignerCard } from "./designcard";
import { useState, useEffect, useCallback } from "react";

export default function DesignList() {
  const [designers, setDesigners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const shortlistItems = useSelector(state => state.shortlistitem.items);
  const isShortlistActive = useSelector((state) => state.shortlist);
  const issorted = useSelector((state) => state.sortorder);

  const handleShortlistUpdate = useCallback((updatedProduct) => {
    setDesigners(prevDesigners => 
      prevDesigners.map(designer => 
        designer.id === updatedProduct.id ? updatedProduct : designer
      )
    );
  }, []);

  const fetchDesigners = async () => {
    try {
      const response = await fetch('https://empty-cup-server-axqb.vercel.app/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch designers');
      }
      const data = await response.json();
      setDesigners(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDesigners();
  }, [shortlistItems]); // Re-fetch when shortlist items change

  // Filter designers based on shortlist status
  let designersToRender = isShortlistActive 
    ? designers.filter(designer => designer.actions.shortlist)
    : designers;

  // Apply sorting if needed
  designersToRender = issorted 
    ? [...designersToRender].sort((a, b) => a.name.localeCompare(b.name)) 
    : designersToRender;

  if (loading) {
    return <div className="flex justify-center py-6">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center py-6 text-red-500">{error}</div>;
  }

  // Show message if no shortlisted items when shortlist is active
  if (isShortlistActive && designersToRender.length === 0) {
    return (
      <div className="flex justify-center py-6">
        No designers have been shortlisted yet
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-wrap justify-center space-y-6 py-6">
      {designersToRender.map((designer, idx) => (
        <DesignerCard 
          key={designer.id} 
          designer={designer} 
          index={idx}
          onShortlistUpdate={handleShortlistUpdate}
        />
      ))}
    </div>
  );
}





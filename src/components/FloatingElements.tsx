
import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  type: 'leaf' | 'circle' | 'pattern';
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 12; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 8,
          size: 20 + Math.random() * 40,
          type: ['leaf', 'circle', 'pattern'][Math.floor(Math.random() * 3)] as 'leaf' | 'circle' | 'pattern'
        });
      }
      setElements(newElements);
    };

    generateElements();
  }, []);

  const getElementContent = (type: string) => {
    switch (type) {
      case 'leaf':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-60">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
        );
      case 'circle':
        return <div className="w-full h-full rounded-full bg-current opacity-40"></div>;
      case 'pattern':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-50">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute text-terracotta-300 ${
            element.type === 'leaf' ? 'animate-float' : 
            element.type === 'circle' ? 'animate-float-delayed' : 
            'animate-bounce-gentle'
          }`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          {getElementContent(element.type)}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;

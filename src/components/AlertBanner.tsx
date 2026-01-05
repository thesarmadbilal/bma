import React, { useState, useEffect } from 'react';

const AlertBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Check localStorage if the user has already closed the banner
  useEffect(() => {
    const bannerClosed = localStorage.getItem('bannerClosed');
    if (bannerClosed) {
      setIsVisible(false);
    }
  }, []);

  // Close the banner and store that state in localStorage
  const closeBanner = () => {
    setIsVisible(false);
    localStorage.setItem('bannerClosed', 'true');
  };

  return (
    isVisible ? (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-60 z-50 flex justify-center items-center">
        <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg p-6">
          <div className="flex flex-col items-center">
         
            <img
              src="/lovable-uploads/Alert.jpeg" 
              alt="Alert"
              className="h-200 mb-4"
            />
            
            <button
              onClick={closeBanner}
              className="text-white bg-red-600 p-3 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default AlertBanner;

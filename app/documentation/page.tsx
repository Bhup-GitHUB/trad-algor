'use client';

import { useEffect } from 'react';

export default function DocumentationPage() {
  useEffect(() => {
    // Redirect to the Swagger UI
    window.location.href = '/api/documentation';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Redirecting to API Documentation...</h1>
        <p className="text-gray-600">If you are not redirected automatically, please click the link below.</p>
        <button 
          onClick={() => window.location.href = '/api/documentation'}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Go to Documentation
        </button>
      </div>
    </div>
  );
} 
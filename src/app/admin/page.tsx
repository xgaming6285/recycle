'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface RequestData {
  _id: string;
  name: string;
  material: string;
  quantity: string;
  location: string;
  phone: string;
  images: string[];
  createdAt: string;
}

export default function AdminPage() {
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<RequestData | null>(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await fetch('/api/requests');
      const data = await res.json();
      
      if (data.success) {
        setRequests(data.data);
      } else {
        setError(data.error || 'Failed to fetch requests');
      }
    } catch (err) {
      setError('An error occurred while fetching data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('bg-BG', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Incoming Requests</h2>
        <button 
          onClick={fetchRequests}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-gray-900 text-gray-200 uppercase font-medium text-xs">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Name / Company</th>
                <th className="px-6 py-4">Material</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4 text-center">Images</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    No requests found.
                  </td>
                </tr>
              ) : (
                requests.map((req) => (
                  <tr key={req._id} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">{formatDate(req.createdAt)}</td>
                    <td className="px-6 py-4 font-medium text-white">{req.name}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300 border border-gray-600">
                        {req.material}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white">{req.quantity}</td>
                    <td className="px-6 py-4">{req.location}</td>
                    <td className="px-6 py-4 font-mono text-gray-300">{req.phone}</td>
                    <td className="px-6 py-4 text-center">
                      {req.images && req.images.length > 0 ? (
                        <button
                          onClick={() => setSelectedRequest(req)}
                          className="text-green-400 hover:text-green-300 hover:underline font-medium flex items-center justify-center gap-1 mx-auto"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          View ({req.images.length})
                        </button>
                      ) : (
                        <span className="text-gray-600">-</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Image Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setSelectedRequest(null)}>
          <div 
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">Images from {selectedRequest.name}</h3>
              <button 
                onClick={() => setSelectedRequest(null)}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 bg-black/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedRequest.images.map((img, idx) => (
                  <div key={idx} className="relative group rounded-lg overflow-hidden border border-gray-700 bg-gray-800">
                    <div className="aspect-video relative">
                      {/* Handle Base64 or URL images */}
                      <img 
                        src={img} 
                        alt={`Request image ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-gray-800 bg-gray-900 flex justify-end">
              <button 
                onClick={() => setSelectedRequest(null)}
                className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


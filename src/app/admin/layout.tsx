export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <nav className="border-b border-gray-800 bg-gray-950 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
              R
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">Recycle Admin</h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400 border border-gray-700">v1.0</div>
          </div>
        </div>
      </nav>
      <main className="p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}


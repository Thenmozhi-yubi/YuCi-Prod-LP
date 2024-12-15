import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* TopNav Card */}
        <div
          className="bg-gray-100 border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/admin/topnav")}
        >
          <h3 className="text-lg font-medium">TopNav</h3>
          <p className="text-sm text-gray-600">Configure the top navigation bar.</p>
        </div>

        {/* Hero Card */}
        <div
          className="bg-gray-100 border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/admin/hero")}
        >
          <h3 className="text-lg font-medium">Hero</h3>
          <p className="text-sm text-gray-600">Configure the hero section.</p>
        </div>

        {/* Feature Card */}
        <div
          className="bg-gray-100 border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/admin/feature")}
        >
          <h3 className="text-lg font-medium">Feature</h3>
          <p className="text-sm text-gray-600">Configure the feature section.</p>
        </div>

         {/* kpi Card */}
         <div
          className="bg-gray-100 border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/admin/kpi")}
        >
          <h3 className="text-lg font-medium">KPI</h3>
          <p className="text-sm text-gray-600">Configure the KPI section.</p>
        </div>

        {/* video Card */}
        <div
          className="bg-gray-100 border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/admin/video")}
        >
          <h3 className="text-lg font-medium">video</h3>
          <p className="text-sm text-gray-600">Configure the video section.</p>
        </div>

        {/* trust Card */}
        <div
          className="bg-gray-100 border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/admin/trust")}
        >
          <h3 className="text-lg font-medium">trust</h3>
          <p className="text-sm text-gray-600">Configure the trust section.</p>
        </div>

         {/* article Card */}
         <div
          className="bg-gray-100 border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/admin/article")}
        >
          <h3 className="text-lg font-medium">article</h3>
          <p className="text-sm text-gray-600">Configure the article section.</p>
        </div>
         {/* footer Card */}
         <div
          className="bg-gray-100 border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
          onClick={() => navigate("/admin/footer")}
        >
          <h3 className="text-lg font-medium">footer</h3>
          <p className="text-sm text-gray-600">Configure the footer section.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

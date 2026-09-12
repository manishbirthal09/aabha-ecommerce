
// import { useState, useEffect } from "react";
// import api from "../api/axios";
// import AdminLayout from "../components/AdminLayout";

// export default function AdminSettings() {
//   const [deliveryCharge, setDeliveryCharge] = useState(99);
  

//   useEffect(() => {
//     api.get("/settings").then(({ data }) => {
//       setDeliveryCharge(data.deliveryCharge);
      
//     });
//   }, []);

//   const handleSave = async () => {
//     await api.put("/settings", { deliveryCharge});
//     alert("Settings saved");
//   };

//   return (
//     <AdminLayout>
//     <div className="max-w-md p-6">
//       <h2 className="text-lg font-semibold mb-4">Store Settings</h2>

//       <div className="mb-4">
//         <label className="text-sm text-gray-600">Delivery Charge (₹)</label>
//         <input
//           type="number"
//           value={deliveryCharge}
//           onChange={(e) => setDeliveryCharge(Number(e.target.value))}
//           className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
//         />
//       </div>

      

//       <button
//         onClick={handleSave}
//         className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm"
//       >
//         Save Settings
//       </button>
//     </div>
//     </AdminLayout>
//   );
// }
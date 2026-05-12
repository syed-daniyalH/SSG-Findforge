// import { getServices } from "@/lib/api/services";

// export default async function TestServicesPage() {
//   const services = await getServices();

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Services API Test</h1>

//       <pre>
//         {JSON.stringify(services, null, 2)}
//       </pre>
//     </div>
//   );
// }

// import {
//   getSubServices,
// } from "@/lib/api/subServices";

// export default async function TestSubServices() {
//   const subServices =
//     await getSubServices();

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Sub Services API Test</h1>

//       <pre>
//         {JSON.stringify(
//           subServices,
//           null,
//           2
//         )}
//       </pre>
//     </div>
//   );
// }

import { getIndustries } from "@/lib/api/industries";

export default async function TestIndustries() {
  const data = await getIndustries();

  return (
    <div style={{ padding: 20 }}>
      <h1>Industries API Test</h1>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
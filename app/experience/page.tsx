import Layout from "@/components/Layout";

export default function Experience() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Work Experience</h1>

        <div>
          <h2 className="text-xl font-semibold">Stock Controller / Inventory Management</h2>
          <p className="text-sm text-gray-600">Nov 2024 – Present</p>
          <ul className="list-disc ml-6">
            <li>Used WMS to maintain stock levels and avoid delays.</li>
            <li>Collaborated across teams to keep operations moving.</li>
            <li>Resolved stock inconsistencies for accurate reporting.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
import Layout from "@/components/Layout";

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold">Gender Estimation from Hand Images</h2>
          <p>Applied transfer learning to convolutional neural networks to achieve ~95% accuracy in gender estimation from hand images.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold">Maths Education Application (Android)</h2>
          <p>Developed an MVC-structured mobile app in Kotlin, increasing student comprehension by 20% with engaging maths exercises.</p>
        </div>
      </div>
    </Layout>
  );
}
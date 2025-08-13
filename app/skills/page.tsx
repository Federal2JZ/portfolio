import Layout from "@/components/Layout";

export default function Skills() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Skills & Languages</h1>

        {/* Technical Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Python</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Scala</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Java</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">PHP</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">C#</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Kotlin</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">HTML</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">CSS</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">JavaScript</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">SQL (PostgreSQL & SQL Server)</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Azure & Azure Data Studio</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">AWS</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Agile</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">PRINCE2</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Windows / Linux / MacOS</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Visual Studio Code</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Android Studio</div>
            <div className="bg-gray-700 p-4 rounded-lg shadow flex items-center justify-center">Microsoft Office Suite</div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Languages</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Portuguese — Native</li>
            <li>English — Native</li>
            <li>Gujarati — Elementary</li>
          </ul>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Certificate in Financial Studies (CEFs)</li>
            <li>Cloud Engineering Trainee (AiCore)</li>
            <li>Kotlin Essential Training</li>
            <li>Android Studio Essential Training</li>
            <li>Software Engineering (AiCore)</li>
            <li>Python Essentials (AiCore)</li>
            <li>Python Basics (AiCore)</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
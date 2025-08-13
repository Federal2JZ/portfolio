import Layout from "@/components/Layout";

export default function Skills() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-600 inline-block pb-2 mb-8">
          Skills & Languages
        </h1>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Python", "Scala", "Java", "PHP", "C#", "Kotlin", "HTML", "CSS", "JavaScript",
              "SQL (PostgreSQL & SQL Server)", "Azure & Azure Data Studio", "AWS", "Agile",
              "PRINCE2", "Windows / Linux / MacOS", "Visual Studio Code", "Android Studio",
              "Microsoft Office Suite"
            ].map((skill, idx) => (
              <span
                key={idx}
                className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full shadow-sm hover:bg-blue-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Languages</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Portuguese — Native</li>
            <li>English — Native</li>
            <li>Gujarati — Elementary</li>
          </ul>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Certifications</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
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
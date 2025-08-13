import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to my Portfolio
      </h1>
      <section className="max-w-3xl mx-auto text-center mt-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Darpan Vinodrai</h1>
        <p className="text-lg text-gray-700">
          Recent Computer Science graduate from De Montfort University with
          First-Class Honours. Skilled in programming, cybersecurity, and
          cloud engineering with Microsoft Azure. Passionate about building
          innovative solutions to solve real-world problems.
        </p>
      </section>
    </Layout>
  );
}


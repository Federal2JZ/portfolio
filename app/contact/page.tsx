import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p>Email: <a href="mailto:darpanvinodrai@gmail.com" className="text-blue-500">darpanvinodrai@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/DarpanVinodrai" className="text-blue-500">linkedin.com/in/DarpanVinodrai</a></p>
        <p>GitHub: <a href="https://github.com/Federal2JZ" className="text-blue-500">github.com/Federal2JZ</a></p>
      </div>
    </Layout>
  );
}
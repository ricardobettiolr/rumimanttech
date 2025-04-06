import React from "react";

export default function RuminantsTechLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-green-800 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ruminants Technologies</h1>
          <button className="bg-white text-green-800 font-semibold px-4 py-2 rounded-full hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </header>

      <section className="bg-green-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Precision Technology for Ruminants</h2>
        <p className="text-lg mb-8">Innovative solutions for animal health, reproduction, and productivity.</p>
        <button className="bg-green-800 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700">
          Explore Our Products
        </button>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1617957741979-5033c31f8478?auto=format&fit=crop&w=800&q=80" alt="OPU Equipment" className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold mb-2">OPU Equipment</h4>
            <p>Advanced devices for follicular aspiration in bovines and equines.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1619858533573-3debe56f9aa3?auto=format&fit=crop&w=800&q=80" alt="Animal Health Sensors" className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold mb-2">Animal Health Sensors</h4>
            <p>Real-time monitoring of livestock well-being and productivity.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1616469832780-6c741d7ac75e?auto=format&fit=crop&w=800&q=80" alt="Reproductive Management" className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold mb-2">Reproductive Management</h4>
            <p>Smart tools for planning and tracking reproduction cycles.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1624475402087-7d28b9ea0af5?auto=format&fit=crop&w=800&q=80" alt="Field Technology" className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold mb-2">Field-Ready Tech</h4>
            <p>Durable and easy-to-use veterinary devices for outdoor use.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1598514983318-7f1793021ed3?auto=format&fit=crop&w=800&q=80" alt="Traceability Software" className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold mb-2">Traceability Software</h4>
            <p>Digital records of the animal's productive, health, and genetic history.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1616401782511-dad0c5cd0f91?auto=format&fit=crop&w=800&q=80" alt="Specialized Support" className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold mb-2">Specialized Support</h4>
            <p>Expert assistance by veterinary professionals in reproductive technology.</p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to modernize your livestock operation?</h3>
        <p className="mb-8 text-lg">Contact us today for a custom quote or demo.</p>
        <button className="bg-green-800 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700">
          Request a Demo
        </button>
      </section>

      <section className="py-16 text-center bg-yellow-50">
        <h3 className="text-2xl font-bold mb-4">💼 This domain is for sale</h3>
        <p className="mb-4">Interested in acquiring <strong>ruminanttech.com</strong>?</p>
        <p className="text-lg font-semibold">💌 Contact: <a href="mailto:sales@fertilityfurrow.com" className="text-green-700 underline">sales@fertilityfurrow.com</a></p>
      </section>

      <footer className="bg-green-800 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ruminants Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

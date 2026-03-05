import { useEffect } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

export default function BookACall() {
  useEffect(() => {
    // Load TidyCal embed script
    const script = document.createElement('script');
    script.src = 'https://tidycal.com/js/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book-a-call" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <Calendar size={16} />
            Free Strategy Call
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a Free Call with Ian
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Not sure where to start with AI? Let's talk. Pick a time that suits you and we'll spend 30 minutes mapping out exactly how AI can work for your business.
          </p>
        </div>

        {/* Benefits row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            'No pitch. No pressure.',
            '30 minutes, completely free.',
            'Practical advice you can use immediately.',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm">
              <CheckCircle className="text-teal-500 flex-shrink-0" size={20} />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* TidyCal Embed */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4">
          <div
            className="tidycal-embed"
            data-path="ianjbarwell/30-minute-meeting"
          ></div>
        </div>
      </div>
    </section>
  );
}

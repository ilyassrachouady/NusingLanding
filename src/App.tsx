import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronRight, Award, Star, MessageCircle, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseDetails: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your submission. We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      caseDetails: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm mr-6">123 Main St, Valdosta, GA</span>
            <Phone size={16} className="mr-1" />
            <span className="text-sm font-semibold">(404) 555-1234</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#contact" className="text-sm hover:text-blue-200 transition">Free Consultation</a>
            <a href="#" className="text-sm hover:text-blue-200 transition">About Us</a>
            <a href="#" className="text-sm hover:text-blue-200 transition">Contact</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-800">RELENTLESS INJURY LAW</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="font-medium text-gray-700 hover:text-blue-700">Home</a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-700">Practice Areas</a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-700">Attorneys</a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-700">Results</a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-700">Testimonials</a>
            </nav>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center py-12 md:py-20">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nursing Home Abuse Lawyer in Valdosta, GA</h1>
              <p className="text-xl mb-6">Your loved one deserves justice — we help you get it fast. Experienced legal representation for nursing home abuse victims in Valdosta.</p>
              <div className="flex items-center mb-8">
                <div className="flex items-center mr-6">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="ml-2 text-white">4.9/5 (127 reviews)</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-6 backdrop-blur-sm">
                <h3 className="font-semibold mb-2 text-lg">Free Case Review</h3>
                <p className="mb-4 text-sm">Get answers about your case now. No obligation.</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 text-center">
                    Get a Free Consultation
                  </a>
                  <a href="tel:4045551234" className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center">
                    <Phone size={18} className="mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h3 className="text-blue-900 font-bold text-xl mb-4">Start Your Free Case Review</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name" 
                      className="w-full p-3 border border-gray-300 rounded-md" 
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email" 
                      className="w-full p-3 border border-gray-300 rounded-md" 
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone" 
                      className="w-full p-3 border border-gray-300 rounded-md" 
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea 
                      name="caseDetails"
                      value={formData.caseDetails}
                      onChange={handleChange}
                      placeholder="Brief description of your case" 
                      rows={3} 
                      className="w-full p-3 border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                    Submit Case Details
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">We respect your privacy. Information submitted is confidential.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Valdosta Residents Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our Valdosta nursing home abuse attorneys have recovered millions for victims throughout Georgia.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-blue-600 shadow-sm">
              <Award className="text-blue-600 mb-4 w-12 h-12" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Award-Winning Team</h3>
              <p className="text-gray-600">Recognized as a top nursing home abuse firm in Valdosta with multiple industry awards and accolades.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-blue-600 shadow-sm">
              <Briefcase className="text-blue-600 mb-4 w-12 h-12" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Local Experience</h3>
              <p className="text-gray-600">20+ years of experience representing Valdosta nursing home abuse victims against negligent facilities.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-blue-600 shadow-sm">
              <CheckCircle className="text-blue-600 mb-4 w-12 h-12" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">Over $100 million recovered for our clients with a 98% success rate on cases we take.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
              Learn how we can help with your case
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Recent Case Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Valdosta Nursing Home Abuse Case Results</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our track record speaks for itself. Here are some of our recent victories for Valdosta clients.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 font-bold text-3xl mb-2">$1.2 Million</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Medication Error Case</h3>
              <p className="text-gray-600 mb-4">Client's mother suffered severe health complications due to medication errors at a Valdosta nursing facility.</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Case Details
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 font-bold text-3xl mb-2">$875,000</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Neglect & Bedsores</h3>
              <p className="text-gray-600 mb-4">Family received compensation after their loved one developed severe bedsores due to neglect at a local facility.</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Case Details
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 font-bold text-3xl mb-2">$2.1 Million</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Physical Abuse Settlement</h3>
              <p className="text-gray-600 mb-4">Family compensated after discovering evidence of physical abuse at a Valdosta nursing home.</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Case Details
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 inline-block">
              Discuss Your Case With Us
            </a>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Local Valdosta Knowledge That Makes a Difference</h2>
              <p className="text-lg text-gray-600 mb-6">Our attorneys live and work in Valdosta. We understand the local nursing homes, courts, and how to navigate Georgia's specific elder abuse laws.</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900">
                  <CheckCircle className="text-blue-600 mr-2" size={20} />
                  Valdosta Nursing Home Regulations
                </h3>
                <p className="text-gray-600 pl-8">We know the specific regulations that Valdosta nursing homes must follow and how to prove when they've been violated.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900">
                  <CheckCircle className="text-blue-600 mr-2" size={20} />
                  Local Court Experience
                </h3>
                <p className="text-gray-600 pl-8">Our attorneys appear regularly in Lowndes County courts and have built strong relationships with local judges and court staff.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900">
                  <CheckCircle className="text-blue-600 mr-2" size={20} />
                  Valdosta Medical Network
                </h3>
                <p className="text-gray-600 pl-8">We work with local medical experts who can testify about the standard of care in Valdosta nursing facilities.</p>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-gray-100 p-1 rounded-lg shadow-md w-full max-w-md">
                <img 
                  src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg" 
                  alt="Valdosta cityscape" 
                  className="w-full h-auto rounded-lg object-cover aspect-video"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Serving All Valdosta Neighborhoods</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <MapPin size={14} className="text-blue-600 mr-1" />
                      <span>Valdosta City Center</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="text-blue-600 mr-1" />
                      <span>Remerton</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="text-blue-600 mr-1" />
                      <span>Hahira</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="text-blue-600 mr-1" />
                      <span>Lake Park</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="text-blue-600 mr-1" />
                      <span>Dasher</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="text-blue-600 mr-1" />
                      <span>All Lowndes County</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Valdosta Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. Here's what real clients from Valdosta have to say about working with us.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-6 bg-blue-600 rounded-full p-2">
                <MessageCircle className="text-white" size={20} />
              </div>
              <div className="flex items-center mb-4 mt-2">
                <div className="flex text-yellow-400">
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"After my mother suffered abuse at a Valdosta nursing home, I didn't know what to do. Relentless Injury Law guided me through every step and got us the compensation we deserved."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold mr-3">JM</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Jessica M.</h4>
                  <p className="text-sm text-gray-500">Valdosta, GA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-6 bg-blue-600 rounded-full p-2">
                <MessageCircle className="text-white" size={20} />
              </div>
              <div className="flex items-center mb-4 mt-2">
                <div className="flex text-yellow-400">
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"The team at Relentless are true professionals. They handled my father's case with care and expertise after we discovered neglect at his Valdosta nursing facility."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold mr-3">DT</div>
                <div>
                  <h4 className="font-semibold text-gray-900">David T.</h4>
                  <p className="text-sm text-gray-500">Valdosta, GA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-6 bg-blue-600 rounded-full p-2">
                <MessageCircle className="text-white" size={20} />
              </div>
              <div className="flex items-center mb-4 mt-2">
                <div className="flex text-yellow-400">
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"I was devastated when I discovered my grandmother was being neglected. Relentless connected me with an amazing attorney who fought hard for our settlement."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold mr-3">RL</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rebecca L.</h4>
                  <p className="text-sm text-gray-500">Hahira, GA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
              Read more client testimonials
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Meet Our Attorneys */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Valdosta Nursing Home Abuse Attorneys</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our team of experienced attorneys is dedicated to fighting for nursing home abuse victims in Valdosta.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg" 
                alt="Attorney James Smith" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">James Smith, Esq.</h3>
                <p className="text-blue-600 font-medium mb-3">Senior Partner</p>
                <p className="text-gray-600 mb-4">Over 20 years of experience representing nursing home abuse victims in Valdosta. Former defense attorney who knows how to maximize your claim.</p>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Full Profile
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/7515522/pexels-photo-7515522.jpeg" 
                alt="Attorney Sarah Johnson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson, Esq.</h3>
                <p className="text-blue-600 font-medium mb-3">Elder Abuse Specialist</p>
                <p className="text-gray-600 mb-4">Specializes in complex nursing home abuse cases involving severe injuries. Named a Georgia Super Lawyer for 5 consecutive years.</p>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Full Profile
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/8112112/pexels-photo-8112112.jpeg" 
                alt="Attorney Michael Rodriguez" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Rodriguez, Esq.</h3>
                <p className="text-blue-600 font-medium mb-3">Trial Attorney</p>
                <p className="text-gray-600 mb-4">Former prosecutor with a decade of experience taking cases to trial. Known for securing substantial verdicts for Valdosta nursing home abuse victims.</p>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Full Profile
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions About Nursing Home Abuse in Valdosta</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Get answers to the questions we hear most often from Valdosta nursing home abuse victims.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How do I know if my loved one is being abused in a Valdosta nursing home?</h3>
                <p className="text-gray-600">Signs of nursing home abuse include unexplained injuries, sudden behavioral changes, poor hygiene, weight loss, bedsores, or staff refusing to allow you to be alone with your loved one. If you notice any of these signs in a Valdosta facility, contact us immediately.</p>
              </div>
            </div>
            
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long do I have to file a nursing home abuse claim in Valdosta?</h3>
                <p className="text-gray-600">In Georgia, you generally have two years from the date of the injury or discovery of abuse to file a personal injury lawsuit. However, there are exceptions to this rule, and it's important to speak with an attorney as soon as possible.</p>
              </div>
            </div>
            
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What compensation can we recover in a Valdosta nursing home abuse case?</h3>
                <p className="text-gray-600">Victims may be entitled to compensation for medical expenses, pain and suffering, emotional distress, and in some cases, punitive damages. If the abuse resulted in death, families may pursue a wrongful death claim. Our attorneys can help determine the full value of your case.</p>
              </div>
            </div>
            
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How do you prove nursing home abuse in Valdosta?</h3>
                <p className="text-gray-600">Proving nursing home abuse typically requires medical records, witness testimony, facility records, expert testimony, and sometimes photographic evidence. Our attorneys work with investigators and medical experts to build strong cases against Valdosta nursing facilities.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 inline-flex items-center">
              Ask Us Your Question
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get a Free Consultation</h2>
              <p className="text-lg text-gray-600 mb-6">Our Valdosta nursing home abuse attorneys are ready to review your case and discuss your legal options. There's no fee unless we win.</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Why Contact Us Today</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Free case evaluation with no obligation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">No fees unless we win your case</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Immediate assistance with your claim</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">24/7 availability to answer your questions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-gray-900 text-lg">Our Valdosta Office</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">123 Main Street, Suite 100<br />Valdosta, GA 31601</span>
                </div>
                <div className="flex items-start mb-3">
                  <Phone className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">(404) 555-1234</span>
                </div>
                <div className="flex items-start">
                  <Mail className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">info@relentlessinjurylaw.com</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us Now</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md" 
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md" 
                      placeholder="(404) 555-1234" 
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Type of Abuse</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Physical Abuse</option>
                      <option>Neglect</option>
                      <option>Emotional Abuse</option>
                      <option>Financial Exploitation</option>
                      <option>Sexual Abuse</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="caseDetails"
                      value={formData.caseDetails}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md" 
                      rows={5} 
                      placeholder="Please describe the situation..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-300">
                    Get Your Free Consultation
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">By submitting, you agree to our privacy policy and consent to be contacted about your case.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Relentless Injury Law</h3>
              <p className="mb-4 text-blue-100">Dedicated to helping Valdosta nursing home abuse victims get the compensation they deserve.</p>
              <div className="flex items-center mb-2">
                <Phone size={16} className="mr-2 text-blue-200" />
                <span>(404) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-200" />
                <span>info@relentlessinjurylaw.com</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Practice Areas</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white transition">Nursing Home Abuse</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Elder Neglect</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Medical Malpractice</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Wrongful Death</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Personal Injury</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Georgia Areas Served</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white transition">Valdosta</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Atlanta</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Savannah</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Macon</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">All Georgia</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Case Results</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Testimonials</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-sm mb-4 md:mb-0">&copy; 2025 Relentless Injury Law. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-blue-200 hover:text-white transition">Privacy Policy</a>
                <a href="#" className="text-blue-200 hover:text-white transition">Terms of Service</a>
                <a href="#" className="text-blue-200 hover:text-white transition">Sitemap</a>
              </div>
            </div>
            <p className="text-xs text-blue-300 mt-4 text-center">This website is for informational purposes only. The information on this website is not legal advice and is not intended to be a solicitation.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Call Button (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-700 text-white p-3 flex justify-center md:hidden z-50">
        <a href="tel:4045551234" className="flex items-center justify-center w-full font-bold">
          <Phone className="mr-2" size={20} />
          Call Now: (404) 555-1234
        </a>
      </div>
    </div>
  );
}

export default App;
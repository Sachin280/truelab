import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['Toll Free: 1800-123-4567', 'Direct: +1 (555) 123-4567'],
      action: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['General: info@truelab.com', 'Support: support@truelab.com'],
      action: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Medical Plaza', 'Healthcare District, New York, NY 10001'],
      action: 'Get Directions',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sat: 7:00 AM - 9:00 PM', 'Sunday: 8:00 AM - 6:00 PM'],
      action: 'View Schedule',
    },
  ];

  const locations = [
    {
      name: 'Main Laboratory',
      address: '123 Medical Plaza, Healthcare District',
      city: 'New York, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Sat: 7 AM - 9 PM',
    },
    {
      name: 'North Branch',
      address: '456 Wellness Avenue, Medical Center',
      city: 'Brooklyn, NY 11201',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Sat: 8 AM - 8 PM',
    },
    {
      name: 'East Center',
      address: '789 Health Street, Diagnostic Plaza',
      city: 'Queens, NY 11354',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Sat: 7 AM - 9 PM',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-100">
              Get in touch with our team. We&apos;re here to help you with all your diagnostic needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-lg text-primary mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button variant="link" className="text-secondary p-0 h-auto">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl text-primary mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible
                </p>
              </div>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="booking">Test Booking</SelectItem>
                          <SelectItem value="results">Test Results</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90"
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Locations & Map */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl text-primary mb-4">Our Locations</h2>
                <p className="text-gray-600">
                  Visit any of our convenient locations for sample collection
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {locations.map((location, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg text-primary mb-3">{location.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                          <div>
                            <p>{location.address}</p>
                            <p>{location.city}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
                          <p>{location.phone}</p>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <Clock className="w-4 h-4 flex-shrink-0 text-secondary" />
                          <p>{location.hours}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4 border-secondary text-secondary hover:bg-secondary hover:text-white">
                        Get Directions
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden border-2 border-gray-200">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">View all our locations</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: 'What are your operating hours?',
                answer: 'Our main laboratory is open Monday to Saturday from 7 AM to 9 PM, and Sunday from 8 AM to 6 PM. Home collection services are available 24/7.',
              },
              {
                question: 'How long do test results take?',
                answer: 'Most routine tests are completed within 24-48 hours. Specialized tests may take 3-7 days. You will receive results via email and SMS.',
              },
              {
                question: 'Do you offer home sample collection?',
                answer: 'Yes, we offer free home sample collection services across all our service areas. Book online or call us to schedule.',
              },
              {
                question: 'Are your tests covered by insurance?',
                answer: 'We accept most major insurance plans. Please contact us with your insurance details for verification.',
              },
              {
                question: 'Can I book tests online?',
                answer: 'Yes, you can easily book tests through our website or mobile app. You can also call our helpline for assistance.',
              },
              {
                question: 'How do I access my test results?',
                answer: 'Test results are sent via email and are also available on our patient portal. You can download and share them with your doctor.',
              },
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg text-primary mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 md:p-12 text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl mb-4">Need Immediate Assistance?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Our support team is available 24/7 to help you with bookings, results, or any other queries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1800-123-4567
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Live Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

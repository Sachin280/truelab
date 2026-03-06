import { Link } from 'react-router';
import { Search, Award, Users, Clock, CheckCircle, Microscope, Heart, Activity, Droplet, Brain, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const popularTests = [
    {
      icon: Droplet,
      title: 'Complete Blood Count',
      description: 'Comprehensive blood analysis with 25+ parameters',
      price: '500',
    },
    {
      icon: Heart,
      title: 'Lipid Profile',
      description: 'Cholesterol and heart health screening',
      price: '500',
    },
    {
      icon: Activity,
      title: 'Thyroid Function',
      description: 'TSH, T3, T4 hormone level testing',
      price: '500',
    },
    {
      icon: Brain,
      title: 'Diabetes Panel',
      description: 'Blood sugar and HbA1c analysis',
      price: '500',
    },
    {
      icon: Microscope,
      title: 'Liver Function',
      description: 'Complete hepatic health assessment',
      price: '500',
    },
    {
      icon: Heart,
      title: 'Kidney Function',
      description: 'Comprehensive renal health check',
      price: '500',
    },
  ];

  const trustIndicators = [
    {
      icon: Award,
      value: 'ISO 9001:2015',
      label: 'Certified Laboratory',
    },
    {
      icon: Users,
      value: '2M+',
      label: 'Happy Patients',
    },
    {
      icon: Microscope,
      value: '500+',
      label: 'Test Varieties',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Service Available',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Search & Select',
      description: 'Find your required test from our comprehensive catalog',
    },
    {
      step: '2',
      title: 'Book Appointment',
      description: 'Choose your preferred date, time, and location',
    },
    {
      step: '3',
      title: 'Sample Collection',
      description: 'Visit our center or get home collection service',
    },
    {
      step: '4',
      title: 'Get Results',
      description: 'Receive accurate results online within 24-48 hours',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Patient',
      content: 'True Lab has been my go-to diagnostic center for years. Their accuracy and professionalism are unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Client',
      content: 'We trust True Lab for all our employee health checkups. Quick turnaround and reliable results every time.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Healthcare Provider',
      content: 'As a physician, I recommend True Lab to my patients. Their reports are detailed and always on time.',
      rating: 5,
    },
  ];

  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1669355106052-b7456721510c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3ZWxsbmVzcyUyMGJsb2clMjBhcnRpY2xlfGVufDF8fHx8MTc3MjQzNjY0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Health Tips',
      title: 'Understanding Your Blood Test Results',
      excerpt: 'Learn how to interpret common blood test parameters and what they mean for your health.',
      date: 'March 1, 2026',
    },
    {
      image: 'https://images.unsplash.com/photo-1615182787151-5e4fff76daae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBoZWFsdGh5JTIwbGlmZXN0eWxlfGVufDF8fHx8MTc3MjM5NTI5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Wellness',
      title: 'Top 10 Preventive Health Screenings',
      excerpt: 'Discover essential health screenings you should get regularly for early disease detection.',
      date: 'February 28, 2026',
    },
    {
      image: 'https://images.unsplash.com/photo-1706777280252-5de52771cf13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGlubm92YXRpb258ZW58MXx8fHwxNzcyMzUxMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Technology',
      title: 'The Future of Diagnostic Testing',
      excerpt: 'Explore how cutting-edge technology is revolutionizing medical diagnostics and patient care.',
      date: 'February 25, 2026',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Your Health, Our Priority
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                Advanced diagnostic testing with precision, accuracy, and care. Get reliable results you can trust.
              </p>
              
              {/* Search Bar */}
              {/*<div className="bg-white rounded-lg shadow-xl p-2 mb-8">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search for tests, health packages..."
                      className="pl-10 border-0 bg-transparent text-gray-900 focus-visible:ring-0"
                    />
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white px-6">
                    Search
                  </Button>
                </div>
              </div>*/}

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
                    Book a Test Now
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-white text-primary bg-white hover:bg-gray-100 w-full sm:w-auto">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631556760585-2e846196d5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzcyNDM0MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Medical Laboratory"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-2xl md:text-3xl text-primary mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Tests */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Popular Diagnostic Tests</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of diagnostic tests with accurate results and quick turnaround time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTests.map((test, index) => {
              const Icon = test.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <span className="text-2xl text-primary">{test.price}</span>
                    </div>
                    <h3 className="text-xl mb-2 text-primary">{test.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{test.description}</p>
                    <Link to="/contact">
                    <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                      Book Now
                    </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Tests <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to get your diagnostic tests done
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full text-2xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-secondary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-primary mb-6">Why Choose True Lab?</h2>
              <p className="text-gray-600 mb-8">
                We are committed to providing the highest quality diagnostic services with state-of-the-art technology and experienced professionals.
              </p>
              <div className="space-y-4">
                {[
                  'NABL & CAP accredited laboratory',
                  'Advanced automated technology',
                  'Experienced pathologists and technicians',
                  'Free home sample collection',
                  'Online report access within 24-48 hours',
                  'Affordable pricing with no hidden charges',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI0MDA2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Laboratory"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Patients Say</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Trusted by thousands of patients for accurate diagnostics and excellent service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-gray-300 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Latest Health Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with expert health tips, news, and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl text-primary mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Button variant="link" className="text-secondary p-0 h-auto">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/blog">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Articles <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book your diagnostic test today and take the first step towards better health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            {/* <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary w-full sm:w-auto">
                Contact Us
              </Button>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

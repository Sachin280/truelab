import { Award, Target, Eye, Shield, Users, Clock, Microscope, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Pathologist',
      image: 'https://images.unsplash.com/photo-1666886572860-64254ee2ce77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc3MjQyMDgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'MD, FCAP',
    },
    {
      name: 'Dr. James Rodriguez',
      role: 'Director of Laboratory Services',
      image: 'https://images.unsplash.com/photo-1759813641406-980519f58b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzcyNDM2NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'PhD, MBA',
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Senior Microbiologist',
      image: 'https://images.unsplash.com/photo-1739285452629-2672b13fa42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjaGVja3VwJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MjQzNjY0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'MD, PhD',
    },
    {
      name: 'Dr. Michael Thompson',
      role: 'Quality Assurance Manager',
      image: 'https://images.unsplash.com/photo-1631556760585-2e846196d5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBzY2llbnRpc3R8ZW58MXx8fHwxNzcyNDIyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'MSc, MBA',
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
    },
    {
      icon: Shield,
      title: 'NABL Accredited',
      description: 'National Accreditation Board for Testing',
    },
    {
      icon: Award,
      title: 'CAP Certified',
      description: 'College of American Pathologists',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Patient Data Privacy & Security',
    },
  ];

  const values = [
    {
      icon: Microscope,
      title: 'Accuracy',
      description: 'Precise and reliable test results using advanced technology',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Patient-centered approach with compassion and empathy',
    },
    {
      icon: Clock,
      title: 'Timeliness',
      description: 'Quick turnaround times without compromising quality',
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Building long-term relationships through transparency',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">About True Lab</h1>
            <p className="text-lg md:text-xl text-gray-100">
              Leading the way in diagnostic excellence with cutting-edge technology, experienced professionals, and a commitment to your health.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-2 border-secondary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl text-primary mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide accurate, affordable, and accessible diagnostic services to all, empowering individuals and healthcare providers with reliable information for better health outcomes. We strive to make quality healthcare diagnostics available to everyone through innovation, integrity, and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl text-primary mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and preferred diagnostic partner, setting new standards in laboratory medicine through continuous innovation, research, and patient-centric care. We envision a future where preventive healthcare and early disease detection become accessible to all communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2005, True Lab began with a simple yet powerful vision: to make quality diagnostic services accessible to everyone. What started as a single laboratory facility has grown into a network of state-of-the-art diagnostic centers serving over 2 million patients annually.
                </p>
                <p>
                  Over the years, we've invested heavily in cutting-edge technology, recruited the finest medical professionals, and established rigorous quality control standards. Our commitment to excellence has earned us numerous accreditations and the trust of thousands of healthcare providers.
                </p>
                <p>
                  Today, True Lab stands as a beacon of reliability in diagnostic medicine, continuously evolving to meet the changing needs of modern healthcare while maintaining our core values of accuracy, accessibility, and patient care.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI0MDA2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laboratory Equipment"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl text-primary mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Led by experienced professionals dedicated to diagnostic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary text-sm mb-1">{member.credentials}</p>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Accreditations & Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized for excellence in laboratory quality and patient safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="text-center border-2 border-gray-200 hover:border-secondary hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-lg text-primary mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2">5+</div>
              <div className="text-gray-200">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">200K+</div>
              <div className="text-gray-200">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">500+</div>
              <div className="text-gray-200">Tests Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">50+</div>
              <div className="text-gray-200">Collection Centers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

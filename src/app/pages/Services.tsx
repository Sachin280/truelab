import { useState } from 'react';
import { Droplet, Heart, Activity, Brain, Bone, Baby, Users, Microscope, Stethoscope, Syringe, TestTube, FlaskConical, Search } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');

  const serviceCategories = [
    {
      id: 'pathology',
      name: 'Pathology',
      icon: Microscope,
      services: [
        {
          icon: Droplet,
          name: 'Complete Blood Count (CBC)',
          description: 'Comprehensive blood analysis including RBC, WBC, platelets, and hemoglobin',
          price: '500',
          duration: '4-6 hours',
        },
        {
          icon: Heart,
          name: 'Lipid Profile',
          description: 'Total cholesterol, HDL, LDL, triglycerides, and risk ratios',
          price: '500',
          duration: '6-8 hours',
        },
        {
          icon: Activity,
          name: 'Liver Function Test',
          description: 'Complete hepatic panel including enzymes and proteins',
          price: '500',
          duration: '8-12 hours',
        },
        {
          icon: Brain,
          name: 'Kidney Function Test',
          description: 'Creatinine, BUN, uric acid, and electrolytes',
          price: '500',
          duration: '8-12 hours',
        },
        {
          icon: Activity,
          name: 'Thyroid Profile',
          description: 'TSH, T3, T4 hormone levels',
          price: '500',
          duration: '12-24 hours',
        },
        {
          icon: Droplet,
          name: 'Diabetes Screening',
          description: 'Fasting glucose, HbA1c, and insulin levels',
          price: '500',
          duration: '4-6 hours',
        },
      ],
    },
    {
      id: 'radiology',
      name: 'Radiology',
      icon: Stethoscope,
      services: [
        {
          icon: Bone,
          name: 'X-Ray',
          description: 'Digital X-ray imaging for bones, chest, and abdomen',
          price: '500',
          duration: 'Same day',
        },
        {
          icon: Brain,
          name: 'CT Scan',
          description: 'Computed tomography for detailed internal imaging',
          price: '500',
          duration: '24 hours',
        },
        {
          icon: Heart,
          name: 'Ultrasound',
          description: 'Abdominal, pelvic, and cardiac ultrasound',
          price: '500',
          duration: 'Same day',
        },
        {
          icon: Brain,
          name: 'MRI Scan',
          description: 'Magnetic resonance imaging for soft tissues',
          price: '500',
          duration: '24-48 hours',
        },
        {
          icon: Heart,
          name: 'ECG/EKG',
          description: 'Electrocardiogram for heart rhythm analysis',
          price: '500',
          duration: 'Immediate',
        },
        {
          icon: Activity,
          name: 'Mammography',
          description: 'Breast cancer screening and detection',
          price: '500',
          duration: '24 hours',
        },
      ],
    },
    {
      id: 'specialized',
      name: 'Specialized Tests',
      icon: FlaskConical,
      services: [
        {
          icon: Baby,
          name: 'Pregnancy Tests',
          description: 'Beta HCG, prenatal screening, and monitoring',
          price: '500',
          duration: '4-6 hours',
        },
        {
          icon: Syringe,
          name: 'Allergy Testing',
          description: 'Comprehensive allergen panel testing',
          price: '500',
          duration: '3-5 days',
        },
        {
          icon: TestTube,
          name: 'Genetic Testing',
          description: 'DNA analysis and genetic disorder screening',
          price: '500',
          duration: '7-14 days',
        },
        {
          icon: Microscope,
          name: 'Cancer Markers',
          description: 'Tumor markers and oncology screening',
          price: '500',
          duration: '2-3 days',
        },
        {
          icon: Droplet,
          name: 'Hormone Panel',
          description: 'Comprehensive hormonal analysis',
          price: '500',
          duration: '24-48 hours',
        },
        {
          icon: Activity,
          name: 'Cardiac Markers',
          description: 'Troponin, CK-MB, and heart health indicators',
          price: '500',
          duration: '6-8 hours',
        },
      ],
    },
    {
      id: 'packages',
      name: 'Health Packages',
      icon: Users,
      services: [
        {
          icon: Heart,
          name: 'Basic Health Checkup',
          description: 'Essential tests for overall health screening',
          price: '500',
          duration: '24 hours',
        },
        {
          icon: Activity,
          name: 'Executive Health Checkup',
          description: 'Comprehensive health assessment for professionals',
          price: '500',
          duration: '48 hours',
        },
        {
          icon: Heart,
          name: 'Cardiac Risk Assessment',
          description: 'Complete heart health evaluation package',
          price: '500',
          duration: '24-48 hours',
        },
        {
          icon: Brain,
          name: 'Diabetes Care Package',
          description: 'Complete diabetes monitoring and management',
          price: '500',
          duration: '24 hours',
        },
        {
          icon: Baby,
          name: 'Women Wellness Package',
          description: 'Comprehensive women\'s health screening',
          price: '500',
          duration: '48 hours',
        },
        {
          icon: Users,
          name: 'Senior Citizen Package',
          description: 'Age-appropriate comprehensive health check',
          price: '500',
          duration: '48 hours',
        },
      ],
    },
  ];

  const filteredCategories = serviceCategories.map(category => ({
    ...category,
    services: category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.services.length > 0);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Comprehensive diagnostic services with state-of-the-art technology and expert analysis
            </p>
            
            {/* Search Bar */}
            {/*
            <div className="bg-white rounded-lg shadow-xl p-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search for tests or packages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-0 bg-transparent text-gray-900 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Search
                </Button>
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="pathology" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto gap-2">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {(searchQuery ? filteredCategories : serviceCategories).map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="mb-8">
                  <h2 className="text-3xl text-primary mb-2">{category.name}</h2>
                  <p className="text-gray-600">
                    {category.id === 'pathology' && 'Laboratory tests for disease diagnosis and health monitoring'}
                    {category.id === 'radiology' && 'Advanced imaging services for accurate diagnostics'}
                    {category.id === 'specialized' && 'Specialized diagnostic tests for specific health concerns'}
                    {category.id === 'packages' && 'Comprehensive health checkup packages at great value'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                              <ServiceIcon className="w-6 h-6 text-secondary" />
                            </div>
                            <div className="text-right">
                              <div className="text-2xl text-primary">{service.price}</div>
                              <div className="text-xs text-gray-500">{service.duration}</div>
                            </div>
                          </div>
                          <h3 className="text-lg text-primary mb-2">{service.name}</h3>
                          <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                          <Button className="w-full bg-secondary hover:bg-secondary/90">
                            Book Now
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {category.services.length === 0 && searchQuery && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No services found matching &quot;{searchQuery}&quot;</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-primary mb-4">Why Choose Our Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Microscope,
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment for accurate results',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Highly qualified pathologists and technicians',
              },
              {
                icon: Activity,
                title: 'Quick Results',
                description: 'Fast turnaround time without compromising quality',
              },
              {
                icon: Heart,
                title: 'Affordable Pricing',
                description: 'Competitive rates with transparent billing',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl text-primary mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our healthcare advisors are available 24/7 to help you select the right tests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918398989804" >
            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
              Call +91 8398989804
            </Button>
            </a>
            <a href="https://wa.me/+918398989804">
            <Button size="lg" variant="outline" className="border-white text-secondary hover:bg-white hover:text-secondary">
              Chat With Us
            </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { CheckCircle, Search, Calendar, MapPin, User, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

export default function BookTest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    testType: '',
    testName: '',
    patientName: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    collectionType: 'home',
    preferredDate: '',
    preferredTime: '',
    specialInstructions: '',
  });

  const steps = [
    { number: 1, title: 'Select Test' },
    { number: 2, title: 'Patient Details' },
    { number: 3, title: 'Appointment' },
    { number: 4, title: 'Confirmation' },
  ];

  const popularTests = [
    'Complete Blood Count (CBC)',
    'Lipid Profile',
    'Thyroid Function Test',
    'Diabetes Panel (HbA1c)',
    'Liver Function Test',
    'Kidney Function Test',
    'Vitamin D Test',
    'Vitamin B12 Test',
  ];

  const healthPackages = [
    'Basic Health Checkup',
    'Executive Health Checkup',
    'Cardiac Risk Assessment',
    'Diabetes Care Package',
    'Women Wellness Package',
    'Senior Citizen Package',
  ];

  const timeSlots = [
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Test booking submitted successfully! We will contact you shortly.');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-4">Book a Test</h1>
            <p className="text-lg text-gray-100">
              Schedule your diagnostic test in just a few simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      currentStep >= step.number
                        ? 'bg-secondary text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`text-sm mt-2 hidden sm:block ${
                      currentStep >= step.number ? 'text-secondary' : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 ${
                      currentStep > step.number ? 'bg-secondary' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-200">
            <CardContent className="p-6 md:p-8">
              {/* Step 1: Select Test */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl text-primary mb-4">Select Your Test</h2>
                    <p className="text-gray-600 mb-6">
                      Choose from our popular tests or health packages
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="search">Search for a Test</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="search"
                          type="text"
                          placeholder="Search by test name..."
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Test Type</Label>
                      <RadioGroup value={formData.testType} onValueChange={(value) => handleInputChange('testType', value)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="individual" id="individual" />
                          <Label htmlFor="individual" className="cursor-pointer">Individual Test</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="package" id="package" />
                          <Label htmlFor="package" className="cursor-pointer">Health Package</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {formData.testType === 'individual' && (
                      <div>
                        <Label htmlFor="testName">Select Test</Label>
                        <Select value={formData.testName} onValueChange={(value) => handleInputChange('testName', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a test" />
                          </SelectTrigger>
                          <SelectContent>
                            {popularTests.map((test) => (
                              <SelectItem key={test} value={test}>
                                {test}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {formData.testType === 'package' && (
                      <div>
                        <Label htmlFor="packageName">Select Package</Label>
                        <Select value={formData.testName} onValueChange={(value) => handleInputChange('testName', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a package" />
                          </SelectTrigger>
                          <SelectContent>
                            {healthPackages.map((pkg) => (
                              <SelectItem key={pkg} value={pkg}>
                                {pkg}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Patient Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl text-primary mb-4">Patient Information</h2>
                    <p className="text-gray-600 mb-6">
                      Please provide the patient details
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="patientName">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="patientName"
                          type="text"
                          placeholder="Enter full name"
                          className="pl-10"
                          value={formData.patientName}
                          onChange={(e) => handleInputChange('patientName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter phone number"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter email address"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter complete address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Appointment */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl text-primary mb-4">Schedule Appointment</h2>
                    <p className="text-gray-600 mb-6">
                      Choose your preferred date, time, and collection method
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label>Sample Collection Type</Label>
                      <RadioGroup value={formData.collectionType} onValueChange={(value) => handleInputChange('collectionType', value)}>
                        <Card className={`p-4 cursor-pointer ${formData.collectionType === 'home' ? 'border-2 border-secondary' : ''}`}>
                          <div className="flex items-start space-x-3">
                            <RadioGroupItem value="home" id="home" className="mt-1" />
                            <div className="flex-1">
                              <Label htmlFor="home" className="cursor-pointer flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-secondary" />
                                <span>Home Sample Collection</span>
                              </Label>
                              <p className="text-sm text-gray-600 mt-1 ml-7">
                                Our phlebotomist will visit your home (Free service)
                              </p>
                            </div>
                          </div>
                        </Card>
                        <Card className={`p-4 cursor-pointer ${formData.collectionType === 'center' ? 'border-2 border-secondary' : ''}`}>
                          <div className="flex items-start space-x-3">
                            <RadioGroupItem value="center" id="center" className="mt-1" />
                            <div className="flex-1">
                              <Label htmlFor="center" className="cursor-pointer flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-secondary" />
                                <span>Visit Collection Center</span>
                              </Label>
                              <p className="text-sm text-gray-600 mt-1 ml-7">
                                Visit our nearest diagnostic center
                              </p>
                            </div>
                          </div>
                        </Card>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="date"
                            type="date"
                            className="pl-10"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                          <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                            <SelectTrigger className="pl-10">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>
                                  {slot}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                      <Textarea
                        id="instructions"
                        placeholder="Any specific requirements or medical conditions we should know about..."
                        value={formData.specialInstructions}
                        onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-12 h-12 text-secondary" />
                    </div>
                    <h2 className="text-2xl text-primary mb-2">Review Your Booking</h2>
                    <p className="text-gray-600">
                      Please review all details before confirming
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <h3 className="text-lg text-primary mb-4">Test Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Test Type:</span>
                            <span className="font-medium capitalize">{formData.testType || 'Not selected'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Test/Package:</span>
                            <span className="font-medium">{formData.testName || 'Not selected'}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <h3 className="text-lg text-primary mb-4">Patient Information</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{formData.patientName || 'Not provided'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Age/Gender:</span>
                            <span className="font-medium">{formData.age && formData.gender ? `${formData.age} years, ${formData.gender}` : 'Not provided'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Phone:</span>
                            <span className="font-medium">{formData.phone || 'Not provided'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">{formData.email || 'Not provided'}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <h3 className="text-lg text-primary mb-4">Appointment Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Collection Type:</span>
                            <span className="font-medium capitalize">{formData.collectionType === 'home' ? 'Home Collection' : 'Visit Center'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">{formData.preferredDate || 'Not selected'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium">{formData.preferredTime || 'Not selected'}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Previous
                </Button>
                {currentStep < 4 ? (
                  <Button
                    onClick={handleNext}
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    Confirm Booking
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl mb-4">Need Help with Booking?</h3>
              <p className="text-gray-200 mb-6">
                Our support team is available 24/7 to assist you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Call 1800-123-4567
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Chat Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

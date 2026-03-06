import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1669355106052-b7456721510c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3ZWxsbmVzcyUyMGJsb2clMjBhcnRpY2xlfGVufDF8fHx8MTc3MjQzNjY0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Health Tips',
      title: 'Understanding Your Blood Test Results',
      excerpt: 'Learn how to interpret common blood test parameters and what they mean for your health. We break down the key indicators and their significance.',
      author: 'Dr. Sarah Mitchell',
      date: 'March 1, 2026',
      readTime: '5 min read',
      featured: true,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1615182787151-5e4fff76daae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBoZWFsdGh5JTIwbGlmZXN0eWxlfGVufDF8fHx8MTc3MjM5NTI5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Wellness',
      title: 'Top 10 Preventive Health Screenings',
      excerpt: 'Discover essential health screenings you should get regularly for early disease detection and maintaining optimal health.',
      author: 'Dr. James Rodriguez',
      date: 'February 28, 2026',
      readTime: '7 min read',
      featured: true,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1706777280252-5de52771cf13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGlubm92YXRpb258ZW58MXx8fHwxNzcyMzUxMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Technology',
      title: 'The Future of Diagnostic Testing',
      excerpt: 'Explore how cutting-edge technology is revolutionizing medical diagnostics and improving patient care outcomes.',
      author: 'Dr. Emily Chen',
      date: 'February 25, 2026',
      readTime: '6 min read',
      featured: false,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1631556760585-2e846196d5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzcyNDM0MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Research',
      title: 'The Importance of Regular Health Checkups',
      excerpt: 'Why annual health checkups are crucial for early detection and prevention of chronic diseases.',
      author: 'Dr. Michael Thompson',
      date: 'February 22, 2026',
      readTime: '4 min read',
      featured: false,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1666886572860-64254ee2ce77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc3MjQyMDgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Health Tips',
      title: 'Managing Diabetes Through Proper Testing',
      excerpt: 'Essential diabetes tests and monitoring techniques to keep your blood sugar levels in check.',
      author: 'Dr. Sarah Mitchell',
      date: 'February 20, 2026',
      readTime: '6 min read',
      featured: false,
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1739285452629-2672b13fa42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjaGVja3VwJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MjQzNjY0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Wellness',
      title: 'Heart Health: Key Tests You Need',
      excerpt: 'Understanding cardiac markers and essential tests for maintaining a healthy heart.',
      author: 'Dr. James Rodriguez',
      date: 'February 18, 2026',
      readTime: '5 min read',
      featured: false,
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI0MDA2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Research',
      title: 'Vitamin Deficiency: Signs and Testing',
      excerpt: 'How to identify vitamin deficiencies and the importance of regular vitamin level testing.',
      author: 'Dr. Emily Chen',
      date: 'February 15, 2026',
      readTime: '7 min read',
      featured: false,
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1759813641406-980519f58b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzcyNDM2NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Technology',
      title: 'AI in Diagnostic Medicine',
      excerpt: 'How artificial intelligence is transforming diagnostic accuracy and speed in modern laboratories.',
      author: 'Dr. Michael Thompson',
      date: 'February 12, 2026',
      readTime: '8 min read',
      featured: false,
    },
  ];

  const categories = [
    { name: 'All', count: 8 },
    { name: 'Health Tips', count: 2 },
    { name: 'Wellness', count: 2 },
    { name: 'Technology', count: 2 },
    { name: 'Research', count: 2 },
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Health Insights & Blog</h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              Stay informed with the latest health tips, research, and diagnostic insights from our expert team
            </p>
            
            {/* Search Bar */}
            {/* <div className="bg-white rounded-lg shadow-xl p-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 border-0 bg-transparent text-gray-900 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Search
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Badge className="bg-secondary text-white">Featured Article</Badge>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="bg-secondary/10 text-secondary w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl text-primary mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90 w-fit">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl text-primary mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="w-full text-left px-4 py-2 rounded-lg hover:bg-secondary/10 text-gray-700 hover:text-secondary transition-colors flex items-center justify-between"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </button>
                    ))}
                  </div>

                  {/* <div className="mt-8 pt-6 border-t">
                    <h3 className="text-lg text-primary mb-4">Newsletter</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Subscribe to get health tips delivered to your inbox
                    </p>
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="mb-3"
                    />
                    <Button className="w-full bg-secondary hover:bg-secondary/90">
                      Subscribe
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl text-primary">All Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.filter(post => !post.featured).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <Badge className="bg-secondary/10 text-secondary mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl text-primary mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="link" className="text-secondary p-0 h-auto">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button className="bg-secondary hover:bg-secondary/90">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Have Questions About Your Health?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book a test or consult with our healthcare professionals today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
              Book a Test
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

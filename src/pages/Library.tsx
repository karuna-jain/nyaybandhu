import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Book, Download, FileText, Search } from 'lucide-react';
import Layout from '@/components/Layout';

const Library = () => {
  const constitutionLanguages = [
    { code: 'en', name: 'English', available: true },
    { code: 'hi', name: 'हिंदी (Hindi)', available: true },
    { code: 'bn', name: 'বাংলা (Bengali)', available: true },
    { code: 'te', name: 'తెలుగు (Telugu)', available: true },
    { code: 'ta', name: 'தமிழ் (Tamil)', available: true },
    { code: 'mr', name: 'मराठी (Marathi)', available: true },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)', available: true },
    { code: 'kn', name: 'ಕನ್ನಡ (Kannada)', available: true },
    { code: 'ml', name: 'മലയാളം (Malayalam)', available: true },
    { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', available: true },
    { code: 'or', name: 'ଓଡ଼ିଆ (Odia)', available: true },
    { code: 'as', name: 'অসমীয়া (Assamese)', available: true },
    { code: 'ur', name: 'اردو (Urdu)', available: true },
    { code: 'sd', name: 'سنڌي (Sindhi)', available: true },
    { code: 'kok', name: 'कोंकणी (Konkani)', available: true }
  ];

  const legalBooks = [
    {
      title: "Indian Constitutional Law",
      author: "M.P. Jain",
      year: "2022",
      description: "A comprehensive analysis of the Indian Constitution and constitutional law.",
      coverImage: "https://m.media-amazon.com/images/I/41+TLM5YPwL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Law of Torts",
      author: "Ratanlal & Dhirajlal",
      year: "2021",
      description: "Classic text on the law of torts in the Indian context.",
      coverImage: "https://blog.ipleaders.in/wp-content/uploads/2020/02/tort-law-b33e910261294071ac189eebbcae4e67.jpg"
    },
    {
      title: "Criminal Procedure Code",
      author: "K.N. Chandrasekharan Pillai",
      year: "2020",
      description: "Detailed commentary on the Criminal Procedure Code.",
      // coverImage: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3"
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8szmAV-aWcYps_80plcxIqlS-v15p8qqng&s"
    },
    {
      title: "The Indian Evidence Act",
      author: "Batuk Lal",
      year: "2021",
      description: "Commentary on the Indian Evidence Act with case references.",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR4u_1Y7XDinHqGZEKQnXps7KtDleoL7PgA&s"
    },
    {
      title: "Law of Contracts",
      author: "Avtar Singh",
      year: "2023",
      description: "Detailed explanation of contract law principles in India.",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn0KmTuUCfo45T7w2htZ28PRaiAH-4_BlrA&s"
    },
    {
      title: "Family Law in India",
      author: "Paras Diwan",
      year: "2022",
      description: "Comprehensive coverage of family law across different personal laws.",
      coverImage: "https://s3.amazonaws.com/ebcwebstore/images/family-law-by-paras-diwan-14th-edition.jpg"
    }
  ];

  const bareacts = [
    { name: "Constitution of India", lastUpdated: "Jan 26, 2023" },
    { name: "Indian Penal Code, 1860", lastUpdated: "Dec 15, 2022" },
    { name: "Code of Criminal Procedure, 1973", lastUpdated: "Nov 30, 2022" },
    { name: "Indian Evidence Act, 1872", lastUpdated: "Oct 10, 2022" },
    { name: "Civil Procedure Code, 1908", lastUpdated: "Sep 05, 2022" },
    { name: "Contract Act, 1872", lastUpdated: "Aug 22, 2022" },
    { name: "Right to Information Act, 2005", lastUpdated: "Jul 18, 2022" },
    { name: "Labour Codes", lastUpdated: "Jun 30, 2022" }
  ];

  return (
    <Layout>
      {/* Hero Section with Supreme Court Vector */}
      <section className="bg-india-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="w-full h-full">
            <path d="M500,10 L990,250 L990,750 L500,990 L10,750 L10,250 z" fill="currentColor" />
            <path d="M500,100 L500,900 M200,250 L800,250 M200,750 L800,750" stroke="currentColor" strokeWidth="10" fill="none" />
            <path d="M350,250 L350,750 M650,250 L650,750" stroke="currentColor" strokeWidth="10" fill="none" />
            <path d="M150,250 C150,180 850,180 850,250" stroke="currentColor" strokeWidth="15" fill="none" />
            <circle cx="500" cy="180" r="50" stroke="currentColor" strokeWidth="10" fill="none" />
          </svg>
        </div>

        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Digital Legal Library</h1>
            <p className="text-xl mb-8">
              Access the constitution, legal books, and documents in multiple languages to enhance your legal knowledge.
            </p>
            <div className="flex items-center max-w-md mx-auto bg-white/10 rounded-lg px-4 py-2">
              <Search className="h-5 w-5 text-white mr-2" />
              <Input
                type="search"
                placeholder="Search for legal resources..."
                className="bg-transparent border-none text-white placeholder:text-white/70 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Indian Emblem Vector */}
      <div className="flex justify-center -mt-16 relative z-20">
        <div className="bg-white rounded-full p-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20">
            <circle cx="50" cy="50" r="45" fill="#f1f5f9" stroke="#1e40af" strokeWidth="1" />
            <path d="M50,10 A40,40 0 1,0 50,90 A40,40 0 1,0 50,10z" fill="none" stroke="#ff9933" strokeWidth="1" />
            <path d="M50,15 A35,35 0 1,0 50,85 A35,35 0 1,0 50,15z" fill="none" stroke="#138808" strokeWidth="1" />
            <path d="M50,30 L50,70 M30,50 L70,50 M35.86,35.86 L64.14,64.14 M35.86,64.14 L64.14,35.86" stroke="#0e1e6f" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="8" fill="#0e1e6f" />
            <circle cx="50" cy="50" r="5" fill="#f1f5f9" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <Tabs defaultValue="constitution" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-lg mx-auto mb-8">
              <TabsTrigger value="constitution">Constitution</TabsTrigger>
              <TabsTrigger value="books">Legal Books</TabsTrigger>
              <TabsTrigger value="bareacts">Bare Acts</TabsTrigger>
            </TabsList>

            {/* Constitution Tab */}
            <TabsContent value="constitution">
              <div className="mb-8 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Constitution of India</h2>
                <p className="text-muted-foreground">
                  The Constitution of India is the supreme law of India. It lays down the framework defining fundamental
                  political principles, establishes the structure, procedures, powers and duties of government institutions,
                  and sets out fundamental rights, directive principles, and the duties of citizens.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Available Languages</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {constitutionLanguages.map((language) => (



                    <Button
                      key={language.code}
                      variant={language.available ? "outline" : "ghost"}
                      className="justify-start"
                      disabled={!language.available}
                    >
                      <Book className="h-4 w-4 mr-2" />
                      {language.name}
                    </Button>






                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Parts of the Constitution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>Part {i + 1}</CardTitle>
                        <CardDescription>Articles {i * 30 + 1} to {i * 30 + 30}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-muted-foreground">
                          {i === 0 && "The Union and its Territory"}
                          {i === 1 && "Citizenship"}
                          {i === 2 && "Fundamental Rights"}
                          {i === 3 && "Directive Principles of State Policy"}
                          {i === 4 && "Fundamental Duties"}
                          {i === 5 && "The Union"}
                          {i === 6 && "The States"}
                          {i === 7 && "The Union Territories"}
                          {i === 8 && "The Panchayats"}
                        </p>
                        <Button variant="outline" className="w-full">
                          <a
                            href={`/pdfs/Part${i + 1}.pdf`}  // Dynamically link to part1.pdf, part2.pdf, etc.
                            target="_blank"  // Open the PDF in a new tab
                            rel="noopener noreferrer"
                          >
                            <FileText className="h-4 w-4 mr-2" /> Read Part
                          </a>
                        </Button>

                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button size="lg">
                  <Download className="h-4 w-4 mr-2" /> Download Full Constitution
                </Button>
              </div>
            </TabsContent>

            {/* Legal Books Tab */}
            <TabsContent value="books">
              <div className="mb-8 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Legal Books Collection</h2>
                <p className="text-muted-foreground">
                  Access a comprehensive collection of legal books, commentaries, and resources to enhance your
                  understanding of Indian law and legal principles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {legalBooks.map((book, index) => (
                  <Card key={index} className="overflow-hidden hover-card-effect">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{book.title}</CardTitle>
                      <CardDescription>by {book.author}, {book.year}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{book.description}</p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/library/book/${index + 1}`}>
                          <Book className="h-4 w-4 mr-2" /> View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline">View All Legal Books</Button>
              </div>
            </TabsContent>

            {/* Bare Acts Tab */}
            <TabsContent value="bareacts">
              <div className="mb-8 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Bare Acts & Rules</h2>
                <p className="text-muted-foreground">
                  Browse through the collection of Indian laws, acts, and rules in their original form without annotations.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-3 text-left font-medium">Act Name</th>
                      <th className="px-4 py-3 text-left font-medium">Last Updated</th>
                      <th className="px-4 py-3 text-center font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bareacts.map((act, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-4 font-medium">{act.name}</td>
                        <td className="px-4 py-4 text-muted-foreground">{act.lastUpdated}</td>
                        <td className="px-4 py-4 text-center">
                          <div className="flex justify-center space-x-2">
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={`/pdfs/BareAct${index + 1}.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Download className="h-4 w-4 mr-2" /> PDF
                              </a>
                            </Button>


                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline">View All Acts & Rules</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Library;

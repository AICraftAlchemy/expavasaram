import React, { useState } from 'react';
import { Search, Briefcase, MapPin, Clock, Filter, TrendingUp, Star, DollarSign } from 'lucide-react';
import JobCard from './components/JobCard';
import JobModal from './components/JobModal';
import FilterSidebar from './components/FilterSidebar';
import InfoSection from './components/InfoSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { Job } from './types';

const SAMPLE_JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$120,000 - $150,000',
    description: 'We are seeking a talented Senior Frontend Developer to join our team...',
    requirements: ['5+ years of experience with React', 'Strong TypeScript skills', 'Experience with state management (Redux, MobX, etc.)'],
    benefits: ['Flexible work hours', 'Health insurance', '401(k) matching', 'Professional development budget'],
    logo: 'https://source.unsplash.com/random/100x100?tech',
    applyUrl: 'https://example.com/apply/frontend-dev',
    skills: ['React', 'TypeScript', 'Redux', 'CSS-in-JS'],
    postedDate: '2023-04-15',
    companySize: '500-1000',
    industry: 'Technology',
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'AI Innovations',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$100,000 - $130,000',
    description: 'Join our cutting-edge AI team as a Data Scientist...',
    requirements: ['MS or PhD in Computer Science, Statistics, or related field', 'Experience with machine learning algorithms', 'Proficiency in Python and R'],
    benefits: ['Remote work options', 'Stock options', 'Generous vacation policy', 'State-of-the-art equipment'],
    logo: 'https://source.unsplash.com/random/100x100?ai',
    applyUrl: 'https://example.com/apply/data-scientist',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
    postedDate: '2023-04-10',
    companySize: '100-500',
    industry: 'Artificial Intelligence',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'DesignMasters',
    location: 'Remote',
    type: 'Contract',
    experience: '2+ years',
    salary: '$80,000 - $100,000',
    description: 'We\'re looking for a creative UX/UI Designer to help shape the future of our products...',
    requirements: ['Portfolio showcasing web and mobile app designs', 'Proficiency in Figma and Adobe Creative Suite', 'Understanding of user-centered design principles'],
    benefits: ['Flexible schedule', 'Project-based bonuses', 'Creative freedom', 'Collaborative team environment'],
    logo: 'https://source.unsplash.com/random/100x100?design',
    applyUrl: 'https://example.com/apply/ux-designer',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
    postedDate: '2023-04-05',
    companySize: '10-50',
    industry: 'Design',
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'DevSolutions',
    location: 'Austin, TX',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$110,000 - $140,000',
    description: 'We are seeking a Full Stack Developer experienced in both frontend and backend technologies...',
    requirements: ['4+ years of experience with JavaScript frameworks', 'Experience with Node.js and React', 'Proficiency in database management (SQL, NoSQL)'],
    benefits: ['Remote flexibility', 'Healthcare plans', 'Gym membership', 'Paid parental leave'],
    logo: 'https://source.unsplash.com/random/100x100?developer',
    applyUrl: 'https://example.com/apply/fullstack-dev',
    skills: ['JavaScript', 'Node.js', 'React', 'SQL', 'NoSQL'],
    postedDate: '2023-03-30',
    companySize: '200-500',
    industry: 'Software Development',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Seattle, WA',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$105,000 - $125,000',
    description: 'Seeking a skilled DevOps Engineer to streamline our cloud infrastructure...',
    requirements: ['Experience with AWS, Docker, and Kubernetes', 'Proficiency in CI/CD pipelines', 'Strong Linux skills'],
    benefits: ['Flexible work schedule', '401(k) plan', 'Commuter benefits', 'Educational stipend'],
    logo: 'https://source.unsplash.com/random/100x100?cloud',
    applyUrl: 'https://example.com/apply/devops',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    postedDate: '2023-03-25',
    companySize: '1000-5000',
    industry: 'Cloud Computing',
  },
  {
    id: 6,
    title: 'Marketing Manager',
    company: 'BrandUp',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$90,000 - $120,000',
    description: 'Looking for a creative Marketing Manager to lead our branding strategies...',
    requirements: ['Proven experience in marketing strategies', 'Strong leadership and project management skills', 'Familiarity with digital marketing tools'],
    benefits: ['Unlimited vacation', 'Health and wellness programs', 'Professional development opportunities'],
    logo: 'https://source.unsplash.com/random/100x100?marketing',
    applyUrl: 'https://example.com/apply/marketing-manager',
    skills: ['Digital Marketing', 'SEO', 'Leadership', 'Content Strategy'],
    postedDate: '2023-04-01',
    companySize: '500-1000',
    industry: 'Marketing',
  },
  {
    id: 7,
    title: 'Mobile App Developer',
    company: 'AppWorx',
    location: 'Remote',
    type: 'Contract',
    experience: '3+ years',
    salary: '$70,000 - $90,000',
    description: 'We are looking for an experienced Mobile App Developer to create cross-platform applications...',
    requirements: ['Proficiency in Flutter or React Native', 'Experience with mobile app architecture', 'Understanding of app store submission processes'],
    benefits: ['Flexible work hours', 'Performance-based bonuses', 'Work-from-home setup allowance'],
    logo: 'https://source.unsplash.com/random/100x100?mobile',
    applyUrl: 'https://example.com/apply/mobile-app-developer',
    skills: ['Flutter', 'React Native', 'iOS', 'Android'],
    postedDate: '2023-03-20',
    companySize: '50-200',
    industry: 'Mobile Development',
  },
  {
    id: 8,
    title: 'Cybersecurity Analyst',
    company: 'SecureNow',
    location: 'Chicago, IL',
    type: 'Full-time',
    experience: '2+ years',
    salary: '$95,000 - $110,000',
    description: 'Join our team as a Cybersecurity Analyst to protect our digital assets from threats...',
    requirements: ['Experience with network security and risk management', 'Proficiency in security protocols', 'Familiarity with threat modeling'],
    benefits: ['Onsite gym', 'Comprehensive insurance plans', 'Annual security training budget'],
    logo: 'https://source.unsplash.com/random/100x100?security',
    applyUrl: 'https://example.com/apply/cybersecurity-analyst',
    skills: ['Network Security', 'Risk Management', 'Incident Response'],
    postedDate: '2023-04-02',
    companySize: '100-500',
    industry: 'Cybersecurity',
  },
  {
    id: 9,
    title: 'Product Manager',
    company: 'InnovateX',
    location: 'Boston, MA',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$110,000 - $130,000',
    description: 'Seeking a Product Manager to guide the development of innovative software solutions...',
    requirements: ['Experience managing cross-functional teams', 'Strong knowledge of product lifecycle management', 'Excellent communication skills'],
    benefits: ['Health and dental coverage', 'Equity options', 'Work-from-home flexibility'],
    logo: 'https://source.unsplash.com/random/100x100?product',
    applyUrl: 'https://example.com/apply/product-manager',
    skills: ['Product Management', 'Agile', 'Leadership', 'Team Collaboration'],
    postedDate: '2023-04-08',
    companySize: '500-1000',
    industry: 'Software',
  },
  {
    id: 10,
    title: 'Technical Writer',
    company: 'DocuTech',
    location: 'Remote',
    type: 'Part-time',
    experience: '2+ years',
    salary: '$60,000 - $80,000',
    description: 'We are looking for a Technical Writer to document our software products...',
    requirements: ['Experience in technical writing', 'Strong command of the English language', 'Ability to work with development teams to create documentation'],
    benefits: ['Flexible working hours', 'Home office stipend', 'Access to software and tools'],
    logo: 'https://source.unsplash.com/random/100x100?writing',
    applyUrl: 'https://example.com/apply/technical-writer',
    skills: ['Technical Writing', 'Documentation', 'Software', 'Research'],
    postedDate: '2023-03-18',
    companySize: '50-200',
    industry: 'Documentation',
  },
  {
    id: 11,
    title: 'Business Analyst',
    company: 'BizSolutions',
    location: 'Washington, DC',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$85,000 - $110,000',
    description: 'Looking for a Business Analyst to improve our business processes...',
    requirements: ['Experience in business analysis', 'Strong data analysis skills', 'Understanding of business process management'],
    benefits: ['Health and dental insurance', 'Retirement plans', 'Annual bonus'],
    logo: 'https://source.unsplash.com/random/100x100?business',
    applyUrl: 'https://example.com/apply/business-analyst',
    skills: ['Business Analysis', 'Data Analysis', 'SQL', 'Process Improvement'],
    postedDate: '2023-04-12',
    companySize: '100-500',
    industry: 'Consulting',
  },
  {
    id: 12,
    title: 'QA Engineer',
    company: 'TestWorks',
    location: 'Dallas, TX',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$75,000 - $95,000',
    description: 'We are hiring a QA Engineer to ensure the quality of our software products...',
    requirements: ['Experience with automated testing tools', 'Proficiency in scripting languages like Python or JavaScript', 'Strong attention to detail'],
    benefits: ['Flexible hours', 'Onsite wellness program', 'Paid time off'],
    logo: 'https://source.unsplash.com/random/100x100?qa',
    applyUrl: 'https://example.com/apply/qa-engineer',
    skills: ['QA', 'Automated Testing', 'Python', 'Selenium'],
    postedDate: '2023-03-22',
    companySize: '200-500',
    industry: 'Software Testing',
  },
  {
    id: 13,
    title: 'Cloud Architect',
    company: 'SkyHigh Cloud',
    location: 'Denver, CO',
    type: 'Full-time',
    experience: '6+ years',
    salary: '$130,000 - $160,000',
    description: 'Seeking an experienced Cloud Architect to design scalable cloud solutions...',
    requirements: ['Expertise in AWS, Azure, or Google Cloud', 'Experience with cloud-native architectures', 'Proficiency in Kubernetes and Docker'],
    benefits: ['Stock options', 'Remote work opportunities', 'Healthcare benefits'],
    logo: 'https://source.unsplash.com/random/100x100?cloud',
    applyUrl: 'https://example.com/apply/cloud-architect',
    skills: ['AWS', 'Azure', 'Kubernetes', 'Cloud Architecture'],
    postedDate: '2023-04-09',
    companySize: '500-1000',
    industry: 'Cloud Computing',
  },
];


function App() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(SAMPLE_JOBS);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'salary'>('relevance');

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleFilter = (filters: any) => {
    const filtered = SAMPLE_JOBS.filter(job => {
      return (
        (!filters.role || job.title.toLowerCase().includes(filters.role.toLowerCase())) &&
        (!filters.type || job.type === filters.type) &&
        (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.experience || job.experience.toLowerCase().includes(filters.experience.toLowerCase())) &&
        (!filters.salary || (parseInt(job.salary.replace(/\D/g, '')) >= parseInt(filters.salary)))
      );
    });
    setFilteredJobs(filtered);
    setIsFilterOpen(false);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filtered = SAMPLE_JOBS.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredJobs(filtered);
  };

  const handleSort = (sortType: 'relevance' | 'date' | 'salary') => {
    setSortBy(sortType);
    let sorted = [...filteredJobs];
    switch (sortType) {
      case 'date':
        sorted.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
        break;
      case 'salary':
        sorted.sort((a, b) => parseInt(b.salary.replace(/\D/g, '')) - parseInt(a.salary.replace(/\D/g, '')));
        break;
      default:
        // Relevance sorting (you can implement a more sophisticated relevance algorithm)
        break;
    }
    setFilteredJobs(sorted);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <section className="mb-12">
              <h2 className="text-4xl font-bold text-center mb-4">Find Your Dream Job</h2>
              <form onSubmit={handleSearch} className="flex justify-center">
                <div className="relative w-full max-w-2xl">
                  <input
                    type="text"
                    placeholder="Search for jobs, skills, or companies..."
                    className="w-full p-4 pr-12 rounded-full border-2 border-indigo-300 focus:border-indigo-500 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Search className="text-indigo-500" />
                  </button>
                </div>
              </form>
            </section>

            <div className="flex flex-col md:flex-row gap-8">
              <aside className="md:w-1/4">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full mb-4 bg-indigo-600 text-white p-2 rounded-lg flex items-center justify-center md:hidden"
                >
                  <Filter className="mr-2" /> Filters
                </button>
                <FilterSidebar isOpen={isFilterOpen} onFilter={handleFilter} />
              </aside>

              <section className="md:w-3/4">
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => handleSort(e.target.value as 'relevance' | 'date' | 'salary')}
                      className="border rounded-md p-1"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="date">Date</option>
                      <option value="salary">Salary</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} onClick={() => handleJobClick(job)} />
                  ))}
                </div>
              </section>
            </div>

            <InfoSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Avasaram</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><button onClick={() => setActiveSection('home')} className="hover:text-indigo-200">Home</button></li>
              <li><button onClick={() => setActiveSection('about')} className="hover:text-indigo-200">About</button></li>
              <li><button onClick={() => setActiveSection('contact')} className="hover:text-indigo-200">Contact</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {renderContent()}
      </main>

      <footer className="bg-indigo-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Avasaram. All rights reserved.</p>
        </div>
      </footer>

      {selectedJob && <JobModal job={selectedJob} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
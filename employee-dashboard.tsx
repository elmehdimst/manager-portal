import React, { useState } from 'react';
import { Search, Calendar, Award, Briefcase, CheckCircle, AlertCircle, ArrowUpCircle, 
  BookOpen, Book, Coffee, Star, User, Users, PieChart, BarChart2, 
  Layers, Filter, ChevronDown, Grid, List, TrendingUp, Clock, Menu, X } from 'lucide-react';

// Define types
interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  level: string;
  availability: string;
  chargeability: number;
  projects: number;
  activeProjects: number;
  skills: string[];
  topSkill: string;
  topSkillLevel: string;
  certifications: number;
}

interface DetailedEmployee {
  id: number;
  name: string;
  role: string;
  level: string;
  department: string;
  team: string;
  manager: string;
  location: string;
  joinDate: string;
  email: string;
  phone: string;
  image: string;
  availability: {
    status: string;
    chargeability: number;
    lastBenchDate: string;
  };
  projects: Array<{
    id: number;
    name: string;
    timeline: string;
    chargeability: number;
    status: string;
    client: string;
  }>;
  certifications: Array<{
    id: number;
    name: string;
    issuer: string;
    dateEarned: string;
    validUntil: string;
    logo: string;
  }>;
  skills: Array<{
    id: number;
    name: string;
    level: string;
    category: string;
  }>;
}

const EmployeeDashboard = () => {
  // Sample data
  const employees: Employee[] = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      role: 'Senior Developer', 
      department: 'Engineering', 
      image: '/api/placeholder/100/100',
      level: 'L4',
      availability: 'Partially Staffed',
      chargeability: 75,
      projects: 2,
      activeProjects: 2,
      skills: ['React', 'Node.js', 'AWS'],
      topSkill: 'React',
      topSkillLevel: 'Mastery',
      certifications: 3
    },
    { 
      id: 2, 
      name: 'Michael Chen', 
      role: 'UX Designer', 
      department: 'Design', 
      image: '/api/placeholder/100/100',
      level: 'L3',
      availability: 'Fully Staffed',
      chargeability: 90,
      projects: 1,
      activeProjects: 1,
      skills: ['Figma', 'User Research', 'UI Design'],
      topSkill: 'Figma',
      topSkillLevel: 'Mastery',
      certifications: 2
    },
    { 
      id: 3, 
      name: 'Priya Patel', 
      role: 'Project Manager', 
      department: 'Management', 
      image: '/api/placeholder/100/100',
      level: 'L4',
      availability: 'Fully Staffed',
      chargeability: 95,
      projects: 3,
      activeProjects: 3,
      skills: ['Agile', 'Jira', 'Risk Management'],
      topSkill: 'Agile',
      topSkillLevel: 'Advanced',
      certifications: 4
    },
    { 
      id: 4, 
      name: 'David Kim', 
      role: 'Data Scientist', 
      department: 'Analytics', 
      image: '/api/placeholder/100/100',
      level: 'L3',
      availability: 'On Bench',
      chargeability: 0,
      projects: 1,
      activeProjects: 0,
      skills: ['Python', 'Machine Learning', 'TensorFlow'],
      topSkill: 'Python',
      topSkillLevel: 'Advanced',
      certifications: 2
    },
    { 
      id: 5, 
      name: 'Emma Wilson', 
      role: 'Frontend Developer', 
      department: 'Engineering', 
      image: '/api/placeholder/100/100',
      level: 'L2',
      availability: 'Partially Staffed',
      chargeability: 60,
      projects: 2,
      activeProjects: 1,
      skills: ['JavaScript', 'CSS', 'React'],
      topSkill: 'JavaScript',
      topSkillLevel: 'Intermediate',
      certifications: 1
    },
    { 
      id: 6, 
      name: 'James Rodriguez', 
      role: 'DevOps Engineer', 
      department: 'Infrastructure', 
      image: '/api/placeholder/100/100',
      level: 'L3',
      availability: 'Fully Staffed',
      chargeability: 85,
      projects: 2,
      activeProjects: 2,
      skills: ['Kubernetes', 'Docker', 'Jenkins'],
      topSkill: 'Kubernetes',
      topSkillLevel: 'Advanced',
      certifications: 3
    },
    { 
      id: 7, 
      name: 'Olivia Martinez', 
      role: 'QA Engineer', 
      department: 'Quality Assurance', 
      image: '/api/placeholder/100/100',
      level: 'L2',
      availability: 'Partially Staffed',
      chargeability: 70,
      projects: 2,
      activeProjects: 1,
      skills: ['Selenium', 'Cypress', 'TestRail'],
      topSkill: 'Selenium',
      topSkillLevel: 'Advanced',
      certifications: 1
    },
    { 
      id: 8, 
      name: 'Raj Sharma', 
      role: 'Backend Developer', 
      department: 'Engineering', 
      image: '/api/placeholder/100/100',
      level: 'L3',
      availability: 'Fully Staffed',
      chargeability: 100,
      projects: 1,
      activeProjects: 1,
      skills: ['Java', 'Spring Boot', 'Microservices'],
      topSkill: 'Java',
      topSkillLevel: 'Mastery',
      certifications: 2
    }
  ];

  const sampleEmployee: DetailedEmployee = {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    level: 'L4',
    department: 'Engineering',
    team: 'Platform Team',
    manager: 'Robert Miller',
    location: 'New York, NY',
    joinDate: '15 Mar 2021',
    email: 'sarah.j@company.com',
    phone: '+1 (555) 123-4567',
    image: '/api/placeholder/200/200',
    availability: {
      status: 'Partially Staffed',
      chargeability: 75,
      lastBenchDate: '10 Jan 2024',
    },
    projects: [
      {
        id: 1,
        name: 'Cloud Migration',
        timeline: 'Jan 2024 - Jun 2024',
        chargeability: 60,
        status: 'Active',
        client: 'TechCorp Inc.'
      },
      {
        id: 2,
        name: 'Internal DevOps Tools',
        timeline: 'Feb 2024 - Apr 2024',
        chargeability: 15,
        status: 'Active',
        client: 'Internal'
      },
      {
        id: 3,
        name: 'E-commerce Platform',
        timeline: 'Jul 2023 - Dec 2023',
        chargeability: 90,
        status: 'Completed',
        client: 'RetailMax'
      }
    ],
    certifications: [
      {
        id: 1,
        name: 'AWS Solutions Architect - Professional',
        issuer: 'Amazon Web Services',
        dateEarned: 'May 2023',
        validUntil: 'May 2026',
        logo: '/api/placeholder/40/40'
      },
      {
        id: 2,
        name: 'Google Cloud Professional Developer',
        issuer: 'Google Cloud',
        dateEarned: 'Jan 2022',
        validUntil: 'Jan 2025',
        logo: '/api/placeholder/40/40'
      },
      {
        id: 3,
        name: 'Certified Kubernetes Administrator',
        issuer: 'Cloud Native Computing Foundation',
        dateEarned: 'Aug 2023',
        validUntil: 'Aug 2026',
        logo: '/api/placeholder/40/40'
      }
    ],
    skills: [
      { id: 1, name: 'React', level: 'Mastery', category: 'Frontend' },
      { id: 2, name: 'Node.js', level: 'Advanced', category: 'Backend' },
      { id: 3, name: 'AWS', level: 'Advanced', category: 'Cloud' },
      { id: 4, name: 'Kubernetes', level: 'Intermediate', category: 'DevOps' },
      { id: 5, name: 'Python', level: 'Advanced', category: 'Programming' },
      { id: 6, name: 'Docker', level: 'Mastery', category: 'DevOps' },
      { id: 7, name: 'GraphQL', level: 'Intermediate', category: 'API' },
      { id: 8, name: 'TypeScript', level: 'Mastery', category: 'Programming' },
      { id: 9, name: 'CI/CD', level: 'Advanced', category: 'DevOps' },
      { id: 10, name: 'MongoDB', level: 'Beginner', category: 'Database' }
    ]
  };

  // Calculate overview statistics
  const totalEmployees = employees.length;
  const onBenchEmployees = employees.filter(emp => emp.availability === 'On Bench').length;
  const onBenchPercentage = Math.round((onBenchEmployees / totalEmployees) * 100);
  const avgChargeability = Math.round(employees.reduce((acc, emp) => acc + emp.chargeability, 0) / totalEmployees);
  const totalCertifications = employees.reduce((acc, emp) => acc + emp.certifications, 0);
  
  // Department distribution
  const departmentCounts = employees.reduce<Record<string, number>>((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<DetailedEmployee | null>(null);
  const [activeTab, setActiveTab] = useState('projects');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle employee selection
  const handleEmployeeSelect = (employee: Employee) => {
    setSelectedEmployee(sampleEmployee);
  };

  // Skill level icons
  const skillLevelIcons: Record<string, React.ReactNode> = {
    'Beginner': <Coffee size={16} />,
    'Intermediate': <Book size={16} />,
    'Advanced': <BookOpen size={16} />,
    'Mastery': <Star size={16} />
  };

  // Skill level colors
  const skillLevelColors: Record<string, string> = {
    'Beginner': 'bg-blue-100 text-blue-800',
    'Intermediate': 'bg-green-100 text-green-800',
    'Advanced': 'bg-purple-100 text-purple-800',
    'Mastery': 'bg-yellow-100 text-yellow-800'
  };

  // Availability status colors
  const availabilityColors: Record<string, string> = {
    'Fully Staffed': 'bg-green-100 text-green-800',
    'Partially Staffed': 'bg-yellow-100 text-yellow-800',
    'On Bench': 'bg-blue-100 text-blue-800'
  };

  // Group skills by category when an employee is selected
  const skillsByCategory = selectedEmployee?.skills.reduce<Record<string, any[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {}) || {};

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Main dashboard view or employee detail view
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col"> {/* OUTER DIV START */}
      {/* Mobile menu button */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-900 text-white shadow-lg lg:hidden"
      >
        {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar - Hamburger on mobile */}
      <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out w-72 bg-gray-900 flex flex-col z-20 h-full`}>
        <div className="p-6 border-b border-gray-800 flex items-center">
          <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">Talent Manager</h1>
        </div>
        <div className="flex-1 overflow-y-auto py-6">
          <div className="px-4 py-2">
            <button 
              onClick={() => {
                setSelectedEmployee(null);
                setSidebarOpen(false);
              }}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg text-sm font-medium transition-colors flex items-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Dashboard
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay to close sidebar on mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className={`w-full flex-1 min-h-screen overflow-y-auto ml-0 lg:ml-72 transition-all duration-300`}>
        <div className="relative">
          {!selectedEmployee ? (
            /* Dashboard View */
            <div className="p-5 md:p-6 pb-24 max-w-7xl mx-auto">
            
            <div className="flex items-center justify-between mb-8 mt-8 lg:mt-0">
              <h1 className="text-3xl font-bold text-gray-900 ml-10 lg:ml-0">Employee Dashboard</h1>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg flex items-center text-sm font-medium transition-colors">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center text-sm font-medium transition-colors">
                  <User className="h-4 w-4 mr-2" />
                  Add Employee
                </button>
              </div>
            </div>
            
            {/* Enhanced Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-blue-100 mb-1">Total Employees</p>
                    <p className="text-3xl font-bold">{totalEmployees}</p>
                    <p className="mt-1 text-sm text-blue-100">Across all departments</p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-2xl shadow-lg text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-amber-100 mb-1">On Bench</p>
                    <div className="flex items-baseline">
                      <p className="text-3xl font-bold">{onBenchEmployees}</p>
                      <p className="ml-2 text-sm text-amber-100">({onBenchPercentage}%)</p>
                    </div>
                    <p className="mt-1 text-sm text-amber-100">Available for staffing</p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl shadow-lg text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-emerald-100 mb-1">Avg Chargeability</p>
                    <p className="text-3xl font-bold">{avgChargeability}%</p>
                    <p className="mt-1 text-sm text-emerald-100">Current quarter</p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl">
                    <BarChart2 className="h-7 w-7 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-lg text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-purple-100 mb-1">Certifications</p>
                    <p className="text-3xl font-bold">{totalCertifications}</p>
                    <p className="mt-1 text-sm text-purple-100">Active team certificates</p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
            

            
            {/* Employee Listing */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 space-y-4 sm:space-y-0">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>
                  <p className="text-gray-500 text-sm mt-1">Manage and monitor your team's activity</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  {/* Search */}
                  <div className="relative flex-grow max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Search employees..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  {/* View Toggle */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button 
                      className={`px-3 py-2 flex items-center rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button 
                      className={`px-3 py-2 flex items-center rounded-md transition-colors ${viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Grid View */}
              {viewMode === 'grid' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filteredEmployees.map((employee) => (
                    <div 
                      key={employee.id}
                      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:border-blue-300 transition-all cursor-pointer"
                      onClick={() => handleEmployeeSelect(employee)}
                    >
                      <div className="relative bg-white p-0 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                        {/* Top status bar with gradient background */}
                        <div className={`w-full h-2 ${
                          employee.availability === 'On Bench' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                          employee.availability === 'Partially Staffed' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                          'bg-gradient-to-r from-red-400 to-red-600'
                        }`}></div>

                        <div className="p-5">
                          {/* Header with employee info */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <img
                                src={employee.image}
                                alt={employee.name}
                                className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md"
                              />
                              <div className="ml-3">
                                <p className="font-semibold text-gray-900">{employee.name}</p>
                                <p className="text-sm text-gray-600">{employee.role}</p>
                                <div className="flex items-center mt-1">
                                  <span className="text-xs text-gray-500">{employee.department}</span>
                                  <span className="mx-1">•</span>
                                  <span className="text-xs text-gray-500">{employee.level}</span>
                                </div>
                              </div>
                            </div>

                            {/* Status badge */}
                            <div className={`px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center ${
                              employee.availability === 'On Bench' ? 'bg-green-100 text-green-800' :
                              employee.availability === 'Partially Staffed' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              <span className={`h-1.5 w-1.5 rounded-full mr-1.5 ${
                                employee.availability === 'On Bench' ? 'bg-green-500' :
                                employee.availability === 'Partially Staffed' ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`}></span>
                              {employee.availability === 'On Bench' ? 'Available' :
                               employee.availability === 'Partially Staffed' ? 'Partial' :
                               'Staffed'}
                            </div>
                          </div>

                          {/* Chargeability section with circular progress */}
                          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-4">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Chargeability</p>
                              <p className={`text-lg font-bold ${
                                employee.chargeability >= 80 ? 'text-green-600' : 
                                employee.chargeability >= 60 ? 'text-yellow-600' : 
                                'text-red-600'
                              }`}>
                                {employee.chargeability}%
                              </p>
                            </div>
                            <div className="relative h-12 w-12">
                              <svg className="h-12 w-12" viewBox="0 0 36 36">
                                <circle 
                                  cx="18" 
                                  cy="18" 
                                  r="16" 
                                  fill="none" 
                                  stroke="#e5e7eb" 
                                  strokeWidth="3"
                                />
                                <circle 
                                  cx="18" 
                                  cy="18" 
                                  r="16" 
                                  fill="none" 
                                  stroke={
                                    employee.chargeability >= 80 ? '#10b981' : 
                                    employee.chargeability >= 60 ? '#f59e0b' : 
                                    '#ef4444'
                                  }
                                  strokeWidth="3"
                                  strokeDasharray={`${100.53 * employee.chargeability / 100} 100.53`}
                                  strokeDashoffset="25.13"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Key metrics row */}
                          <div className="grid grid-cols-3 gap-1">
                            <div className="bg-blue-50 p-2 rounded-lg">
                              <div className="flex flex-col items-center">
                                <Briefcase className="h-5 w-5 text-blue-500 mb-1" />
                                <span className="text-sm font-bold text-gray-800">{employee.activeProjects}</span>
                                <span className="text-xs text-gray-500">Projects</span>
                              </div>
                            </div>
                            <div className="bg-emerald-50 p-2 rounded-lg">
                              <div className="flex flex-col items-center">
                                <Book className="h-5 w-5 text-emerald-500 mb-1" />
                                <span className="text-sm font-bold text-gray-800">{employee.skills.length}</span>
                                <span className="text-xs text-gray-500">Skills</span>
                              </div>
                            </div>
                            <div className="bg-purple-50 p-2 rounded-lg">
                              <div className="flex flex-col items-center">
                                <Award className="h-5 w-5 text-purple-500 mb-1" />
                                <span className="text-sm font-bold text-gray-800">{employee.certifications}</span>
                                <span className="text-xs text-gray-500">Certs</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* View profile button */}
                          <button className="w-full mt-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                            View Full Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* List View */}
              {viewMode === 'list' && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Employee
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                          Chargeability
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                          Projects
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell">
                          Skills
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredEmployees.map((employee) => (
                        <tr 
                          key={employee.id} 
                          className="hover:bg-gray-50 cursor-pointer"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 relative">
                                <img className="h-10 w-10 rounded-full" src={employee.image} alt="" />
                                <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                                  employee.availability === 'On Bench' ? 'bg-green-500' :
                                  employee.availability === 'Partially Staffed' ? 'bg-yellow-500' :
                                  'bg-red-500'
                                }`}></div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                                <div className="text-sm text-gray-500">{employee.role} • {employee.level}</div>
                                <div className="text-xs text-gray-500 sm:hidden">
                                  {employee.availability === 'On Bench' ? 'Available' :
                                   employee.availability === 'Partially Staffed' ? 'Partial' :
                                   'Staffed'} • {employee.chargeability}%
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                            <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                              employee.availability === 'On Bench' ? 'bg-green-100 text-green-800' :
                              employee.availability === 'Partially Staffed' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              <span className={`h-1.5 w-1.5 rounded-full mr-1.5 ${
                                employee.availability === 'On Bench' ? 'bg-green-500' :
                                employee.availability === 'Partially Staffed' ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`}></span>
                              {employee.availability === 'On Bench' ? 'Available' :
                               employee.availability === 'Partially Staffed' ? 'Partial' :
                               'Staffed'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                            <div className="flex items-center">
                              <div className="w-24 bg-gray-100 rounded-full h-2 mr-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    employee.chargeability >= 80 ? 'bg-green-500' : 
                                    employee.chargeability >= 60 ? 'bg-yellow-500' : 
                                    'bg-red-500'
                                  }`} 
                                  style={{ width: `${employee.chargeability}%` }}
                                />
                              </div>
                              <span className={`text-sm font-medium ${
                                employee.chargeability >= 80 ? 'text-green-600' : 
                                employee.chargeability >= 60 ? 'text-yellow-600' : 
                                'text-red-600'
                              }`}>{employee.chargeability}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 text-blue-500 mr-1.5" />
                              <span className="text-sm text-gray-700">{employee.activeProjects} active</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden xl:table-cell">
                            <div className="flex items-center">
                              <Book className="h-4 w-4 text-emerald-500 mr-1.5" />
                              <span className="text-sm text-gray-700">{employee.skills.length} skills</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => handleEmployeeSelect(employee)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Employee Detail View */
          <div className="p-5 md:p-6 pb-24 max-w-6xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={() => setSelectedEmployee(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-6 mt-8 lg:mt-0 ml-10 lg:ml-0"
            >
              <ChevronDown className="h-4 w-4 transform -rotate-90 mr-1" />
              <span>Back to Dashboard</span>
            </button>
            
            {/* Employee Card */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
                  <img
                    src={selectedEmployee.image}
                    alt={selectedEmployee.name}
                    className="h-36 w-36 rounded-full object-cover border-4 border-white shadow"
                  />
                  <h2 className="mt-4 text-xl font-bold text-gray-900">{selectedEmployee.name}</h2>
                  <p className="text-gray-600">{selectedEmployee.role}</p>
                </div>
                <div className="md:w-3/4 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Department</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedEmployee.department}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Level</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedEmployee.level}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Team</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedEmployee.team}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Manager</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedEmployee.manager}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Join Date</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedEmployee.joinDate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Location</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedEmployee.location}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="mt-1 text-sm text-gray-900 truncate">{selectedEmployee.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedEmployee.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-6 bg-white rounded-lg shadow">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Availability Status</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
                  <div className="flex items-center">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      selectedEmployee.availability.status === 'Fully Staffed' 
                        ? 'bg-green-100' 
                        : selectedEmployee.availability.status === 'Partially Staffed'
                        ? 'bg-yellow-100'
                        : 'bg-blue-100'
                    }`}>
                      <User className={`h-5 w-5 ${
                        selectedEmployee.availability.status === 'Fully Staffed' 
                          ? 'text-green-700' 
                          : selectedEmployee.availability.status === 'Partially Staffed'
                          ? 'text-yellow-700'
                          : 'text-blue-700'
                      }`} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Current Status</p>
                      <p className="text-sm text-gray-600">{selectedEmployee.availability.status}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Last on Bench</p>
                    <p className="text-sm text-gray-600">{selectedEmployee.availability.lastBenchDate}</p>
                  </div>
                  <div className="md:w-1/3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-900">Total Chargeability</p>
                      <p className="text-sm font-bold text-gray-900">{selectedEmployee.availability.chargeability}%</p>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          selectedEmployee.availability.chargeability >= 80 
                            ? 'bg-green-600' 
                            : selectedEmployee.availability.chargeability >= 60 
                            ? 'bg-yellow-500' 
                            : 'bg-red-500'
                        }`} 
                        style={{ width: `${selectedEmployee.availability.chargeability}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 bg-white rounded-lg shadow">
              <div className="border-b border-gray-200">
                <div className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveTab('projects')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === 'projects'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Briefcase size={16} />
                    <span>Projects</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('certifications')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === 'certifications'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Award size={16} />
                    <span>Certifications</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('skills')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === 'skills'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <ArrowUpCircle size={16} />
                    <span>Skills</span>
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {/* Projects Tab */}
                {activeTab === 'projects' && (
                  <div>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedEmployee.projects.map((project) => (
                        <div 
                          key={project.id} 
                          className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex-1">
                              <div className="flex items-center">
                                <h4 className="text-lg font-medium text-gray-900">{project.name}</h4>
                                <span 
                                  className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    project.status === 'Active' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-gray-100 text-gray-800'
                                  }`}
                                >
                                  {project.status}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">Client: {project.client}</p>
                              <div className="mt-2 flex items-center">
                                <Calendar size={14} className="text-gray-400" />
                                <span className="ml-1.5 text-sm text-gray-500">{project.timeline}</span>
                              </div>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 flex items-center">
                              <div className="md:w-32">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-500">Chargeability</span>
                                  <span className="text-sm font-medium text-gray-900">{project.chargeability}%</span>
                                </div>
                                <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      project.chargeability >= 80 
                                        ? 'bg-green-600' 
                                        : project.chargeability >= 60 
                                        ? 'bg-yellow-500' 
                                        : 'bg-red-500'
                                    }`} 
                                    style={{ width: `${project.chargeability}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications Tab */}
                {activeTab === 'certifications' && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedEmployee.certifications.map((certification) => (
                        <div 
                          key={certification.id} 
                          className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow p-4 flex"
                        >
                          <div className="flex-shrink-0 mr-4">
                            <img 
                              src={certification.logo} 
                              alt={certification.issuer} 
                              className="h-12 w-12 object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-md font-medium text-gray-900">{certification.name}</h4>
                            <p className="mt-1 text-sm text-gray-500">Issuer: {certification.issuer}</p>
                            <div className="mt-2 flex items-center space-x-4">
                              <span className="text-xs text-gray-500 flex items-center">
                                <CheckCircle size={12} className="mr-1 text-green-500" />
                                Earned: {certification.dateEarned}
                              </span>
                              <span className="text-xs text-gray-500 flex items-center">
                                <AlertCircle size={12} className="mr-1 text-yellow-500" />
                                Valid until: {certification.validUntil}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === 'skills' && (
                  <div>
                    {Object.entries(skillsByCategory).map(([category, skills]) => (
                      <div key={category} className="mb-6">
                        <h4 className="text-md font-medium text-gray-900 mb-3">{category}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {skills.map((skill) => (
                            <div 
                              key={skill.id} 
                              className="border rounded-md p-3 flex items-center justify-between"
                            >
                              <span className="text-sm text-gray-900">{skill.name}</span>
                              <span 
                                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${skillLevelColors[skill.level]}`}
                              >
                                <span className="mr-1">{skillLevelIcons[skill.level]}</span>
                                {skill.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div> {/* OUTER DIV END */}
  );
};

export default EmployeeDashboard;

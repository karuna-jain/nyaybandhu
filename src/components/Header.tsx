import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Search, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('nav.services', 'Services'), path: '/services' },
    { name: t('nav.resources', 'Resources'), path: '/resources' },
    { name: t('nav.library', 'Library'), path: '/library' },
    { name: t('nav.cases', 'Case Histories'), path: '/cases' },
    { name: t('nav.news', 'News'), path: '/news' },
    { name: t('nav.contact', 'Contact Us'), path: '/contact' },
    { name: t('nav.community', 'Community Chat'), path: '/community-chat' },
  ];
  
  const aboutUsItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Department', path: '/about/department' },
    { name: 'History', path: '/about/history' },
    { name: 'Vision and Mission', path: '/about/VisionMission' },
    // { name: 'Functions of Department', path: '/about/functionofDepartments' },
    // { name: 'Organization Chart', path: '/about/organization' },
    // { name: 'Administrative Setup', path: '/about/admin' },
    // { name: "Who's Who", path: '/about/whos-who' },
    // { name: 'Monthly Achievements', path: '/about/achievements' },
    // { name: "Citizens' Charter", path: '/about/charter' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      {/* Top bar with India flag colors */}
      <div className="h-1.5 w-full tricolor-gradient"></div>

      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center mr-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-12 overflow-hidden">
              <img
                src="/lovable-uploads/ashoka-chakra.svg"
                alt="Ashoka Chakra"
                className="h-full w-full object-contain rotating-wheel"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-india-blue">NYAYBANDHU</h1>
              <p className="text-[10px] text-muted-foreground">The Legal Assistant</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 justify-between flex-1">
          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`nav-link text-sm ${location.pathname === '/' ? 'active' : ''}`}
            >
              {t('nav.home', 'Home')}
            </Link>

            {/* About Us Dropdown - Enhanced */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`nav-link text-sm flex items-center ${location.pathname.startsWith('/about') ? 'active font-medium text-india-blue' : ''}`}>
                  About Us <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 bg-white shadow-lg border border-india-blue/10">
                {aboutUsItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild className="focus:bg-india-blue/5">
                    <Link to={item.path} className={`w-full px-4 py-2 hover:bg-india-blue/5 ${location.pathname === item.path ? 'text-india-blue font-medium' : ''}`}>
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other navigation items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link text-sm ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <select 
              className="bg-transparent border border-india-blue/20 rounded p-1 text-sm outline-none cursor-pointer hover:bg-india-blue/5 text-india-blue font-medium"
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-india-blue/10"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {isSearchOpen && (
              <div className="absolute right-4 top-16 w-72 p-4 rounded-md bg-background shadow-md border animate-fade-in">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Search..."
                    className="flex-1"
                    autoFocus
                  />
                  <Button size="sm" className="bg-india-blue hover:bg-india-blue/90">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Navigation - Improved */}
        <div className="flex flex-1 items-center justify-end lg:hidden space-x-2">
          <select 
            className="bg-transparent border border-india-blue/20 rounded p-1 text-sm outline-none cursor-pointer hover:bg-india-blue/5 text-india-blue font-medium"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </select>
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:bg-india-blue/10">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:bg-india-blue/10">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
              <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg animate-slide-in-right" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative h-8 w-8 overflow-hidden">
                      <img
                        src="/lovable-uploads/ashoka-chakra.svg"
                        alt="Ashoka Chakra"
                        className="h-full w-full object-contain rotating-wheel"
                      />
                    </div>
                    <span className="text-lg font-bold">NYAYBANDHU</span>
                  </Link>

                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>

                <nav className="mt-6">
                  <Link
                    to="/"
                    className={`block py-2 text-base ${location.pathname === '/' ? 'font-medium text-india-blue' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Mobile About Us with enhanced submenu */}
                  <div className="py-2">
                    <div className="text-base font-medium text-india-blue">About Us</div>
                    <div className="pl-4 mt-1 border-l-2 border-india-blue/20 space-y-1">
                      {aboutUsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block py-1.5 text-sm hover:text-india-blue transition-colors ${location.pathname === item.path ? 'text-india-blue font-medium' : ''}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block py-2 text-base hover:text-india-blue transition-colors ${location.pathname === item.path ? 'font-medium text-india-blue' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

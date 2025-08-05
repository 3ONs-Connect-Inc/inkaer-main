import Button from '@/components/ui/button';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => (
  <div className="text-center mb-8">
    <h1 className="section-title mb-4">
      Engineering Projects
    </h1>
    <p className="section-subtitle max-w-3xl mx-auto">
      Explore our collection of engineering challenges and portfolio projects.
    </p>
    <div className="flex justify-center mt-8">
      <div className="flex flex-col xs:flex-row bg-white rounded-lg p-1 shadow-md">
        {['all', 'challenges', 'portfolio'].map(tab => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab(tab)}
            className={`${activeTab === tab ? 'text-[10px] xs:text-xs text-center font-semibold transition-all duration-200 bg-blue-500 hover:bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}  font-sora sm:px-6 px-3 py-2`}
          >
            {tab === 'all' ? 'All Projects' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  </div>
);

export default Header;

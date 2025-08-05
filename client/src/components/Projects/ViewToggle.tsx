import Button from '@/components/ui/button';
import { Grid3X3, List } from 'lucide-react';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const ViewToggle = ({ viewMode, setViewMode }: ViewToggleProps) => (
  <div className="flex justify-end mb-6">
    <div className="flex bg-white rounded-lg p-1 border border-gray-200">
      {[
        { type: 'grid', icon: <Grid3X3 className="w-4 h-4 mr-2" /> },
        { type: 'list', icon: <List className="w-4 h-4 mr-2" /> }
      ].map(({ type, icon }) => (
        <Button
          key={type}
          variant={viewMode === type ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setViewMode(type as 'grid' | 'list')}
          className={`${viewMode === type ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'} text-[10px] xs:text-xs font-sora`}
        >
          {icon}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  </div>
);

export default ViewToggle;

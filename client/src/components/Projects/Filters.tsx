import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FiltersProps {
  selectedDomain: string;
  setSelectedDomain: (v: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (v: string) => void;
  selectedSubdomain: string;
  setSelectedSubdomain: (v: string) => void;
  selectedTags: string;
  setSelectedTags: (v: string) => void;
}

const Filters = ({
  selectedDomain,
  setSelectedDomain,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedSubdomain,
  setSelectedSubdomain,
  selectedTags,
  setSelectedTags
}: FiltersProps) => (
  <div className="grid md:grid-cols-4 gap-4 mb-8">
    {[
      {
        label: 'Engineering Domain',
        value: selectedDomain,
        setValue: setSelectedDomain,
        options: ['all', 'mechanical', 'software', 'civil']
      },
      {
        label: 'Difficulty',
        value: selectedDifficulty,
        setValue: setSelectedDifficulty,
        options: ['all', 'Beginner', 'Intermediate', 'Advanced', 'Elite']
      },
      {
        label: 'Subdomain',
        value: selectedSubdomain,
        setValue: setSelectedSubdomain,
        options: ['all', '3d-design', 'simulation', 'analysis']
      },
      {
        label: 'Tags',
        value: selectedTags,
        setValue: setSelectedTags,
        options: ['all', 'CAD Design', 'Simulation', 'Prototyping', 'Manufacturing', 'Assembly',
    'Analysis', 'Testing', 'Optimization', 'Materials', 'Thermal',
    'Structural', 'Mechanical', 'Innovation', 'Automation', 'Robotics',
    'Product Design', 'Research', 'Development', 'Engineering']
      }
    ].map(({ label, value, setValue, options }, i) => (
      <div key={i}>
        <label className="block text-[10px] sm:text-xs font-sora font-medium text-gray-700 mb-2">
          {label}</label>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-full bg-white border-gray-200 text-small text-gray-600">
            <SelectValue placeholder={`All ${label}`} />
          </SelectTrigger>
          <SelectContent className="bg-white border-gray-200 z-50">
            {options.map(option => (
              <SelectItem key={option} value={option} className="text-small text-gray-600 capitalize">
                {option === 'all' ? `All ${label}` : option.replace('-', ' ')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    ))}
  </div>
);

export default Filters;

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { engineeringDomains } from "@/constants";

interface EngineeringDropdownProps {
  selectedDomain: string;
  setSelectedDomain: (domain: string) => void;
}

const EngineeringDropdown: React.FC<EngineeringDropdownProps> = ({
  selectedDomain,
  setSelectedDomain,
}) => {
  return (
    <div className="max-w-md mx-auto mt-4">
      <Select value={selectedDomain} onValueChange={setSelectedDomain}>
        <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm border-gray-200 font-sora">
          <SelectValue placeholder="Select Engineering Domain" />
        </SelectTrigger>
        <SelectContent className="bg-white/95 backdrop-blur-md border-gray-200">
          {engineeringDomains.map((domain) => (
            <SelectItem
              key={domain.value}
              value={domain.value}
              disabled={!domain.available}
              className="font-sora"
            >
              <div className="flex items-center justify-between w-full">
                <span>{domain.label}</span>
                {!domain.available && (
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default EngineeringDropdown;

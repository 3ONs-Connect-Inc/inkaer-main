
import { classNames, TAG_OPTIONS } from "@/types";
import { Tag } from "lucide-react";


export default function TagSelect({
  value,
  onChange,
}: {
  value: string[];
  onChange: (tags: string[]) => void;
}) {
  const toggle = (tag: string) => {
    if (value.includes(tag)) onChange(value.filter((t) => t !== tag));
    else onChange([...value, tag]);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {TAG_OPTIONS.map((tag) => {
        const active = value.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            onClick={() => toggle(tag)}
            className={classNames(
              "px-3 py-1 rounded-full text-sm border transition-all",
              active
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            )}
            aria-pressed={active}
          >
            <span className="inline-flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              {tag}
            </span>
          </button>
        );
      })}
    </div>
  );
}

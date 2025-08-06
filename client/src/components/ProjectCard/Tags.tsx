type Props = {
  tags: string[];
};

export const Tags = ({ tags }: Props) => (
  <div className="flex flex-wrap gap-2">
       {tags.slice(0, 3).map((tag, idx) => (
         <span
           key={idx}
           className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] xs:text-xs font-sora font-medium rounded-full"
         >
           {tag}
         </span>
       ))}
     </div>
);

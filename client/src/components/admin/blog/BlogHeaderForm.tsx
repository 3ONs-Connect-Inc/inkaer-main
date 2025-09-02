
import { useState } from "react";
import { Settings } from "lucide-react";
import { AdminTable, type Column } from "@/components/admin/AdminTable";
import type { BlogHeader } from "@/types";


export default function BlogHeaderForm({
  header,
  setHeader,
}: {
  header: BlogHeader;
  setHeader: (h: BlogHeader) => void;
}) {
  const [headerDraft, setHeaderDraft] = useState<BlogHeader>(header);

  type HeaderRow = BlogHeader;
  const headerCols: Column<HeaderRow>[] = [
    { header: "Hero Title", accessor: "heroTitle", className: "w-[220px]" },
    { header: "Hero Subtitle", accessor: "heroSubtitle", className: "w-[360px]" },
    { header: "Hero Badge", accessor: "heroBadge", className: "w-[140px]" },
    { header: "Latest Title", accessor: "latestTitle", className: "w-[180px]" },
    { header: "Latest Subtitle", accessor: "latestSubtitle", className: "w-[300px]" },
  ];

  return (
    <div className="card mb-8">
      <div className="card-header flex items-center justify-between">
        <p className="card-title flex items-center gap-2">
          <Settings className="w-4 h-4" /> Header / Sections
        </p>
      </div>
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setHeader(headerDraft);
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Hero Badge</label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              value={headerDraft.heroBadge}
              onChange={(e) =>
                setHeaderDraft({ ...headerDraft, heroBadge: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Hero Title</label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              value={headerDraft.heroTitle}
              onChange={(e) =>
                setHeaderDraft({ ...headerDraft, heroTitle: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Hero Subtitle</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2"
              rows={2}
              value={headerDraft.heroSubtitle}
              onChange={(e) =>
                setHeaderDraft({ ...headerDraft, heroSubtitle: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Latest Title</label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              value={headerDraft.latestTitle}
              onChange={(e) =>
                setHeaderDraft({ ...headerDraft, latestTitle: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Latest Subtitle</label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              value={headerDraft.latestSubtitle}
              onChange={(e) =>
                setHeaderDraft({ ...headerDraft, latestSubtitle: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-2 flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border"
              onClick={() => setHeaderDraft(header)}
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white"
            >
              Save Header
            </button>
          </div>
        </form>
      </div>
      <div className="card-body pt-0">
        <AdminTable title="Blog Header" data={[header]} columns={headerCols} />
      </div>
    </div>
  );
}

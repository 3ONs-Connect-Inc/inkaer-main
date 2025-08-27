import { useState } from "react";
import { Eye, Download } from "lucide-react";
import { useShortlistRequests, type ShortlistRequest } from "@/components/admin/hooks/useShortlistRequests";
import { AdminTable, type Column } from "@/components/admin/tables/AdminTable";
import { format } from "date-fns";
import Modal from "@/components/admin/ui/Modal";
import { PageLoader } from "@/components/ui/Spinner";

export default function ShortlistRequests() {
  const { data: requests = [], isLoading, isError } = useShortlistRequests();
  const [selectedRequest, setSelectedRequest] = useState<ShortlistRequest | null>(null);

  if (isLoading) return <PageLoader />;
  if (isError) return <p>Failed to load shortlist requests.</p>;

  // 🔹 Export emails as CSV
  const handleExportEmails = () => {
    if (requests.length === 0) return;

    const emails = requests.map((r) => r.email).join("\n");
    const csvContent = "data:text/csv;charset=utf-8,Email\n" + emails;
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "shortlist_emails.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns: Column<ShortlistRequest>[] = [
    { header: "Name", accessor: "name", className: "max-w-[200px] truncate" },
    { header: "Email", accessor: "email", className: "max-w-[200px] truncate" },
    { header: "Company", accessor: "company", className: "max-w-[200px] truncate" },
    { header: "Role Title", accessor: "roleTitle", className: "max-w-[200px] truncate" },
    { header: "Industry", accessor: "industry", className: "max-w-[200px] truncate" },
    { header: "Location", accessor: "location", className: "max-w-[200px] truncate" },
    { header: "Urgency", accessor: "urgency", className: "max-w-[150px] truncate" },
    {
      header: "Date",
      render: (item) => (
        <span className="max-w-[200px] truncate block">
          {format(item.createdAt.toDate(), "PPpp")}
        </span>
      ),
    },
    {
      header: "Actions",
      render: (item) => (
        <button
          onClick={() => setSelectedRequest(item)}
          className="p-2 text-blue-600 hover:text-blue-800"
        >
          <Eye size={18} />
        </button>
      ),
    },
  ];

  return (
    <>
      {/* 🔹 Top bar with Export button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">All Shortlist Requests</h1>
        <button
          onClick={handleExportEmails}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Download size={18} /> Export Emails
        </button>
      </div>

      <AdminTable<ShortlistRequest>
        title=""
        data={requests}
        columns={columns}
        rowKey={(item) => item.id}
      />

      {/* 🔹 Modal for request details */}
      <Modal
        isOpen={!!selectedRequest}
        onClose={() => setSelectedRequest(null)}
        title="Shortlist Request Details"
      >
        {selectedRequest && (
          <div className="space-y-2">
            <p><strong>Name:</strong> {selectedRequest.name}</p>
            <p><strong>Email:</strong> {selectedRequest.email}</p>
            <p><strong>Company:</strong> {selectedRequest.company}</p>
            <p><strong>Role Title:</strong> {selectedRequest.roleTitle}</p>
            <p><strong>Industry:</strong> {selectedRequest.industry}</p>
            <p><strong>Location:</strong> {selectedRequest.location}</p>
            <p><strong>Tools:</strong> {selectedRequest.tools}</p>
            <p><strong>Urgency:</strong> {selectedRequest.urgency}</p>
            <p>
              <strong>Date:</strong>{" "}
              {format(selectedRequest.createdAt.toDate(), "PPpp")}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}

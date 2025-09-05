import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { ApplicationSchema, useSubmitApplication } from "@/hooks/useApplications";
import type z from "zod";

interface Props {
  jobId: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume: File | null;
  agreedToTerms: boolean;
}

const ApplicationForm: React.FC<Props> = ({ jobId }) => {
  const { mutate, isPending } = useSubmitApplication(jobId);

  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // validate a single field dynamically
const validateField = (field: keyof FormState, value: any) => {
  // get the schema for just one field
  const singleFieldSchema = ApplicationSchema.shape[field] as z.ZodTypeAny;
  const result = singleFieldSchema.safeParse(value);

  setErrors((prev) => ({
    ...prev,
    [field]: result.success ? "" : result.error.errors[0].message,
  }));
};



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof FormState, value);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    validateField("resume", file);
  };

  const handleCheckbox = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreedToTerms: checked }));
    validateField("agreedToTerms", checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = ApplicationSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.errors.forEach((err) => {
        const path = err.path[0] as string;
        fieldErrors[path] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    mutate(parsed.data, {
      onSuccess: () => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          coverLetter: "",
          resume: null,
          agreedToTerms: false,
        });
        setErrors({});
        if (fileInputRef.current) fileInputRef.current.value = ""; // clear file input
      },
    });
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <User className="w-5 h-5 text-blue-600" />
          Application Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Names */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>First Name *</Label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div>
              <Label>Last Name *</Label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <Label>Email *</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label>Phone</Label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Resume */}
          <div>
            <Label>Resume *</Label>
            <Input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
            />
            {errors.resume && (
              <p className="text-sm text-red-500">{errors.resume}</p>
            )}
          </div>

          {/* Cover Letter */}
          <div>
            <Label>Cover Letter</Label>
            <Textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              checked={formData.agreedToTerms}
              onCheckedChange={handleCheckbox}
            />
            <Label htmlFor="terms">I agree to Terms and Privacy Policy *</Label>
          </div>
          {errors.agreedToTerms && (
            <p className="text-sm text-red-500">{errors.agreedToTerms}</p>
          )}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </CardContent>
    </>
  );
};

export default ApplicationForm;

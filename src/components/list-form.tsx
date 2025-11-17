"use client";

import MultiSelectDropdown from "./MultiSelectDropdown";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ListForm() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-200">

        <CardHeader className="text-center pb-0">
          <CardTitle className="text-xl font-semibold text-gray-900">
            Pilih Menu
          </CardTitle>
        </CardHeader>

        <CardContent className="px-5 py-6 space-y-4">

          {/* PILIH MENU */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-gray-800 text-sm font-medium">Menu</Label>
            <MultiSelectDropdown />
          </div>

          {/* NOTES */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-gray-800 text-sm font-medium">Notes</Label>
            <textarea
              placeholder="Tulis notes…"
              className="border border-gray-300 rounded-lg p-3 bg-gray-50 
              h-24 resize-none focus:ring-2 focus:ring-black focus:outline-none text-sm"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <Button className="w-full h-10 text-sm font-medium bg-black hover:bg-gray-800 rounded-lg text-white">
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

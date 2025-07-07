'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Edit } from "lucide-react";
import { useState } from "react";
import type { workEntry } from "@/app/lib/definitions";

interface EditEntryButtonProps {
    entry: workEntry;
}

export default function EditEntryButton({ entry }: EditEntryButtonProps) {
    const [description, setDescription] = useState(entry.description);
    const [hoursWorked, setHoursWorked] = useState(entry.hours_worked);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Edit className="text-blue-500 hover:text-blue-700 cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Entry ID: {entry.id}</DialogTitle>
                    <DialogDescription>
                        Update the details of your work entry.
                    </DialogDescription>
                </DialogHeader>

                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border rounded-md p-2"
                    />
                    <input
                        type="number"
                        name="hours_worked"
                        placeholder="Hours Worked"
                        value={hoursWorked}
                        onChange={(e) => setHoursWorked(Number(e.target.value))}
                        className="border rounded-md p-2"
                    />
                    {/* Add a submit button later */}
                    
                </form>
            </DialogContent>
        </Dialog>
    );
}

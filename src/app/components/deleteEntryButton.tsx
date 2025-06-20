'use client';
import { useState } from 'react';
import { Delete } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface DeleteEntryButtonProps {
    entry_id: number;
}

export default function DeleteEntryButton({ entry_id }: DeleteEntryButtonProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();
    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            const res = await fetch('/api/workentry', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ entry_id }),
            });
            if (!res.ok) {
                throw new Error(`Failed to delete entry ${entry_id}`);
            }
            console.log(`Entry with ID ${entry_id} deleted`);


            // Optionally trigger a refresh or re-fetch entries
            router.refresh();
        } catch (error) {
            console.error(`Failed to delete entry ${entry_id}:`, error);
        } finally {
            setIsDeleting(false);

        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="disabled:opacity-50"
        >
            <Delete className="text-red-600 hover:text-red-700" />
        </button>
    );
}

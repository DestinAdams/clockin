'use client';
import { Delete } from 'lucide-react';
import { deleteWorkEntry } from '../lib/data';

//this is used to give the function its entry_id, the props(Properties) are passed from the parent component into the function so we know what entry_id or entry we're deleting
interface DeleteEntryButtonProps {
    entry_id: number;
}

export default function DeleteEntryButton({ entry_id }: DeleteEntryButtonProps) {


    return (
        <button
            onClick={() => {
            //     deleteWorkEntry(entry_id);


            }}>

            <Delete className="text-red-600 hover:text-red-700" />
        </button>
    );
}

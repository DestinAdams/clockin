import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function HelpPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
                    Help Directory
                </h1>
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do I clock in?</AccordionTrigger>
                        <AccordionContent>
                            Go to the "Clock In" page from the left sidebar. Click the "Clock In" button when you're ready to start your shift. You'll see a confirmation once your time is recorded.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>How do I clock out?</AccordionTrigger>
                        <AccordionContent>
                            When you're done with work, go back to the "Clock Out" page and click the "Clock Out" button. Your total hours for the day will be automatically calculated.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Where can I see my hours?</AccordionTrigger>
                        <AccordionContent>
                            Navigate to the "View Hours" section in the sidebar. There, you can see a list of your past entries, including clock-in and clock-out times and total hours worked.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>How do I manually add or fix hours?</AccordionTrigger>
                        <AccordionContent>
                            If you forgot to clock in or out, head to the "Add Hours" page. Fill in the date, start time, and end time to manually submit your hours for review.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>Who can see my logged hours?</AccordionTrigger>
                        <AccordionContent>
                            Only you and your manager (or admin) can view your submitted hours. Managers may review, edit, or approve entries if needed.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

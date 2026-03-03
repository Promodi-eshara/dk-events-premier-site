import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import upcomingEvent from "@/assets/upcoming-event.png";

const EventPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl p-0 border-0 bg-transparent shadow-none [&>button]:hidden">
        <div className="relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute -top-3 -right-3 z-10 bg-primary text-primary-foreground rounded-full p-1.5 hover:bg-primary/80 transition-colors shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={upcomingEvent}
            alt="Upcoming DK Events"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventPopup;

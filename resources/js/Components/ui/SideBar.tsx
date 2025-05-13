// Add this to your imports if needed
import { Ban } from "lucide-react"; // or another appropriate icon

// Add this to your sidebar navigation items array
{
  name: "Email Blacklist",
  href: route("admin.email-blacklist.index"),
  icon: Ban,
  current: route().current("admin.email-blacklist.*"),
},
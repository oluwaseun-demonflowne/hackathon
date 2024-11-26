import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Award,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F5F4E2] px-4 md:px-20 text-[#3c3b3a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Wellspring University Hackathon
            </h3>
            <p className="text-sm">
              Join us for an exhilarating 48-hour coding marathon where
              innovation meets collaboration. Solve real-world problems, learn
              new skills, and compete for amazing prizes!
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-[#6B705C] hover:text-[#3c3b3a] transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-[#6B705C] hover:text-[#3c3b3a] transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-[#6B705C] hover:text-[#3c3b3a] transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-[#6B705C] hover:text-[#3c3b3a] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-[#6B705C] hover:text-[#3c3b3a] transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Event Details</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-[#6B705C]" />
                <span>August 15-17, 2023</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#6B705C]" />
                <span>Wellspring University Campus, Innovation Center</span>
              </li>
              <li className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#6B705C]" />
                <span>300+ Participants Expected</span>
              </li>
              <li className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#6B705C]" />
                <span>300,000 Total Prize Pool</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-[#6B705C]" />
                <span>48 Hours of Intense Coding</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-[#6B705C]" />
                  Benefits of the hackathon
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-[#6B705C]" />
                  Video
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-[#6B705C]" />
                  Why the hackathon
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-[#6B705C]" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-[#6B705C]" />
                  Timeline
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#6B705C]" />
                <a
                  href="mailto:hackathon@wellspring.edu"
                  className="hover:underline"
                >
                  hackathon@wellspring.edu
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#6B705C]" />
                <a href="tel:+15551234567" className="hover:underline">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-[#6B705C] mt-1" />
                <span>
                L.G.A, Irhirhi Rd, off Airport Road, Oka, Benin City 300102, Edo
                </span>
              </li>
            </ul>
            <div className="pt-4">
              <Link
                href="/register"
                className="bg-[#6B705C] text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-[#3c3b3a] transition-colors"
              >
                Register Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#A5A58D]">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Wellspring University Hackathon. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="#" className="text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { About } from "@/components/about";
import { Certificates } from "@/components/certificates";
import { ContactForm } from "@/components/contact-section";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navBar";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";

export function LandingPage() {
	return (
		<div className="text-white">
			<Navbar />
			<Hero />
			<About />
			<Certificates />
			{/* <Skills /> */}
			<Projects />
			<Services />
			<ContactForm />
			<Footer />
		</div>
	);
}

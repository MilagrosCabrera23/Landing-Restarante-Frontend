import Link from "next/link";
import { SocialLink } from "../ui/socialLinks";

export default function Footer() {
	return (
		<footer className="w-full bg-white border-t border-gray-100 py-6 px-6">
			<div className="mx-auto max-w-7xl">

				<div className="flex flex-col md:flex-row justify-evenly items-center gap-8 ">
					<Link href="/" className="text-luxury-gold font-serif italic text-2xl text-start">Restaurante Gourmet</Link>
					<div className="">
					<p className="text-luxury-charcoal text-xs font-sans tracking-widest uppercase max-w-md mx-auto"> © {new Date().getFullYear()} Restaurante Gourmet. Todos los derechos reservados.</p>
				</div>

				<div className="flex justify-center ">
					<SocialLink href="https://www.instagram.com" icon="instagram" />
					<SocialLink href="https://www.facebook.com" icon="facebook" />
					<SocialLink href="https://wa.me/12345678" icon="whatsapp" />
				</div>
				</div>
			</div>
	</footer>
	)
}	
import Link from "next/link";
import { SocialLink } from "../ui/socialLinks";

export default function Footer() {
	return (
		<footer className="w-full bg-white py-4 px-6 border-t border-gray-100">
			<div className="mx-auto px-6 text-center space-y-8">

				<div className="flex justify-between">
					<Link href="/" className="text-luxury-gold font-serif italic text-2xl text-start">Restaurante Gourmet</Link>
					<div className="space-y-2">
					<p className="text-luxury-charcoal text-xs font-sans tracking-widest uppercase max-w-md mx-auto m-2"> © {new Date().getFullYear()} Restaurante Gourmet. Todos los derechos reservados.</p>
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
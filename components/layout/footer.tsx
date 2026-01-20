import Link from "next/link";
import { SocialLink} from "../ui/socialLinks";
import { FooterData } from "@/types/footer";
import dataFooter from "@/data/footer.json";

export default function Footer() {
	
	const { logo, copyright, redesSociales } = dataFooter as FooterData;
	
	return (
		<footer className="w-full bg-white border-t border-gray-100 py-10 px-8">
			<div className="mx-auto max-w-6xl">

				<div className="flex flex-col md:flex-row justify-evenly items-center gap-16 ">
					<Link href="/" className="text-luxury-gold font-serif italic text-2xl text-start">{logo}</Link>
					<div className="">
					<p className="text-luxury-charcoal text-xs font-sans tracking-[0.3em] uppercase max-w-md mx-auto text-balance"> © {new Date().getFullYear()} {logo}. {copyright}</p>
				</div>

				<div className="flex justify-center ">
					{redesSociales.map(({ plataforma, url }) => (
					<SocialLink key={url} href={url} icon={plataforma} />
					))}
				</div>
				</div>
			</div>
	</footer>
	)
}	
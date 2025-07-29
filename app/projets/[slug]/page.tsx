import Image from "next/image";
import { notFound } from "next/navigation";
import { listItems } from "@/lib/projetcs";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaCheckCircle,
} from "react-icons/fa";
import { Metadata } from "next";

// ✅ Typage standard requis par Next.js pour les routes dynamiques
interface ProjectPageProps {

    params: Promise<{ slug: string }>
}


// ✅ Fonction SEO dynamique (metadata)
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;

    const project = listItems.find((p) => p.slug === slug);

    if (!project) return {
        title: "Projet introuvable | Électricien à Toulon",
        description: "Ce projet n'existe pas ou a été supprimé.",
    };

    return {
        title: `${project.title} | Projet électrique à Toulon`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Projet électrique à Toulon`,
            description: project.description,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
}

// ✅ Composant server-side : pas de "use client"
export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = listItems.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <section className="w-full py-16 bg-white px-8 md:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:max-w-[1300px] xl:mx-auto">
                {/* Left content */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={600}
                        className="w-full rounded-md object-cover h-[500px]"
                    />

                    <div>
                        <h2 className="text-[32px] font-bold text-[#1b1e3f] mb-4">{project.title}</h2>
                        <p className="text-[#2E2937BF] text-[15px] leading-7">{project.description}</p>
                        <p className="text-[#2E2937BF] text-[15px] leading-7 mt-4">
                            Nos clients bénéficient d’un accompagnement personnalisé, de conseils adaptés, et d’une intervention rapide avec garantie.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-8 mt-6">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-[#1b1e3f] mb-4">Entreprise reconnue à Toulon</h3>
                            <ul className="space-y-3 text-[15px] text-[#1b1e3f]">
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#f25000]" />
                                    Intervention rapide et soignée
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#f25000]" />
                                    Mise en conformité NF C 15‑100
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#f25000]" />
                                    Électricien agréé à Toulon & alentours
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right project info */}
                <aside className="bg-[#f7f7f7] p-6 rounded-md shadow-sm h-[max-content]">
                    <h4 className="text-xl font-bold text-[#1b1e3f] border-b border-[#f25000] pb-2 mb-6">
                        Informations du projet
                    </h4>

                    <div className="space-y-4 text-[15px]">
                        <p><strong className="text-[#1b1e3f]">Client :</strong> {project.client}</p>
                        <p><strong className="text-[#1b1e3f]">Coût :</strong> {project.price}</p>
                        <p><strong className="text-[#1b1e3f]">Catégorie :</strong> {project.category}</p>
                        <p><strong className="text-[#1b1e3f]">Date :</strong> {project.date}</p>
                    </div>

                    <div className="flex gap-4 mt-6">
                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                aria-label="Partager sur les réseaux"
                                className="w-10 h-10 rounded-full bg-[#f25000] flex items-center justify-center text-white hover:bg-[#1b1e3f] transition-colors"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}

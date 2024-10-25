import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Credits',
};

export default function Page() {
    return (
        <div>
            <h1>Crédits</h1>
            <div>
                <Image src="/nolan.jpg" alt="Nolan Duthil" width={200} height={200} />
                <p>Cet examen est l&apos;oeuvre de Nolan Duthil</p>
            </div>
        </div>
    );
}
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { artList, artSubtitle, viewPath } from './ArtWork';

/**
 * Enquiry page for originals: /enquire/:artworkId
 * Posts to Formspree in the background and shows a thank-you message in place of the form.
 * The endpoint comes from .env (VITE_FORMSPREE_ENDPOINT), so handing over to the client is one line.
 * Place next to ArtWork.tsx and adjust the import above if your folders differ.
 */

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | 'https://formspree.io/f/mbglnjzr';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const labelCls = 'font-body font-semibold text-[1rem] text-[#5B3A29]';
const inputCls = `
    w-full px-4 py-3 rounded-lg
    border border-[#C5C1BA] bg-white
    font-body text-[1rem] text-[#535250]
    focus:outline-none focus:border-[#20422a] focus:ring-1 focus:ring-[#20422a]
`;

export default function EnquiryPage() {
    const { artworkId } = useParams();
    const art = artList.find(a => a.id === artworkId);
    const [status, setStatus] = useState<Status>('idle');

    if (!art) {
        return (
            <section className="bg-[#F8F5EF] px-6 md:px-[7.5rem] py-[7.5rem] flex flex-col gap-4 items-start">
                <h1 className="font-heading font-bold text-[1.5rem] text-[#5B3A29]">
                    Artwork not found
                </h1>
                <Link to="/shop" className="font-heading font-bold text-[#20422a] underline">
                    Back to the shop
                </Link>
            </section>
        );
    }

    const isOffer = art.original.status === 'make-offer';
    const canEnquire = art.original.status === 'available' || isOffer;
    const kind = isOffer ? 'Offer' : 'Enquiry';

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!art) return;
        const data = new FormData(e.currentTarget);

        // Honeypot: real visitors never fill this hidden field, bots do
        if (data.get('_gotcha')) {
            setStatus('sent');
            return;
        }
        if (!ENDPOINT) {
            console.error('VITE_FORMSPREE_ENDPOINT is not set');
            setStatus('error');
            return;
        }

        setStatus('sending');
        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: data.get('name'),
                    email: data.get('email'),
                    country: data.get('country'),
                    message: data.get('message'),
                    artwork: art.title,
                    artworkId: art.id,
                    type: kind,
                    _subject: `${kind}: ${art.title}`,
                }),
            });
            setStatus(res.ok ? 'sent' : 'error');
        } catch {
            setStatus('error');
        }
    }

    return (
        <section className="
            bg-[#F8F5EF]
            px-[1.5rem] md:px-[7.5rem]
            py-[3rem] md:py-[7.5rem]
            flex flex-col lg:flex-row
            items-start justify-center
            gap-[3rem] lg:gap-[4rem]
        ">
            <img
                src={art.img}
                alt={art.title}
                className="w-full lg:w-[24rem] max-h-[32rem] object-cover object-top rounded"
            />

            <div className="flex flex-col gap-[2rem] w-full lg:w-[30rem]">
                <div className="flex flex-col gap-2">
                    <Link to={viewPath(art.id)} className="font-body text-[0.875rem] text-[#20422a] underline">
                        ← Back to artwork
                    </Link>
                    <h1 className="font-heading font-bold text-[1.5rem] leading-tight text-[#5B3A29]">
                        {isOffer ? 'Make an offer' : 'Enquire about the original'}
                    </h1>
                    <p className="font-body text-[1rem] text-[#535250]">
                        {art.title}
                        {artSubtitle(art) && <span className="text-[0.875rem]"> · {artSubtitle(art)}</span>}
                    </p>
                </div>

                {!canEnquire && (
                    <p className="font-body text-[1rem] text-[#535250]">
                        This original isn't open for enquiries.{' '}
                        <Link to={viewPath(art.id)} className="text-[#20422a] underline font-semibold">
                            View the artwork
                        </Link>
                    </p>
                )}

                {canEnquire && status === 'sent' && (
                    <div className="flex flex-col gap-3" role="status">
                        <h2 className="font-heading font-bold text-[1.25rem] text-[#5B3A29]">
                            Thank you, your {kind.toLowerCase()} has been sent
                        </h2>
                        <p className="font-body text-[1rem] text-[#535250] leading-normal">
                            The artist will reply by email to confirm availability. If the piece is still
                            available, you'll be sent a secure payment link for it.
                        </p>
                        <Link to="/shop" className="font-heading font-bold text-[#20422a] underline">
                            Back to the shop
                        </Link>
                    </div>
                )}

                {canEnquire && status !== 'sent' && (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate={false}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className={labelCls}>Name</label>
                            <input id="name" name="name" type="text" required autoComplete="name" className={inputCls} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className={labelCls}>Email</label>
                            <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="country" className={labelCls}>Shipping country</label>
                            <input id="country" name="country" type="text" required autoComplete="country-name" className={inputCls} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className={labelCls}>
                                {isOffer ? 'Your offer and message' : 'Message (optional)'}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required={isOffer}
                                className={inputCls}
                            />
                        </div>

                        {/* Honeypot, hidden from people */}
                        <input
                            type="text"
                            name="_gotcha"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="absolute -left-[9999px] w-px h-px opacity-0"
                        />

                        {status === 'error' && (
                            <p className="font-body text-[1rem] text-[#9b2c2c]" role="alert">
                                Something went wrong and your message wasn't sent. Please try again in a moment.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="
                                px-6 py-4 rounded-lg font-heading font-bold text-center
                                bg-[#20422a] text-[#f8f5ef] hover:bg-[#285836]
                                disabled:bg-[#EEE9E7] disabled:text-[#8a8782] disabled:cursor-not-allowed
                            "
                        >
                            {status === 'sending' ? 'Sending…' : isOffer ? 'Send offer' : 'Send enquiry'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
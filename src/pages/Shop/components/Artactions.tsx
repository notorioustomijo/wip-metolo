import { Link } from 'react-router-dom';
import { enquirePath, formatPrice, viewPath } from './ArtWork';
import type { Art } from './ArtWork';

/**
 * One place that decides which purchase buttons an artwork gets.
 * Used by AllArtworks (compact), Featured and ArtworkDetail.
 * Place next to ArtWork.tsx (components folder).
 */

export interface ArtAction {
    key: 'enquire' | 'offer' | 'physical' | 'digital';
    label: string;
    shortLabel: string;
    href?: string;      // undefined = not wired up yet -> rendered disabled
    internal?: boolean; // true = route inside the site (use <Link>), false = external / mailto
}

export function getActions(art: Art): ArtAction[] {
    const actions: ArtAction[] = [];
    const { status, enquiryUrl } = art.original;

    // Originals go to the site's own enquiry page unless enquiryUrl overrides it
    const enquiryHref = enquiryUrl ?? enquirePath(art.id);
    const enquiryInternal = !enquiryUrl;

    if (status === 'available') {
        actions.push({
            key: 'enquire',
            label: 'Enquire about original',
            shortLabel: 'Enquire',
            href: enquiryHref,
            internal: enquiryInternal,
        });
    }
    if (status === 'make-offer') {
        actions.push({
            key: 'offer',
            label: 'Make an offer',
            shortLabel: 'Make an offer',
            href: enquiryHref,
            internal: enquiryInternal,
        });
    }

    const physical = art.print?.physical;
    const digital = art.print?.digital;
    if (physical) {
        actions.push({
            key: 'physical',
            label: `Buy physical print (${formatPrice(physical.price)})`,
            shortLabel: 'Buy print',
            href: physical.url,
        });
    }
    if (digital) {
        actions.push({
            key: 'digital',
            label: `Buy digital print (${formatPrice(digital.price)})`,
            shortLabel: 'Buy print',
            href: digital.url,
        });
    }
    return actions;
}

const base = `
    px-6 py-4 rounded-lg font-heading font-bold
    text-center flex-1 min-w-[10rem]
`;
const filled = `${base} bg-[#20422a] text-[#f8f5ef] hover:bg-[#285836]`;
const outlined = `${base} bg-[#f8f5ef] text-[#20422a] border border-[#20422a] hover:bg-[#EFECE6]`;
const disabled = `${base} bg-[#EEE9E7] text-[#8a8782] border border-transparent cursor-not-allowed`;

interface Props {
    art: Art;
    /** Grid cards: show only the first purchase action. Print actions go to the detail page to pick a format. */
    compact?: boolean;
    /** Show the "View Details" button (hide it on the detail page itself). */
    showDetails?: boolean;
}

export default function ArtActions({ art, compact = false, showDetails = true }: Props) {
    let actions = getActions(art);
    if (compact) actions = actions.slice(0, 1);

    return (
        <div className="flex flex-wrap gap-3 items-center w-full">
            {actions.map((action, i) => {
                const cls = i === 0 ? filled : outlined;
                const isPrint = action.key === 'physical' || action.key === 'digital';

                // Compact cards send print buyers to the detail page, where the format is chosen
                if (compact && isPrint) {
                    return (
                        <Link key={action.key} to={viewPath(art.id)} className={filled}>
                            {action.shortLabel}
                        </Link>
                    );
                }

                const label = compact ? action.shortLabel : action.label;

                if (!action.href) {
                    return (
                        <span
                            key={action.key}
                            aria-disabled="true"
                            title="Coming soon"
                            className={disabled}
                        >
                            {label} (soon)
                        </span>
                    );
                }

                if (action.internal) {
                    return (
                        <Link key={action.key} to={action.href} className={cls}>
                            {label}
                        </Link>
                    );
                }

                return (
                    <a key={action.key} href={action.href} className={cls}>
                        {label}
                    </a>
                );
            })}

            {showDetails && (
                <Link
                    to={viewPath(art.id)}
                    className={actions.length === 0 ? filled : outlined}
                >
                    View Details
                </Link>
            )}
        </div>
    );
}
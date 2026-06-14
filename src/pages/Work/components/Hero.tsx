import { useEffect, useState } from 'react';
import work00 from '../../../assets/work0 (1).webp';
import work01 from '../../../assets/work0 (2).webp';
import work02 from '../../../assets/work0 (3).webp';
import work03 from '../../../assets/work0 (4).webp';
import workImg from '../../../assets/work-image.webp';
import work1 from '../../../assets/work_1.svg';
import work2 from '../../../assets/work_2.svg';

const ANIMATION_KEY = 'work-hero-played';
const images = [work00, work01, work02, work03, workImg];
const FADE_MS = 150;
const HOLD_MS = 350;

export default function Hero() {
    const hasPlayed = () => !!sessionStorage.getItem(ANIMATION_KEY);

    const [overlayHeight, setOverlayHeight] = useState<string>(() =>
        hasPlayed() ? '10px' : '100%'
    );
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentImg, setCurrentImg] = useState(() =>
        hasPlayed() ? images.length - 1 : 0
    );
    const [imgOpacity, setImgOpacity] = useState(1);
    const [sidesVisible, setSidesVisible] = useState(() => hasPlayed());
    const [sidesSettled, setSidesSettled] = useState(() => hasPlayed());

    useEffect(() => {
        if (hasPlayed()) return;

        // Preload all images first, then start the sequence
        let cancelled = false;
        const timeouts: ReturnType<typeof setTimeout>[] = [];
        const t = (fn: () => void, ms: number) => {
            timeouts.push(setTimeout(fn, ms));
        };

        Promise.all(
            images.map(
                src =>
                    new Promise<void>(resolve => {
                        const img = new Image();
                        img.onload = () => resolve();
                        img.onerror = () => resolve(); // don't block on error
                        img.src = src;
                    })
            )
        ).then(() => {
            if (cancelled) return;

            // Curtain reveal
            t(() => {
                setIsAnimating(true);
                setOverlayHeight('10px');
            }, 200);

            // Image sequence after curtain (200ms start + 800ms duration)
            let offset = 1000;

            for (let i = 1; i < images.length; i++) {
                const nextIndex = i;
                // Fade out
                t(() => setImgOpacity(0), offset);
                // Swap + fade in
                t(() => {
                    setCurrentImg(nextIndex);
                    setImgOpacity(1);
                }, offset + FADE_MS);
                offset += FADE_MS + HOLD_MS;
            }

            // Supporting elements
            t(() => setSidesVisible(true), offset);
            t(() => setSidesSettled(true), offset + 200);
            t(() => sessionStorage.setItem(ANIMATION_KEY, 'true'), offset + 500);
        });

        return () => {
            cancelled = true;
            timeouts.forEach(clearTimeout);
        };
    }, []);

    const sharedTransition = sidesVisible
        ? 'opacity 600ms ease-out, transform 600ms cubic-bezier(0.22, 1, 0.36, 1)'
        : 'none';

    const paraStyle: React.CSSProperties = {
        opacity: sidesVisible ? 1 : 0,
        transform: sidesVisible ? 'translateY(0px)' : 'translateY(40px)',
        transition: sharedTransition,
    };

    const work1Style: React.CSSProperties = {
        opacity: sidesVisible ? 1 : 0,
        transform: sidesSettled
            ? 'translate(0px, 0px)'
            : sidesVisible
            ? 'translate(100px, 0px)'
            : 'translate(100px, 40px)',
        transition: sidesSettled
            ? 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1)'
            : sharedTransition,
    };

    const work2Style: React.CSSProperties = {
        opacity: sidesVisible ? 1 : 0,
        transform: sidesSettled
            ? 'translate(0px, 0px)'
            : sidesVisible
            ? 'translate(-100px, 0px)'
            : 'translate(-100px, 40px)',
        transition: sidesSettled
            ? 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1)'
            : sharedTransition,
    };

    return (
        <section className="
            bg-[#F8F5EF]
            pt-24 lg:pt-[10rem]
            pb-10 lg:pb-[3.5rem]
            flex flex-col items-center gap-10 lg:gap-16
        ">
            <div className="flex items-center justify-center">
                <img
                    src={work1}
                    className="z-20 w-[8rem] sm:w-[12rem] lg:w-[28rem] -mr-4 lg:-mr-5"
                    style={work1Style}
                    fetchPriority="high"
                />

                <div className="relative z-10 w-[9rem] sm:w-[14rem] lg:w-[25rem]">
                    <img
                        src={images[currentImg]}
                        className="w-full block"
                        style={{
                            opacity: imgOpacity,
                            transition: `opacity ${FADE_MS}ms ease-in-out`,
                        }}
                        fetchPriority="high"
                    />
                    <div
                        className="absolute inset-x-0 top-0 bg-[#5B3A29]"
                        style={{
                            height: overlayHeight,
                            transition: isAnimating
                                ? 'height 800ms cubic-bezier(0.76, 0, 0.24, 1)'
                                : 'none',
                        }}
                    />
                </div>

                <img
                    src={work2}
                    className="z-0 w-[6rem] sm:w-[12rem] lg:w-[20rem] -ml-4 lg:-ml-5"
                    style={work2Style}
                    fetchPriority="high"
                />
            </div>

            <p style={paraStyle} className="
                text-[#535250]
                text-[1rem] lg:text-[1.125rem]
                font-body text-center leading-normal
                w-full max-w-xl px-6 lg:px-0
            ">
                From soil to satellites, policy to poetry,
                bridging conservation science, IT, human
                rights and indigenous advocacy through
                research, writing, art and action.
            </p>
        </section>
    );
}
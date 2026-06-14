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

const FADE_MS = 150; // duration of each opacity transition
const HOLD_MS = 300; // how long each image is visible before next swap

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

        const timeouts: ReturnType<typeof setTimeout>[] = [];
        const t = (fn: () => void, ms: number) => {
            const id = setTimeout(fn, ms);
            timeouts.push(id);
            return id;
        };

        // Step 1: curtain reveal
        t(() => {
            setIsAnimating(true);
            setOverlayHeight('10px');
        }, 200);

        // Step 2: run image sequence after curtain (200 + 800ms)
        const CURTAIN_DONE = 1000;

        let offset = CURTAIN_DONE;

        // For each swap (images[0] → images[1] → ... → images[4])
        for (let i = 0; i < images.length - 1; i++) {
            const swapAt = offset;
            const nextIndex = i + 1;

            // Fade out
            t(() => setImgOpacity(0), swapAt);

            // Swap image after fade completes, then fade back in
            t(() => {
                setCurrentImg(nextIndex);
                setImgOpacity(1);
            }, swapAt + FADE_MS);

            // Hold before next swap
            offset += FADE_MS + HOLD_MS;
        }

        // Step 3: show supporting elements after last image lands
        t(() => setSidesVisible(true), offset);
        t(() => setSidesSettled(true), offset + 200);
        t(() => sessionStorage.setItem(ANIMATION_KEY, 'true'), offset + 500);

        return () => timeouts.forEach(clearTimeout);
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
            flex
            flex-col
            items-center
            gap-10 lg:gap-16
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
                        style={{
                            height: overlayHeight,
                            transition: isAnimating
                                ? 'height 800ms cubic-bezier(0.76, 0, 0.24, 1)'
                                : 'none',
                        }}
                        className="absolute inset-x-0 top-0 bg-[#5B3A29]"
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
                font-body
                text-center
                leading-normal
                w-full max-w-xl
                px-6 lg:px-0
            ">
                From soil to satellites, policy to poetry,
                bridging conservation science, IT, human
                rights and indigenous advocacy through
                research, writing, art and action.
            </p>
        </section>
    );
}
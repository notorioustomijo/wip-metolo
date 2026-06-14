import { useEffect, useRef, useState } from 'react';
import work1 from '../../../assets/work_1.svg';
import work2 from '../../../assets/work_2.svg';

const ANIMATION_KEY = 'work-hero-played';

const images = [
  '/work-hero-1.webp',
  '/work-hero-2.webp',
  '/work-hero-3.webp',
  '/work-hero-4.webp',
  '/work-image.webp',
];

const IMAGE_SEQUENCE = [
    { delay: 200, duration: 300 },
    { delay: 0, duration: 300 },
    { delay: 300, duration: 300 },
    { delay: 0, duration: 300 },
];

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

    const activeTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
        if (hasPlayed()) return;

        const timeouts: ReturnType<typeof setTimeout>[] = [];

        // Step 1: curtain reveal
        timeouts.push(setTimeout(() => {
            setIsAnimating(true);
            setOverlayHeight('10px');
        }, 200));

        // Step 2: image sequence after curtain finishes (200 + 800 = 1000ms)
        let elapsed = 1000;

        IMAGE_SEQUENCE.forEach((step, index) => {
            elapsed += step.delay;
            timeouts.push(setTimeout(() => setImgOpacity(0), elapsed));
            elapsed += 50;
            timeouts.push(setTimeout(() => {
                setCurrentImg(index + 1);
                setImgOpacity(1);
            }, elapsed));
            elapsed += (step.duration - 50);
        });

        timeouts.push(setTimeout(() => setSidesVisible(true), elapsed));
        timeouts.push(setTimeout(() => setSidesSettled(true), elapsed + 200));
        timeouts.push(setTimeout(() => {
            sessionStorage.setItem(ANIMATION_KEY, 'true');
        }, elapsed + 500));

        activeTimeouts.current = timeouts;

        return () => {
            activeTimeouts.current.forEach(clearTimeout);
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
            flex
            flex-col
            items-center
            gap-10 lg:gap-16
        ">
            <div className="flex items-center justify-center">
                <img
                    src={work1}
                    className="
                        z-20
                        w-[8rem] sm:w-[12rem] lg:w-[28rem]
                        -mr-4 lg:-mr-5
                    "
                    style={work1Style}
                    fetchPriority="high"
                />

                <div className="relative z-10 w-[9rem] sm:w-[14rem] lg:w-[25rem]">
                    <img
                        src={images[currentImg]}
                        className="w-full block"
                        style={{
                            opacity: imgOpacity,
                            transition: 'opacity 150ms ease-in-out',
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
                    className="
                        z-0
                        w-[6rem] sm:w-[12rem] lg:w-[20rem]
                        -ml-4 lg:-ml-5
                    "
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
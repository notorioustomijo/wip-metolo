import { useEffect, useRef } from 'react';

interface CircularTextButtonProps {
    label: string
    color: string
    url: string
    scrollToId?: string
}

export default function CircularTextButton({ label, color, url, scrollToId }: CircularTextButtonProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const hoveredRef = useRef(false);
    const animRef = useRef<number | undefined>(undefined);

    const characters = label.split("");
    const total = characters.length;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (scrollToId) {
            e.preventDefault();
            document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const W = canvas.width;
        const CX = W / 2;
        const CY = W / 2;

        let angle = 0;
        let radius = 80;
        let speed = 1.2;
        let last: number | null = null;

        const TARGET_RADIUS_IDLE = 80;
        const TARGET_RADIUS_HOVER = 95;
        const TARGET_SPEED_IDLE = 0.5;
        const TARGET_SPEED_HOVER = 0.15;

        function draw() {
            ctx!.clearRect(0, 0, W, W);
            ctx!.save();
            ctx!.translate(CX, CY);
            ctx!.rotate((angle * Math.PI) / 180);
            ctx!.translate(-CX, -CY);

            characters.forEach((char, i) => {
                const charAngle = (i / total) * 360;
                const rad = (charAngle - 90) * (Math.PI / 180);
                const x = CX + radius * Math.cos(rad);
                const y = CY + radius * Math.sin(rad);

                ctx!.save();
                ctx!.translate(x, y);
                ctx!.rotate((charAngle * Math.PI) / 180);
                ctx!.font = "700 14px sans-serif";
                ctx!.fillStyle = color;
                ctx!.textAlign = "center";
                ctx!.textBaseline = "middle";
                ctx!.fillText(char, 0, 0);
                ctx!.restore();
            });

            ctx!.restore();
        }

        function loop(ts: number) {
            if (!last) last = ts;
            const dt = (ts - last) / 1000;
            last = ts;

            const targetR = hoveredRef.current ? TARGET_RADIUS_HOVER : TARGET_RADIUS_IDLE;
            const targetS = hoveredRef.current ? TARGET_SPEED_HOVER : TARGET_SPEED_IDLE;

            radius += (targetR - radius) * 6 * dt;
            speed += (targetS - speed) * 4 * dt;
            angle = (angle + speed) % 360;

            draw();
            animRef.current = requestAnimationFrame(loop);
        }

        animRef.current = requestAnimationFrame(loop);

        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, [color, label]);

    return (
        <a
            href={url}
            onMouseEnter={() => { hoveredRef.current = true; }}
            onMouseLeave={() => { hoveredRef.current = false; }}
            onClick={handleClick}
            className="
                relative
                w-48
                h-48
                flex
                items-center
                justify-center
                group
                cursor-pointer
                no-underline
            "
            rel="noopener noreferrer"
            target={scrollToId ? undefined : '_blank'}
        >
            <canvas
                ref={canvasRef}
                width={192}
                height={192}
                className="absolute inset-0 w-full h-full"
            />

            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
                    w-15
                    h-15
                    group-hover:translate-y-1
                    transition-transform
                    duration-300
                    relative
                "
            >
                <line x1="12" y1="4" x2="12" y2="20" />
                <polyline points="6 14 12 20 18 14" />
            </svg>
        </a>
    );
}
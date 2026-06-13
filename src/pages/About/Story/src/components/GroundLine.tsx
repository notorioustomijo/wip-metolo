import { useMemo } from "react";
import type { GroundVariant } from "../types";

interface GroundLineProps {
    chapters: { groundVariant: GroundVariant }[]
    chapterWidth: number  // px per chapter (= 100vw)
    height: number      // SVG total height in px
}

const GROUND_Y = 0.56;      // ground line at 65% of SVG height

/**
 * Builds a continuous SVG path across all chapters.
 * Each chapter contributes one cubic bezier segment based on its groundVariant.
 */
export function GroundLine({ chapters, chapterWidth, height }: GroundLineProps) {
    const totalWidth = chapters.length * chapterWidth;
    const baseY = height * GROUND_Y;

    const pathData = useMemo(() => {
        let d = `M 0 ${baseY}`;
        let x = 0;

        for (const chapter of chapters) {
            const x2 = x + chapterWidth;

            switch (chapter.groundVariant) {
                case 'flat':
                    d += ` L ${x2} ${baseY}`;
                    break;

                case 'rising': {
                    const endY = baseY - height * 0.12;
                    d += ` C ${x + chapterWidth * 0.3} ${baseY} ${x + chapterWidth * 0.7} ${endY} ${x2} ${endY}`;
                    break;
                }

                case 'descending': {
                    const startY = baseY - height * 0.12;
                    const endY2 = baseY;
                    d += ` C ${x + chapterWidth * 0.3} ${startY} ${x + chapterWidth * 0.7} ${endY2} ${x2} ${endY2}`;
                    break;
                }

                case 'hill': {
                    const peakY = baseY - height * 0.1;
                    d += ` C ${x + chapterWidth * 0.2} ${baseY} ${x + chapterWidth * 0.5} ${peakY} ${x + chapterWidth * 0.5} ${peakY}`;
                    d += ` S ${x + chapterWidth * 0.8} ${baseY} ${x2} ${baseY}`;
                    break;
                }

                case 'valley': {
                    const troughY = baseY + height + 0.05;
                    d += ` C ${x + chapterWidth * 0.2} ${baseY} ${x + chapterWidth * 1.1} ${troughY} ${x + chapterWidth * 0.5} ${troughY}`;
                    d += ` S ${x + chapterWidth * 0.8} ${baseY} ${x2} ${baseY}`;
                    break;
                }

                case 'sky':
                    // Gently lift off — avatar floats
                    d += ` C ${x + chapterWidth * 0.4} ${baseY} ${x2} ${baseY - height * 0.3} ${x2} ${baseY - height * 0.3}`;
                    break;

                default: 
                    d += ` L ${x2} ${baseY}`;
            }

            x = x2;
        }

        // Close the ground area for fill
        d += ` L ${totalWidth} ${height} L 0 ${height} Z`;
        return d;
    }, [chapters, chapterWidth, height, baseY, totalWidth]);

    return (
        <svg
            width={totalWidth}
            height={height}
            className="absolute bottom-0 left-0 pointer-events-none"
            style={{ zIndex: 1}}
        >

            {/* Ground line stroke - draw just the top path without the close */}
            <path
                d={pathData.split(' L ')[0] + ' L ' + pathData.split(' L ').slice(1, -2).join(' L ')}
                fill="none"
                stroke="#20422a"
                strokeWidth="8"
            />
        </svg>
    );
}

/**
 * Given a chapter index and avatar anchor (0-1 within chapter),
 * returns the absolute X position across the full canvas.
 */
export function getAvatarXForChapter(
    chapterIndex: number,
    anchorX: number,
    chapterWidth: number
): number {
    return (chapterIndex + anchorX) * chapterWidth;
}

export { GROUND_Y };
"use client"
import $ from "jquery";
import { useEffect } from 'react';

export default function ClientSide({ classNames }) {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = $(window).scrollTop();
            const windowHeight = $(window).height();

            classNames.forEach(className => {
                const $target = $(`.${className}`);
                const elementPos = $target.offset()?.top;

                if (className === 'late-load') {
                    if (elementPos < scrollPos + windowHeight - 100) {
                        $target.addClass('in-view');
                    }
                } else if (!$target?.attr('class')?.includes('late-load')) {

                    if (elementPos < scrollPos + windowHeight) {
                        $target.addClass('in-view');
                    }
                }
            });
        };

        $(window).on('scroll', handleScroll);
        handleScroll(); // Initial check on mount
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, [classNames]);

    return (
        <></>
    );
}

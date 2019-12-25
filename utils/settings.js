export const xs = `screen and (max-width: 576px)`;
export const sm = `screen and (min-width: 576px)`;
export const md = `screen and (min-width: 768px)`;
export const lg = `screen and (min-width: 992px)`;
export const xl = `screen and (min-width: 1200px)`;

export function formatPostDate(date, lang) {
    if (typeof Date.prototype.toLocaleDateString !== 'function') {
        return date;
    }

    date = new Date(date);
    const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
    ].filter(Boolean);
    return date.toLocaleDateString(...args);
}

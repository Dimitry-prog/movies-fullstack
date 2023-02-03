export const convertDuration = (duration) => {
    if (duration > 60) {
        const integer = Math.trunc(duration / 60);
        const digits = duration % 60;
        return `${integer}ч ${digits}м`
    }
    return `${duration}м`
}
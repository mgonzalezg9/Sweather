
export const formatMilliseconds = (ms: number, locale = 'es-ES') => {
    const timeFormatter = new Intl.DateTimeFormat(
        // TODO Hardcoded
        locale,
        {
            hour: '2-digit',
            minute: '2-digit',
        }
    );

    return timeFormatter.format(new Date(ms));
}
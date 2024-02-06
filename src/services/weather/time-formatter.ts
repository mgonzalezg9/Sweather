const timeFormatter = new Intl.DateTimeFormat(
    // TODO Hardcoded
    'es-ES',
    {
        hour: '2-digit',
        minute: '2-digit',
    }
);

export const formatMilliseconds = (ms: number) => timeFormatter.format(new Date(ms));
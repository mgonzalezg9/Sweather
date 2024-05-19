interface formatMillisecondsOptions {
    time: number;
    locale: string;
    timeZone?: string;
}

export const formatMilliseconds = ({ time, locale, timeZone = 'UTC' }: formatMillisecondsOptions) => {
    const timeFormatter = new Intl.DateTimeFormat(
        locale,
        {
            hour: '2-digit',
            minute: '2-digit',
            timeZone
        }
    );

    return timeFormatter.format(new Date(time));
}